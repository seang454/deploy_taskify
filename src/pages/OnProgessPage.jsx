import ProgressCardList from "../Components/ProgressCardList.jsx";
import ProgessCardDetail from "../Components/ProgessCardDetail.jsx";
import SidebarSM from "../Components/SidebarSM.jsx";
import NavbarForworkShop from "../Components/NavbarForworkShop.jsx";
import React, {useState} from "react";
import {NavLink} from "react-router";

export default function OnProgessPage() {
    const [progress, setProgress] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {setIsOpen(!isOpen);}
    const closeMenu = () => {setIsOpen(false);}

    return (
        <div>
            <button onClick={toggleMenu} className={"sticky z-10 bg-primary text-background w-16 h-16 rounded-full lg:hidden top-24 left-3 "} >
                {isOpen ? "✖":"☰"}
            </button>
            {isOpen && (<SidebarSM />)}
            <div onClick={closeMenu}>
            <NavbarForworkShop title={"On Progress List"}/>
        <div className={"flex"}>
            <div onClick={() => {setProgress(!progress)}}>
            <ProgressCardList/>
            </div>
            <div className={"lg:w-[780px] w-96 lg:mt-0 md:mt-16 overscroll-none md:h-[600px] lg:h-[380px] hidden md:block bg-gray-50 overflow-hidden rounded-2xl overflow-y-scroll scroll-smooth "}>
                {progress &&(<ProgessCardDetail/>)}
            </div>
            <NavLink to=""/>

        </div>
            </div>

        </div>
    )
}

