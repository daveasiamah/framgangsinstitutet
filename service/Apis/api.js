import axios from "axios"

// Used in: ContractForm.tsx, ConsultationForm.tsx
export const registerOfContract = async ({ name, email }) => {
  try {
    const response = await axios.post("/api/register-contract", {
      name,
      email,
    })
    return { success: true, data: response.data }
  } catch (error) {
    console.error(
      "Error saving contact:",
      error.response?.data || error.message
    )
    return { success: false, error: error.response?.data || error.message }
  }
}

// Used in: ContactForm.tsx (deprecated - use /api/contact instead)
export const contact = async (data) => {
  try {
    const response = await axios.post(
      `${process.env.API_BASE}contact-us`,
      {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        message: data.message,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    return response
  } catch (error) {
    return error
  }
}

// Used in: university/index.tsx, DashboardHeader.tsx
export const get_user = async () => {
  try {
    const response = await axios.get(
      process.env.API_BASE + `users/${localStorage.getItem("id")}`,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    )
    return response
  } catch (error) {
    return error
  }
}

// Used in: DashboardHeader.tsx
export const get_notification = async () => {
  try {
    const response = await axios.get(
      process.env.API_BASE +
        `notifications/allnotifications/${localStorage.getItem("id")}`,
      {},
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    )
    return response
  } catch (error) {
    return error
  }
}

// Used in: DashboardHeader.tsx
export const del_notification = async () => {
  try {
    const response = await axios.delete(
      process.env.API_BASE + `notifications/deleteAllNotifications/`,
      {},
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    )
    return response
  } catch (error) {
    return error
  }
}

// Used in: DashboardHeader.tsx
export const seen_notification = async (id) => {
  try {
    const response = await axios.patch(
      process.env.API_BASE + `notifications/seennotification/${id}`,
      {},
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    )
    return response
  } catch (error) {
    return error
  }
}

// Used in: university/index.tsx
export const activecourse = async (limit, page) => {
  try {
    const response = await axios.get(
      process.env.API_BASE +
        `courses/activecourse?limit=` +
        limit +
        `&page=` +
        page,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    )
    return response
  } catch (error) {
    return error
  }
}
