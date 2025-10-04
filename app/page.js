import AlbumPage from "./components/AlbumPage";
import Navigator from "./components/Navigator";
import albumCover1 from "@/public/assets/trojkat_warszawski_cover.jpg";
import albumCover2 from "@/public/assets/025mg_cover.jpg";
import albumCover3 from "@/public/assets/cafe_belga_cover.jpg";
import albumCover4 from "@/public/assets/jarmark_cover.jpg";
import albumCover5 from "@/public/assets/1-800_oswiecenie_cover.jpg";

export default function Home() {
    return (
        <div id="app" className="absolute left-0 top-0 grid auto-cols-[100vw] grid-rows-1 grid-flow-col h-full w-full overflow-visible transition-all duration-420 ease-in-out">
            <AlbumPage id="albumPage1" imgsrc={albumCover1} />
            <AlbumPage id="albumPage2" imgsrc={albumCover2} />
            <AlbumPage id="albumPage3" imgsrc={albumCover3} />
            <AlbumPage id="albumPage4" imgsrc={albumCover4} />
            <AlbumPage id="albumPage5" imgsrc={albumCover5} />

            <Navigator></Navigator>
        </div>
    );
}
