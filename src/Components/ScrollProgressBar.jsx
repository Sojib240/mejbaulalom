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
            className="w-1 md:w-1.5 h-screen bg-color-pink fixed top-0 right-0 z-[999] origin-top"
        />
    );
};

export default ScrollProgressBar;
