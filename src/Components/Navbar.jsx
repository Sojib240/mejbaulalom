import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import PageAnimation from "./PageAnimation";
import { useLocation } from "react-router-dom";

const Navbar = ({ mouseScale }) => {
    const [navbarScroll, setNavbarScroll] = useState(true);
    const [showOnLoad, setShowOnLoad] = useState(true);

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

    const [animationKey, setAnimationKey] = useState(false);

    const triggerAnimation = () => {
        // Update key to force re-mount
        setAnimationKey(true);
    };
    const { pathname } = useLocation();
    return (
        <>
            {/* <PageAnimation animationKey={animationKey} /> */}
            <div
                id="back-to-top"
                className={`fixed top-0 h-20 md:h-22 flex justify-between ${
                    pathname == "/about/"
                        ? "text-color-white"
                        : "text-color-black"
                } items-center w-full z-[9999] px-5 sm:px-6 md:px-8 lg:px-10 text-color-secondary custom-easing transition-transform duration-500 ${
                    navbarScroll || showOnLoad
                        ? "translate-y-0"
                        : "-translate-y-full"
                }`}
            >
                <div className="w-1/3">
                    <Link
                        to={"/"}
                        ref={(el) => (mouseScale.current[1] = el)}
                        onClick={triggerAnimation}
                        className="logo font-font4 text-xl md:text-[22px] xl:text-2xl uppercase whitespace-nowrap select-none"
                    >
                        Mejbaul a.
                    </Link>
                </div>

                <div className="w-auto md:w-1/3 flex justify-end md:justify-center items-center">
                    <NavLink
                        to="/about/"
                        ref={(el) => (mouseScale.current[2] = el)}
                        onClick={triggerAnimation}
                        className="cursor-pointer custom-easing font-font2 text-sm lg:text-base xl:text-lg relative pl-4 group py-1 select-none"
                    >
                        {({ isActive }) => (
                            <>
                                <span
                                    className={`w-1.5 h-1.5 ${
                                        pathname == "/about/"
                                            ? "bg-color-white"
                                            : "bg-color-black"
                                    } rounded-full absolute top-1/2 left-0 -translate-y-1/2 custom-easing ${
                                        isActive
                                            ? "scale-[2.3]"
                                            : "group-hover:scale-[2.3]"
                                    }`}
                                />
                                <span className="block leading-[100%]">
                                    About
                                </span>
                            </>
                        )}
                    </NavLink>
                </div>
                <div className="w-auto md:w-1/3 hidden md:flex justify-end items-center">
                    <button
                        onClick={triggerAnimation}
                        ref={(el) => (mouseScale.current[3] = el)}
                        className="cursor-pointer custom-easing font-font2 text-sm lg:text-base xl:text-lg relative pl-4 group py-1 select-none"
                    >
                        <span
                            className={`w-1.5 h-1.5 bg-color-black rounded-full absolute top-1/2 left-0 -translate-y-1/2 group-hover:scale-[2.3] custom-easing ${
                                pathname == "/about/"
                                    ? "bg-color-white"
                                    : "bg-color-black"
                            }`}
                        />
                        <span className="block leading-[100%]">Contact</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
