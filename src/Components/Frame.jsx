import React from "react";

const Frame = () => {
    return (
        <div className="fixed top-0 left-0 right-[8vw] bottom-0 w-full h-screen z-[9999999] select-none pointer-events-none">
            <img
                className="w-full h-full"
                src="/Images/Others/frame.svg"
                alt=""
            />
        </div>
    );
};

export default Frame;
