import React from 'react';

const MentorshipSteps = () => {
    const steps = [
        {
            number: "Steg 1",
            title: "Steg 1: Ansök om mentorskap i världsklass (tar 2 minuter)...",
        },
        {
            number: "Steg 2", 
            title: "Steg 2: Hoppa på en snabb framgångssession online med en av mina rådgivare för att skapa en personlig spelplan...",
        },
        {
            number: "Steg 3",
            title: "Steg 3: Våra experter kommer att börja bygga din butik medan du går igenom modulerna (så att du kan tjäna medan du lär dig)...",
        }
    ];

    return (
        <div className="w-full max-w-[1266px] mx-auto  py-8">
            <p className='font-inter text-xl font-semibold mb-3'> Dina nästa steg</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="relative w-full h-[262px] bg-gray-100 rounded-3xl overflow-hidden border border-gray"
                    >
                        {/* Step Badge */}
                        <div className="absolute top-6 left-12 w-16 h-[21px] bg-[#edf5fe] rounded-[5px] shadow-[0px_32px_115px_#00000029]">
                            <div className="absolute w-[39px] left-[17px] h-3 top-1 font-medium text-[#225aea] text-[10px] text-center">
                                {step.number}
                            </div>
                        </div>

                        {/* Step Content */}
                        <p className="absolute bottom-[20px] left-[46px] right-[20px] font-semibold text-[#151e3a] text-lg leading-[25px] font-inter">
                            {step.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MentorshipSteps;