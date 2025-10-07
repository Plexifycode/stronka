"use client"

import { useState} from "react";

import Navigator from "./navigator";
import PagesContainer from "./PagesContainer";

const Nigga = ({albumsData, featuredArtistsData}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [pageIndexes, setPageIndexes] = useState([]); 
     return (
    <>
        <PagesContainer albumsData={albumsData} featuredArtistsData={featuredArtistsData} activeIndex={activeIndex} setActiveIndex={setActiveIndex} setPageIndexes={setPageIndexes}/>

        <Navigator activeIndex={activeIndex} setActiveIndex={setActiveIndex} pageIndexes={pageIndexes}/>
    </>
  )
}

export default Nigga