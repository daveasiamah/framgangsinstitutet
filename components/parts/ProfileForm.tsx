import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormValues = {
  firstName: string;
  lastName: string;
  streetaddress: string;
  zipcode: number;
  city:string;
  country:string;
  message: string;
};

const schema = yup
  .object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    streetaddress: yup.string().required("Last name is required"),
      zipcode: yup
      .number()
      .typeError("zipcode must be a number")
      .required("zipcode number is required"),
    message: yup.string().required("Message is required"),
  })
  .required();

type Props = {
  profileData: {
    firstName: string;
    lastName: string;
    streetaddress: string;
    zipcodeNumber:string;
    city:string;
    country:string;
    button: string;
  };
};

export default function ProfileForm({ profileData }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="" action="">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 colunm_row_gap_form">
        <div className="form-control">
          <label className="label">
            <span className="label-text form-text-color font-medium">
              {profileData.firstName}
              {errors.firstName && <span className="text-red-400">*</span>}
            </span>
          </label>
          <input
            type="text"
            placeholder={profileData.firstName}
            className="input bg-base-200"
            {...register("firstName")}
          />
          {errors.firstName && (
            <p className="text-red-400 text-sm mt-1">
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text form-text-color font-medium">
              {profileData.lastName}
              {errors.lastName && <span className="text-red-400">*</span>}
            </span>
          </label>
          <input
            type="text"
            placeholder={profileData.lastName}
            className="input bg-base-200"
            {...register("lastName")}
          />
          {errors.lastName && (
            <p className="text-red-400 text-sm mt-1">
              {errors.lastName.message}
            </p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text form-text-color font-medium">
              {profileData.streetaddress}
              {errors.streetaddress && <span className="text-red-400">*</span>}
            </span>
          </label>
          <input
            type="text"
            placeholder={profileData.streetaddress}
            className="input bg-base-200"
            {...register("streetaddress")}
          />
          {errors.streetaddress && (
            <p className="text-red-400 text-sm mt-1">
              {errors.streetaddress.message}
            </p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text form-text-color font-medium">
              {profileData.zipcodeNumber}
              {errors.zipcode && <span className="text-red-400">*</span>}
            </span>
          </label>
          <input
            type="text"
            placeholder={profileData.zipcodeNumber}
            className="input bg-base-200"
            {...register("zipcode")}
          />
          {errors.zipcode && (
            <p className="text-red-400 text-sm mt-1">{errors.zipcode.message}</p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text form-text-color font-medium">
              {profileData.city}
              {errors.city && <span className="text-red-400">*</span>}
            </span>
          </label>
          <input
            type="text"
            placeholder={profileData.city}
            className="input bg-base-200"
            {...register("zipcode")}
          />
          {errors.city && (
            <p className="text-red-400 text-sm mt-1">{errors.city.message}</p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text form-text-color font-medium">
              {profileData.country}
              {errors.country && <span className="text-red-400">*</span>}
            </span>
          </label>
          <input
            type="text"
            placeholder={profileData.country}
            className="input bg-base-200"
            {...register("zipcode")}
          />
          {errors.country && (
            <p className="text-red-400 text-sm mt-1">{errors.country.message}</p>
          )}
        </div>
      </div>
      
    </form>
  );
}
