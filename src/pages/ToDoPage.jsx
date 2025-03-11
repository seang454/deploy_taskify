import ProgressCardList from "../Components/ProgressCardList.jsx";
import ProgessCardDetail from "../Components/ProgessCardDetail.jsx";
import SidebarSM from "../Components/SidebarSM.jsx";
import NavbarForworkShop from "../Components/NavbarForworkShop.jsx";
import React, {useState} from "react";

export default function ToDoPage() {
    const [progress, setProgress] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {setIsOpen(!isOpen);}
    const closeMenu = () => {setIsOpen(false);}

    return (
        <div>
            <button onClick={toggleMenu} className={"sticky z-10 bg-background text-gray-500 w-16 h-16 rounded-xl lg:hidden top-24 left-3 "}  >
                {isOpen ? "✖":"☰"}
            </button>
            {isOpen && (<SidebarSM />)}
            <div onClick={closeMenu}>
                <NavbarForworkShop title={"To Do List"}link={"/todo"}/>
                <div className={"flex"}>
                    <div onClick={() => {setProgress(!progress)}}>
                        <ProgressCardList/>
                    </div>

                    <div className={"lg:w-[780px] w-96 lg:mt-0 md:mt-16 overscroll-none hidden md:block md:h-[600px] lg:h-[380px] bg-gray-50 overflow-hidden rounded-2xl overflow-y-scroll scroll-smooth "}>
                        {progress &&(<ProgessCardDetail/>)}
                    </div>


                </div>
            </div>

        </div>
    )
}

