import React, { useEffect, useRef, useState } from "react";

const MouseMovingStop = ({ startTracking = true }) => {
    const [isMoving, setIsMoving] = useState(true); // Assume active at start
    const timeoutRef = useRef(null);
    const delay = 30000;

    useEffect(() => {
        if (!startTracking) return;

        const handleActivity = () => {
            setIsMoving(true);
            clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
                setIsMoving(false);
            }, delay);
        };
        console.log("scrolling moving keydown touchmove");

        // Initial activity trigger
        handleActivity();

        const events = ["mousemove", "keydown", "scroll", "touchmove"];
        events.forEach((e) => window.addEventListener(e, handleActivity));
        return () => {
            events.forEach((e) =>
                window.removeEventListener(e, handleActivity)
            );
            clearTimeout(timeoutRef.current);
        };
    }, [startTracking]);

    return (
        <div
            className={`fixed top-0 w-full h-screen left-0 z-[99999999] custom-easing transition-opacity duration-500 bg-color-yellow ${
                isMoving
                    ? "opacity-0 pointer-events-none"
                    : "opacity-100 pointer-events-auto"
            }`}
        >
            <div className="bg-color-primary w-full h-full flex justify-center items-center relative ">
                <img className="" src="/Images/Others/eye.gif" alt="" />
            </div>
        </div>
    );
};

export default MouseMovingStop;
