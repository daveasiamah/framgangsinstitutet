import React from "react";
import MentorshipButton from "./Mentorship_Mail_Button";

const MentorshipNextStep = () => {
    return (
        <div className="relative w-full max-w-[1217px] mx-auto  py-8 md:py-12">
            {/* Main Headline */}
            <h2 className="w-full max-w-[607px] mb-6 font-extrabold text-[#151e3a] text-xl md:text-2xl lg:text-[28px] leading-tight font-jakarta">
                Gå från "trött på att försöka" till att blomstra i fyra enkla
                steg
            </h2>

            {/* Description Text */}
            <p className="w-[95%] mb-8 font-medium text-[#434c69] text-base md:text-lg leading-relaxed md:leading-7 font-inter">
                Inget behov av att lära sig komplexa färdigheter. Du behöver
                inte göra några tekniska grejer... Bara ett enkelt... säkert...
                snabbt system som backas upp av miljontals kronor, tusentals
                verifierade fallstudier och år av forskning och utveckling som
                du kan börja implementera idag...
            </p>

            {/* CTA Button */}
            <MentorshipButton
                className="mx-0 mt-7 !text-[9px] lg:!text-[12px]"
                text="Gå Med i Mentorskap Idag"
                size="small"
            />
        </div>
    );
};

export default MentorshipNextStep;
