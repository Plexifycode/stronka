import Wrapper from "./components/Wrapper";

import { albumsData, featuredArtistsData } from "@/app/api/spotify/web";

export default function Home() {

    return (
       <>
            <Wrapper albumsData={albumsData} featuredArtistsData={featuredArtistsData}/>
        </>
    );
}