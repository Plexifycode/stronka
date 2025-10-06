"use client"

import React from 'react'

import TimeLine from './TimeLine'

const MainPage = () => {
  return (
    <div id='main-page' className='mx-[8%] text-center flex flex-col justify-center items-center gap-30 '>
      <div className="flex flex-col gap-6">
        <h1 className='text-[350%] font-extrabold'>DYSKOGRAFIA TACO HEMINGWAYA</h1>

        <h3 className='text-[150%] font-normal '>JAK ZAPISAŁ SIĘ W HISTORII POLSKIEGO RAPU</h3>
      </div>

      <TimeLine />

      <button onClick={() => {}}>
        {"(KLIKNIJ W OKŁADKĘ, ŻEBY PRZEJŚC DO ALBUMU)"}
      </button>
    </div>
  )
}

export default MainPage