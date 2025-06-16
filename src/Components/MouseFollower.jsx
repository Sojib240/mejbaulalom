import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

const MouseFollower = ({ Projects, mouseScale }) => {
    const scaleDivRef = useRef();
    const viewDivRef = useRef();
    const { pathname } = useLocation();

    useEffect(() => {
        if (window.innerWidth <= 1024) return;
        if (!scaleDivRef.current || !viewDivRef.current) return;    

        // Smooth mouse tracking
        const xTo = gsap.quickTo([scaleDivRef.current, viewDivRef.current], "x", {
            duration: 0.8,
            ease: "power3.out",
        });
        const yTo = gsap.quickTo([scaleDivRef.current, viewDivRef.current], "y", {
            duration: 0.8,
            ease: "power3.out",
        });

        const handleMove = (e) => {
            xTo(e.clientX);
            yTo(e.clientY);
        };

        // scale mouse follower
        const enlargeScaleDiv = () =>
            gsap.to(scaleDivRef.current, { scale: 4, duration: 0.4, ease: "power3.out" });
        const resetScaleDiv = () =>
            gsap.to(scaleDivRef.current, { scale: 1, duration: 0.4, ease: "power3.out" });

        // scale view div
        const showView = () =>
            gsap.to(viewDivRef.current, { scale: 1, opacity: 1, duration: 0.4 });
        const hideView = () =>
            gsap.to(viewDivRef.current, { scale: 0, opacity: 0, duration: 0.4 });

        // scale view div
        Projects.current.filter(Boolean).forEach((el) => {
            el.addEventListener("mouseenter", showView);
            el.addEventListener("mouseleave", hideView);
        });

        // scale mouse follower
        mouseScale.current.filter(Boolean).forEach((el) => {
            el.addEventListener("mouseenter", enlargeScaleDiv);
            el.addEventListener("mouseleave", resetScaleDiv);
        });

        // for mouse move
        document.addEventListener("pointermove", handleMove);

        return () => {
            // remove scale from view div
            Projects.current.filter(Boolean).forEach((el) => {
                el.removeEventListener("mouseenter", showView);
                el.removeEventListener("mouseleave", hideView);
            });
            // remove scale mouse follower
            mouseScale.current.filter(Boolean).forEach((el) => {
                el.removeEventListener("mouseenter", enlargeScaleDiv);
                el.removeEventListener("mouseleave", resetScaleDiv);
            });
            // remove mouse move
            document.removeEventListener("pointermove", handleMove);
        };
    }, [Projects, mouseScale, pathname]);

    return (
        <>
            <div
                ref={scaleDivRef}
                className="fixed top-0 left-0 w-4 h-4 xl:w-4.5 xl:h-4.5 2xl:w-5 2xl:h-5 rounded-full pointer-events-none z-[9999] bg-color-white mix-blend-difference hidden lg:block"
                style={{ transform: "translate(-50%,-50%)" }}
            />
            <div
                ref={viewDivRef}
                className="fixed top-0 left-0 -translate-1/2 z-[99999] pointer-events-none select-none w-26 xl:w-28 2xl:w-32 h-26 xl:h-28 2xl:h-32 hidden bg-color-yellow lg:flex justify-center items-center rounded-full font-font5 lg:text-base xl:text-lg 2xl:text-xl uppercase opacity-0 scale-0 origin-center"
                style={{ transform: "translate(-50%,-50%)" }}
            >
                <p>Visit</p>
            </div>
        </>
    );
};

export default MouseFollower;
