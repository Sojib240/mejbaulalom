import React, { useContext, useRef } from "react";
import Marquee from "./Marquee";
import { NewsContext } from "../Utils/Context";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

const WorkSection = () => {
    const [projectData] = useContext(NewsContext);

    const viewRef = useRef(null);
    const containerRef = useRef([]);

useGSAP(() => {
    const view = viewRef.current;
    if (!view) return;

    const offset = 64;

    const xTo = gsap.quickTo(view, "x", {
        duration: 0.5,
        ease: "power3.out",
    });
    const yTo = gsap.quickTo(view, "y", {
        duration: 0.5,
        ease: "power3.out",
    });

    const show = () =>
        gsap.to(view, { opacity: 1, scale: 1, duration: 0.4 });
    const hide = () =>
        gsap.to(view, { opacity: 0, scale: 0, duration: 0.4 });

    const handleMouseEnter = (e) => {
        const x = e.clientX - offset;
        const y = e.clientY - offset;
        gsap.set(view, { x, y });
        xTo(x);
        yTo(y);
        show();
    };

    const handleMouseMove = (e) => {
        xTo(e.clientX - offset);
        yTo(e.clientY - offset);
    };

    const handleMouseLeave = () => hide();

    const containers = containerRef.current.filter(Boolean);
    containers.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mousemove", handleMouseMove);
        el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
        containers.forEach((el) => {
            el.removeEventListener("mouseenter", handleMouseEnter);
            el.removeEventListener("mousemove", handleMouseMove);
            el.removeEventListener("mouseleave", handleMouseLeave);
        });
    };
}, [projectData]);


    return (
        <section className="bg-color-black relative z-50">
            {/* ✅ Fixed: Floating element outside the grid */}
            <div
                ref={viewRef}
                className="fixed top-0 left-0 w-32 h-32 rounded-full bg-color-yellow text-color-black flex justify-center items-center font-font5 text-xl uppercase pointer-events-none z-[999999] opacity-0 scale-0 origin-center"
            >
                <p>View</p>
            </div>

            <Marquee texts={"• Some of my best works •"} bg={"bg-color-blue"} />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-10 lg:gap-y-8 lg:gap-x-6 xl:gap-y-10 xl:gap-x-8 2xl:gap-x-10 2xl:gap-y-12 px-0 lg:px-6 xl:px-8 2xl:px-10 py-12 lg:py-15 xl:py-18 2xl:py-20">
                {projectData.map((project, index) => (
                    <div
                        key={project.id}
                        className="col-span-1 project relative"
                    >
                        <Link
                            to={""}
                            ref={(el) => (containerRef.current[index] = el)}
                            className="aspect-[4/2.9] block"
                        >
                            <img
                                className="w-full h-full object-cover overflow-hidden rounded-0 lg:rounded-[2vw]"
                                src={project.src}
                                alt={project.title}
                            />
                        </Link>
                        <div className="text-color-white font-font3 uppercase text-3xl mt-5 px-5 lg:px-0">
                            <h4>{project.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WorkSection;

// const handleMouseEnter = (e, containerRef, viewRef) => {
//     const rect = containerRef.current.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     // ✅ Correct gsap.set usage
//     gsap.set(viewRef.current, {
//         x: x,
//         y: y,
//     });
//     gsap.to(viewRef.current, {
//         scale: 1,
//         duration: 0.5,
//         ease: "power1.out",
//     });
// };

// const handleMouseMove = (e, containerRef, viewRef) => {
//     const rect = containerRef.current.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     gsap.to(viewRef.current, {
//         x: x,
//         y: y,
//         duration: 0.5,
//         ease: "power1.out",
//     });
// };

// const handleMouseLeave = (viewRef) => {
//     gsap.to(viewRef.current, {
//         scale: 0,
//         duration: 0.5,
//         ease: "power1.out",
//     });
// };

// const viewRef = useRef(null);
// const containerRef = useRef(null);
// onMouseEnter={(e) =>
//     handleMouseEnter(e, containerRef, viewRef)
// }
// onMouseMove={(e) =>
//     handleMouseMove(e, containerRef, viewRef)
// }
// onMouseLeave={() => handleMouseLeave(viewRef)}
