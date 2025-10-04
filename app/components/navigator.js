"use client";

import { useEffect, useState } from "react";

const moveToPage = function (pageIndex) {
    const appRootElement = document.getElementById("app");
    // if (pageElement instanceof Element) {
    //     document.getElementById("app").scrollTo({left: pageElement.offsetLeft, top: 0, behavior: "smooth"})
    // }
    console.log(pageIndex);
    document.getElementById("app").style.left = `-${100*pageIndex}vw`

};

const Navigator = function () {
    const [albumPages, setAlbumPages] = useState(null);
    useEffect(() => {
        const elements = document.getElementsByClassName("album-page");
        const elementsArray = Array.from(elements);
        setAlbumPages(elementsArray);
    }, []);
    return (
        <div className="fixed grid grid-rows-1 auto-cols-fr grid-flow-col left-1/2 -translate-x-1/2 bottom-0 w-80 h-20 px-8 place-items-center bg-white/10 backdrop-blur-md rounded-t-2xl drop-shadow-[0_0_8px] drop-shadow-black/40">
            {albumPages &&
                albumPages.map((dziecko, index) => (
                    <div
                        key={index}
                        onClick={() => {moveToPage(index)}}
                        className="w-6 aspect-square rounded-4xl bg-white/40 hover:bg-white/60 hover:scale-140 hover:cursor-pointer active:bg-white/80 active:scale-120 active:blur-[1px] transition-all duration-250 active:duration-75"
                    />
                    
                ))}
        </div>
    );
};

export default Navigator;
