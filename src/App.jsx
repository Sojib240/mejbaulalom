import React, { useRef } from "react";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import LenisSmoothScroll from "./Utils/LenisSmoothScroll";
import Contact from "./Components/Contact";
import AboutPage from "./Pages/AboutPage";
import { Route, Routes } from "react-router-dom";
import ScrollProgressBar from "./Components/ScrollProgressBar";
import MouseFollower from "./Components/MouseFollower";
import Bg from "./Components/Bg";
import LoadingAnimation from "./Components/LoadingAnimation";
import Frame from "./Components/Frame";

const App = () => {
    const Projects = useRef([]);
    const mouseScale = useRef([]);
    return (
        <div>
            <div className="w-full h-screen fixed px-[18px] z-[999999999] pointer-events-none">
                <Bg />
            </div>
            <ScrollProgressBar />
            {/* <LoadingAnimation /> */}
            <MouseFollower Projects={Projects} mouseScale={mouseScale} />
            <LenisSmoothScroll>
                <Navbar mouseScale={mouseScale} />
                <Routes>
                    <Route
                        path="/"
                        element={<HomePage Projects={Projects} />}
                    />
                    <Route path="/about/" element={<AboutPage />} />
                </Routes>
                <Contact mouseScale={mouseScale} />
            </LenisSmoothScroll>
        </div>
    );
};

export default App;
