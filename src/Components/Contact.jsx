import React from "react";
import { Link } from "react-router-dom";
import Marquee from "./Marquee";

const Contact = ({ mouseScale }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <section className="relative z-[99]  bg-color-white select-none">
            <Marquee
                texts={"• Let's talk about your next project •"}
                bg={"bg-color-pink"}
            />
            <div className="px-5 sm:px-6 md:px-8 lg:px-10">
                {" "}
                <div className="pt-15 pb-18 sm:pb-20 sm:pt-18 lg:pt-24 lg:pb-26 xl:pt-30 xl:pb-35 2xl:pt-36 2xl:pb-38">
                    <div className="">
                        <h2 className="leading-[110%] sm:leading-auto text-[40px] md:text-[7vw] font-font5 text-center mb-4 xl:mb-6">
                            COME TO SAY HELLO:
                        </h2>
                    </div>
                    <div className="flex justify-center flex-wrap  items-center gap-3 lg:gap-4 xl:gap-5">
                        {[
                            "Email",
                            "Facebook",
                            "Github",
                            "Linkedin",
                            "Whatsapp",
                        ].map((char, idx) => {
                            return (
                                <div
                                    key={idx}
                                    ref={(el) =>
                                        (mouseScale.current[4 * idx] = el)
                                    }
                                    className="border rounded-full px-4.5 lg:px-8 py-1.5 lg:py-2 w-max relative overflow-hidden group cursor-pointer"
                                >
                                    <p className="text-base lg:text-xl xl:text-3xl font-font1 group-hover:text-color-white custom-easing transition-colors z-20">
                                        {char}
                                    </p>
                                    <span className="w-full h-full scale-y-0 origin-bottom  group-hover:scale-y-100 custom-easing bg-color-black absolute top-0 left-0 rounded-none z-[-1]" />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="pb-4.5 sm:pb-5.5 md:pb-7">
                    <div className="text-center w-full flex justify-between items-center">
                        <div className="w-1/4 text-left">
                            <Link
                                to={"/"}
                                ref={(el) => (mouseScale.current[9] = el)}
                                className="logo font-font4 text-2xl uppercase whitespace-nowrap"
                            >
                                Mejbaul a.
                            </Link>
                        </div>
                        <div className="hidden sm:flex items-center justify-center gap-2.5 lg:gap-3 xl:gap-4 text-xs lg:text-sm xl:text-base font-font1 w-full">
                            Available for a full-time position
                            <div className="relative w-[8px] h-[8px] rounded-full bg-color-pink">
                                <span className="pulse absolute top-1/2 left-1/2 -translate-1/2 w-full h-full bg-color-pink rounded-full opacity-80" />
                            </div>
                        </div>
                        <div className="w-1/4 flex justify-end">
                            <button
                                onClick={scrollToTop}
                                ref={(el) => (mouseScale.current[10] = el)}
                                className="cursor-pointer w-4 xl:w-5"
                            >
                                <img
                                    className="w-full"
                                    src="/Images/Icons/back-to-top.svg"
                                    alt=""
                                />
                            </button>
                        </div>
                    </div>
                    <div className="sm:hidden flex items-center justify-center gap-2.5 lg:gap-3 xl:gap-4 text-xs lg:text-sm xl:text-base font-font1 w-full mt-2.5">
                        Available for a full-time position
                        <div className="relative w-1.5 h-1.5 sm:w-[8px] sm:h-[8px] rounded-full bg-color-pink">
                            <span className="pulse absolute top-1/2 left-1/2 -translate-1/2 w-full h-full bg-color-pink rounded-full opacity-80" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
