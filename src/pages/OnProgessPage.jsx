import ProgressCardList from "../Components/ProgressCardList.jsx";
import ProgessCardDetail from "../Components/ProgessCardDetail.jsx";
import SidebarSM from "../Components/SidebarSM.jsx";
import NavbarForworkShop from "../Components/NavbarForworkShop.jsx";
import React, {useState} from "react";

export default function OnProgessPage() {
    const [progress, setProgress] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    return (

            <div>
            <NavbarForworkShop title={"On Progress List"}link={"/progress"}/>
        <div className={"flex"}>
            <div onClick={() => {setProgress(!progress)}}>
            <ProgressCardList/>
            </div>

            <div className={"lg:w-[780px] w-96 lg:mt-0 md:mt-16 overscroll-none hidden md:block md:h-[600px] lg:h-[380px] bg-gray-50 overflow-hidden rounded-2xl overflow-y-scroll scroll-smooth "}>
                {progress &&(<ProgessCardDetail/>)}
            </div>


        </div>
            </div>

    )
}

