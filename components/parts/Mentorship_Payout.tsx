import Image from "next/image";
import React from "react";

const MentorshipPayout = () => {
    return (
        <div className="w-full max-w-[1258px] mx-auto px-4 mt-10 mb-10">
            <div className="relative w-full max-w-[1170px] mx-auto h-[314px] bg-[url(/images/mentorship/payout.svg)] bg-[100%_100%] rounded-3xl flex flex-col items-center justify-center text-center px-6 py-8">
                {/* Icon placeholder */}
                <div className="w-8 h-9 mb-4 text-white text-2xl">
                    <Image
                        src={"/images/mentorship/payout-check.svg"}
                        alt="Payout Icon"
                        width={32}
                        height={36}
                    />
                </div>

                {/* Main heading */}
                <h2 className="max-w-[412px] font-bold text-white text-lg md:text-xl lg:text-2xl leading-tight mb-6 font-jakarta">
                    Det är dags för dig att börja göra anspråk på dina
                    utbetalningar idag
                </h2>

                {/* Subtext */}
                <p className="max-w-[590px] font-medium text-white text-sm md:text-base leading-relaxed mb-8 font-inter">
                    Kom ihåg: Du är några klick från att leva livet som du
                    vill...
                    <br />
                    Har du verkligen råd att vänta?
                </p>

                {/* CTA Button */}
                <button className="bg-white text-[#151e3a] font-semibold text-xs px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-jakarta">
                    Ansök Här
                </button>
            </div>
        </div>
    );
};

export default MentorshipPayout;
