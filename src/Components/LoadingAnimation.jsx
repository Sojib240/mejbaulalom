import React, { useEffect, useRef, useState } from "react";

const LoadingAnimation = () => {
    const mainDivRef = useRef(null);
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        const intV = setInterval(() => {
            setCounter((prevCounter) => {
                if (prevCounter >= 100) {
                    clearInterval(intV);
                    // Stop the interval when counter hits 100
                    return prevCounter;
                }
                return prevCounter + 4;
            });
        }, 80);

        return () => clearInterval(intV); // Cleanup on unmount
    }, []);

    

    return (
        <div
            ref={mainDivRef}
            className="flex justify-center items-center w-full h-screen bg-color-black fixed top-0 left-0 z-[999999] select-none"
        >
            <div className="overflow-hidden">
                <h2 className="text-color-white font-font4 text-[20vw]">
                    {counter}
                </h2>
            </div>
        </div>
    );
};

export default LoadingAnimation;
