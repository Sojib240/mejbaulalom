import { useGSAP } from "@gsap/react";
import { span } from "framer-motion/client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
    // scroll trigger section
    const HeroMainRef = useRef(null);
    useGSAP(() => {
        gsap.to(HeroMainRef.current, {
            scrollTrigger: {
                trigger: HeroMainRef.current,
                start: "top top",
                end: "250% top",
                scrub: true,
                // markers: true,
            },
            y: "70%",
        });
    }, []);
    // landing animation
    const homeWordsRef = useRef([]);

    useGSAP(() => {
        gsap.from(homeWordsRef.current, {
            scale:0.8,
            opacity: 0,
            ease: "elastic.out(1, 0.2)",
            stagger: {
                each: 0.03,
                from: "random",
            },
            duration: 1,
            delay: 0.3,
        });
    }, []);
    const sentence =
        "Hello! I'm Mejbaul Alom a frontend developer and freelancer passionate about building clean, profession -al web.";

    return (
        <section ref={HeroMainRef} className="relative z-50 select-none">
            <div className="px-5 sm:px-6 md:px-8 lg:px-10 text-center pb-12 lg:pb-18 xl:pb-30 pt-24 md:pt-26 lg:pt-28 xl:pt-30">
                <div className="font-font5 uppercase text-4xl sm:text-[40px] md:text-[7vw] leading-[105%] md:leading-[100%] flex flex-wrap justify-center gap-x-4">
                    {sentence.split(" ").map((word, idx) => (
                        <div
                            key={idx}
                            ref={(el) => (homeWordsRef.current[idx] = el)}
                            className=""
                        >
                            <span>{word}</span>&nbsp;
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
