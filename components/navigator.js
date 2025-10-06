"use client";

import { useEffect, useState, useRef } from "react";

const Navigator = function () {
    const navButtons = useRef([]);
    const moveToPage = function (pageIndex) {
        const clickedButton = navButtons.current[pageIndex];
        if (clickedButton.classList.contains("nav-button-active")) {
            return;
        }
        document.getElementById("app").style.left = `-${100 * pageIndex}vw`;
        for (let i = 0; i < navButtons.current.length; i++) {
            const iNavButton = navButtons.current[i];
            if (iNavButton.classList.contains("nav-button-active")) {
                iNavButton.className =
                    "w-6 aspect-square z-5 rounded-full bg-white/40 hover:bg-white/60 hover:scale-140 hover:cursor-pointer active:bg-white/80 active:scale-120 active:blur-[1px] transition-all duration-250 active:duration-75";
            }
        }
        clickedButton.className =
            "w-6 aspect-square z-5 rounded-full bg-green-300/40 hover:bg-green-300/60 scale-130 nav-button-active hover:scale-140 hover:cursor-pointer active:bg-green-300/80 active:scale-120 active:blur-[1px] transition-all duration-250 active:duration-75";
    };

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
    const [pages, setPages] = useState(null);
    useEffect(() => {
        const elements = document.querySelectorAll(`.album-page, #main-page`)
        console.log(elements)
        const elementsArray = Array.from(elements);
        setPages(elementsArray);

        setTimeout(() => {
            moveToPage(0);
        }, 200);

        setTimeout(slideNavDown, 1500);
    }, []);
    return (
        <div
            ref={navElement}
            className="fixed z-999 grid grid-rows-1 auto-cols-fr grid-flow-col left-1/2 -translate-x-1/2 bottom-0 w-80 h-20 px-8 place-items-center bg-white/10 backdrop-blur-md rounded-t-2xl drop-shadow-[0_0_8px] drop-shadow-black/40 transition-all duration-300 ease"
            onMouseEnter={slideNavUp}
            onMouseLeave={slideNavDown}>
            {pages &&
                pages.map((_, index) => (
                    <div
                        key={index}
                        ref={(node) => {
                            if (node) {
                                navButtons.current[index] = node;
                            }
                        }}
                        onClick={() => {
                            moveToPage(index);
                        }}
                        className="w-6 aspect-square z-5 rounded-full bg-white/40 hover:bg-white/60 hover:scale-140 hover:cursor-pointer active:bg-white/80 active:scale-120 active:blur-[1px] transition-all duration-250 active:duration-75"
                    />
                ))}
            <div className="absolute -left-1/8 bottom-0 w-5/4 h-3/2" />
        </div>
    );
};

export default Navigator;
