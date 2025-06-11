import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Marquee = ({ bg = "", texts = "• Some of my best works •" }) => {
    const marqueeRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const marquee = marqueeRef.current;
            const totalWidth = marquee.scrollWidth / 2;
            // Infinite scroll animation
            gsap.to(marquee, {
                x: -totalWidth,
                duration: 40,
                ease: "linear",
                repeat: -1,
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className={`overflow-hidden select-none py-6 md:py-8 lg:py-9 xl:py-10 z-50 relative ${bg}`}
        >
            <div className="overflow-hidden">
                <div
                    ref={marqueeRef}
                    className="flex whitespace-nowrap text-xl lg:text-2xl xl:text-[26px] 2xl:text-[28px] font-font3  text-color-white"
                >
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex items-center">
                            {[...Array(8)].map((_, j) => (
                                <span
                                    key={`${i}-${j}`}
                                    className="inline-block"
                                >
                                    {texts}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Marquee;
