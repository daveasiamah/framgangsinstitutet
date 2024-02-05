import axios from "axios";
import { useRouter } from "next/router";

export const AuthApi = async (email, password) => {
  try {
    const response = await axios.post(process.env.API_BASE + "auth/login", {
      email: email,
      password: password,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const contact = async (data) => {
  try {
    const response = await axios.post(process.env.API_BASE + "contact-us", {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      message: data.message 
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const get_user = async () => {
  try {
    const response = await axios.get(
      process.env.API_BASE + `users/${localStorage.getItem("id")}`,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const Register = async (firstName, lastName, role, email, password) => {
  try {
    const response = await axios.post(process.env.API_BASE + "auth/register", {
      firstName: firstName,
      lastName: lastName,
      role: role,
      email: email,
      password: password,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const for_pass = async (email) => {
  try {
    const response = await axios.post(
      process.env.API_BASE + "auth/forgetPasswordotp",
      {
        email: email,
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const resend_mail = async (email) => {
  try {
    const response = await axios.post(
      process.env.API_BASE + "auth/ResendConfirmEmail",
      {
        email: email,
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const otpcheck = async (otp) => {
  try {
    console.log({
      otp: otp,
      email: localStorage.getItem("email"),
    })
    const response = await axios.post(process.env.API_BASE + "auth/forgetPasswordotpcheck",
    
    {
        otp: parseInt(otp),
        email: localStorage.getItem("email")
      },
      {
        headers: { 
          'Content-Type': 'application/json'
          }
      },
      );
    return response;
  } catch (error) {
    return error;
  }
};

export const set_new_password = async (data) => {
  try {
    console.log({...data,email:localStorage.getItem("email")})
    const response = await axios.post(process.env.API_BASE + "auth/forgetChangepasswordMw",
    
    {...data,
      email:localStorage.getItem("email")
    },
      {
        headers: { 
          "Content-Type": 'application/json',
          }
      },
      );
    return response;
  } catch (error) {
    return error;
  }
};

export const course_add = async (name, content, category, videoThumbnail) => {
  console.log(videoThumbnail);
  console.log(name);
  console.log(content);
  console.log(category);
  try {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("courseImage", videoThumbnail);
    formData.append("content", content);
    formData.append("category", category);
    const response = await axios.post(
      process.env.API_BASE + `courses`,
      formData, // Use formData directly as the request body
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );

    return response;
  } catch (error) {
    return error;
  }
};

export const course_add_step_2_api = async (videoTitle) => {
  try {
    console.log(localStorage.getItem("courseid"));
    const response = await axios.post(
      process.env.API_BASE +
        `courses/${localStorage.getItem("courseid")}/courseSteps`,
      {
        name: videoTitle,
        isFree: false,
      },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const video_add = async (multivideo) => {
  try {
    console.log(multivideo);
    const formData = new FormData();
    formData.append("name", multivideo.title);
    formData.append("content", multivideo.content);
    formData.append("courseVideo", multivideo.file);
    const response = await axios.post(
      process.env.API_BASE +
        `courses/${localStorage.getItem(
          "courseid"
        )}/courseSteps/${localStorage.getItem("step_2_id")}/courseMiniSteps`,
      formData, // Use formData directly as the request body
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const admin_get_course = async () => {
  try {
    const response = await axios.get(
      process.env.API_BASE + `courses/${localStorage.getItem("courseid")}`,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const admin_get_course_byid = async (courseId) => {
  try {
    const response = await axios.get(
      process.env.API_BASE + `courses/${courseId}`,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    console.log("courseId:-", courseId);
    return response;
  } catch (error) {
    return error;
  }
};

export const update_course_byid = async (courseId) => {
  try {
    console.log("courseId:-", courseId);
    const response = await axios.patch(
      process.env.API_BASE + `courses/${courseId}`,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const get_courses = async (itemsToShow, searchQuery) => {
  try {
    const response = await axios.get(
      process.env.API_BASE +
        `courses?limit=${itemsToShow}&page=1&search=${searchQuery}`,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const get_user_courses = async (limit, pages) => {
  try {
    // const response = await axios.get(
    //   process.env.API_BASE + `users/${localStorage.getItem("id")}/courses`,
    //   {
    //     headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    //   }
    // );
    const response = await axios.get(
      process.env.API_BASE +
        `courses/activecourse?limit=` +
        limit +
        `&page=` +
        pages,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const Community_post = async (postImage, postVideo, content) => {
  try {
    console.log(postVideo);
    const formData = new FormData();

    formData.append("content", content);
    if (postImage) {
      formData.append("postImage", postImage);
    }
    if (postVideo) {
    formData.append("postVideo", postVideo);
    }
    //console.log(postImage);
    const response = await axios.post(
      process.env.API_BASE + "posts",
      formData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    // console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

export const Get_Community_post = async (id) => {
  try {
    const response = await axios.get(
      process.env.API_BASE + `posts/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    //console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

export const Get_Community_posts = async (page) => {
    try {
      const response = await axios.get(
        process.env.API_BASE + `posts?limit=10&page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      //console.log(response);
      return response;
    } catch (error) {
      return error;
    }
  };

export const post_like = async (c, id) => {
  try {
    if (c == false) {
    const response = await axios.post(
      process.env.API_BASE + "likes",
      {
        postId: id,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          // "Content-Type": "multipart/form-data",
        },
      }
      );
      return response;
    } else {
      const response = await axios.post(
        process.env.API_BASE + "likes",
        {
          commentId: id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            // "Content-Type": "multipart/form-data",
          },
        }
        );
        return response;
    }
    // console.log(response);
  } catch (error) {
    return error;
  }
};

export const post_cr_like = async (id) => {
  try {
    const response = await axios.post(
      process.env.API_BASE + "likes",
      {
        commentId: id,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          // "Content-Type": "multipart/form-data",
        },
      }
      );
      return response;
    // console.log(response);
  } catch (error) {
    return error;
  }
};


export const get_likes = async () => {
  try {
    const response = await axios.get(
      process.env.API_BASE + "likes?limit=1000&page=1",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          // "Content-Type": "multipart/form-data",
        },
      }
    );
    // console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

export const get_like = async (id) => {
  try {
    // const data = qs.stringify({
    //   postId: id,
    // });
    const response = await axios.get(`${process.env.API_BASE}likes/${id}`, {
      // params: {
      //   postId: data,
      // },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    // console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};


export const del_likes = async (postid) => {
  try {
    const response = await axios.delete(
      process.env.API_BASE + `likes/${postid}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          // "Content-Type": "multipart/form-data",
        },
      }
    );
    // console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

export const post_comment = async (id, data) => {
  try {
    const formData = new FormData();
    formData.append("comment", data);
    const response = await axios.post(
      process.env.API_BASE + `posts/${id}/comments`,
        formData,
      
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          // "Content-Type": "multipart/form-data",
        },
      }
    );
    // console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

export const post_comment_r = async (postrid, commentrid, inputValuec) => {
  try {
    const formData = new FormData();
    formData.append("comment", inputValuec);
    const response = await axios.post(
      process.env.API_BASE + `posts/${postrid}/comments/${commentrid}/replies`,
        formData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          // "Content-Type": "multipart/form-data",
        },
      }
    );
    // console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

export const get_commentsr = async (postid, commentid) => {
  try {
    const response = await axios.get(
      process.env.API_BASE + `posts/${postid}/comments/${commentid}/replies`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          // "Content-Type": "multipart/form-data",
        },
      }
    );
    // console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

export const get_comments = async (postid) => {
  try {
    const response = await axios.get(
      process.env.API_BASE + `posts/${postid}/comments`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          // "Content-Type": "multipart/form-data",
        },
      }
    );
    // console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

export const updateProfile = async (data) => {
  try {
    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.mail);
    //formData.append("password", data.password);
    formData.append("avatar", data.profileImage);
    console.log(data.profileImage);
    const response = await axios.patch(
      process.env.API_BASE + `users/${localStorage.getItem("id")}`,
      formData,
      // {
      //   firstName: data.firstName,
      //   lastName: data.lastName,
      //   email: data.mail,
      //   password: data.password,
      //   avatar: data.profileImage

      // }
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    // console.log(data);
    return response;
  } catch (error) {
    return error;
  }
};

export const userpassword_post = async (data) => {
  console.log(data);
  try {
    const response = await axios.post(
      process.env.API_BASE +
        `auth/PasswordChange/${localStorage.getItem("id")}`,
      {
        old_password: data.Current_password,
        password: data.New_password,
        confirm_password: data.Confirm_new_password,
      },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

export const getUserData = async () => {
  try {
    const response = await axios.get(
      process.env.API_BASE + `users/${localStorage.getItem("id")}`,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    return response.data; // Assuming the user data is available in the response's data property
  } catch (error) {
    return error;
  }
};

export const get_course_details = async () => {
  try {
    const response = await axios.get(
      process.env.API_BASE +
        `users/d6b01c4a-701f-4cf9-9c08-76e3c61471ab/courses`,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const VerificationTokenRequestAPI = async (tokendata) => {
  try {
    const response = await axios.post(
      process.env.API_BASE + `auth/ConfirmEmail`,
      {
        tokendata: tokendata,
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

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
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const draftcourse = async (limit, page) => {
  try {
    const response = await axios.get(
      process.env.API_BASE +
        `courses/draftcourse?limit=` +
        limit +
        `&page=` +
        page,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const pausecourse = async (limit, page) => {
  try {
    const response = await axios.get(
      process.env.API_BASE +
        `courses/pausecourse?limit=` +
        limit +
        `&page=` +
        page,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const UpdateCourseStatus = async (courseid, course_status) => {
  try {
    const response = await axios.patch(
      process.env.API_BASE + `courses/` + courseid + `/UpdateCourseStatus`,
      { course_status: course_status },
      { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const getcourseMiniSteps = async (courseid, stepid) => {
  try {
    const response = await axios.get(
      process.env.API_BASE +
        `courses/` +
        courseid +
        `/courseSteps/` +
        stepid +
        `/courseMiniSteps/`,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const getVideoSizeInMB = async (videoUrl) => {
  try {
    const response = await axios.get(videoUrl, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });

    if (response.headers && response.headers["content-length"]) {
      const contentLength = parseInt(response.headers["content-length"], 10);
      const sizeInMB = contentLength / (1024 * 1024); // Convert to MB
      return sizeInMB.toFixed(2); // Round to 2 decimal places
    } else {
      throw new Error("Unable to determine video size.");
    }
  } catch (error) {
    console.error("Error fetching video size:", error);
    return null;
  }
};

export const UpdateCourse = async (courseid, name, content, category, videoThumbnail) => {
  try {
    console.log(videoThumbnail);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("content", content);
    formData.append("category", category);
    formData.append("courseImage", videoThumbnail);
    const response = await axios.patch(
      process.env.API_BASE + `courses/` + courseid,
      formData,
      { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    );
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

export const updatecourseMiniSteps = async (
  courseid,
  Step2ID,
  MiniStepsID,
  name,
  content
) => {
  try {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("content", content);
    const response = await axios.patch(
      process.env.API_BASE +
        "courses/" +
        courseid +
        "/courseSteps/" +
        Step2ID +
        "/courseMiniSteps/" +
        MiniStepsID,
      formData,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const deletecourseMiniSteps = async (
  courseid,
  Step2ID,
  MiniStepsID,
  name,
  content
) => {
  try {
    const response = await axios.delete(
      process.env.API_BASE +
        "courses/" +
        courseid +
        "/courseSteps/" +
        Step2ID +
        "/courseMiniSteps/" +
        MiniStepsID,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const DeleteCourseStatus = async (courseid) => {
  try {
    const response = await axios.delete(
      process.env.API_BASE + "courses/" + courseid,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const getVideoDuration = async (videoUrl) => {
  try {
    const response = await fetch(videoUrl, { method: "HEAD" });
    if (response.ok) {
      const contentLength = response.headers.get("Content-Length");
      const videoBitrate = 8000; // Example video bitrate in kbps
      const videoDurationInSeconds = contentLength / videoBitrate;
      return videoDurationInSeconds;
    } else {
      console.error("Failed to fetch video duration");
      return 0;
    }
  } catch (error) {
    console.error("Error fetching video duration:", error);
    return 0;
  }
};

export const admin_get_users = async (
  PerPageRecord,
  PageNumber,
  searchQuery
) => {
  console.log(searchQuery);
  try {
    const response = await axios.get(
      process.env.API_BASE +
        `users/allUser?search=${searchQuery}&limit=${PerPageRecord}&page=${PageNumber}`,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const admin_update_users = async (id, uisActive) => {
  console.log(id);
  console.log(uisActive);
  try {
    const response = await axios.post(
      process.env.API_BASE + `auth/UpdateStatusVerifyEmail/${id}`,
      {
        isactive: new Boolean(uisActive).toString(),
      },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const admin_update_users_payment = async (id, uisActive) => {
  console.log(id);
  console.log(uisActive);
  try {
    const response = await axios.post(
      process.env.API_BASE + `auth/UpdatepaymentvalidationId/${id}`,
      {
        inputValue: uisActive,
      },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};


export const admin_delete_user = async (id) => {
  console.log(id);
  // console.log(uisActive);
  try {
    const response = await axios.delete(
      process.env.API_BASE + `users/${id}`,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const course_notification = async (
  postId,
  commentId,
  packageId,
  courseId
) => {
  try {
    const response = await axios.post(
      process.env.API_BASE + `notifications/notificationcreate`,
      {
        userId: localStorage.getItem("token"),
        postId: postId,
        content: "this",
      },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};



export const get_notification = async () => {
  try {
    const response = await axios.get(
      process.env.API_BASE +
        `notifications/allnotifications/${localStorage.getItem("id")}`,
      {},
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};
export const del_notification = async () => {
  try {
    const response = await axios.delete(
      process.env.API_BASE + `notifications/deleteAllNotifications/`,
      {},
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};
export const seen_notification = async (id) => {
  try {
    const response = await axios.patch(
      process.env.API_BASE + `notifications/seennotification/${id}`,
      {},
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};
//     export const craet_payment= async () => {
//         try {
//             const response = await axios.get(process.env.API_BASE + `payment/getAccess`, {
//                 price: 10,
// name: "description for customer",
// description: "description for customer",
// customer: {
//     email: "test&example.com",
//     fullName: "Test Customer",
//     phone: "07777 123456",
//     countryCode: "GB",
//     language: "en-GB"
// },
// tags: ["tag 1", "tag 2"]
//         },
//             {
//                 headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMyZTUxMjQ0LTY2NGUtNDdkZC1iNWRjLTQwZTg4OTU2ZDk1MSIsImlhdCI6MTY5NDY5MjkwNCwiZXhwIjoxNjk3Mjg0OTA0fQ.5WAY9LQLOjd4Cvz2yV62N2AFZkPuFpcexSeYtaN_fTw` },

//             });
//             return response;
//         } catch (error) {
//             return error;
//         }
//     };
export const create_payment = async (data) => {
    try {
      const response = await axios.post(process.env.API_BASE + 'payment/getOrderCode/', {
        amount: 9997,
        customerTrns: "Checkified - Nyckeln Till Frihet",
        customer: data,
        merchantTrns: "Test No end from Italy 1404",
        tags: ["tag 1", "tag 2"],
      },{
        headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  }
      });
  
      return response.data; // Assuming the response contains the data you need
    } catch (error) {
      console.error('API Error:', error.response ? error.response.data : error.message);
      return error;
    }
  };

  export const login_with_google = async (firstName,email,googleId,avatar) => {
    try {
      const response = await axios.post(process.env.API_BASE + 'auth/googleLogin/', {
        "firstName": firstName,
        "role": "USER",
        "email": email,
        "googleId": googleId,
        "avatar": avatar
      },{
      });
  
      return response; // Assuming the response contains the data you need
    } catch (error) {
      console.error('API Error:', error.response ? error.response.data : error.message);
      return error;
    }
  };

// export const create_payment2 = async (validate) => {
//   console.log(validate);
//   try {
//     const response = await axios.post(
//       `https://demo-api.vivapayments.com/checkout/v2/orders`,
//       {
//         amount: 7700,
//         customerTrns: "Test 2 - No End Payment",
//         customer: {
//           email: "maulik@gmail.com",
//           fullName: "Test Customer",
//           phone: "07777 123456",
//           countryCode: "US",
//           requestLang: "en-US",
//         },
//         merchantTrns: "Test No end from Italy 1404",
//         tags: ["tag 1", "tag 2"],
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("payment_token")}`,
//           // 'Content-Type': 'application/json',
//         },
//       }
//     );
//     return response;
//   } catch (error) {
//     return error;
//   }
// };
