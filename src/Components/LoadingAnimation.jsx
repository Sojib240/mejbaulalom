import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const LoadingAnimation = ({ setAnimationFinished }) => {
    const { pathname } = useLocation();

    const landingDiv1 = useRef(null);
    const landingDiv2 = useRef(null);
    const landingDiv3 = useRef(null);

    useEffect(() => {
        window.scroll(0, 0);
        if (
            !landingDiv1.current ||
            !landingDiv2.current ||
            !landingDiv3.current
        )
            return;

        const tl = gsap.timeline({ delay: 0.5 });

        tl.to(
            landingDiv1.current,
            { scaleY: 0, duration: 0.7, ease: "power2.inOut" },
            "start"
        )
            .to(
                landingDiv2.current,
                { scaleY: 0, duration: 0.9, ease: "power2.inOut" },
                "start"
            )
            .to(
                landingDiv3.current,
                { scaleY: 0, duration: 1.1, ease: "power2.inOut" },
                "start"
            );

        gsap.set(
            [landingDiv1.current, landingDiv2.current, landingDiv3.current],
            { scaleY: 1 }
        );
    }, [pathname]);

    return (
        <>
            <div
                ref={landingDiv1}
                className="w-full h-screen bg-color-blue z-[999999] fixed top-0 left-0 scale-y-100 origin-top"
            />
            <div
                ref={landingDiv2}
                className="w-full h-screen bg-color-pink z-[999998] fixed top-0 left-0 origin-top"
            />
            <div
                ref={landingDiv3}
                className="w-full h-screen bg-color-yellow z-[999997] fixed top-0 left-0 origin-top"
            />
        </>
    );
};

export default LoadingAnimation;
