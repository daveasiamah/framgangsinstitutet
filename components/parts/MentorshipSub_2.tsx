import MentorshipButton from "./Mentorship_Mail_Button";

const MentorshipSubEhandler = () => {
    return (
        <div className="relative w-full max-w-[772px] mx-auto px-4 sm:px-6 lg:px-8 mt-14 mb-10">
            <div className="w-full">
                <div className="space-y-4 sm:space-y-6">
                    {/* Header text */}
                    <div className="w-full max-w-[200px]">
                        <p className="font-semibold text-[#9b9b9b] font-inter text-xs sm:text-sm tracking-[0] leading-normal">
                            Med Checkified Mentorskap™
                        </p>
                    </div>

                    {/* Main headline */}
                    <div className="w-full max-w-[668px] font-jakarta">
                        <h2 className="font-extrabold text-lg sm:text-xl md:text-2xl lg:text-2xl tracking-[0] leading-tight sm:leading-[31px]">
                            <span className="text-black">
                                Det är som att ha
                            </span>
                            <span className="text-[#1e5aea]">
                                {" "}personlig tränare för E-handel
                            </span>
                            <span className="text-black">
                                ,<br />utan den höga månadsavgiften.
                            </span>
                        </h2>
                    </div>

                    {/* Description */}
                    <div className="w-full max-w-[772px] mt-6 sm:mt-8 font-inter">
                        <p className="font-medium text-[#9b9b9b] text-sm sm:text-base tracking-[0] leading-normal">
                            Till skillnad från ditt typiska "coachingprogram",
                            community eller föråldrad kurs...
                        </p>
                        <br />
                        <p className="font-medium text-[#9b9b9b] text-sm sm:text-base tracking-[0] leading-normal">
                            Checkified Mentorskap™ är det enda stället som
                            erbjuder utbildning i världsklass med praktiskt stöd
                            och vägledning till ett användarvänligt
                            e-handelsystem.
                        </p>
                    </div>
                </div>
            </div>
            <MentorshipButton
                className="mx-0 mt-7 text-xs"
                text="Börja Din Resa Idag"
                size="small"
            />
        </div>
    );
};

export default MentorshipSubEhandler;
