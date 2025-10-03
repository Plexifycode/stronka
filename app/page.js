import Image from "next/image";
import AlbumPage from "./components/albumPage";
import albumCover1 from "@/public/assets/1-800_oswiecenie_cover.jpg";

export default function Home() {
  return (
    <AlbumPage imgsrc={albumCover1}/>
  );
}
