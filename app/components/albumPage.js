import { Calendar, Clock, Music } from "lucide-react";
import Image from "next/image";

export default function AlbumPage({
    albumInfo,
    albumDescription,
    featuredArtists,
}) {
    const albumCover = albumInfo["images"][0]["url"];
    const totalTracks = albumInfo["total_tracks"];
    const releaseDate = new Date(albumInfo["release_date"]).toLocaleDateString(
        "pl-PL"
    );
    const albumName = albumInfo["name"];
    const albumID = albumInfo["uri"].replace("spotify:album:", "");
    const iframeSrc = `https://open.spotify.com/embed/album/${albumID}?utm_source=generator&theme=0`;
    let durationMs = 0;
    for (let i = 0; i < albumInfo["tracks"]["items"].length; i++) {
        durationMs += albumInfo["tracks"]["items"][i]["duration_ms"];
    }
    durationMs = durationMs - (durationMs % 1000);
    let durationS = durationMs / 1000;
    let albumSeconds = durationS % 60;
    let albumMinutes = (durationS - albumSeconds) / 60;

    const featuredArtistsImages = [];
    const featuredArtistsNames = [];
    if (featuredArtists.length > 0) {
        for (let i = 0; i < featuredArtists.length; i++) {
            featuredArtistsImages.push(featuredArtists[i]["images"][0]["url"]);
            featuredArtistsNames.push(featuredArtists[i]["name"]);
        }
    }
    return (
        <div className="relative grid grid-cols-[40%_60%] grid-rows-2 gap-4 album-page w-full h-full px-48 py-12 font-[JetBrains_Mono]">
            <div
                className="grid grid-cols-2 grid-rows-1 grid-flow-col place-items-center overflow-hidden rounded-4xl relative border border-white/15 col-span-2 maskimage p-6"
                style={{ backgroundImage: `url(${albumCover})` }}>
                <div className="bg-black/50 z-0 w-full h-full absolute top-0 left-0 backdrop-blur-md" />
                <div className="relative flex gap-6 z-1 h-full w-full before:absolute before:w-[1px] before:h-[calc(100%+3rem)] before:-top-6 before:right-0 before:bg-white/15">
                    <div className="h-3/5 aspect-square">
                        <Image
                            src={albumCover}
                            width={640}
                            height={640}
                            alt="smaller album cover"
                            className="rounded-lg"></Image>
                    </div>
                    <div className="text-gray-300 h-3/5 grid grid-cols-1 grid-rows-[auto_1fr] gap-8 py-4">
                        <h1 className="text-white text-4xl font-extrabold">
                            {albumName}
                        </h1>
                        <div className="grid grid-cols-1 auto-rows-min gap-2 tracking-wider text-lg">
                            <h3 className="flex items-center gap-3">
                                <Calendar className="text-white" />
                                {releaseDate}
                            </h3>
                            <h3 className="flex items-center gap-3">
                                <Clock className="text-white" />
                                {albumMinutes}min. {albumSeconds}sek.
                            </h3>
                            <h3 className="flex items-center gap-3">
                                <Music className="text-white" />
                                {totalTracks} utworów
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="z-1 text-gray-300 text-center font-extralight px-12 text-lg">
                    {albumDescription}
                </div>
            </div>
            <div
                className="overflow-hidden rounded-4xl relative border-1 border-white/15 maskimage p-6"
                style={{ backgroundImage: `url(${albumCover})` }}>
                <div className="bg-black/50 z-0 w-full h-full absolute top-0 left-0 backdrop-blur-md" />
                {featuredArtists.length > 0 ? (
                    <div className="relative z-1 grid grid-cols-1 grid-rows-[2rem_1fr] gap-4 h-full place-items-center">
                        <h3 className="text-white font-extrabold text-center text-xl">
                            NA ALBUMIE WYSTĄPILI:
                        </h3>
                        <div className="flex w-full flex-wrap justify-center">
                            {featuredArtists.map((_, index) => (
                                <div
                                    key={index}
                                    className="grid grid-cols-1 grid-rows-[70%_30%] place-items-center w-1/4 aspect-square basis-1/4 shrink-0">
                                    <Image
                                        src={featuredArtistsImages[index]}
                                        alt="artist image"
                                        width={300}
                                        height={300}
                                        className="w-3/5 aspect-square object-cover rounded-full"
                                    />
                                    <h3 className="text-white text-center font-bold place-self-start w-full">
                                        {featuredArtistsNames[index].toUpperCase()}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="relative z-1 grid grid-cols-1 grid-rows-1 h-full place-items-center">
                        <h3 className="text-white font-extrabold text-center text-4xl">
                            BRAK FEATÓW NA ALBUMIE
                        </h3>
                    </div>
                )}
            </div>
            <div
                className="overflow-hidden rounded-4xl relative border-1 border-white/15 maskimage p-6"
                style={{ backgroundImage: `url(${albumCover})` }}>
                <div className="bg-black/50 z-1 w-full h-full absolute top-0 left-0 backdrop-blur-md" />
                <iframe
                    className="relative h-full rounded-lg z-1"
                    src={iframeSrc}
                    width="100%"
                    height="100%"
                    loading="lazy"></iframe>
            </div>
        </div>
    );
}
