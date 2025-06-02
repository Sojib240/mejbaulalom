import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useNavigationType } from "react-router-dom";

const PageTransition = ({ children }) => {
    const stepsRef = useRef([]);
    const overlayRef = useRef(null);
    // const { pathname } = useLocation();

    // useGSAP(
    //     () => {
    //         window.scroll(0, 0);
    //         const tl = gsap.timeline();
    //         tl.set(overlayRef.current, { opacity: 1, pointerEvents: "auto" });
    //         tl.set(stepsRef.current, {
    //             scaleX: 0,
    //             transformOrigin: "left",
    //         });
    //         tl.to(stepsRef.current, {
    //             scaleX: 1,
    //             duration: 1,
    //             stagger: 0.05,
    //             ease: "power2.inOut",
    //         });
    //         tl.to(overlayRef.current, {
    //             opacity: 0,
    //             pointerEvents: "none",
    //             duration: 0.5,
    //         });
    //         tl.set(
    //             stepsRef.current,
    //             {
    //                 transformOrigin: "right",
    //             },
    //             "+=0.5"
    //         ); // wait 1s before setting origin for exit

    //         tl.to(stepsRef.current, {
    //             scaleX: 0,
    //             duration: 1,
    //             stagger: 0.05,
    //             ease: "power2.inOut",
    //         });
    //     },
    //     { dependencies: [pathname] }
    // );

    const navigationType = useNavigationType();

    useLayoutEffect(() => {
                    window.scrollTo(0, 0);
        // Ensure these elements are invisible before anything renders
        if (overlayRef.current) {
            gsap.set(overlayRef.current, { opacity: 0, pointerEvents: "none" });
        }
        if (stepsRef.current.length > 0) {
            gsap.set(stepsRef.current, { scaleX: 0 });
        }
    }, []);

    useEffect(() => {
        if (navigationType === "POP") {
            console.log("running if pop");
        } else if (navigationType === "PUSH" || navigationType === "REPLACE") {
            window.scrollTo(0, 0);
            const tl = gsap.timeline();
            tl.set(overlayRef.current, { opacity: 1, pointerEvents: "auto" });
            tl.set(stepsRef.current, {
                scaleX: 0,
                transformOrigin: "left",
            });
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
            tl.set(
                stepsRef.current,
                {
                    transformOrigin: "right",
                },
                "+=0.5"
            );
            tl.to(stepsRef.current, {
                scaleX: 0,
                duration: 1,
                stagger: 0.05,
                ease: "power2.inOut",
            });
        }
    }, [navigationType]);

    return (
        <div className="">
            {/* Animated stripe bars */}
            <div className="w-full h-screen fixed top-0 left-0 flex z-[9999999] pointer-events-none">
                {[...Array(5)].map((_, idx) => (
                    <div
                        key={idx}
                        ref={(el) => (stepsRef.current[idx] = el)}
                        className="bg-color-pink w-full h-full"
                    />
                ))}
            </div>

            {/* Overlay */}
            <div
                ref={overlayRef}
                className="overlay w-full h-screen bg-color-white fixed top-0 left-0 z-[99999] pointer-events-none"
            />

            {/* Page content */}
            <div>{children}</div>
        </div>
    );
};

export default PageTransition;
