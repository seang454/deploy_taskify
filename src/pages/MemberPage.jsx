import SidebarSM from "../Components/SidebarSM.jsx";
import React, {useState} from "react";
import Listmember from "../Components/Listmember.jsx";

export default function MemberPage (){
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {setIsOpen(!isOpen);}
    const closeMenu = () => {setIsOpen(false);}
    return (
        <>
            <div>
                <button onClick={toggleMenu} className={"sticky z-10 bg-background text-gray-500 w-16 h-16 rounded-xl lg:hidden top-24 left-3 "}  >
                    {isOpen ? "✖":"☰"}
                </button>
                {isOpen && (<SidebarSM />)}
                <div onClick={closeMenu}>
                    <Listmember/>
                </div>

            </div>
        </>
    )
}