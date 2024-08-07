import React, { ChangeEvent, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/router";
import Titleh6 from "@/components/parts/Titleh6";
import { FaBook, FaClipboardList } from "react-icons/fa";
import Layout from "@/components/DashboardLayout";
import CacingOne from "@/components/graphic/CacingOne";
import ScrollReveal from "@/components/transition/ScrollReveal";
import ProfilePayForm from "@/components/parts/ProfilePayment";
import en from "@/locales/en";
import sv from "@/locales/sv";
import { profilepaymentdata } from "@/locales/sv/profilepayment";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SuccessAlert from "@/components/parts/SuccessAlert";
import ErrorAlert from "@/components/parts/ErrorAlert";
import { useAppContext } from "@/components/AppContext";
import {
  Community_post,
  Get_Community_post,
  post_like,
  course_notification,
  Get_Community_posts,
  get_likes,
  del_likes,
  get_comments,
  post_comment,
  get_like,
  post_comment_r,
  get_commentsr,
  post_cr_like
} from "@/service/Apis/api";

type Props = {};

type FormValues = {
  content: string;
  postImage: File | null;
  postVideo: FileList | null; // Use FileList | null for file input
};

const schema = yup.object({
  content: yup.string().required("Content is required"),
});
type files = {
  name: string;
};
type user = {
  id: string;
  firstName: string;
  lastName: string;
};
type CommunityPost = {
  user: user[];
  id: number;
  content: string;
  files: files[];
  avatar: string;
  likesCount: string;
};
type Alllike = {
  id: string;
  userId: string;
  postId: string;
  commentId: string;
};
type commentLike = {
  id: string;
};
type typecomment = {
  id: string;
  comment: string;
  commentLikes: commentLike[];
  postId: string;
  user: user[];
  userId: string;
};
// Define an array of CommunityPost type
type CommunityPosts = any;
type typecomments = any;
type typecommentsr = any;
type Alllikes = any;

// async function fetchPostsAndLikes() {
//   const lposts = await Get_Community_posts(page);
//   const llikes = await get_like(post.id);
//   return { lposts, llikes };
// }

export default function Profilepayment({}: Props) {
  const router = useRouter();
  if (typeof window !== "undefined") {
    const role = localStorage.getItem("paymentvalidationId");
    // console.log("role found :- " + role);
    if (role === "null") {
      // router.push("/coursecheckout");
    }
  }
  const { locale } = router;
  const t = locale === "en" ? en : sv;
  const [data, setData] = useState({ lposts: [], llikes: [] });
  const [showModal, setShowModal] = useState(false);
  const [showModalCls, setShowModalCls] = useState(false);
  const [alertMessage, setalertMessage] = useState("");
  const [content, setContent] = useState("");
  const [postImage, setpostImage] = useState("");
  const [likesCount, setlikesCount] = useState("");
  const [commentsCount, setcommentsCount] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [page, setPage] = useState(1); // Track the current page for lazy loading
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [commentpanel, setcommentpanel] = useState(false);
  const [posts, setPosts] = useState<CommunityPosts>([]);
  const [Commentsdata, setCommentsdata] = useState<typecomments>([]);
  const [Commentsdatar, setCommentsdatar] = useState<typecommentsr>([]);
  const [Alllikes, setAlllikes] = useState<Alllikes>([]);
  const [Likechange, setLikechange] = useState(false);
  // const [Alllikes, setAlllikes] = useState<Alllikes>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    if (typeof window !== "undefined") {
      const localStorage = window.localStorage;
      localStorage.removeItem("black_Title");
      localStorage.removeItem("blue_Title");
      localStorage.setItem("blue_Title", "Community");
    }
  }, []);
  const [noti, setnoti] = useState(false);

  const Community_post_call = async (data: any) => {
    console.log(data);
    if (selectedImgFile) {
      data.postImage = selectedImgFile;
    }
    if(selectedVedioFile){
      data.postVideo = selectedVedioFile;
    }
    //console.log("Data before API call:", data);
    try {
      const res: any = await Community_post(
        data.postImage,
        data.postVideo,
        data.content
      );
      if (res.status == 201) {
        setnoti(true);
        var data = res.data;
        console.log(data);
        localStorage.setItem("post_id", data.id);
        setShowModal(true);
        setalertMessage("Inlägget blev lyckat");
        setTimeout(() => {
          setShowModal(false);
        }, 4000);
        setContent(data.content);
        // setpostImage(data.postImage);
        setIsFormSubmitted(true);
        window.location.reload();

      //   fetchMorePosts();
      //   const response: any = await Get_Community_posts(1); // Use your API function here
      // const newPosts = response.data.rows;
      // // console.log(newPosts);
      // setPosts(newPosts);
      // setPage(1);
      } else {
        setalertMessage(res.response.data.message);
        setShowModalCls(true);
      }
    } catch (error) {
      console.error(error);
    }
    // get_Community_postdata();
  };

  const get_Community_postdata = async (id: any) => {
    try {
      const res: any = await Get_Community_post(id);
      console.log(res);
      //setValue("content", res.content); // Set the form value for firstName
      if (res.data) {
        console.log(res.data);
        setContent(res.data.content);
        setpostImage(res.data.files[0].name);
        // alert(res.data.likesCount);
        setfirstName(res.data.user.firstName);
        setlastName(res.data.user.lastName);
        setlikesCount(res.data.likesCount);
        setcommentsCount(res.data.commentsCount);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  // useEffect(() => {
  //   const course_notification_api = async () => {
  //     try {
  //       const postId = localStorage.getItem("post_id");
  //       const res: any = await course_notification(postId);
  //       if (res.data) {
  //         console.log(res.data);
  //       }
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   };
  //   if (localStorage.getItem("post_id")) {
  //     course_notification_api();
  //   }
  // }, [noti]);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await Community_post_call(data);
  };

  const [selectedVedioFile, setSelectedVedioFile] = useState<File | null>(null);
  const handleVedioFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files && event.target.files[0];
    setSelectedVedioFile(file);
  };
  const [selectedImgFile, setSelectedImgFile] = useState<File | null>(null);
  const handleImgFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0]; // Use files[0] to get the first selected file
      setSelectedImgFile(file);
    }
  };
  const getLikes = async () => {
    const res: any = await get_likes();
    if (res.status === 200) {
      setAlllikes(res.data.rows);
      setLikechange(false);
    } else {
      console.log("Like not found");
    }
  };
  useEffect(() => {
    getLikes();
  }, [Likechange]);
  // console.log(Alllikes);
  const handleLike = async (postid: any, user: any) => {
    try {
      const res: any = await post_like(false, postid);
      console.log(res);
  if (res.status == 201 || res.status == 204) {
    const resp : any = await Get_Community_posts();
    if (resp.status == 200) {
      resp.data.rows.map((likepost:any)=>
      likepost.id == postid ?
      setPosts((prevposts:any)=>
      prevposts.map((post:any)=>
      post.id === postid? {...post, likes : likepost.likes}: post))
      : console.log("not matched"))
    }
  } 
      // if (res.data) {
        // fetchMorePosts();
        // setLikechange(true);
        // getLikes();
        // getLike(postid);
      // }
    } catch (error) {
      console.log("error", error);
    }
  };







const [postlikedata, setpostlikedata] = useState<any[]>([])
const postLikes : any = {};





const getLike = async (postid: any) => {
  try {
    const res: any = await get_like(postid);
    console.log("likes",res);
    setpostlikedata(res.data.rows);
    let updatedLikeCount = res.data.rows.length;
    console.log(posts);
    setPosts((prevPosts :any) =>
      prevPosts.map((post :any) =>
        post.id === postid ? { ...post, likesCount: updatedLikeCount } : post
      )
    ); 
   
    return res.data.rows.length;
    
  } catch (error) {
    console.log("error", error);
  }
}




  const handlecommentlike = async (c: any, id: any, postId :any) => {
    // alert(c);
    try {
      const res: any = await post_like(true, id);
      if (res.status == 201 || res.status == 204) {
        // Commentsdata
        console.log(res);
        const resp : any = await get_comments(postId);
        if (resp.status == 200) {
          resp.data.rows.map((apicomm:any)=>
            apicomm.id === id ? 
            // console.log(apicomm.commentLikes)
            setCommentsdata((prevcomment:any)=> 
            prevcomment.map((comm:any)=>
            comm.id === id ? {...comm, commentLikes: apicomm.commentLikes} : comm))
            :
            console.log("not matched")
          )
          // setCommentsdata((prevComment : any)=>
          // Commentsdata.map((commen : any ) => 
          // commen.id === id ? 
          // console.log(commen)
          //   : console.log("not found"));
            // );
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  };





  const fetchMorePosts = useCallback(async () => {
    try {
      setLoading(true);
      const response: any = await Get_Community_posts(page); // Use your API function here
      const newPosts = response.data.rows;
      console.log(newPosts);
      setPosts([...posts, ...newPosts]);
      setPage(page + 1);
      if (newPosts.length < 100) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching more data:", error);
    } finally {
      setLoading(false);
    }
  }, [page, posts]);
  useEffect(() => {
    fetchMorePosts();
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      // alert("1");
      if (
        window.innerHeight + document.documentElement.scrollTop ===
          document.documentElement.offsetHeight &&
        !loading 
        // hasMore
      ) {
        // Load more data when the user reaches the bottom
        fetchMorePosts();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ loading, hasMore]);



  const [Commentbox, setCommentbox] = useState();
  const openClick = (index: any, postid: any) => {
    setComments(false);

    setCommentbox(index);
    if (commentpanel) {
      setcommentpanel(false);
    } else {
      setcommentpanel(true);
      get_comment(postid);
    }
  };

  const [Comments, setComments] = useState(false);
  const get_comment = async (postid: any) => {
    console.log(postid);
    const res: any = await get_comments(postid);
    if (res.status === 200) {
      if (res.data.rows.length > 0) {
        setCommentsdata(res.data.rows);
        console.log(res.data.rows);
        setComments(true);
      } else {
        setComments(false);
        setCommentsdata([]);
      }
    } else {
      console.log("Like not found");
    }
  };

  const [inputValuec, setInputValuec] = useState("");

  const handleInputChangec = (event: any) => {
    setInputValuec(event.target.value);
    console.log(event.target.value);
  };
  const postComment = async (id: any) => {
    try {
      const response: any = await post_comment(id, inputValuec);
      console.log(response);
      get_comment(id);
    } catch (error) {
      console.error("Error fetching more data:", error);
    } finally {
      setLoading(false);
    }
  };
  // const [likedata, setlikedata] = useState<any[]>([]);
  // const [currentIndex, setCurrentIndex] = useState(0);
  // useEffect(() => {
  //   const delayBeforeStart = 500; // 3 seconds delay (adjust as needed)

  //   // Use setTimeout to delay the start of the loop
  //   const timeoutId = setTimeout(() => {
  //     const fetchlikeData = async () => {
  //       if (currentIndex < posts.length) {
  //         try {
  //           const response: any = await get_like(posts[currentIndex].id); // Replace with your API endpoint
  //           if (response) {
  //             // console.log(response.data);
  //             // setlikedata((prevData) => [...prevData, data]);
  //             setCurrentIndex((prevIndex) => prevIndex + 1);
  //           } else {
  //             console.error("API request failed");
  //           }
  //         } catch (error) {
  //           console.error("Error fetching data:", error);
  //         }
  //       }
  //     };

  //     fetchlikeData(); // Start the initial fetch
  //   }, delayBeforeStart);

  //   // Clear the timeout if the component unmounts before it triggers
  //   return () => clearTimeout(timeoutId);
  // }, [currentIndex, posts]);
  const [Commentsr, setCommentsr] = useState(false);
  const [commentpanelr, setcommentpanelr] = useState(false);
  const [Commentboxr, setCommentboxr] = useState();
  const openClickr = (index: any, postid: any, commentid: any) => {
    setCommentsr(false);

    setCommentboxr(index);
    if (commentpanelr) {
      setcommentpanelr(false);
    } else {
      setcommentpanelr(true);
      get_commentr(postid, commentid);
    }
  };

  const get_commentr = async (postid: any, commentid: any ) => {
    console.log(postid);
    const res: any = await get_commentsr(postid, commentid);
    console.log(res.data.replyComments)
    if (res.status === 200) {
      if (res.data.replyComments.length > 0) {
        setCommentsdatar(res.data.replyComments);
        console.log(res.data.replyComments);
        setCommentsr(true);
      } else {
        setCommentsr(false);
        setCommentsdatar([]);
      }
    } else {
      console.log("Like not found");
    }
  };

  const [InputcrValuec, setInputcrValuec] = useState("");

  const handleInputcrChangec = (event: any) => {
    setInputcrValuec(event.target.value);
    console.log(event.target.value);
  };
  const postCommentreply = async (postrid: any, commentrid: any) => {
    // alert(postrid);
    // alert(commentrid);
    try {
      const response: any = await post_comment_r(postrid, commentrid, InputcrValuec);
      console.log(response);
      get_commentr(postrid, commentrid);
    } catch (error) {
      console.error("Error fetching more data:", error);
    } finally {
      setLoading(false);
    }
  };

  const isPostLikedByUser = (postId:any) => {
     return postlikedata.some(
      (like : any) => like.postId === postId && like.userId === localStorage.getItem("id")
    );
  };



  const handlecommentrlike = async (v:any, commentrid:any, commentid: any, postid: any) => {
    // alert(v);    
    // alert(commentrid);    
    // alert(commentid);    
    // alert(postid);    
    const res : any =await post_cr_like(commentrid);
    if (res.status == 201 || res.status == 204) {
      const resp: any = await get_commentsr(postid, commentid);
      if (resp.status == 200) {
        console.log(resp.data.replyComments);
        resp.data.replyComments.map((apicommr:any)=>
              apicommr.id === commentrid ? 
              // console.log(apicommr.commentLikes)
              setCommentsdatar((prevcommentr:any)=> 
              prevcommentr.map((commr:any)=>
              commr.id === commentrid ? {...commr, commentLikes: apicommr.commentLikes} : commr))
              :
              console.log("not matched")
            )

      }
    } 
  }


  return (
    <Layout headTitle={profilepaymentdata.metaData.title}>
      <div className="flex flex-wrap">
        <div className="w-full max-w-full flex-0 lg:w-9/12">
          <section className="grid grid-cols-1 gap-6">
            <div className="p-8 lg:p-8 bg-base-100 rounded-[28px] gap-8 col-span-2">
              <ScrollReveal>
                <Titleh6
                  blackText="Skapa"
                  blueText="Inlägg"
                  className="text-left text-lg font-bold mb-4"
                />
              </ScrollReveal>
              <form
                className="flex"
                onSubmit={handleSubmit(onSubmit)}
                action=""
              >
                <div className="grid grid-cols-6 gap-4">
                  <div className="col-start-1 col-span-1 col-end-7">
                    <div className="mb-4 lg:mb-8 flex">
                      <Image
                        src="/icons/community/community-logo.svg"
                        alt="Mega menu icon"
                        className="object-contain drop-shadow-xl"
                        width={60}
                        height={60}
                        priority
                      />
                      <input
                        type="text"
                        placeholder="Skriv något..."
                        className="px-4 py-3 rounded-lg ml-6 bg-base-200 text-subtitle-dark focus:outline-primary w-full"
                        {...register("content")}
                      />
                    </div>
                  </div>

                  <div className="col-start-1 col-span-3">
                    <button
                      className="btn text-redlight-500 border-redlight bg-redlight text-sm pr-6 pl-6 font-medium"
                      onClick={() => {
                        const fileInput =
                          document.getElementById("video-file-input");
                        if (fileInput) {
                          fileInput.click();
                        }
                      }}
                    >
                      <Image
                        src="/icons/community/video.png"
                        alt="Mega menu icon"
                        className="object-contain mr-1"
                        width={25}
                        height={25}
                        priority
                      />
                      Video
                      <input
                        type="file"
                        id="video-file-input"
                        style={{ display: "none" }}
                        {...register("postVideo")}
                        onChange={handleVedioFileChange}
                      />{" "}
                      {/* {selectedVedioFile ? (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 40 40'
                          width='10'
                          height='10'>
                          <circle
                            cx='20'
                            cy='20'
                            r='15'
                            fill='#0083FF'
                            stroke='white'
                          />
                        </svg>
                      ) : (
                        ""
                      )} */}
                    </button>

                    <div
                      className="btn ml-4 text-violet-500 border-violet bg-violet text-sm pr-6 pl-6 font-medium"
                      onClick={() => {
                        const fileInput =
                          document.getElementById("image-file-input");
                        if (fileInput) {
                          fileInput.click();
                        }
                      }}
                    >
                      <Image
                        src={"/icons/community/gallery.png"}
                        alt="Mega menu icon"
                        className="object-contain mr-1"
                        width={25}
                        height={25}
                        priority
                      />
                      Bilder
                      <input
                        type="file"
                        id="image-file-input"
                        style={{ display: "none" }}
                        {...register("postImage")}
                        onChange={handleImgFileChange}
                      />{" "}
                      {/* {selectedImgFile ? (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 40 40'
                          width='10'
                          height='10'>
                          <circle
                            cx='20'
                            cy='20'
                            r='15'
                            fill='#0083FF'
                            stroke='white'
                          />
                        </svg>
                      ) : (
                        ""
                      )} */}
                    </div>
                  </div>
                  <div className="col-span col-end-7 flex justify-end">
                    <button type = "submit" className="btn pr-6 pl-6 bg-primary text-sm font-medium btn-shadow text-white border-2 border-primary hover:bg-white hover:text-primary hover:border-primary">
                      Publicera
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </section>
          {/* <section className="flex justify-end my-5">
            <div className="bg-white p-2 rounded-[8px]">
              <div className="bg-white h-10 flex items-center gap-2 py-4 px-4 rounded-[8px] text-xs border-filter text-151E3A">
                <div className="text-white">
                  <Image
                    src="/icons/community/filter-circle.svg"
                    alt="Mega menu icon"
                    className="object-cover"
                    width={22}
                    height={22}
                    priority
                  />
                </div>
                Sortera
              </div>
            </div>
          </section> */}
          {posts &&
            posts.map( (post:any, index:any) => {
              // let totallike :any = await getLike(post.id)
              // console.log("postid : ",post.id , "likes : ",totallike)
              return (
                (
                  <>
                    {/* {get_Community_postdata(post.id)} */}
                    <React.Fragment>
                      <section className="grid grid-cols-1 mt-5" key={index}>
                        <div className="p-8 lg:p-8 bg-base-100 rounded-[28px] gap-8 col-span-2">
                          <ScrollReveal>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                              <div key="" className="flex text-center items-center">
                                <div className="avatar mb-6">
                                  <div className="w-16 rounded-full overflow-hidden relative drop-shadow">
                                    <Image
                                      fill
                                      alt="avatar"
                                      className="svg-primary"
                                      src={
                                        post.user.avatar == "null"
                                          ? `https://api.checkified.se/public/uploads/users/images${post.user.avatar}`
                                          : "/logo.svg"
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="ml-5">
                                  <h3 className="text-base font-bold mb-1 capitalize">
                                    {post.user.firstName} {post.user.lastName}
                                  </h3>
                                  <p className="mb-6 flex text-xs font-medium justify-start items-center gap-1">
                                  {/* {post.createdAt.split("T")[0].split(".")[0]} */}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </ScrollReveal>
                          <div className="grid grid-cols-1 lg:grid-cols-1 gap-10">
                            <ScrollReveal className="bg-white grid  p-4 cursor-pointer transition-all duration-150">
                              <p className="text-subtitle mb-6 text-sm font-normal text-151E3A">
                                {post.content}
                              </p>
                              <div className="w-full h-[200px] relative rounded-[20px] overflow-hidden mb-6 shadow-lg flex items-center justify-center">
                                {post.files[0]?.fileType && 
                                 post.files[0]?.fileType == "postVideo" ? 
                                 <video width="350" height="190" controls ><source src={`https://api.checkified.se/public/uploads/users/posts/videos/${post.files[0]?.name}`} type="video/mp4"/></video>
                                 : <img
                                  src={`https://api.checkified.se/public/uploads/users/posts/images/${post.files[0]?.name}`}
                                  alt="blog"
                                  className="w-fit"
                                />}
                                
                              </div>
                              <ScrollReveal>
                                <div className="grid grid-cols-1 lg:grid-cols-5">
                                  <div
                                    key=""
                                    className="flex text-center items-center"
                                  >
                                    <div className="relative" onClick={() => {
                                          handleLike(post.id, post.user);
                                        }}>
                                  
                                    {post.likes.some((like :any ) => like.userId === localStorage.getItem("id"))? (
              <img
                src="/icons/community/heart-svg.svg"
                alt="Liked"
                width="20"
                height="20" 
              />
            ) : (
              <img
                src="/heart.png"
                alt="Not Liked"
                width="20"
                height="20"
              />
              )}
                           
                                      {/* <Image
                                        alt="avatar"
                                        className="object-cover"
                                        width={25}
                                        height={25}
                                        src="/icons/community/heart-svg.svg"
                                      /> */}
                                    </div>
    
                                    <div className="ml-3">
                                      <button
                                        className="text-xs font-medium text-707BA0"
                                        
                                      >
                                        {post.likes.length}{" "} Gillningar
                                        {/* {Alllikes.map((like: any, index: any) =>
                                          like.postId == post.id ? "0" : "1"
                                        )}{" "} */}
                                        {/* {totallike} */}
                                      </button>
                                    </div>
                                  </div>
                                  <div
                                    className="flex text-center items-center"
                                    onClick={() => openClick(index, post.id)}
                                  >
                                    <div
                                      key=""
                                      className="flex text-center items-center"
                                      // onClick={() => openClick(index, post.id)}
                                    >
                                      <div className="relative">
                                        <Image
                                          alt="avatar"
                                          className="object-cover"
                                          width={25}
                                          height={25}
                                          src="/icons/community/message.svg"
                                        />
                                      </div>
                                    </div>
    
                                    <div className="ml-2">
                                      <h3 className="text-xs font-medium text-707BA0">
                                        {commentsCount} Kommentarer
                                      </h3>
                                    </div>
                                  </div>
    
                                  <div
                                    key=""
                                    className="flex text-center items-center"
                                  >
                                    <div className="relative">
                                      <Image
                                        alt="avatar"
                                        className="object-cover"
                                        width={25}
                                        height={25}
                                        src="/icons/community/share.svg"
                                      />
                                    </div>
    
                                    <div className="ml-3">
                                      <h3 className="text-xs font-medium text-707BA0">
                                        Dela
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                              </ScrollReveal>
                              {commentpanel && Commentbox == index && (
                                <>
                                  <hr className="my-8 hr-height" />
    
                                  <div className="mb-4 lg:mb-8 flex">
                                    <Image
                                      src="/icons/community/userimg.png"
                                      alt="Mega menu icon"
                                      className="object-cover drop-shadow-xl"
                                      width={60}
                                      height={60}
                                      priority
                                    />
                                    <input
                                      type="text"
                                      placeholder="Skriv din kommentar"
                                      onChange={handleInputChangec}
                                      className="px-4 py-3 rounded-lg ml-6 bg-base-200 text-subtitle-dark focus:outline-primary w-full"
                                    />
                                    <button
                                      className="w-[7rem] text-sm font-semibold text-primary"
                                      onClick={() => postComment(post.id)}
                                    >
                                      Skicka in
                                    </button>
                                  </div>
                                  {Comments &&
                                    Commentsdata.map((comment: any, index: any) => (
                                      <div
                                        className="grid grid-cols-1 lg:grid-cols-1"
                                        key={index}
                                      >
                                        <div
                                          key=""
                                          className="flex text-center items-start relative"
                                        >
                                          <div className="avatar mb-6">
                                            <div className="w-16 rounded-full overflow-hidden relative drop-shadow">
                                              <Image
                                                fill
                                                alt="avatar"
                                                className=""
                                                src={
                                                  comment.user?.avatar == "null"
                                                    ? `https://api.checkified.se/public/uploads/users/images${comment.user.avatar}`
                                                    : "/icons/community/userimg.png"
                                                }
                                              />
                                            </div>
                                          </div>
                                          <div className="vertical-line"></div>
                                          <div className="ml-5">
                                            <h3 className="text-base text-left font-bold mb-1">
                                              {comment.user.firstName}{" "}
                                              {comment.user.lastName == "null"
                                                ? " "
                                                : comment.user.lastName}
                                            </h3>
                                            <p className="mb-6 flex text-xs font-medium justify-start items-center gap-1">
                                              Jan 7, 2023
                                            </p>
                                            <p className="text-subtitle text-left mb-6 text-sm font-normal text-151E3A">
                                              {comment.comment}
                                            </p>
                                            <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4">
                                              <div
                                                key=""
                                                className="flex text-center items-center"
                                              >
                                                <div className="relative">
                                                  {comment.commentLikes.some((like :any ) => like.userId === localStorage.getItem("id"))? (
                                                     <Image
                                                     alt="avatar"
                                                     className="object-cover"
                                                     width={25}
                                                     height={25}
                                                     src="/icons/community/heart-svg.svg"
                                                   />)
                                                     : (
                                                    //  alert("gg")
                                                     <Image
                                                     alt="avatar"
                                                     className="object-cover"
                                                     width={25}
                                                     height={25}
                                                     src="/heart.png"
                                                   /> 
                                                  )}
                                                  {/* <Image
                                                    alt="avatar"
                                                    className="object-cover"
                                                    width={25}
                                                    height={25}
                                                    src="/icons/community/heart-svg.svg"
                                                  />  */}
                                                  {/* <Image
                                                    alt="avatar"
                                                    className="object-cover"
                                                    width={25}
                                                    height={25}
                                                    src="/heart.png"
                                                  />  */}
                                                </div>
    
                                                <div className="ml-3">
                                                  <h3
                                                    className="text-xs font-medium text-707BA0"
                                                    onClick={() =>
                                                      handlecommentlike(
                                                        true,
                                                        comment.id,
                                                        post.id
                                                      )
                                                    }
                                                  >
                                                    {comment.commentLikes.length}{" "}
                                                    Gillningar
                                                  </h3>
                                                </div>
                                              </div>
    
                                              <div
                                                key=""
                                                className="flex text-center items-center"
                                              >
                                                <div className="relative">
                                                  <Image
                                                    alt="avatar"
                                                    className="object-cover"
                                                    width={25}
                                                    height={25}
                                                    src="/icons/community/message.svg"
                                                  />
                                                </div>
    
                                                <div className="ml-2">
                                                  <h3
                                                    className="text-xs font-medium text-707BA0"
                                                    onClick={() =>
                                                      openClickr(index, post.id, comment.id)
                                                    }
                                                  >
                                                     Kommentarer
                                                  </h3>
                                                </div>
                                              </div>
    
                                              <div
                                                key=""
                                                className="flex text-center items-center"
                                              >
                                                <div className="ml-3">
                                                  <h3 className="text-sm font-medium text-primary">
                                                    Svara kommentar
                                                  </h3>
                                                </div>
                                              </div>
                                            </div>
                                            {commentpanelr &&
                                              Commentboxr == index && (
                                                <>
                                                <div className="mb-4 lg:mb-8 flex">
                                                  <input
                                                    type="text"
                                                    placeholder="Skriv din kommentar"
                                                    onChange={handleInputcrChangec}
                                                    className="mt-6 px-4 py-3 rounded-lg ml-6 bg-base-200 text-subtitle-dark focus:outline-primary w-full"
                                                  />
                                                  <button
                                                    className="w-[7rem] text-sm font-semibold text-primary"
                                                    onClick={() =>
                                                      postCommentreply(
                                                        post.id,
                                                        comment.id
                                                      )
                                                    }
                                                  >
                                                    Skicka in
                                                  </button>
                                                </div>
                                                {Commentsr &&
                                    Commentsdatar.map((commentr: any, index: any) => (
                                             <div className="mt-10" key={index}>
                                            <div
                                              key=""
                                              className="flex text-center items-start"
                                            >
                                              <div className="avatar mb-6">
                                                <div className="w-16"></div>
                                              </div>
                                              <div className="ml-5">
                                                <h3 className="text-base text-left font-bold mb-1">
                                                {commentr.user.firstName} {commentr.user.lastName}
                                                </h3>
                                                <p className="mb-6 flex text-xs font-medium justify-start items-center gap-1">
                                                {commentr.createdAt.split("T")[0].split(".")[0]}
                                                </p>
                                                <p className="text-subtitle text-left mb-6 text-sm font-normal text-151E3A">
                                                  {commentr.comment}
                                                </p>
                                                <div className="grid grid-cols-1 lg:grid-cols-3">
                                                  <div
                                                    key=""
                                                    className="flex text-center items-center"
                                                  >
                                                    <div className="relative" onClick={() =>
                                                      handlecommentrlike(
                                                        true,
                                                        commentr.id,
                                                        comment.id,
                                                        post.id
                                                      )
                                                    }>
                                                    {commentr.commentLikes.some((like :any ) => like.userId === localStorage.getItem("id"))? (
                                                     <Image
                                                     alt="avatar"
                                                     className="object-cover"
                                                     width={25}
                                                     height={25}
                                                     src="/icons/community/heart-svg.svg"
                                                   />)
                                                     : (
                                                    //  alert("gg")
                                                     <Image
                                                     alt="avatar"
                                                     className="object-cover"
                                                     width={25}
                                                     height={25}
                                                     src="/heart.png"
                                                   /> 
                                                  )}
                                                    </div>
    
                                                    <div className="ml-3">
                                                      <h3 className="text-xs font-medium text-707BA0">
                                                      {commentr.commentLikes.length}{" "} Gillningar
                                                      </h3>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                             </div> 
                                             ))}
                                             </>
                                             )}
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                </>
                              )}
                            </ScrollReveal>
                          </div>
                        </div>
                      </section>
                    </React.Fragment>
                  </>
                )
              )
            })}
          {loading && <p>Loading more posts...</p>}
          {!loading && hasMore && (
            <button
              onClick={fetchMorePosts}
              className="btn pr-6 pl-6 bg-primary text-sm font-medium btn-shadow text-white border-2 border-primary hover:bg-white hover:text-primary hover:border-primary"
            >
              Load More Posts
            </button>
          )}
        </div>
      </div>
      <SuccessAlert
        isVisible={showModal}
        alertMessage={alertMessage}
        onClose={() => setShowModal(false)}
      />
      <ErrorAlert
        isVisibleclose={showModalCls}
        alertMessage={alertMessage}
        onClose={() => setShowModalCls(false)}
      />
    </Layout>
  );
}
