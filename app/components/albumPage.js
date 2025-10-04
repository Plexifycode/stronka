import Image from "next/image";

export default function AlbumPage({ imgsrc, id }) {
    return (
        <div id={id} className="grid grid-cols-[40%_60%] grid-rows-2 gap-4 album-page w-full h-full px-48 py-12">
            <div
                className="overflow-hidden  rounded-4xl relative border-1 border-white/15 col-span-2 maskimage"
                style={{ backgroundImage: `url(${imgsrc.src})` }}>
                <div className="bg-black/70 w-full h-full absolute top-0 left-0 backdrop-blur-md" />
            </div>
            <div
                className="overflow-hidden  rounded-4xl relative border-1 border-white/15 maskimage"
                style={{ backgroundImage: `url(${imgsrc.src})` }}>
                <div className="bg-black/70 w-full h-full absolute top-0 left-0 backdrop-blur-md" />
            </div>
            <div
                className="overflow-hidden  rounded-4xl relative border-1 border-white/15 maskimage"
                style={{ backgroundImage: `url(${imgsrc.src})` }}>
                <div className="bg-black/70 w-full h-full absolute top-0 left-0 backdrop-blur-md" />
            </div>
        </div>
    );
}
