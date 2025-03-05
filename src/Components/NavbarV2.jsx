import {NavLink} from "react-router";
import React, {useEffect, useState} from "react";
import {ArrowBigDownDash, ArrowLeftIcon, Search} from "lucide-react";
import TaskifyLogo from "../assets/TaskifyLogo1.png";
import {Moon,Sun} from "../assets/moon.jsx";
import {motion} from "framer-motion";
import { MdOutlineLeaderboard } from "react-icons/md";
import { IoSettingsOutline,IoPersonOutline} from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { TiArrowLeftOutline } from "react-icons/ti";

export default function NavbarV2() {
    const [state, setState] = useState(false);
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });
    console.log(darkMode);
    console.log(localStorage);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            console.log(document);
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);
    console.log(document);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (<>
        <nav className={"bg-primary flex items-center space-x-2 align-middle h-20 px-16"}>
            <NavLink> <img src={TaskifyLogo} className="w-[275px] my-auto mt-5" alt="Logo"/></NavLink>
            <div className={"flex items-center w-full p-4 my-auto text-primary"}>
                <Search className={"absolute ml-8"}/>
                <input type={"text"} value={state.value} onChange={(e) => setState(e.target.value)}
                       placeholder={"Search boards"}
                       className={"pl-20 border rounded-full focus:outline-none focus:ring-2 h-10 w-1/2 placeholder: text-primary"}/>
            </div>
            <div className={"flex space-x-5"}>
            <button
                onClick={() => setDarkMode(!darkMode)}
                className=" flex items-center justify-center w-11 h-11 overflow-hidden border border-white rounded-full bg-background"
            >
                <motion.div
                    key={darkMode ? "moon" : "sun"} // Ensure smooth transition when toggling
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    {darkMode ?  <Moon/> :  <Sun/>}
                </motion.div>
            </button>
            <NavLink className={"bg-purple-800 w-11 h-11 flex items-center justify-center rounded-full "} to="/about">
              <div>MH</div>
            </NavLink>
        </div>
        </nav>

        </>
    )

}