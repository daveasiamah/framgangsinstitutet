import React, {useState, useEffect} from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {create_payment } from "@/service/Apis/api";
import * as yup from "yup";


type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    zipcode: number;
    city: string;
    country: string;
};

const schema = yup
    .object({
        firstName: yup.string().required("Förnamn krävs"),
        lastName: yup.string().required("Efternamn krävs"),
        email: yup.string().required("E-post krävs"),
        zipcode: yup
            .number()
            .typeError("Postnummer måste vara ett nummer")
            .required("Postnummer krävs"),
    })
    .required();

type Props = {
    profileData: {
        firstName: string;
        lastName: string;
        email: string;
        zipcodeNumber: string;
        city: string;
        country: string;
        button: string;
    };
};

export default function CheckoutForm2({ profileData }: Props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: yupResolver(schema),
    });
const [validate, setvalidate] = useState('');
    // const course_notification_api = async () => {
    //     try {
    //       const res: any = await create_payment();
    //       console.log(res);
    //     }
    //     catch (error) {
    //       console.log('error', error);
    //     }
    //   };
    //   course_notification_api();

    //   const handleSubmits = (e:any) => {
    //     e.preventDefault();
            // create_payment()
            //   .then((data) => {
            //     console.log('API Response:', data);
            //     // if (data) {
            //     //   window.open(`${data}`, '_blank');
            //     // }
            //   })
            //   .catch((error) => {
            //     console.error('API Error:', error);
            //   });
            // }
            const handleSubmits = async (data: FormValues) => {
                const res:any = await create_payment(data);
                console.log(res);
                if (res) {
                       window.open(`${res}`, '_blank');
                }
            }
    const onSubmit: SubmitHandler<FormValues> = async (data) =>  {
        await  handleSubmits(data);
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)} className='' action=''>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 colunm_row_gap_form'>
          <div className='form-control col-span-2'>
            <label className='label px-0'>
              <span className='text-[1.25vw] form-text-color font-medium max-[780px]:text-[16px]'>
                E-post
                {errors.email && <span className='text-red-400'>*</span>}
              </span>
            </label>
            <input
              type='text'
              placeholder='E-post'
              className='input bg-base-200'
              {...register("email")}
            />
            {errors.email && (
              <p className='text-red-400 text-sm mt-1'>
                {errors.email.message}
              </p>
            )}
          </div>
          <div className='form-'>
            <label className='label px-0 justify-start gap-1 p-0 w-[330px]'>
              <input
                type='checkbox'
                className='!h-[1rem] input bg-base-200 input_custom_height'
                // {...register("email")}
              />
              <span className='label font-normal text-[12px] text-subtitle p-0'>
                Maila mig med nyheter och erbjudanden
                {/* {errors.email && <span className="text-red-400">*</span>}s */}
              </span>
            </label>
            {/* {errors.email && (
                        <p className="text-red-400 text-sm mt-1">
                            {errors.email.message}
                        </p>
                    )} */}
          </div>
          <p className='font-bold mt-4 text-[24px] col-span-2'>Fakturaadress</p>
          <div className='form-control col-span-2'>
            <label className='label px-0'>
              <span className='text-[1.25vw] form-text-color font-medium  max-[780px]:text-[16px]'>
                Land
                {errors.country && <span className='text-red-400'>*</span>}
              </span>
            </label>
            <input
              type='text'
              placeholder='Land'
              className='input bg-base-100'
              {...register("country")}
            />
            {errors.country && (
              <p className='text-red-400 text-sm mt-1'>
                {errors.country.message}
              </p>
            )}
          </div>
          <div className='form-control max-[480px]:col-span-2'>
            <label className='label px-0'>
              <span className='text-[1.25vw] form-text-color font-medium max-[780px]:text-[16px]'>
                Förnamn
                {errors.firstName && <span className='text-red-400'>*</span>}
              </span>
            </label>
            <input
              type='text'
              placeholder={profileData.firstName}
              className='input bg-base-100'
              {...register("firstName")}
            />
            {errors.firstName && (
              <p className='text-red-400 text-sm mt-1'>
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div className='form-control max-[480px]:col-span-2'>
            <label className='label px-0'>
              <span className='text-[1.25vw] form-text-color font-medium max-[780px]:text-[16px]'>
                Efternamn
                {errors.lastName && <span className='text-red-400'>*</span>}
              </span>
            </label>
            <input
              type='text'
              placeholder={profileData.lastName}
              className='input bg-base-100'
              {...register("lastName")}
            />
            {errors.lastName && (
              <p className='text-red-400 text-sm mt-1'>
                {errors.lastName.message}
              </p>
            )}
          </div>
          <div className='form-control col-span-2'>
            <label className='label px-0'>
              <span className='text-[1.25vw] form-text-color font-medium max-[780px]:text-[16px]'>
                Stad
                {errors.city && <span className='text-red-400'>*</span>}
              </span>
            </label>
            <input
              type='text'
              placeholder={profileData.city}
              className='input bg-base-100'
              {...register("zipcode")}
            />
            {errors.city && (
              <p className='text-red-400 text-sm mt-1'>{errors.city.message}</p>
            )}
          </div>
          <div className='form-control col-span-2'>
            <label className='label px-0 px-0'>
              <span className='text-[1.25vw] form-text-color font-medium max-[780px]:text-[16px]'>
                Postnummer
                {errors.zipcode && <span className='text-red-400'>*</span>}
              </span>
            </label>
            <input
              type='text'
              placeholder={profileData.zipcodeNumber}
              className='input bg-base-100'
              {...register("zipcode")}
            />
            {errors.zipcode && (
              <p className='text-red-400 text-sm mt-1'>
                {errors.zipcode.message}
              </p>
            )}
          </div>
        </div>

        <div className='text-right'>
          <button
            className='text-right btn btn-primary ml-auto mt-8'
            type='submit'>
            Nästa steg
          </button>
        </div>
      </form>
    );
}
