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
        console.log('scrolling moving keydown touchmove');
        

        // Initial activity trigger
        handleActivity();

        const events = ["mousemove", "keydown", "scroll", "touchmove"];
        events.forEach((e) => window.addEventListener(e, handleActivity));
        return () => {
            events.forEach((e) => window.removeEventListener(e, handleActivity));
            clearTimeout(timeoutRef.current);
        };
    }, [startTracking]);

    return (
        <div
            className={`fixed top-0 w-full h-screen left-0 z-[99999999] custom-easing transition-opacity duration-500 bg-color-white ${
                isMoving
                    ? "opacity-0 pointer-events-none"
                    : "opacity-100 pointer-events-auto"
            }`}
        >
            {/* <img className="w-full h-full object-cover" src="/Images/Others/paradice.gif" alt="" /> */}
            {/* <video loop autoPlay muted
                className="w-full h-full object-cover"
                src="/Videos/Animation Studio London - THE LINE Studio_3.mp4"
            ></video> */}
            {/* <p className="text-[8vw] text-center -tracking-[0.15vw] w-full text-color-primary font-font2 absolute top-1/2 left-1/2 -translate-1/2">
                Aim For The Haven
            </p> */}
            {/* <img className="w-auto absolute top-1/2 left-1/2 -translate-1/2" src="/Images/Others/aim.png" alt="" /> */}
            {/* <div className="w-full h-full absolute top-0 left-0 bg-color-primary">
                <img src="/Images/Others/.svg" alt="" />
            </div> */}
            <div className="bg-color-primary w-full h-full flex justify-center items-center relative">
                <img className="" src="/Images/Others/eye.gif" alt="" />
            </div>
        </div>
    );
};

export default MouseMovingStop;
