import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
    const { pathname } = useLocation();
    // scroll trigger section
    const HeroMainRef = useRef(null);
    useGSAP(() => {
        const mm = gsap.matchMedia(); // Initialize matchMedia

        mm.add("(min-width: 1023px)", () => {
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
        });

        return () => mm.revert(); // Cleanup matchMedia on component unmount
    }, []);
    // landing animation
    const homeWordsRef = useRef([]);

    useGSAP(() => {
        gsap.from(homeWordsRef.current, {
            y: "100%",
            delay: 1.14,
            stagger:0.015,
            duration: 0.5,
        });
    }, [pathname]);

    const sentence =
        "Hello! I'm Mejbaul Alom a frontend developer and freelancer passionate about building clean, profession -al";

    return (
        <section ref={HeroMainRef} className="relative select-none">
            <div className="px-3 sm:px-6 md:px-8 lg:px-10 text-center pb-12 lg:pb-18 xl:pb-30 pt-24 md:pt-26 lg:pt-28 xl:pt-30">
                <div className="font-font5 uppercase text-4xl sm:text-[40px] md:text-[7vw] leading-[110%] md:leading-[100%] flex flex-wrap justify-center gap-x-4 z-[52]">
                    {sentence.split(" ").map((word, idx) => (
                        <div key={idx} className="overflow-hidden">
                            <span
                                className="inline-block"
                                ref={(el) => (homeWordsRef.current[idx] = el)}
                            >
                                {word}
                            </span>
                            &nbsp;
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
