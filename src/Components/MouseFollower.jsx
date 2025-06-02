import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const MouseFollower = () => {
    const outerRef = useRef();

    useGSAP(() => {
        const xTo = gsap.quickTo(outerRef.current, "x", {
            duration: 0.3,
            ease: "power2.out",
        });
        const yTo = gsap.quickTo(outerRef.current, "y", {
            duration: 0.3,
            ease: "power2.out",
        });

        const handleMove = (e) => {
            xTo(e.clientX);
            yTo(e.clientY);
        };

        document.addEventListener("pointermove", handleMove);
        return () => document.removeEventListener("pointermove", handleMove);
    }, []);

    return (
        <div
            ref={outerRef}
            className="fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-[999] mix-blend-difference bg-color-white"
            style={{ transform: "translate(-50%, -50%)" }}
        />
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
