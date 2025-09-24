import { RssIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

// components
import Header from "./components/Header";
import MenuSidebar from "./components/Sidebars/menu";
export default function Home() {
  return (
   <div >
    <Header/>

    {/* redesign sidebar */}
    {/* <MenuSidebar/> */}

     {/* <Image
      src="/loading3.gif"
      alt="Picture of the author"
      width={500}
      height={500}
      
    /> */}
   </div>
  );
}
