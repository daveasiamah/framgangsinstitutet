import axios from "axios"
import { useRouter } from "next/router"
import { v4 as uuidv4 } from "uuid"

export const AuthApi = async (email, password) => {
  try {
    const response = await axios.post(process.env.API_BASE + "auth/login", {
      email: email,
      password: password,
    })
    return response
  } catch (error) {
    return error
  }
}

export const registerOfContract = async ({ name, email, phone, selectedCourse }) => {
  const ext_id = uuidv4()
  try {
    const attributes = {
      FIRSTNAME: name || "",
      LASTNAME: "",
      SMS:phone,
      EXT_ID: ext_id,
      COURSE_INTEREST: selectedCourse,
    }

    const response = await axios.post(
      `${process.env.SEND_IN_BLUE_BASE_URL}/v3/contacts`,
      {
        email,
        attributes,
        updateEnabled: true,
      },
      {
        headers: {
          accept: "application/json",
          "api-key": process.env.SEND_IN_BLUE_API_KEY,
          "content-type": "application/json",
        },
      }
    )
    return { success: true, data: response.data }
  } catch (error) {
    console.error(
      "Error saving contact:",
      error.response?.data || error.message
    )
    return { success: false, error: error.response?.data || error.message }
  }
}