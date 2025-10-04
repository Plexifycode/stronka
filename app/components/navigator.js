"use client";

import { useEffect, useState, useRef } from "react";

const moveToPage = function (pageIndex) {
    document.getElementById("app").style.left = `-${100 * pageIndex}vw`;
};

const Navigator = function () {
    const navElement = useRef(null);
    const slideNavUp = function () {
        if (!navElement.current.classList.contains("translate-y-3/4")) {
            return;
        }
        navElement.current.classList.remove("translate-y-3/4");
    };
    const slideNavDown = function () {
        if (navElement.current.classList.contains("translate-y-3/4")) {
            return;
        }
        navElement.current.classList.add("translate-y-3/4");
    };
    const [albumPages, setAlbumPages] = useState(null);
    useEffect(() => {
        const elements = document.getElementsByClassName("album-page");
        const elementsArray = Array.from(elements);
        setAlbumPages(elementsArray);

        setTimeout(slideNavDown, 1000)
    }, []);
    return (
        
        <div
            ref={navElement}
            className="fixed grid grid-rows-1 auto-cols-fr grid-flow-col left-1/2 -translate-x-1/2 bottom-0 w-80 h-20 px-8 place-items-center bg-white/10 backdrop-blur-md rounded-t-2xl drop-shadow-[0_0_8px] drop-shadow-black/40 transition-all duration-300 ease"
            onMouseEnter={slideNavUp}
            onMouseLeave={slideNavDown}>
            {albumPages &&
                albumPages.map((dziecko, index) => (
                    <div
                        key={index}
                        onClick={() => {
                            moveToPage(index);
                        }}
                        className="w-6 aspect-square z-5 rounded-full bg-white/40 hover:bg-white/60 hover:scale-140 hover:cursor-pointer active:bg-white/80 active:scale-120 active:blur-[1px] transition-all duration-250 active:duration-75"
                    />
                ))}
            <div className="absolute -left-1/8 bottom-0 w-5/4 h-3/2 bg-red-500/0" />
        </div>
    );
};

export default Navigator;
