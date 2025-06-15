import React, { useContext } from "react";
import Marquee from "./Marquee";
import { NewsContext } from "../Utils/Context";

const WorkSection = ({ Projects }) => {
    const [projectData] = useContext(NewsContext);

    return (
        <section className="bg-color-black relative z-50 select-none">
            <Marquee texts={"• Some of my best works •"} bg={"bg-color-blue"} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-y-7 lg:gap-x-6 xl:gap-y-8 xl:gap-x-8 2xl:gap-x-10 2xl:gap-y-12 px-0 lg:px-6 xl:px-8 2xl:px-10 pt-8 pb-11 sm:py-11 lg:py-15 xl:py-18 2xl:py-20">
                {projectData.map((project, index) => (
                    <div
                        key={project.id}
                        className="col-span-1 project relative"
                    >
                        <a
                            href={index === 4 ? undefined : `${project.direction}`}
                            target="_blank"
                            ref={(el) => (Projects.current[index] = el)}
                            className={`aspect-[4/2.9] block overflow-hidden rounded-0 lg:rounded-[2vw] group relative 
        ${index === 4 ? "pointer-events-none cursor-not-allowed" : ""}`}
                        >
                            {index === 4 ? (
                                <div className="text-color-white bg-[#00000080] w-full h-full absolute top-0 left-0 right-0 bottom-0 z-20 flex justify-center items-center">
                                    <p className="uppercase font-font3 text-xl sm:text-2xl xl:text-2xl 2xl:text-3xl">Coming soon</p>
                                </div>
                            ) : null}
                            <img
                                className="w-full h-full object-cover overflow-hidden brightness-100 custom-easing2 
          group-hover:scale-[1.2] group-hover:brightness-50"
                                src={project.src}
                                alt={project.title}
                            />
                        </a>

                        <div className="text-color-white mt-5 lg:mt-4 2xl:mt-5 px-4 lg:px-0">
                            <h4 className="uppercase font-font3 text-xl sm:text-2xl xl:text-2xl 2xl:text-3xl">
                                {project.id}. {project.title}
                            </h4>
                            <p className="mt-0 sm:mt-1 font-font1 text-base sm:text-xl 2xl:text-2xl">
                                Web development ― {project.published}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WorkSection;
