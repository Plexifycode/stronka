import Nigga from "./components/Nigga";

import { albumsData, featuredArtistsData } from "@/app/api/spotify/web";

export default function Home() {

    return (
       <>
            <Nigga albumsData={albumsData} featuredArtistsData={featuredArtistsData}/>
        </>
    );
}