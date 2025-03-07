import React, {useState} from "react";
import {Link} from "react-router";
import {MdOutlineLeaderboard} from "react-icons/md";
import {IoPersonOutline, IoSettingsOutline} from "react-icons/io5";
import {IoIosHelpCircleOutline, IoMdNotificationsOutline} from "react-icons/io";
import { TbProgress } from "react-icons/tb";
import { MdWorkspacesOutline } from "react-icons/md";

export default function SidebarSM() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {setIsOpen(!isOpen);}
    return (
        <>
            <button onClick={toggleMenu} className={"  absolute z-10 bg-primary text-background w-16 h-16 rounded-full lg:hidden top-24 left-3 "} >
                {isOpen ? "✖":"☰"}
            </button>
            {isOpen && (
                <div className={"flex flex-col space-y-2  items-center justify-center absolute z-10 left-3 top-40 lg:hidden"}>
                    <Link to="/" className={"bg-primary text-background w-16 h-16 rounded-full flex items-center justify-center md:hidden"}>
                        <MdWorkspacesOutline className={"w-5 h-5"} width={"10"} height={"10"}/>
                    </Link>
                    <Link to="/" className={"bg-primary text-background w-16 h-16 rounded-full flex items-center justify-center md:hidden"}>
                        <TbProgress className={"w-5 h-5"} width={"10"} height={"10"}/>
                    </Link>
                    <Link to="/" className={"bg-primary text-background w-16 h-16 rounded-full flex items-center justify-center "}>
                        <MdOutlineLeaderboard className={"w-5 h-5"} width={"10"} height={"10"}/>
                    </Link>
                    <Link to="/" className={"bg-primary text-background w-16 h-16 rounded-full flex items-center justify-center"}>
                        <IoPersonOutline className={"w-5 h-5"} width={"10"} height={"10"}/>
                    </Link>
                    <Link to="/" className={"bg-primary text-background w-16 h-16 rounded-full flex items-center justify-center"}>
                        <IoSettingsOutline className={"w-5 h-5"} width={"10"} height={"10"}/>
                    </Link>
                    <Link to="/" className={"bg-primary text-background w-16 h-16 rounded-full flex items-center justify-center"}>
                        <IoMdNotificationsOutline className={"w-5 h-5"} width={"10"} height={"10"}/>
                    </Link>
                    <Link to="/" className={"bg-primary text-background w-16 h-16 rounded-full flex items-center justify-center"}>
                        <IoIosHelpCircleOutline className={"w-5 h-5"} width={"10"} height={"10"}/>
                    </Link>
                </div>
            )}
        </>
    )
}