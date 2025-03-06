import ProgressCardList from "../Components/ProgressCardList.jsx";
import ProgessCardDetail from "../Components/ProgessCardDetail.jsx";
import { ChevronRight} from "lucide-react";
import {NavLink} from "react-router";
import SidebarSM from "../Components/SidebarSM.jsx";
import NavbarForworkShop from "../Components/NavbarForworkShop.jsx";

export default function OnProgessPage() {

    return (
        <div>
            <NavbarForworkShop title={"On Progress List"}/>
        <div className={"flex rounded-2xl w-auto  items-center "}>
            <ProgressCardList/>
            <ProgessCardDetail/>
            <SidebarSM/>
        </div>

        </div>
    )
}

