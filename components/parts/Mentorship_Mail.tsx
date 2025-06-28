import Image from "next/image";

const MentorshipMailer = () => {
    return (
        <div className="relative w-full max-w-[689px] px-0 sm:px-6 lg:px-8 mb-10 mt-10 mx-auto">
            <div className="relative w-full min-h-[1273px] sm:min-h-[780px] lg:min-h-[1153px]  mt-5 bg-white rounded-[25px] border-[0.2px] border-solid border-[#9b9b9b40] shadow-[0px_0.5px_15px_0.5px_#9b9b9b40] ">
                <div className="w-full relative font-inter">
                    <div className="w-full">
                        <div className="relative min-h-[600px] sm:min-h-[800px] lg:min-h-[1024px]">
                            {/* Email container */}
                            <div className="" />

                            {/* Email icon */}
                            <Image
                                className="absolute w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] lg:w-[51px] lg:h-[51px] -top-5 right-4 sm:right-6 lg:right-0"
                                alt="Rectangle"
                                src={"/images/mentorship/emailUp.png"}
                                width={40}
                                height={40}
                            />
                        </div>
                    </div>

                    {/* Email content */}
                    <div className="absolute top-8 sm:top-10 lg:top-12 left-4 sm:left-6 lg:left-10 right-4 sm:right-6 lg:right-10 text-sm sm:text-base leading-normal">
                        <div className="space-y-4">
                            {/* From field */}
                            <div>
                                <span className="font-medium text-[#434c69]">
                                    Från:
                                </span>
                                <span className="font-semibold text-[#151e3a]">
                                    {" "}Checkified Huvudkontor
                                </span>
                            </div>

                            {/* Location field */}
                            <div>
                                <span className="font-medium text-[#434c69]">
                                    Plats:
                                </span>
                                <span className="font-semibold text-[#151e3a]">
                                    {" "}Stockholm, Sverige
                                </span>
                            </div>

                            {/* Subject field */}
                            <div className="mb-6">
                                <span className="font-medium text-[#434c69]">
                                    Ämne:
                                </span>
                                <span className="font-semibold text-[#151e3a]">
                                    {" "}Att bryta "Ekorrhjulet" 2025...
                                </span>
                            </div>

                            {/* Email body */}
                            <div className="space-y-4 text-[#434c69] font-medium">
                                <p>
                                    Hej, jag heter Dominic och jag är grundaren
                                    av Checkified.se... Jag kunde inte vara mer
                                    glad över att ge dig denna nya möjlighet som
                                    vi har arbetat med.
                                </p>

                                <p>
                                    Men först, låt mig ge dig en liten
                                    bakgrundshistoria av vem egentligen är. För
                                    bara några år sedan arbetade jag på
                                    Postnord...
                                </p>

                                <p>
                                    Under tiden försökte jag tjäna pengar med
                                    dropshipping.{" "}
                                    <span className="font-extrabold text-[#151e3a]">
                                        Jag gjorde allt som gurus sa till mig.
                                    </span>{" "}
                                    ...Sälja i Sverige. Jaga trendiga produkter.
                                    Spendera en förmögenhet på att "testa"
                                    annonser...
                                </p>

                                <p>
                                    <span className="font-extrabold text-[#151e3a]">
                                        Ändå var det bara att göra min situation
                                        värre
                                    </span>{" "}
                                    ... Jag slösade alla mina besparingar 3
                                    gånger.{" "}
                                    <span className="font-extrabold text-[#151e3a]">
                                        Det kändes som att jag slog huvudet i en
                                        vägg.
                                    </span>
                                </p>

                                <p>
                                    Men när jag snabbspolar fram ett par år
                                    knäckte jag koden... (Jag gick från 3120 SEK
                                    till över 1,2 miljoner kronor på mitt
                                    bankkonto på bara sex månader)
                                </p>

                                <p>
                                    Och nu, bara 25 år gammal...{" "}
                                    <span className="font-extrabold text-[#151e3a]">
                                        är jag mångmiljonär.
                                    </span>
                                </p>

                                <div className="space-y-2">
                                    <p>
                                        Jag har pensionerat båda mina
                                        föräldrar...
                                    </p>
                                    <p>
                                        Jag har rest till 50+ länder (i
                                        klass)...
                                    </p>
                                    <p>
                                        Jag har genererat över 120 miljoner
                                        kronor i försäljning...
                                    </p>
                                    <p>
                                        Jag har flera tillgångar som genererar
                                        mig pengar i sömnen...
                                    </p>
                                    <p>
                                        Jag har byggt ett av de bästa
                                        mentorskapen online...
                                    </p>
                                </div>

                                <p>
                                    <span className="font-extrabold text-[#151e3a]">
                                        Och jag säger INGET av detta för att
                                        skryta.
                                    </span>
                                </p>

                                <p>
                                    Jag säger det för att jag, till skillnad
                                    från 99,99% av gurus, har varit i dina skor.
                                </p>

                                <div className="space-y-2">
                                    <p>Jag hade inget miljonärsnätverk.</p>
                                    <p>Jag hade inga pengar till kurser.</p>
                                    <p>
                                        Jag hade ingen mentor som höll min hand.
                                    </p>
                                </div>

                                <p>
                                    Men efter att ha lagt blod, svett och tårar
                                    i spelet i nästan ett decennium... vet jag
                                    exakt hur jag ska vända ditt liv. ...Och få
                                    all den tid, pengar och frihet du någonsin
                                    velat ha,{" "}
                                    <span className="font-extrabold text-[#151e3a]">
                                        oavsett bakgrund eller erfarenhet
                                    </span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MentorshipMailer;