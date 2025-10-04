import Image from "next/image";

export default function AlbumPage({ imgsrc }) {
    return (
        <div className="grid grid-cols-[40%_60%] grid-rows-2 gap-4 album-page mx-48 py-12">
            <div className="overflow-hidden  rounded-4xl relative border-1 border-white/15 col-span-2 maskimage">
                <div className="bg-black/50 w-full h-full absolute top-0 left-0 backdrop-blur-md" />
            </div>
            <div className="overflow-hidden  rounded-4xl relative border-1 border-white/15 maskimage">
                <div className="bg-black/50 w-full h-full absolute top-0 left-0 backdrop-blur-md" />
            </div>
            <div className="overflow-hidden  rounded-4xl relative border-1 border-white/15 maskimage">
                <div className="bg-black/50 w-full h-full absolute top-0 left-0 backdrop-blur-md" />
            </div>
        </div>
    );
}
