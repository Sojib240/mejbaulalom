import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const AboutPage = () => {
    document.title = "About | Mejbaul Alom";
    // scroll trigger section
    const AboutPageMainRef = useRef(null);
    // useGSAP(() => {
    //     gsap.to(AboutPageMainRef.current, {
    //         scrollTrigger: {
    //             trigger: AboutPageMainRef.current,
    //             start: "top top",
    //             end: "bottom top",
    //             scrub: true,
    //             markers: true,
    //         },
    //         y: "20%",
    //     });
    // }, []);
    // time
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            ref={AboutPageMainRef}
            className="bg-color-black z-20 px-5 sm:px-6 md:px-8 lg:px-10 pb-10 lg:pb-16 xl:pb-26 2xl:pb-24 pt-30 md:pt-32 lg:pt-35 xl:pt-45 text-color-white"
        >
            <div className="flex lg:flex-row flex-col gap-12 lg:gap-0">
                <div className="w-full sm:w-[70%] md:w-[53%] lg:w-[45%] pr-0 lg:pr-[12vw] xl:pr-[14vw] 2xl:pr-[16vw]">
                    <h4 className="text-xl lg:text-[22px] xl:text-2xl 2xl:text-[26px] uppercase font-font2 block mb-9 pr-[1vw]">
                        Currently available for collaborations 🚀
                    </h4>
                    <div className="w-34 aspect-square rounded-full overflow-hidden mb-8">
                        <img
                            className="w-full h-full object-cover object-top scale-110"
                            src="/Images/Others/me.jpg"
                            alt=""
                        />
                    </div>
                    <p className="text-xl lg:text-[22px] xl:text-2xl 2xl:text-[26px] uppercase3 font-font2 my-4 lg:my-6">
                        MY LOCAL TIME <br />{" "}
                        <span>{time.toLocaleTimeString()}</span>
                    </p>

                    <p className="text-xl lg:text-[22px] xl:text-2xl 2xl:text-[26px] uppercase font-font2">
                        My cv is available upon request in PDF format.Please
                        feel free to reach out, and I'll be delighted to share
                        it with you.
                    </p>
                </div>
                <div className="w-full lg:w-[55%] pl-0 lg:pl-[1vw] xl:pl-[2vw] 2xl:pl-[3vw]">
                    <p className="text-xl lg:text-[22px] xl:text-2xl 2xl:text-[26px] uppercase font-font2 pr-[10vw]">
                        I’M Marco De Luca, digital designer and a graphic design
                        teacher based in Naples, Italy.
                    </p>
                    <p className="text-xl lg:text-[22px] xl:text-2xl 2xl:text-[26px] uppercase font-font2 mt-4 lg:mt-6 pr-[10vw]">
                        Actually working as freelancer both for agencies and
                        private clients worldwide.
                    </p>
                    <p className="text-xl lg:text-[22px] xl:text-2xl 2xl:text-[26px] font-font1 mt-12">
                        I like to understand people and, although I’m really
                        creative I’m not an artist. I see design as a problem
                        solving tool and the solution is always a bold project
                        with communication that goes straight to the point.
                        After my studies at the Academy of Fine Arts of Naples,
                        I started as a graphic designer, then following my
                        passions I have become a multidisciplinary designer,
                        working on different fields, from Ui/Ux,illustrations,
                        product design to branding and art direction.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;
