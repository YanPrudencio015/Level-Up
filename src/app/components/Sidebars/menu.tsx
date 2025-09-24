'use client'
//icons
import { Squares2X2Icon } from "@heroicons/react/24/outline"
import { HomeIcon } from "@heroicons/react/24/outline"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { UserGroupIcon } from "@heroicons/react/24/outline"
import { UsersIcon } from "@heroicons/react/24/outline"
import { ShoppingBagIcon } from "@heroicons/react/24/outline"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { BellAlertIcon } from "@heroicons/react/24/outline"
import { Cog8ToothIcon } from "@heroicons/react/20/solid"
import { RectangleGroupIcon } from "@heroicons/react/24/outline"
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline"

// icons from fontAwansome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlaystation } from "@fortawesome/free-brands-svg-icons"
import { faXbox } from "@fortawesome/free-brands-svg-icons"
import { faComputer } from "@fortawesome/free-solid-svg-icons"
import { faTag } from "@fortawesome/free-solid-svg-icons"
import { faGridVertical } from "@fortawesome/free-solid-svg-icons"
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons"
import { faComments } from "@fortawesome/free-solid-svg-icons"
import { faUserGroup } from "@fortawesome/free-solid-svg-icons"
import { faUsers } from "@fortawesome/free-solid-svg-icons"
import { faNewspaper } from "@fortawesome/free-solid-svg-icons"
import { faUserPlus } from "@fortawesome/free-solid-svg-icons"
import { faFaceMehBlank } from "@fortawesome/free-solid-svg-icons"
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

const dropdownsLists =[
 [
       {
        animationCondition:`${handleDropDownButton[0] ? "translate-x-0 delay-600 " : "-translate-x-[300px] delay-100"}`,
        faUIcon:faTag, 
        size:[["size-5"]],
        name:"New"    
    },
    {
        animationCondition:`${handleDropDownButton[0] ? "translate-x-0 delay-800 " : "-translate-x-[300px] delay-300"}`,
        faUIcon:faLayerGroup, 
        size:[["size-5"]],
        name:"categories"    
    },
    {
        animationCondition:`${handleDropDownButton[0] ? "translate-x-0 delay-900 " : "-translate-x-[300px] delay-400"}`,
        faUIcon:faComputer, 
        size:[["size-5"]],
        name:"PC"    
    },
    {
        animationCondition:`${handleDropDownButton[0] ? "translate-x-0 delay-1000 " : "-translate-x-[300px] delay-500"}`,
        faUIcon:faXbox, 
        size:[["size-5"]],
        name:"Xbox"    
    },
    {
        animationCondition:`${handleDropDownButton[0] ? "translate-x-0 delay-1100 " : "-translate-x-[300px] delay-600"}`,
        faUIcon:faPlaystation, 
        size:[["size-5"]],
        name:"PlayStation"    
    },
 ],

 [
       {
        animationCondition:`${handleDropDownButton[1] ? "translate-x-0 delay-600 " : "-translate-x-[300px] delay-100"}`,
        faUIcon:faComments, 
        size:[["size-5"]],
        name:"Messages"    
    },
       {
        animationCondition:`${handleDropDownButton[1] ? "translate-x-0 delay-700 " : "-translate-x-[300px] delay-200"}`,
        faUIcon:faNewspaper, 
        size:[["size-5"]],
        name:"News"    
    },
       {
        animationCondition:`${handleDropDownButton[1] ? "translate-x-0 delay-800 " : "-translate-x-[300px] delay-300"}`,
        faUIcon:faUserGroup, 
        size:[["size-5"]],
        name:"Friends"    
    },
       {
        animationCondition:`${handleDropDownButton[1] ? "translate-x-0 delay-1100 " : "-translate-x-[300px] delay-600"}`,
        faUIcon:faUsers, 
        size:[["size-5"]],
        name:"Communities"    
    },
 ]

]


    return(
        <div className=" bg-[#151515] w-[15em] h-[100%] border-r-1 border-[#146C94] z-40 fixed top-[4em] left-0 flex flex-col items-center
            ">

                <div className=" w-full flex flex-col items-center justify-around h-[10em]">
                    <button className="flex flex-row items-center justify-start gap-0 w-[90%] h-[3em] bg-transparent border-1 border-[#068FFF] rounded-[10px]">
                        <button className="bg-[#151515] rounded-[5em] w-[2.5em] h-[2.5em] flex justify-center items-center
                        ">
                            <HomeIcon className="size-8 text-[#fff]
                        "/>
                        </button>
                        <span className=" w-[11em] bg-[#151515] text-[#fff] rounded-0 h-[2.5em] flex justify-center items-center
                        ">
                            <p className={`${OpenSans.className} text-[1.2em]`}>Home</p>
                        </span>
                    </button>

                    <button className="flex flex-row items-center justify-evenly w-full h-[3em] px-1.5 bg-white/10  rounded-[.5em]  shadow-[0_4px_30px_rgba(0,0,0,0.1)]  backdrop-blur-[0.9px]  border  border-white/30">
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
                    </button>
                </div>
                <ul className="h-full w-[90%] flex flex-col items-center justify-center gap-2.5
                ">

                    {/* Your game button */}
                    <li className="cursor-pointer w-full h-[2.5em] border-1 border-[#fff] flex justify-around flex-row items-center relative rounded-[2em]">
                        <FontAwesomeIcon icon={faGridVertical} className="size-5" />
                        <p className={`${OpenSans.className} text-[1.2em]`}>Your games</p>
                    </li>

                    {/* newspaper button */}
                    <li className="cursor-pointer w-full h-[2.5em] border-1 border-[#fff] flex justify-around flex-row items-center relative rounded-[2em]">
                        <FontAwesomeIcon icon={faNewspaper} className="size-5" />
                        <p className={`${OpenSans.className} text-[1.2em]`}>news</p>
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
                        ${handleDropDownButton[0] ? "h-[20em] delay-100 " : "h-[6em] delay-800"}
                        `}>


                        {/* Store dropdown button */}
                        <button className={`w-full
                            bg-[#00993d]
                            rounded-[1em]
                            flex
                            justify-around
                            items-center
                            z-10
                            transform transition-all duration-300 ease-in-out
                            border-0
                            ${handleDropDownButton[0] ? "h-[3em] delay-50 " : "h-[10em] delay-900  duration-400"}
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
                            {dropdownsLists[0].map((value,index)=>(
                                <li key={index} className={`w-full
                                    h-[2em]
                                    bg-[rgba(246,241,241,.1)]
                                    flex
                                    justify-center
                                    items-center
                                    flex-row
                                    gap-5
                                    rounded-[2em]
                                    transform transition-transform duration-300 ease-in-out
                                    ${value.animationCondition}
                                    `}>
                                    <FontAwesomeIcon icon={value.faUIcon} className="size-5"/>
                                    <p className={`${OpenSans.className} 
                                    w-[6em]
                                    flex
                                    justify-center
                                    items-center
                                    `}>{value.name}</p>
                                </li>                                
                            ))}
                            
                        </ul>
                    </li>


                    {/* Dropdown Network */}
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
                        ${handleDropDownButton[1] ? "h-[20em] delay-100 " : "h-[6em] delay-800"}
                        `}>


                        {/* Store dropdown button */}
                        <button className={`w-full
                            bg-[#00993d]
                            rounded-[1em]
                            flex
                            justify-around
                            items-center
                            z-10
                            transform transition-all duration-300 ease-in-out
                            border-0
                            ${handleDropDownButton[1] ? "h-[3em] delay-50 " : "h-[10em] delay-900  duration-400"}
                            `} onClick={()=>{handleDropDown(1)}}>
                            <UserGroupIcon className="size-7" />
                            <p className={`${OpenSans.className} text-[1.2em]`}>Network</p>
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
                            ${handleDropDownButton[1] ? "translate-y-0 delay-100 " : "-translate-y-[300px] delay-700"}
                            `}>
                            {dropdownsLists[1].map((value,index)=>(
                                <li key={index} className={`w-full
                                    h-[2em]
                                    bg-[rgba(246,241,241,.1)]
                                    flex
                                    justify-center
                                    items-center
                                    flex-row
                                    gap-5
                                    rounded-[2em]
                                    transform transition-transform duration-300 ease-in-out
                                    ${value.animationCondition}
                                    `}>
                                    <FontAwesomeIcon icon={value.faUIcon} className="size-5"/>
                                    <p className={`${OpenSans.className} 
                                    w-[6em]
                                    flex
                                    justify-center
                                    items-center
                                    `}>{value.name}</p>
                                </li>                                
                            ))}
                            
                        </ul>
                    </li>
                    <li className="cursor-pointer w-full h-[2.5em] border-1 border-[#fff] flex justify-around flex-row items-center relative rounded-[2em]">
                           <Cog8ToothIcon className="size-5" />
                        <p className={`${OpenSans.className} text-[1.2em]`}>Settings</p>
                    </li>
                </ul>
        </div>
    )
}