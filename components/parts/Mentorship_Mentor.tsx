import Image from "next/image";

const MentorshipMentor = () => {
    return (
        <div className="w-full max-w-[967px] mx-auto px-1 sm:px-6 lg:px-0 mt-10 mb-10">
            <div className="w-full">
                {/* Desktop Layout */}
                <div className="hidden lg:flex lg:gap-4">
                    {/* Left side - 2x2 grid of 4 images */}
                    <div className="grid grid-cols-2 gap-4 flex-shrink-0">
                        <Image
                            className="w-[258px] h-[213px] object-cover"
                            alt="Screenshot"
                            src="/images/mentorship/shot-1.png"
                            width={258}
                            height={213}
                        />
                        <Image
                            className="w-[256px] h-[213px] object-cover"
                            alt="Screenshot"
                            src="/images/mentorship/shot-2.png"
                            width={256}
                            height={213}
                        />
                        <Image
                            className="w-[262px] h-[213px] object-cover"
                            alt="Screenshot"
                            src="/images/mentorship/shot-3.png"
                            width={262}
                            height={213}
                        />
                        <Image
                            className="w-[256px] h-[213px] object-cover"
                            alt="Screenshot"
                            src="/images/mentorship/shot-4.png"
                            width={256}
                            height={213}
                        />
                    </div>

                    {/* Right side - Single large image */}
                    <div className="flex-shrink-0">
                        <Image
                            className="w-[432px] h-[437px] object-cover"
                            alt="Screenshot"
                            src="/images/mentorship/shot-5.png"
                            width={432}
                            height={437}
                        />
                    </div>
                </div>

                {/* Mobile Layout - All images stacked vertically */}
                <div className="flex flex-col gap-4 lg:hidden">
                    <Image
                        className="w-full h-[200px] sm:h-[250px] object-cover rounded-lg"
                        alt="Screenshot"
                        src="/images/mentorship/shot-1.png"
                        width={800}
                        height={600}
                    />
                    <Image
                        className="w-full h-[200px] sm:h-[250px] object-cover rounded-lg"
                        alt="Screenshot"
                        src="/images/mentorship/shot-2.png"
                        width={800}
                        height={600}
                    />
                    <Image
                        className="w-full h-[200px] sm:h-[250px] object-cover rounded-lg"
                        alt="Screenshot"
                        src="/images/mentorship/shot-3.png"
                        width={800}
                        height={600}
                    />
                    <Image
                        className="w-full h-[200px] sm:h-[250px] object-cover rounded-lg"
                        alt="Screenshot"
                        src="/images/mentorship/shot-4.png"
                        width={800}
                        height={600}
                    />
                    <Image
                        className="w-full h-[300px] sm:h-[350px] object-cover rounded-lg"
                        alt="Screenshot"
                        src="/images/mentorship/shot-5.png"
                        width={800}
                        height={600}
                    />
                </div>
            </div>
        </div>
    );
};

export default MentorshipMentor;
