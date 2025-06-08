import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

const MouseFollower = ({ Projects, mouseScale }) => {
    const mouseFollowRef = useRef();
    const viewDivRef = useRef();
    const scaleDivRef = useRef();
    const { pathname } = useLocation();

useEffect(() => {
    if (window.innerWidth <= 1024) return; // Prevents execution when width is 1024px or smaller

    const mouseFollow = mouseFollowRef.current;
    const viewDiv = viewDivRef.current;
    const scaleDiv = scaleDivRef.current;
    if (!mouseFollow || !viewDiv || !scaleDiv) return;

    // Smooth mouse tracking
    const xTo = gsap.quickTo(mouseFollow, "x", { duration: 0.8, ease: "power3.out" });
    const yTo = gsap.quickTo(mouseFollow, "y", { duration: 0.8, ease: "power3.out" });

    const handleMove = (e) => {
        xTo(e.clientX);
        yTo(e.clientY);
    };

    const showView = () => gsap.to(viewDiv, { scale: 1, opacity: 1, duration: 0.3 });
    const hideView = () => gsap.to(viewDiv, { scale: 0, opacity: 0, duration: 0.3 });

    const enlargeScaleDiv = () => gsap.to(scaleDiv, { scale: 4, duration: 0.3, ease: "power3.out" });
    const resetScaleDiv = () => gsap.to(scaleDiv, { scale: 1, duration: 0.3, ease: "power3.out" });

    // Attach hover effects to projects
    Projects.current.filter(Boolean).forEach((el) => {
        el.addEventListener("mouseenter", showView);
        el.addEventListener("mouseleave", hideView);
    });

    // Attach hover effects to mouseScale elements
    mouseScale.current.filter(Boolean).forEach((el) => {
        el.addEventListener("mouseenter", enlargeScaleDiv);
        el.addEventListener("mouseleave", resetScaleDiv);
    });

    document.addEventListener("pointermove", handleMove);

    return () => {
        Projects.current.filter(Boolean).forEach((el) => {
            el.removeEventListener("mouseenter", showView);
            el.removeEventListener("mouseleave", hideView);
        });

        mouseScale.current.filter(Boolean).forEach((el) => {
            el.removeEventListener("mouseenter", enlargeScaleDiv);
            el.removeEventListener("mouseleave", resetScaleDiv);
        });

        document.removeEventListener("pointermove", handleMove);
    };
}, [Projects, mouseScale, pathname]);

    return (
        <div
            ref={mouseFollowRef}
            className="fixed top-0 left-0 z-[99999] mix-blend-difference pointer-events-none select-none xl:w-28 w-26 h-26 xl:h-28 2xl:w-32 2xl:h-32 hidden lg:block"
            style={{ transform: "translate(-50%,-50%)" }}
        >
            <div
                ref={viewDivRef}
                className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-color-yellow text-color-white flex justify-center items-center font-font5 lg:text-base xl:text-lg 2xl:text-xl uppercase pointer-events-none z-50 opacity-0 scale-0 border"
            >
                <p>View</p>
            </div>
            <div
                ref={scaleDivRef}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full pointer-events-none z-40 bg-color-white border border-color-white"
            />
        </div>
    );
};

export default MouseFollower;

// useGSAP(() => {
//     if (!mouseGoBigDivs.current || mouseGoBigDivs.current.length === 0)
//         return;

//     const handleMouseEnter = () => {
//         gsap.to(outerRef.current, {
//             width: "100px",
//             height: "100px",
//             duration: 0.3,
//             ease: "power1.out",
//         });
//     };
//     const handleMouseLeave = () => {
//         gsap.to(outerRef.current, {
//             width: "48px",
//             height: "48px",
//             duration: 0.3,
//             ease: "power1.out",
//         });
//     };
//     mouseGoBigDivs.current.forEach((el) => {
//         if (el) {
//             el.addEventListener("mouseenter", handleMouseEnter);
//             el.addEventListener("mouseleave", handleMouseLeave);
//         }
//     });

//     return () => {
//         mouseGoBigDivs.current.forEach((el) => {
//             if (el) {
//                 el.removeEventListener("mouseenter", handleMouseEnter);
//                 el.removeEventListener("mouseleave", handleMouseLeave);
//             }
//         });
//     };
// }, [mouseGoBigDivs]);
