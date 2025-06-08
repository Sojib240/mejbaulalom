import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { use, useEffect, useRef, useState } from "react";

const AboutPage = () => {
    document.title = "About ― Mejbaul Alom";
    // time
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    const firstTextsRef = useRef([]);
    const secondTextsRef = useRef([]);
    const thirdTextsRef = useRef([]);
    const fourthTextsRef = useRef([]);
    const fifthTextsRef = useRef([]);
    const sixthTextsRef = useRef([]);
    const seventhTextRef = useRef();
    const eighthTextsRef = useRef();
    useGSAP(() => {
        const aboutTl = gsap
            .timeline({
                delay: 0.9,
                duration: 0.4,
            })
            .from(
                firstTextsRef.current,
                {
                    y: "100%",
                    stagger: 0.005,
                },
                "st"
            )
            .from(
                secondTextsRef.current,
                {
                    y: "100%",
                    stagger: 0.005,
                },
                "st"
            )
            .from(
                thirdTextsRef.current,
                {
                    y: "100%",
                    stagger: 0.005,
                },
                "st"
            )
            .from(
                fourthTextsRef.current,
                {
                    y: "100%",
                    stagger: 0.005,
                },
                "st"
            )
            .from(
                fifthTextsRef.current,
                {
                    y: "100%",
                    stagger: 0.005,
                },
                "st"
            )
            .from(
                sixthTextsRef.current,
                {
                    y: "100%",
                    stagger: 0.004,
                    // duration: 0.3,
                },
                "st"
            )
            .from(
                seventhTextRef.current,
                {
                    y: "100%",
                },
                "st"
            )
            .from(
                eighthTextsRef.current,
                {
                    opacity: 0,
                    y: "30%",
                },
                "st"
            );
    }),
        [];

    return (
        <section className="bg-color-black z-20 px-5 sm:px-6 md:px-8 lg:px-10 pb-16 lg:pb-20 xl:pb-26 pt-27 md:pt-32 lg:pt-35 xl:pt-45 text-color-white select-none min-h-[60vh] h-full flex justify-center items-center">
            <div className="flex lg:flex-row flex-col gap-12 lg:gap-0 text-xl sm:text-[22px] xl:text-2xl 2xl:text-[26px] uppercase">
                <div className="w-full sm:w-[70%] md:w-[53%] lg:w-[45%] pr-0 lg:pr-[12vw] xl:pr-[14vw] 2xl:pr-[16vw]">
                    {/*  */}
                    <div className="mb-9 pr-[1vw]">
                        {"Currently available for collaborations 🚀"
                            .split(" ")
                            .map((words, idx) => {
                                return (
                                    <div
                                        key={idx}
                                        className="overflow-hidden inline-block"
                                    >
                                        <span
                                            ref={(el) =>
                                                (firstTextsRef.current[idx] =
                                                    el)
                                            }
                                            className="font-font2 inline-block"
                                        >
                                            {words}
                                        </span>
                                        &nbsp;
                                    </div>
                                );
                            })}
                    </div>
                    {/*  */}
                    <div
                        ref={eighthTextsRef}
                        className="w-34 aspect-square rounded-full overflow-hidden mb-8"
                    >
                        <img
                            className="w-full h-full object-cover object-top scale-110"
                            src="/Images/Others/me.jpg"
                            alt=""
                        />
                    </div>
                    {/*  */}
                    <div className="">
                        {"MY LOCAL TIME".split(" ").map((words, idx) => {
                            return (
                                <div
                                    key={idx}
                                    className="overflow-hidden inline-block"
                                >
                                    <span
                                        ref={(el) =>
                                            (secondTextsRef.current[idx] = el)
                                        }
                                        className="font-font2 inline-block"
                                    >
                                        {words}
                                    </span>
                                    &nbsp;
                                </div>
                            );
                        })}
                        <div className="overflow-hidden  mb-4 lg:mb-6">
                            <p ref={seventhTextRef} className="font-font2">
                                {time.toLocaleTimeString()}
                            </p>
                        </div>
                    </div>
                    {/*  */}
                    <div className="">
                        {"My cv is available upon request in PDF format.Please feel free to reach out, and I'll be delighted to share it with you."
                            .split(" ")
                            .map((words, idx) => {
                                return (
                                    <div
                                        key={idx}
                                        className="overflow-hidden inline-block"
                                    >
                                        <span
                                            ref={(el) =>
                                                (thirdTextsRef.current[idx] =
                                                    el)
                                            }
                                            className="font-font2 inline-block"
                                        >
                                            {words}
                                        </span>
                                        &nbsp;
                                    </div>
                                );
                            })}
                    </div>
                    {/*  */}
                </div>
                <div className="w-full lg:w-[55%] pl-0 lg:pl-[1vw] xl:pl-[2vw] 2xl:pl-[3vw]">
                    {/*  */}
                    <div className="pr-[10vw]">
                        {"hi,there I’M Mejbaul alom, frontend developer and freelancer based in bogura, bangladesh"
                            .split(" ")
                            .map((words, idx) => {
                                return (
                                    <div
                                        key={idx}
                                        className="overflow-hidden inline-block"
                                    >
                                        <span
                                            ref={(el) =>
                                                (fourthTextsRef.current[idx] =
                                                    el)
                                            }
                                            className="font-font2 inline-block"
                                        >
                                            {words}
                                        </span>
                                        &nbsp;
                                    </div>
                                );
                            })}
                    </div>
                    {/*  */}
                    <div className="mt-4 lg:mt-6 pr-[10vw]">
                        {"Actually working as freelancer both for agencies and private clients worldwide."
                            .split(" ")
                            .map((words, idx) => {
                                return (
                                    <div
                                        key={idx}
                                        className="overflow-hidden inline-block"
                                    >
                                        <span
                                            ref={(el) =>
                                                (fifthTextsRef.current[idx] =
                                                    el)
                                            }
                                            className="font-font2 inline-block"
                                        >
                                            {words}
                                        </span>
                                        &nbsp;
                                    </div>
                                );
                            })}
                    </div>
                    {/*  */}
                    <div className="mt-12">
                        {"I like to understand people and, although I’m really creative I’m not an artist. I see design as a problem solving tool and the solution is always a bold project with communication that goes straight to the point. After my studies at the Academy of Fine Arts of Naples, I started as a graphic designer, then following my passions I have become a multidisciplinary designer, working on different fields, from Ui/Ux,illustrations, product design to branding and art direction."
                            .split(" ")
                            .map((words, idx) => {
                                return (
                                    <div
                                        key={idx}
                                        className="overflow-hidden inline-block"
                                    >
                                        <span
                                            ref={(el) =>
                                                (sixthTextsRef.current[idx] =
                                                    el)
                                            }
                                            className="text-xl lg:text-[22px] xl:text-2xl 2xl:text-[26px] font-font1 inline-block"
                                        >
                                            {words}
                                        </span>
                                        &nbsp;
                                    </div>
                                );
                            })}
                    </div>
                    {/*  */}
                </div>
            </div>
        </section>
    );
};

export default AboutPage;
