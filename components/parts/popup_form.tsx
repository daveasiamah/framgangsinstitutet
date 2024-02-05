import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter, Router } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Title from "@/components/parts/Title";
import { userpassword_post  } from "../../service/Apis/api";
import SuccessAlert from "@/components/parts/SuccessAlert";
import ErrorAlert from "@/components/parts/ErrorAlert";

type FormValues = {
  Current_password: string;
  New_password: string;
  Confirm_new_password: string;
  message: string;
};

const schema = yup
  .object({
    Current_password: yup.string().required("current password is required"),
    New_password: yup.string().required("New Password is required"),
    Confirm_new_password: yup
      .string()
      .required("Confirm_new_password is required")
      .oneOf([yup.ref("New_password")], "Passwords do not match"),
  })
  .required();

type Props = {
  popup_pass: {
    Current_password: string;
    New_password: string;
    Confirm_new_password: string;
    button: string;
  };
};

export default function Popup_form({ popup_pass }: Props) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const [showModal, setShowModal] = useState(false);
  const [showModalCls, setShowModalCls] = useState(false);
  const [alertMessage, setalertMessage] = useState("");

  // const [currentpassword, setcurrentpassword] = useState("");
  // const [newpassword, setnewpassword] = useState("");
  // const [confirmpassword, setconfirmpassword] = useState("");

  const userpassword_change_post = async (data: FormValues) => {
    //console.log(data);
     try {
       const res:any = await userpassword_post(data);
       //console.log('Profile updated successfully:', res1);
       if (res.status == 200) {
         var updatedData = res.data;
         console.log(updatedData);
      
         // Update the form state with the latest data
         setValue("Current_password", updatedData.Current_password);
         setValue("New_password", updatedData.New_password);
         setValue("Confirm_new_password", updatedData.Confirm_new_password);
 
         setShowModal(true);
         setalertMessage("Inlägget blev lyckat");

         setTimeout(() => {
          setShowModal(false);
          //localStorage.clear();
          // router.push('/signin');
        }, 5000);
       
       } else {
        setalertMessage(res.response.data.message);
        setShowModalCls(true);
       } 
      
     } catch (error) {
       console.error('Error updating profile:', error);
       // Handle the error, show an error message, etc.
     }
   };

   const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await userpassword_change_post(data);
  };
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)} className="" action="">
      <div className="grid grid-cols-1 gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text form-text-color">
              {popup_pass.Current_password}
              {errors.Current_password && (
                <span className="text-red-400">*</span>
              )}
            </span>
          </label>
          <input
            type="text"
            placeholder={popup_pass.Current_password}
            className="input bg-base-200"
            // value={currentpassword}
            // onChange={e => setcurrentpassword(e.target.value)}
           {...register("Current_password")}
          />
          {errors.Current_password && (
            <p className="text-red-400 text-sm mt-1">
              {errors.Current_password.message}
            </p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text form-text-color">
              {popup_pass.New_password}
              {errors.New_password && <span className="text-red-400">*</span>}
            </span>
          </label>
          <input
            type="text"
            placeholder={popup_pass.New_password}
            className="input bg-base-200"
            // value={newpassword}
            // onChange={e => setnewpassword(e.target.value)}
           {...register("New_password")}
          />
          {errors.New_password && (
            <p className="text-red-400 text-sm mt-1">
              {errors.New_password.message}
            </p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text form-text-color">
              {popup_pass.Confirm_new_password}
              {errors.Confirm_new_password && (
                <span className="text-red-400">*</span>
              )}
            </span>
          </label>
          <input
            type="text"
            placeholder={popup_pass.Confirm_new_password}
            className="input bg-base-200"
            // value={confirmpassword}
            // onChange={e => setconfirmpassword(e.target.value)}
            {...register("Confirm_new_password")}
          />
          {errors.Confirm_new_password && (
            <p className="text-red-400 text-sm mt-1">
              {errors.Confirm_new_password.message}
            </p>
          )}
        </div>
        <div className="form-control items-end">
        <button
              className="btn btn-primary w-full lg:w-fit mb-0 mt-6"
              type="submit">
              Spara
            </button>
        </div>
      </div>
    </form>
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
    </>
  );
}
