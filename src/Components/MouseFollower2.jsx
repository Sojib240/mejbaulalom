import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

const MouseFollower2 = ({ Projects, mouseScale }) => {
    const mouseFollowRef = useRef();
    const { pathname } = useLocation();

    useEffect(() => {
        // if (window.innerWidth <= 1024) return;

        const mouseFollow = mouseFollowRef.current;
        if (!mouseFollow) return;

        // because of this mouse is moving
        // Mouse tracking
        const xTo = gsap.quickTo(mouseFollow, "x", {
            duration: 0.8,
            ease: "power3.out",
        });
        const yTo = gsap.quickTo(mouseFollow, "y", {
            duration: 0.8,
            ease: "power3.out",
        });

        const handleMove = (e) => {
            xTo(e.clientX);
            yTo(e.clientY);
        };
        
        // Hover animations
        const handleProjectHover = () =>
            gsap.to(mouseFollow, { scale: 4.6, duration: 0.3, opacity: 1 });
        const handleOtherHover = () =>
            gsap.to(mouseFollow, { scale: 2.6, duration: 0.3, opacity: 1 });
        const resetScale = () =>
            gsap.to(mouseFollow, { scale: 1, duration: 0.3, opacity: 1 });

        // Add event listeners
        const projectEls = Projects.current.filter(Boolean) || [];
        const scaleEls = mouseScale.current.filter(Boolean) || [];

        projectEls.forEach((el) => {
            el.addEventListener("mouseenter", handleProjectHover);
            el.addEventListener("mouseleave", resetScale);
        });

        scaleEls.forEach((el) => {
            el.addEventListener("mouseenter", handleOtherHover);
            el.addEventListener("mouseleave", resetScale);
        });

        document.addEventListener("pointermove", handleMove);

        return () => {
            // because of this mouse is moving
            document.removeEventListener("pointermove", handleMove);

            projectEls.forEach((el) => {
                el.removeEventListener("mouseenter", handleProjectHover);
                el.removeEventListener("mouseleave", resetScale);
            });

            scaleEls.forEach((el) => {
                el.removeEventListener("mouseenter", handleOtherHover);
                el.removeEventListener("mouseleave", resetScale);
            });
        };
    }, [Projects, mouseScale, pathname]);

    return (
        <div
            ref={mouseFollowRef}
            className="fixed top-0 left-0 w-7 h-7 rounded-full pointer-events-none bg-color-yellow flex justify-center items-center p-[2px] z-[99999]"
            style={{ transform: "translate(-50%,-50%)" }}
        >
            <img
                className="w-full"
                src="/Images/Others/eye.gif"
                alt="Mouse Follower"
            />
        </div>
    );
};

export default MouseFollower2;

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
