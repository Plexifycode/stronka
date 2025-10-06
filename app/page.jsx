import AlbumPage from "../components/AlbumPage";
import Navigator from "../components/Navigator";
import MainPage from "../components/MainPage";


import albumCover1 from "@/public/assets/trojkat_warszawski_cover.jpg";
import albumCover2 from "@/public/assets/025mg_cover.jpg";
import albumCover3 from "@/public/assets/cafe_belga_cover.jpg";
import albumCover4 from "@/public/assets/jarmark_cover.jpg";
import albumCover5 from "@/public/assets/1-800_oswiecenie_cover.jpg";

import { albumData, getAlbumID, getAlbumTracks } from "./api/spotify/web";

export default function Home() {


    
    console.log(albumData)
    return (
        <div
            id="app"
            className="absolute left-0 top-0 grid auto-cols-[100vw] grid-rows-1 grid-flow-col h-full w-full overflow-visible transition-all duration-420 ease-in-out">
            <MainPage />
            <AlbumPage imgsrc={albumCover1} />
            <AlbumPage imgsrc={albumCover2} />
            <AlbumPage imgsrc={albumCover3} />
            <AlbumPage imgsrc={albumCover4} />
            <AlbumPage imgsrc={albumCover5} />

            <Navigator></Navigator>
        </div>
    );
}
