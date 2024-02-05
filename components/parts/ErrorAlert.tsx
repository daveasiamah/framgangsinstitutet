import React from "react"
import Image from "next/image"
import Titleh6 from "@/components/parts/Titleh6";
import Link from "next/link"
import { useRouter } from "next/router"

type Props = {
    isVisibleclose: boolean;
    onClose: () => void;
    alertMessage:string
}

export default function Erroralert({ isVisibleclose,alertMessage, onClose }: Props) {
    //   const router = useRouter()
    //   const { locale } = router
    //   const t = locale === "en" ? en : sv
    if(!isVisibleclose) return null;


    return (
      
                <div
                    id="popup-modal"
                    tabIndex={-1}
                    className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-25 backdrop-blur-sm  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex justify-center items-center"
                >
                    <div className="relative w-full max-w-md max-h-full" id="modelpopup">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <button
                                type="button"
                                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                                data-modal-hide="popup-modal" onClick={() => onClose()}
                            >
                                <svg
                                    aria-hidden="true"
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <div className="p-6 text-center">
                               
                        <Image
                            src="/icons/error-mark.png"
                            alt="Mega menu icon"
                            className="object-contain drop-shadow-xl mx-auto mb-10 text-gray-400 dark:text-gray-200"
                            width={100}
                            height={100}
                            priority
                        />
                       
                            <Titleh6
                                blackText="Oop!"
                                blueText=""
                                className="text-center text-3xl font-semibold text-primary lg:leading-[2rem] text-red-500"
                            />
                        <Titleh6
                            blackText={alertMessage}
                            blueText=""
                            className="text-center text-lg font-semibold"
                        />

                       
                                {/* <button
                                    data-modal-hide="popup-modal"
                                    type="button"
                                    className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                                >
                                    Yes, I'm sure
                                </button>
                                <button
                                    data-modal-hide="popup-modal"
                                    type="button"
                                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                >
                                    No, cancel
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>

    )
}
