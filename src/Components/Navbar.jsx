import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = ({ mouseScale }) => {
    const [navbarScroll, setNavbarScroll] = useState(true);
    const [showOnLoad, setShowOnLoad] = useState(true);
    const { pathname } = useLocation();

    useEffect(() => {
        // Force visible on initial load
        const timer = setTimeout(() => {
            setShowOnLoad(false);
        }, 500); // Show for 500ms

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (showOnLoad) return; // Skip scroll listener during initial load

        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                setNavbarScroll(false); // scrolling down → hide
            } else {
                setNavbarScroll(true); // scrolling up → show
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [showOnLoad]);

    useGSAP(() => {
        if (!mouseScale.current) return;

        mouseScale.current.slice(1, 4).forEach((targets) => {
            const navTl = gsap.timeline();
            navTl.fromTo(
                targets,
                {
                    y: "100%",
                },
                {
                    y: 0,
                    delay: 1.28,
                    duration: 0.4,
                }
            );
        });
    }, [pathname]);

    return (
        <>
            <section
                id="back-to-top"
                className={`fixed top-0 h-20 md:h-22 flex justify-between text-color-white items-center w-full z-[9999] px-5 sm:px-6 md:px-8 lg:px-10 custom-easing mix-blend-difference ${
                    navbarScroll || showOnLoad
                        ? "translate-y-0"
                        : "-translate-y-full"
                }`}
            >
                <div className="w-auto md:w-1/3">
                    <div className="overflow-hidden">
                        <Link
                            to={"/"}
                            ref={(el) => (mouseScale.current[1] = el)}
                            className="logo font-font4 text-xl md:text-[22px] xl:text-2xl uppercase whitespace-nowrap select-none relative inline-block"
                        >
                            Mejbaul ― a.
                        </Link>
                    </div>
                </div>

                <div className="w-auto md:w-1/3  select-none">
                    <div className="overflow-hidden flex justify-end md:justify-center items-center">
                        <Link
                            to="/about/"
                            ref={(el) => (mouseScale.current[2] = el)}
                            className="cursor-pointer custom-easing font-font2 text-sm lg:text-base xl:text-lg relative pl-4 group py-1 select-none"
                        >
                            <span
                                className={`w-1.5 h-1.5 bg-color-white rounded-full absolute top-1/2 left-0 -translate-y-1/2 custom-easing group-hover:scale-[2.3]`}
                            />
                            <span className="block leading-[100%]">About</span>
                        </Link>
                    </div>
                </div>
                <div className="w-auto md:w-1/3 hidden md:block">
                    <div className="overflow-hidden flex justify-end items-center">
                        <button
                            onClick={() => {
                                window.location.href =
                                    "mailto:sojib240320@gmail.com?subject=Hello&body=I%20want%20to%20connect%20with%20you.";
                            }}
                            ref={(el) => (mouseScale.current[3] = el)}
                            className="cursor-pointer custom-easing font-font2 text-sm lg:text-base xl:text-lg relative pl-4 group py-1 select-none"
                        >
                            <span
                                className={`w-1.5 h-1.5 bg-color-white rounded-full absolute top-1/2 left-0 -translate-y-1/2 group-hover:scale-[2.3] custom-easing`}
                            />
                            <span className="block leading-[100%]">
                                Get in touch
                            </span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Navbar;
