import type { NextApiRequest, NextApiResponse } from "next"
import { validateRequest, newsletterSchema } from "../../utils/apiValidation"

type ResponseData = {
  message: string
  error?: string
}

export default validateRequest(
  newsletterSchema,
  async (
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>,
    validatedData,
  ) => {
    if (req.method !== "POST") {
      return res.status(405).json({
        message: "Method not allowed",
        error: "Only POST requests are accepted",
      })
    }

    const { email } = validatedData

    try {
      const brevoApiKey = process.env.SEND_IN_BLUE_API_KEY

      if (!brevoApiKey) {
        console.error(
          "SEND_IN_BLUE_API_KEY is not set in environment variables",
        )
        return res.status(500).json({
          message: "Server configuration error",
          error: "Email service is not properly configured",
        })
      }

      // Create/Update contact in Brevo for Newsletter
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
            updateEnabled: true,
            listIds: [17], // Newsletter list ID
          }),
        },
      )

      const contactData = await contactResponse.json()

      if (!contactResponse.ok) {
        // Handle case where contact already exists
        if (
          contactResponse.status === 400 &&
          contactData.code === "duplicate_parameter"
        ) {
          return res.status(200).json({
            message: "Du är redan registrerad för vårt nyhetsbrev!",
          })
        }

        console.error("Brevo contact creation error:", contactData)
        return res.status(500).json({
          message: "Failed to subscribe",
          error: contactData.message || "Something went wrong",
        })
      }

      return res.status(200).json({
        message: "Successfully subscribed to newsletter",
      })
    } catch (error) {
      console.error("Newsletter subscription error:", error)
      return res.status(500).json({
        message: "Server error",
        error: "Failed to process your request",
      })
    }
  },
)
