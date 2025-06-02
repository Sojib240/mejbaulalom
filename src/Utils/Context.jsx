import React, { useState } from "react";
import { createContext } from "react";

export const NewsContext = createContext();

const Context = (props) => {
    const [projectData, setProjectData] = useState([
        {
            id: 1,
            title: "TeaFlow",
            published: "2025",
            src: "/Images/Thumbnails/IMAGE1.svg",
            videoSrc: "/Videos/tea-flow.mp4",
            image1: "/Images/Show-Case-Image/teaflow-1.jpg",
            image2: "/Images/Show-Case-Image/teaflow-2.jpg",
            image3: "/Images/Show-Case-Image/teaflow-3.jpg",
            image4: "/Images/Show-Case-Image/teaflow-4.jpg",
            image5: null,
            direction: "https://tea-flow.vercel.app/",
        },
        {
            id: 2,
            title: "Russian Mockups",
            published: "2025",
            src: "/Images/Thumbnails/IMAGE2.svg",
            videoSrc: "/Videos/Russian-Mockups-video.mp4",
            image1: "/Images/Show-Case-Image/russian-1.jpg",
            image2: "/Images/Show-Case-Image/russian-2.jpg",
            image3: "/Images/Show-Case-Image/russian-3.jpg",
            image4: "/Images/Show-Case-Image/russian-4.jpg",
            image5: null,
            direction: "https://russian-meckups.vercel.app/",
        },
        {
            id: 3,
            title: "The Cult",
            published: "2025",
            src: "/Images/Thumbnails/IMAGE3.svg",
            videoSrc: "/Videos/the-cult.mp4",
            image1: "/Images/Show-Case-Image/the-cult-1.jpg",
            image2: "/Images/Show-Case-Image/the-cult-2.jpg",
            image3: "/Images/Show-Case-Image/the-cult-3.jpg",
            image4: null,
            image5: null,
            direction: "https://the-cult-rust.vercel.app/",
        },
        {
            id: 4,
            title: "Future Goals",
            published: "2025",
            src: "/Images/Thumbnails/IMAGE4.svg",
            videoSrc: "/Videos/Future-Goals.mp4",
            image1: "/Images/Show-Case-Image/future-goals-2.jpg",
            image2: "/Images/Show-Case-Image/future-goals-1.png",
            image3: null,
            image4: null,
            image5: null,
            direction: "https://future-goals-gamma.vercel.app/",
        },
        {
            id: 5,
            title: "Batenka",
            published: "2025",
            src: "/Images/Thumbnails/IMAGE5.svg",
            videoSrc: "/Videos/the-cult.mp4",
            image1: null,
            image2: null,
            image3: null,
            image4: null,
            image5: null,
            direction: null,
        },
        {
            id: 5,
            title: "Batenka",
            published: "2025",
            src: "/Images/Thumbnails/IMAGE5.jpeg",
            videoSrc: "/Videos/the-cult.mp4",
            image1: null,
            image2: null,
            image3: null,
            image4: null,
            image5: null,
            direction: null,
        },
    ]);
    return (
        <NewsContext.Provider value={[projectData, setProjectData]}>
            {props.children}
        </NewsContext.Provider>
    );
};

export default Context;
