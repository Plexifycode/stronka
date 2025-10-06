"use client"

import { useState } from 'react'


const Navigator = ({activeIndex, setActiveIndex, pageIndexes}) => {
   const [isNavbarHidden, setIsNavbarHidden] = useState(true);

  const slideNavUp = () => {
    setIsNavbarHidden(false);
  }

  const slideNavDown = () => {
    setIsNavbarHidden(true);
  }
  return (
    <div 
      onMouseEnter={slideNavUp}
      onMouseLeave={slideNavDown}
      className={`
         
      grid grid-rows-1 grid-flow-col auto-cols-[3rem] fixed left-1/2 -translate-x-1/2 -bottom-2 z-999  drop-shadow-[0_0_8px] drop-shadow-black/40 backdrop-blur-md transition-all duration-300 h-20 px-8 place-items-center bg-white/10 rounded-t-2xl
      ${isNavbarHidden ? "translate-y-3/4" : ""}
      
      `}>
        {pageIndexes.map((_, index) => (
          <div className={`
            ${activeIndex !== index ? "bg-white/40 hover:bg-white/60 active:bg-white/80 active:scale-120 " : "bg-green-300/40 hover:bg-green-300/60 scale-130 active:bg-green-300/80"}
            w-6 aspect-square z-5 rounded-full  hover:scale-140 hover:cursor-pointer active:blur-[1px]  transition-all duration-250 active:duration-75
            `}
          key={index} 
          
          onClick={() => { setActiveIndex(index) }} >
            
          </div>
        ))}
    </div>
  )
}

export default Navigator