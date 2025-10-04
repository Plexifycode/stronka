import AlbumPage from "./components/albumPage";
import Navigator from "./components/navigator";
import albumCover1 from "@/public/assets/1-800_oswiecenie_cover.jpg";
import albumCover2 from "@/public/assets/trojkat_warszawski_cover.jpg";

export default function Home() {
    return (
        <div id="app" className="grid auto-cols-[100vw] grid-rows-1 grid-flow-col h-full w-full overflow-hidden">
            <AlbumPage id="albumPage1" imgsrc={albumCover1} />
            <AlbumPage id="albumPage2" imgsrc={albumCover2}/>

            <Navigator></Navigator>
        </div>
    );
}
