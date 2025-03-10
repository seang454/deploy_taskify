import SidebarSM from "../Components/SidebarSM.jsx";
import React, {useState} from "react";
import Listmember from "../Components/Listmember.jsx";
import { Search } from "lucide-react"
import Searchmember from "../Components/Searchmember.jsx";

export default function MemberPage (){
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {setIsOpen(!isOpen);}
    const closeMenu = () => {setIsOpen(false);}
    return (
        <>
            <div className={"w-[1000px] p-8"}>
                <button onClick={toggleMenu} className={"sticky z-10 bg-background text-gray-500 w-16 h-16 rounded-xl lg:hidden top-24 left-3 "}  >
                    {isOpen ? "✖":"☰"}
                </button>
                {isOpen && (<SidebarSM />)}
                <div onClick={closeMenu}>
                    <div className={"space-y-2 my-4"}>
                    <p className={"text-primary text-[24px] font-bold"}>All Members</p>
                    <p className={"text-txt18"}>Workspace members can view and join all Workspace visible boards and create new boards in the Workspace.</p>
                    </div>
                    <Searchmember/>
                    <hr className={"border-dashed border-amber-400 mt-2 w-[800px]"} />
                    <div className={"overflow-hidden h-72 overflow-y-auto"}>
                    <Listmember/>
                    </div>
                </div>

            </div>
        </>
    )
}