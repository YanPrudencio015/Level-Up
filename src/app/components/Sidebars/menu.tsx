
//icons

import { HomeIcon } from "@heroicons/react/24/outline"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

export default function MenuSidebar(){

    return(
        <div className="bg-[#151515]
            w-[13em]
            h-[90%]
            border-2
            z-40
            fixed
            top-[4em]
            flex
            flex-col
            items-center
            ">
                <ul className="h-full
                    w-full
                    flex
                    flex-col
                    items-center
                    justify-around
                    ">
                    <li className="flex
                        flex-row
                        items-center
                        justify-evenly
                        w-full
                        h-[3em]
                        bg-[#A91D3A]
                        ">
                        <button>
                            <HomeIcon className="size-7
                                text-[#fff]"/>
                        </button>
                        <p>Home</p>
                    </li>
                    <li className="flex
                        flex-row
                        items-center
                        justify-evenly
                        w-full
                        h-[3em]
                        bg-[#A91D3A]
                        ">
                        <button>
                            <MagnifyingGlassIcon className="size-7
                                text-[#fff]"/>
                        </button>
                        <input type="text" placeholder="Search"></input>
                    </li>
                </ul>
        </div>
    )
}