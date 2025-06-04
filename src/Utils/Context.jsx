import React, { useState } from "react";
import { createContext } from "react";

export const NewsContext = createContext();

const Context = (props) => {
    const [projectData, setProjectData] = useState([
        {
            id: 1,
            title: "Tea Flow",
            published: "2024",
            src: "/Images/Thumbnails/IMAGE1.jpg",
            direction: "https://tea-flow.vercel.app/",
        },
        {
            id: 2,
            title: "Russian Mockups",
            published: "2025",
            src: "/Images/Thumbnails/IMAGE2.jpg",
            direction: "https://russian-meckups.vercel.app/",
        },
        {
            id: 3,
            title: "Future Goals",
            published: "2025",
            src: "/Images/Thumbnails/IMAGE3.jpg",
            direction: "https://future-goals-gamma.vercel.app/",
        },
        {
            id: 4,
            title: "Sapori e natura",
            published: "2025",
            src: "/Images/Thumbnails/IMAGE4.jpg",
            direction: "https://sapori-e-natura-henna.vercel.app/",
        },
        {
            id: 5,
            title: "Game of cups",
            published: "2025",
            src: "/Images/Thumbnails/IMAGE5.jpg",
            direction: "#",
        },
        {
            id: 6,
            title: "Lazeezarg",
            published: "2024",
            src: "/Images/Thumbnails/IMAGE6.png",
            direction: "https://lazeezarg.com/",
        },
    ]);
    return (
        <NewsContext.Provider value={[projectData, setProjectData]}>
            {props.children}
        </NewsContext.Provider>
    );
};

export default Context;
