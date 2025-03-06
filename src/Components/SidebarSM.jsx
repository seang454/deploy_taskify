import React, {useState} from "react";
import {Link} from "react-router";
import {MdOutlineLeaderboard} from "react-icons/md";
import {IoPersonOutline, IoSettingsOutline} from "react-icons/io5";
import {IoIosHelpCircleOutline, IoMdNotificationsOutline} from "react-icons/io";

export default function SidebarSM() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {setIsOpen(!isOpen);}
    return (
        <>
            <button onClick={toggleMenu} className={"  absolute z-10 bg-primary w-16 h-16 rounded-full md:hidden bottom-3 right-3 "} >
                {isOpen ? "✖":"☰"}
            </button>
            {isOpen && (
                <div className={"flex flex-col-reverse space-y-2  items-center justify-center absolute right-3 z-10 bottom-28 md:hidden"}>
                    <Link to="/" className={"bg-primary mt-2 w-16 h-16 rounded-full flex items-center justify-center"}>
                        <MdOutlineLeaderboard className={"w-5 h-5"} width={"10"} height={"10"}/>
                    </Link>
                    <Link to="/" className={"bg-primary w-16 h-16 rounded-full flex items-center justify-center"}>
                        <IoPersonOutline className={"w-5 h-5"} width={"10"} height={"10"}/>
                    </Link>
                    <Link to="/" className={"bg-primary w-16 h-16 rounded-full flex items-center justify-center"}>
                        <IoSettingsOutline className={"w-5 h-5"} width={"10"} height={"10"}/>
                    </Link>
                    <Link to="/" className={"bg-primary w-16 h-16 rounded-full flex items-center justify-center"}>
                        <IoMdNotificationsOutline className={"w-5 h-5"} width={"10"} height={"10"}/>
                    </Link>
                    <Link to="/" className={"bg-primary w-16 h-16 rounded-full flex items-center justify-center"}>
                        <IoIosHelpCircleOutline className={"w-5 h-5"} width={"10"} height={"10"}/>
                    </Link>
                </div>
            )}
        </>
    )
}