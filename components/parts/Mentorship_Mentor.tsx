import Image from "next/image";

const MentorshipMentor = () => {
    return (
        <div className="w-full max-w-[987px] mx-auto px-0 sm:px-6 lg:px-0 mt-6 sm:mt-8 lg:mt-14 mb-6 sm:mb-8 lg:mb-10">
            <div className="w-full">
                {/* Mobile/Tablet: Stack vertically, Desktop: Side by side */}
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                    {/* Left side - 2x2 grid of 4 images */}
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 flex-shrink-0 justify-items-center lg:justify-items-start">
                        <Image
                            className="w-[190px]  sm:w-[290px] lg:w-[258px] lg:h-[213px] object-cover"
                            alt="Screenshot"
                            src="/images/mentorship/shot-1.png"
                            width={258}
                            height={213}
                        />
                        <Image
                            className="w-[190px]  sm:w-[290px] sm:h-[240px] lg:w-[256px] lg:h-[213px] object-cover"
                            alt="Screenshot"
                            src="/images/mentorship/shot-2.png"
                            width={256}
                            height={213}
                        />
                        <Image
                            className="w-[190px]  sm:w-[290px] sm:h-[240px] lg:w-[262px] lg:h-[213px] object-cover"
                            alt="Screenshot"
                            src="/images/mentorship/shot-3.png"
                            width={262}
                            height={213}
                        />
                        <Image
                            className="w-[190px]  sm:w-[290px] sm:h-[240px] lg:w-[256px] lg:h-[213px] object-cover"
                            alt="Screenshot"
                            src="/images/mentorship/shot-4.png"
                            width={256}
                            height={213}
                        />
                    </div>

                    {/* Right side - Single large image */}
                    <div className="flex w-full justify-center lg:justify-start flex-shrink-0">
                        <Image
                            className="w-[390px]  sm:w-[650px] sm:h-[660px] lg:w-[432px] lg:h-[437px] object-cover"
                            alt="Screenshot"
                            src="/images/mentorship/shot-5.png"
                            width={432}
                            height={437}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MentorshipMentor;