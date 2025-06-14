import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

const MouseFollower2 = () => {
    const mouseFollowRef = useRef();
    const { pathname } = useLocation();

    useEffect(() => {
        if (window.innerWidth <= 1024) return;

        const mouseFollow = mouseFollowRef.current;
        if (!mouseFollow) return;

        // because of this mouse is moving
        // Mouse tracking
        const xTo = gsap.quickTo(mouseFollow, "x", {
            duration: 4,
            ease: "power1.out",
        });
        const yTo = gsap.quickTo(mouseFollow, "y", {
            duration: 4,
            ease: "power1.out",
        });

        const handleMove = (e) => {
            xTo(e.clientX);
            yTo(e.clientY);
        };

        document.addEventListener("pointermove", handleMove);
        return () => {
            // because of this mouse is moving
            document.removeEventListener("pointermove", handleMove);
        };
    }, [pathname]);

    return (
        <div
            ref={mouseFollowRef}
            className="fixed -top-[11%] left-[0%] w-[20vw] select-none aspect-square rounded-full pointer-events-none z-40 hidden lg:block"
            style={{ transform: "translate(-50%,-50%)" }}
        >
            <img
                className="w-full"
                src="/Images/Others/D-SF.gif"
                alt="Mouse Follower"
            />
        </div>
    );
};

export default MouseFollower2;
