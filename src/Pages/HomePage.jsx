import React from "react";
import PageTransition from "../Components/PageTransition";
import HeroSection from "../Components/HeroSection";
import WorkSection from "../Components/WorkSection";

const HomePage = ({Projects}) => {
    document.title = "Mejbaul Alom - Frontend Developer";
    return (
        // <PageTransition>
        <>
            <HeroSection />
            <WorkSection Projects={Projects} />
        </>
        // </PageTransition>
    );
};

export default HomePage;
