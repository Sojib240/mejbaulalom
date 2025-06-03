import React, { useContext } from "react";
import Marquee from "./Marquee";
import { NewsContext } from "../Utils/Context";
import { Link } from "react-router-dom";

const WorkSection = ({Projects}) => {
    const [projectData] = useContext(NewsContext);

    return (
        <section className="bg-color-black relative z-50">
            <Marquee texts={"• Some of my best works •"} bg={"bg-color-blue"} />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-10 lg:gap-y-8 lg:gap-x-6 xl:gap-y-10 xl:gap-x-8 2xl:gap-x-10 2xl:gap-y-12 px-0 lg:px-6 xl:px-8 2xl:px-10 py-11 lg:py-15 xl:py-18 2xl:py-20">
                {projectData.map((project, index) => (
                    <div
                        key={project.id}
                        className="col-span-1 project relative"
                    >
                        <Link
                            to={""}
                            ref={(el) => (Projects.current[index] = el)}
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
