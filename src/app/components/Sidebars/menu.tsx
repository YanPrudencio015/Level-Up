'use client'
//icons
import { Squares2X2Icon } from "@heroicons/react/24/outline"
import { HomeIcon } from "@heroicons/react/24/outline"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { UserGroupIcon } from "@heroicons/react/24/outline"
import { UsersIcon } from "@heroicons/react/24/outline"
import { ShoppingBagIcon } from "@heroicons/react/24/outline"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { RectangleGroupIcon } from "@heroicons/react/24/outline"

// icons from fontAwansome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlaystation } from "@fortawesome/free-brands-svg-icons"
import { faXbox } from "@fortawesome/free-brands-svg-icons"
import { faComputer } from "@fortawesome/free-solid-svg-icons"
import { faTag } from "@fortawesome/free-solid-svg-icons"

// fonts
import {Open_Sans} from "next/font/google";

const OpenSans = Open_Sans({weight:"400", subsets:["latin"]})


// React Hooks
import { useEffect, useState } from "react"





export default function MenuSidebar(){

const [handleDropDownButton, setHandleDropDownButton] = useState<boolean[]> ([false, false]);

 function handleDropDown(index:number){
    setHandleDropDownButton(prev=> prev.map((_,i)=> i === index ? !prev[i]: false ))
}

useEffect(()=>{
    console.log(handleDropDownButton)
},[handleDropDownButton])

// Store dropdown List

const dropdownsList =[
    {icon: "icon", className: "style", classCondition: "condition"}
]


    return(
        <div className=" bg-[#151515] w-[15em] h-[90%] border-r-1 border-[#146C94] z-40 fixed top-[4em] left-0 flex flex-col items-center
            ">
                <ul className="h-full w-[90%] flex flex-col items-center justify-around
                ">
                    <li className="flex flex-row items-center justify-start gap-0 w-full h-[3em] bg-transparent border-1 border-[#068FFF] rounded-[10px]
                        ">
                        <button className="bg-[#151515] rounded-[5em] w-[2.5em] h-[2.5em] flex justify-center items-center
                            ">
                            <HomeIcon className="size-8 text-[#fff]
                            "/>
                        </button>
                        <span className=" w-[11em] bg-[#151515] text-[#fff] rounded-0 h-[2.5em] flex justify-center items-center
                        ">
                            <p className={`${OpenSans.className} text-[1.2em]`}>Home</p>
                        </span>
                    </li>
                    <li className="flex flex-row items-center justify-evenly w-full h-[3em] px-1.5 bg-white/10  rounded-[.5em]  shadow-[0_4px_30px_rgba(0,0,0,0.1)]  backdrop-blur-[0.9px]  border  border-white/30
                        ">
                        <span className="w-full h-full flex gap-0.5 flex-row items-center justify-between
                        ">
                            <button className="bg-transparent
                                w-[2.5em]
                                h-[2em]
                                flex
                                justify-center
                                items-center
                                relative
                                before:absolute
                                before:right-0
                                before:top-[-50%]
                                before:translate-y-[50%]
                                before:w-[1px]
                                before:h-full
                                before:bg-[#fff]
                                ">
                                <MagnifyingGlassIcon className="size-7
                                    text-[#fff]"/>
                            </button>
                            <input type="text" 
                                placeholder="Search here"
                                className={`w-full
                                    h-full
                                    pl-1
                                    ${OpenSans.className}
                                    text-[1.1em]
                                    focus:border-0
                                    focus:outline-0`}
                                ></input>
                        </span>
                    </li>




                    {/* Dropdown Store */}
                    <li className={`border-0
                        border-[#fff]
                        w-full
                        flex
                        flex-col
                        items-center
                        justify-center
                        gap-1.5
                        relative
                        overflow-hidden
                        transform transition-all duration-300 ease-in-out
                        ${handleDropDownButton[0] ? "h-[20em] delay-100 " : "h-[3em] delay-800"}
                        `}>


                        {/* Store dropdown button */}
                        <button className={`w-full
                            bg-[#00993d]
                            rounded-[10em]
                            flex
                            justify-around
                            items-center
                            z-10
                            transform transition-all duration-300 ease-in-out
                            ${handleDropDownButton[0] ? "h-[3em] delay-100 " : "h-[30em] delay-800  duration-400"}
                            `} onClick={()=>{handleDropDown(0)}}>
                            <ShoppingBagIcon className="size-7" />
                            <p className={`${OpenSans.className} text-[1.2em]`}>Store</p>
                            <ChevronDownIcon className="size-7" />
                        </button>


                        {/* Store List of Items */}
                        <ul className={`border-l-1
                            border-[#fff]
                            w-[80%]
                            h-[100%]
                            flex
                            flex-col
                            items-center
                            justify-around
                            px-1.5
                            overflow-hidden
                            relative
                            transform transition-transform duration-700 ease-in-out
                            ${handleDropDownButton[0] ? "translate-y-0 delay-100 " : "-translate-y-[300px] delay-700"}
                            `}>
                            <li className={`w-full
                                h-[2em]
                                bg-[rgba(246,241,241,.1)]
                                flex
                                justify-center
                                items-center
                                flex-row
                                gap-5
                                rounded-[2em]
                                transform transition-transform duration-300 ease-in-out
                                 ${handleDropDownButton[0] ? "translate-x-0 delay-600 " : "-translate-x-[300px] delay-100"}
                                `}>
                                <FontAwesomeIcon icon={faTag} className="size-5"/>
                                <p className={`${OpenSans.className} 
                                w-[6em]
                                flex
                                justify-center
                                items-center
                                `}>New</p>
                            </li>
                            <li className={`w-full
                                h-[2em]
                                bg-[rgba(246,241,241,.1)]
                                flex
                                justify-center
                                items-center
                                flex-row
                                gap-5
                                rounded-[2em]
                                 transform transition-transform duration-300 ease-in-out
                                 ${handleDropDownButton[0] ? "translate-x-0 delay-700 " : "-translate-x-[300px] delay-200"}
                                `}>
                                <Squares2X2Icon className="size-5"/>
                                <p className={`${OpenSans.className} 
                                w-[6em]
                                flex
                                justify-center
                                items-center
                                `}>your games</p>
                            </li>
                            <li className={`w-full
                                h-[2em]
                                bg-[rgba(246,241,241,.1)]
                                flex
                                justify-center
                                items-center
                                flex-row
                                gap-5
                                rounded-[2em]
                                transform transition-transform duration-300 ease-in-out
                                 ${handleDropDownButton[0] ? "translate-x-0 delay-800 " : "-translate-x-[300px] delay-300"}
                                `}>
                                <RectangleGroupIcon className="size-5"/>
                                <p className={`${OpenSans.className} 
                                w-[6em]
                                flex
                                justify-center
                                items-center
                                `}>categories</p>
                            </li> 
                            <li className={`w-full
                                h-[2em]
                                bg-[rgba(246,241,241,.1)]
                                flex
                                justify-center
                                items-center
                                flex-row
                                gap-5
                                rounded-[2em]
                                transform transition-transform duration-300 ease-in-out
                                 ${handleDropDownButton[0] ? "translate-x-0 delay-900 " : "-translate-x-[300px] delay-400"}
                                `}>
                                <FontAwesomeIcon icon={faComputer} className="size-5"/>
                                <p className={`${OpenSans.className} 
                                w-[6em]
                                flex
                                justify-center
                                items-center
                                `}>PC</p>
                            </li>                           
                            <li className={`w-full
                                h-[2em]
                                bg-[rgba(246,241,241,.1)]
                                flex
                                justify-center
                                items-center
                                flex-row
                                gap-5
                                rounded-[2em]
                                transform transition-transform duration-300 ease-in-out
                                 ${handleDropDownButton[0] ? "translate-x-0 delay-1000 " : "-translate-x-[300px] delay-500"}
                                `}>
                                <FontAwesomeIcon icon={faXbox} className="size-5"/>
                                <p className={`${OpenSans.className} 
                                w-[6em]
                                flex
                                justify-center
                                items-center
                                `}    
                                >Xbox</p>
                            </li>

                            <li className={`w-full
                                h-[2em]
                                bg-[rgba(246,241,241,.1)]
                                flex
                                justify-center
                                items-center
                                flex-row
                                gap-5
                                rounded-[2em]
                                transform transition-transform duration-300 ease-in-out
                                 ${handleDropDownButton[0] ? "translate-x-0 delay-1100 " : "-translate-x-[300px] delay-600"}
                                `}>
                                <FontAwesomeIcon icon={faPlaystation} className="size-5"/>
                                <p className={`${OpenSans.className} 
                                w-[6em]
                                flex
                                justify-center
                                items-center
                                `}>PlayStation</p>
                            </li>
                        </ul>
                    </li>
                    
                    
                </ul>
        </div>
    )
}