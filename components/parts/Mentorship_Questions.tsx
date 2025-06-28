import React from 'react';

const MentorshipQuestions = () => {
    const questions = [
        {
            question: "Vem är detta mentorskap till för?",
            answer:"Vårt mentorskap är till för människor som inte vill leva ett liv med att vara kedjade vid ett skrivbord eller ett jobb hela dagen för att skapa inkomst till sig själva. Om du verkligen vill ha frihet i din ekonomi, kommer detta att vägleda dig mot att tjäna inkomst utan att någonsin visa ditt ansikte eller lämna huset."
        },
        {
            question: "Hur vet jag att detta kommer att fungera för mig?",
            answer: "Vi vet inte säkert - vilket är en av anledningarna till att vi erbjuder en 100% garanti utan frågor. Så du kan prova det här och se om det fungerar för dig som det gjorde för oss och de 750+ elever som vi redan har lärt det för! Det enda sättet att fatta ett välgrundat beslut är på insidan, så det är därför vi är villiga att ta på oss ALL risk för dig."
        },
        {
            question: "Kan jag göra detta från var som helst i världen?",
            answer: "Ja du kan göra detta från vart som helst i världen. Dropshipping är mångsidigt och enkelt att komma igång med."
        }
    ];

    return (
        <div className="w-full max-w-[562px] mx-auto px-4 py-8 mt-10 mb-10">
            {/* Header */}
            <h2 className="font-extrabold text-[#151e3a] text-2xl md:text-[35px] text-center mb-8 font-jakarta">
                Har du fortfarande frågor?
            </h2>

            {/* Questions List */}
            <div className="space-y-6">
                {questions.map((item, index) => (
                    <div key={index} className="flex flex-col">
                        {/* Question */}
                        <div className="flex items-center  gap-2">
                            <span className="text-[#151e3a] text-xl ">›</span>
                            <p className="font-bold font-inter text-[#151e3a] text-sm flex-1">
                                {item.question}
                            </p>
                        </div>
                        
                        {/* Answer (if exists) */}
                        {item.answer && (
                            <div className="ml-6 mt-2">
                                <p className="font-medium text-[#151e3a] text-[12px] leading-normal font-inter">
                                    {item.answer}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MentorshipQuestions;