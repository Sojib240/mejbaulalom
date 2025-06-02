import React from "react";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import LenisSmoothScroll from "./Utils/LenisSmoothScroll";
import Contact from "./Components/Contact";
import AboutPage from "./Pages/AboutPage";
import { Route, Routes } from "react-router-dom";
import ScrollProgressBar from "./Components/ScrollProgressBar";
import MouseFollower from "./Components/MouseFollower";
import Bg from "./Components/Bg";
import MouseMovingStop from "./Components/MouseMovingStop";

const App = () => {
    return (
        <div>
            <div className="w-full h-screen fixed px-[18px] z-[999999999] pointer-events-none">
                <Bg />
            </div>
            <ScrollProgressBar />
            <MouseFollower />
            <MouseMovingStop />
            <LenisSmoothScroll>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about/" element={<AboutPage />} />
                </Routes>
                <Contact />
            </LenisSmoothScroll>
        </div>
    );
};

export default App;
