import AlbumPage from "./components/AlbumPage";
import Navigator from "./components/Navigator";
import { albumsData } from "./api/spotify/web";

export default function Home() {
    console.log(albumsData);
    return (
        <div
            id="app"
            className="absolute left-0 top-0 grid auto-cols-[100vw] grid-rows-1 grid-flow-col h-full w-full overflow-visible transition-all duration-420 ease-in-out">
                
            {albumsData.map((_, index) => (
                <AlbumPage key={index} albumInfo={albumsData[index]} />
            ))}

            <Navigator></Navigator>
        </div>
    );
}
