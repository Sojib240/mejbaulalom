import { useEffect, useRef } from "react";

const ScrollProgressBar = () => {
    const barRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            const scrollProgress = scrollTop / docHeight;
            if (barRef.current) {
                barRef.current.style.transform = `scaleY(${scrollProgress})`;
            }
        };

        window.addEventListener("scroll", handleScroll);

        // 👇 Call it once initially
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <span
            ref={barRef}
            className="w-[3px] sm:w-1 md:w-[5px] h-screen bg-color-pink fixed bottom-0 md:top-0 md:left-0 z-[9999] origin-top"
        />
    );
};

export default ScrollProgressBar;
