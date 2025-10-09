"use client"

import Image from "next/image"

const AlbumsList = [
  {
    id: 1,
    title: "Trójkąt Warszawski",
    year: 2015,
    coverArt: "/assets/trojkat_warszawski.jpg",
  },

  {
    id: 2,
    title: "Marmur",
    year: 2016,
    coverArt: "/assets/trojkat_warszawski.jpg",
  },

  {
    id: 3,
    title: "0.25mg",
    year: 2018,
    coverArt: "/assets/trojkat_warszawski.jpg",
  },

  {
    id: 4,
    title: "Café Belga",
    year: 2018,
    coverArt: "/assets/trojkat_warszawski.jpg",
  },

  {
    id: 5,
    title: "Jarmark",
    year: 2020,
    coverArt: "/assets/trojkat_warszawski.jpg",
  },

  {
    id: 6,
    title: "1-800-Oświecenie",
    year: 2023,
    coverArt: "/assets/trojkat_warszawski.jpg",
  },
]
const TimeLine = ({albumsData, setActiveIndex}) => {
  return (
      <div className="grid relative grid-rows-2 grid-cols-6 gap-x-10 xl:gap-y-[60%] lg:gap-y-[60%]  gap-y-[90%] items-center w-full justify-items-center">
        {albumsData.map((album, index) => (
            <Image onClick={() => {setActiveIndex(index+1)}} className="cursor-pointer hover:scale-105 transition rounded-md drop-shadow-xl mainPageImage" key={index} src={album["images"][0]["url"]} alt="" width={160} height={160}/>
        ))}

        <div className="absolute w-[86%] xl:bottom-[50%] lg:bottom-[50%] bottom-[60%] border-t-white border-t-2 h-auto flex items-center justify-between">
           <div className="w-[20%]  top-0  absolute h-10 border-x-white border-x-2"></div>
           <div className="w-[20%] left-2/5  top-0 absolute h-10 border-x-white border-x-2"></div>
           <div className="w-[20%] left-4/5 top-0 absolute h-10 border-x-white border-x-2"></div>
        </div>
       
        {AlbumsList.map((album) => (
          <div key={album.id} className="gap-2 flex flex-col">
            <h4 className="">{album.title}</h4>
            <p>{`(${album.year})`}</p>
          </div>
        ))}
      </div>


  )
}

export default TimeLine