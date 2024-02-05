import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormValues = {
  namecard: string;
  cardNumber: number;
  validitydate: string;
  cvc: number;
};

const schema = yup
  .object({
    namecard: yup.string().required("name on the card is required"),
    cardNumber: yup.string().required("card Number is required"),
    validitydate: yup.string().required("validity date name is required"),
    cvc: yup
      .number()
      .typeError("cvc must be a number")
      .required("cvc number is required"),
  })
  .required();

type Props = {
  profilepayData: {
    namecard: string;
    cardNumber: string;
    validitydate: string;
    cvc: string;
    button: string;
  };
};

export default function ProfilePayment({ profilepayData }: Props) {
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
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">
              {profilepayData.namecard}
              {errors.namecard && <span className="text-red-400">*</span>}
            </span>
          </label>
          <input
            type="text"
            placeholder={profilepayData.namecard}
            className="input bg-base-200"
            {...register("namecard")}
          />
          {errors.namecard && (
            <p className="text-red-400 text-sm mt-1">
              {errors.namecard.message}
            </p>
          )}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">
              {profilepayData.cardNumber}
              {errors.cardNumber && <span className="text-red-400">*</span>}
            </span>
          </label>
          <input
            type="text"
            placeholder={profilepayData.cardNumber}
            className="input bg-base-200"
            {...register("cardNumber")}
          />
          {errors.cardNumber && (
            <p className="text-red-400 text-sm mt-1">
              {errors.cardNumber.message}
            </p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">
              {profilepayData.validitydate}
              {errors.validitydate && <span className="text-red-400">*</span>}
            </span>
          </label>
          <input
            type="text"
            placeholder={profilepayData.validitydate}
            className="input bg-base-200"
            {...register("cardNumber")}
          />
          {errors.validitydate && (
            <p className="text-red-400 text-sm mt-1">
              {errors.validitydate.message}
            </p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">
              {profilepayData.cvc}
              {errors.cvc && <span className="text-red-400">*</span>}
            </span>
          </label>
          <input
            type="text"
            placeholder={profilepayData.cvc}
            className="input bg-base-200"
            {...register("cardNumber")}
          />
          {errors.cvc && (
            <p className="text-red-400 text-sm mt-1">{errors.cvc.message}</p>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-primary mt-8 w-full shadow-btn btn_pro_payment rounded-[12px]"
      >
        {profilepayData.button}
      </button>
    </form>
  );
}
