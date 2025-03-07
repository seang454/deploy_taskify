import ProgressCardList from "../Components/ProgressCardList.jsx";
import ProgessCardDetail from "../Components/ProgessCardDetail.jsx";
import SidebarSM from "../Components/SidebarSM.jsx";
import NavbarForworkShop from "../Components/NavbarForworkShop.jsx";
import {useState} from "react";

export default function OnProgessPage() {
    const [progress, setProgress] = useState(false)

    return (
        <div>
            <NavbarForworkShop title={"On Progress List"}/>
        <div className={"flex"}>
            <div onClick={() => {setProgress(!progress)}}>
            <ProgressCardList/>
            </div>
            <div className={"w-[800px] snap-y snap-end overscroll-none h-auto bg-gray-50 overflow-hidden rounded-2xl overflow-y-scroll scroll-smooth"}>
                <div></div>
                {progress &&(<ProgessCardDetail/>)}
            </div>
            <SidebarSM/>
        </div>

        </div>
    )
}

