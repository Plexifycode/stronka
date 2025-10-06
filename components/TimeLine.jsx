
import Image from "next/image"

import Cover1 from "@/public/assets/trojkat_warszawski_cover.jpg";

import Cover3 from "@/public/assets/cafe_belga_cover.jpg";
import Cover4 from "@/public/assets/025mg_cover.jpg";
import Cover5 from "@/public/assets/jarmark_cover.jpg";
import Cover6 from "@/public/assets/1-800_oswiecenie_cover.jpg";

const AlbumsList = [
  {
    id: 1,
    title: "Trójkąt Warszawski",
    year: 2015,
    coverArt: Cover1,
  },

  {
    id: 2,
    title: "Marmur",
    year: 2016,
    coverArt: Cover3,
  },

  {
    id: 3,
    title: "Café Belga",
    year: 2018,
    coverArt: Cover3,
  },

  {
    id: 4,
    title: "0.25 mg",
    year: 2018,
    coverArt: Cover4,
  },

  {
    id: 5,
    title: "Jarmark",
    year: 2020,
    coverArt: Cover5,
  },

  {
    id: 6,
    title: "1-800-Oświecenie",
    year: 2023,
    coverArt: Cover6,
  },
]
const TimeLine = () => {
  return (
    
      <div className="grid relative grid-rows-2 grid-cols-6 gap-x-10 xl:gap-y-[60%] lg:gap-y-[60%]  gap-y-[90%] items-center w-full justify-items-center">
        {AlbumsList.map((album) => (
            <Image className="cursor-pointer hover:scale-105 transition rounded-md drop-shadow-xl" key={album.id} src={album.coverArt} alt="" width={160} height={160}/>
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
