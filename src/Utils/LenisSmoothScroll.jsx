import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const LenisSmoothScroll = ({children}) => {
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.12,
            smooth: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return <div>{children}</div>;
};

export default LenisSmoothScroll;
