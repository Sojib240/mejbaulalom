import { useEffect, useRef } from "react";
import gsap from "gsap";

const PageAnimation = ({ animationKey }) => {
    const stepsRef = useRef([]);
    const overlayRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
        if (animationKey) {
            window.scrollTo(0, 0);

            tl.set(overlayRef.current, { opacity: 1, pointerEvents: "auto" });
            tl.set(stepsRef.current, { scaleX: 0, transformOrigin: "left" });
            tl.to(stepsRef.current, {
                scaleX: 1,
                duration: 1,
                stagger: 0.05,
                ease: "power2.inOut",
            });
            tl.to(overlayRef.current, {
                opacity: 0,
                pointerEvents: "none",
                duration: 0.5,
            });
            tl.set(stepsRef.current, { transformOrigin: "right" }, "+=0.5");
            tl.to(stepsRef.current, {
                scaleX: 0,
                duration: 1,
                stagger: 0.05,
                ease: "power2.inOut",
            });
        }

        return () => tl.kill();
    }, [animationKey]);

    return (
        <>
            <div className="w-full h-screen fixed top-0 left-0 flex z-[9999999] pointer-events-none">
                {[...Array(5)].map((_, idx) => (
                    <div
                        key={idx}
                        ref={(el) => (stepsRef.current[idx] = el)}
                        className="bg-color-pink w-full h-full"
                    />
                ))}
            </div>
            <div
                ref={overlayRef}
                className="overlay w-full h-screen bg-color-white fixed top-0 left-0 z-[99999] pointer-events-none transition-opacity duration-500"
            />
        </>
    );
};

export default PageAnimation;
