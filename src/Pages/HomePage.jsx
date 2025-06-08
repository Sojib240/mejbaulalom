import React from "react";
import HeroSection from "../Components/HeroSection";
import WorkSection from "../Components/WorkSection";

const HomePage = ({ Projects}) => {
    document.title = "Mejbaul Alom ― Frontend Developer";
    return (
        <>
            <HeroSection
            />
            <WorkSection Projects={Projects} />
        </>
    );
};

export default HomePage;
