import Image from "next/image";
import calendar from "@/public/assets/icons/calendar.svg";
import clock from "@/public/assets/icons/clock.svg";
import music_note from "@/public/assets/icons/music_note.svg";

export default function AlbumPage({ imgsrc }) {
    return (
        <div className="relative grid grid-cols-[40%_60%] grid-rows-2 gap-4 album-page w-full h-full px-48 py-12 font-[JetBrains_Mono]">
            <div
                className="grid grid-cols-[60%_40%] grid-rows-1 grid-flow-col place-items-center overflow-hidden rounded-4xl relative border border-white/15 col-span-2 maskimage p-6"
                style={{ backgroundImage: `url(${imgsrc.src})` }}>
                <div className="bg-black/50 z-0 w-full h-full absolute top-0 left-0 backdrop-blur-md" />
                <div className="relative flex gap-6 z-1 h-full w-full before:absolute before:w-[1px] before:h-[calc(100%+3rem)] before:-top-6 before:right-0 before:bg-white/15">
                    <div className="h-3/5 aspect-square">
                        <Image
                            src={imgsrc}
                            width={640}
                            height={640}
                            alt="smaller album cover"
                            className="rounded-lg"></Image>
                    </div>
                    <div className="text-gray-300 h-3/5 grid grid-cols-1 grid-rows-[auto_1fr] gap-8 py-4">
                        <h1 className="text-white text-4xl font-extrabold">
                            1-800-Oświecenie
                        </h1>
                        <div className="grid grid-cols-1 auto-rows-min gap-2 tracking-wider text-lg">
                            <h3 className="flex gap-3">
                                <Image src={calendar} alt="calendar"></Image>
                                21.09.2023
                            </h3>
                            <h3 className="flex gap-3">
                                <Image src={clock} alt="clock"></Image>52min.
                                42sek.
                            </h3>
                            <h3 className="flex gap-3">
                                <Image
                                    src={music_note}
                                    alt="music note"></Image>
                                12 tracków
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="z-1 text-gray-300 text-center font-extralight px-12 text-lg">
                    “1-800-OŚWIECENIE” to album konceptualny, ale nie w
                    charakterze fabularnym, tak jak było to w przypadku
                    wcześniejszego “Marmuru”. Na nową płytę składa się 15
                    premierowych utworów, a sam album w zaledwie dobę po starcie
                    preorderu osiągnął złoty nakład (ponad 15 tys. sprzedanych
                    egzemplarzy).
                </div>
            </div>
            <div
                className="overflow-hidden rounded-4xl relative border-1 border-white/15 maskimage p-6"
                style={{ backgroundImage: `url(${imgsrc.src})` }}>
                <div className="bg-black/50 z-0 w-full h-full absolute top-0 left-0 backdrop-blur-md" />
            </div>
            <div
                className="overflow-hidden rounded-4xl relative border-1 border-white/15 maskimage p-6"
                style={{ backgroundImage: `url(${imgsrc.src})` }}>
                <div className="bg-black/50 z-1 w-full h-full absolute top-0 left-0 backdrop-blur-md" />
                <iframe
                    className="relative rounded-lg z-1"
                    data-testid="embed-iframe"
                    src="https://open.spotify.com/embed/album/2ItrzcwLrygr4I6wlZ3HGU?utm_source=generator&theme=0"
                    width="100%"
                    height="100%"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"></iframe>
            </div>
        </div>
    );
}
