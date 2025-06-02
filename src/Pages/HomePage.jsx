import React from "react";
import PageTransition from "../Components/PageTransition";
import HeroSection from "../Components/HeroSection";
import WorkSection from "../Components/WorkSection";
import Navbar from "../Components/Navbar";
import Contact from "../Components/Contact";

const HomePage = () => {
    document.title = "Mejbaul Alom - Frontend Developer";
    return (
        // <PageTransition>
        <>
            <HeroSection />
            <WorkSection />
        </>
        // </PageTransition>
    );
};

export default HomePage;
