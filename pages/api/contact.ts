import type { NextApiRequest, NextApiResponse } from "next"

type ResponseData = {
  message: string
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
      error: "Only POST requests are accepted",
    })
  }

  const { firstName, lastName, email, phone, message } = req.body

  // Validate required fields
  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({
      message: "Missing required fields",
      error: "firstName, lastName, email, and message are required",
    })
  }

  try {
    const brevoApiKey = process.env.SEND_IN_BLUE_API_KEY

    if (!brevoApiKey) {
      console.error("SEND_IN_BLUE_API_KEY is not set in environment variables")
      return res.status(500).json({
        message: "Server configuration error",
        error: "Email service is not properly configured",
      })
    }

    // Create contact in Brevo
    const contactResponse = await fetch(
      `${
        process.env.SEND_IN_BLUE_BASE_URL || "https://api.brevo.com"
      }/v3/contacts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": brevoApiKey,
        },
        body: JSON.stringify({
          email: email,
          attributes: {
            FIRSTNAME: firstName,
            LASTNAME: lastName,
            PHONE: phone || "",
          },
          updateEnabled: true,
        }),
      }
    )

    if (!contactResponse.ok) {
      const error = await contactResponse.json()
      console.error("Brevo contact creation error:", error)
    }

    // Send email to admin about the contact form submission
    const emailResponse = await fetch(
      `${
        process.env.SEND_IN_BLUE_BASE_URL || "https://api.brevo.com"
      }/v3/smtp/email`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": brevoApiKey,
        },
        body: JSON.stringify({
          sender: {
            name: `${firstName} ${lastName}`,
            email: email,
          },
          to: [
            {
              email: "contact@checkified.se",
              name: "Checkified Support",
            },
          ],
          replyTo: {
            email: email,
            name: `${firstName} ${lastName}`,
          },
          subject: `Ny kontaktförfrågan från ${firstName} ${lastName}`,
          htmlContent: `
            <h2>Ny kontaktförfrågan</h2>
            <p><strong>Namn:</strong> ${firstName} ${lastName}</p>
            <p><strong>E-post:</strong> ${email}</p>
            <p><strong>Telefon:</strong> ${phone || "Inte angiven"}</p>
            <p><strong>Meddelande:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
          `,
        }),
      }
    )

    if (!emailResponse.ok) {
      const error = await emailResponse.json()
      console.error("Brevo email error:", error)
      return res.status(500).json({
        message: "Failed to send email",
        error: error.message || "An error occurred",
      })
    }

    return res.status(200).json({
      message: "Contact form submitted successfully",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return res.status(500).json({
      message: "Internal server error",
      error: String(error),
    })
  }
}
