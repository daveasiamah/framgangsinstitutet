import { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"
import { v4 as uuidv4 } from "uuid"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  const { name, email } = req.body

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" })
  }

  const brevoApiKey = process.env.SEND_IN_BLUE_API_KEY

  if (!brevoApiKey) {
    console.error("SEND_IN_BLUE_API_KEY is not defined")
    return res.status(500).json({ error: "Server configuration error" })
  }

  const ext_id = uuidv4()

  try {
    const attributes = {
      FIRSTNAME: name,
      EXT_ID: ext_id,
    }

    const response = await axios.post(
      `${
        process.env.SEND_IN_BLUE_BASE_URL || "https://api.brevo.com"
      }/v3/contacts`,
      {
        email,
        attributes,
        updateEnabled: true,
      },
      {
        headers: {
          accept: "application/json",
          "api-key": brevoApiKey,
          "content-type": "application/json",
        },
      }
    )

    return res.status(200).json({ success: true, data: response.data })
  } catch (error: any) {
    console.error(
      "Error saving contact:",
      error.response?.data || error.message
    )
    return res.status(error.response?.status || 500).json({
      success: false,
      error: error.response?.data || error.message,
    })
  }
}
