import ProgressCardList from "../Components/ProgressCardList.jsx";
import ProgessCardDetail from "../Components/ProgessCardDetail.jsx";
import { ChevronRight} from "lucide-react";
import {NavLink} from "react-router";
import NavbarV2 from "../Components/NavbarV2.jsx";

export default function OnProgessPage() {

    return (
        <div>
            <nav className={"flex space-x-1 items-center align-middle h-10 my-5 mx-2 text-xl font-bold  "}>
            <NavLink className={"bg-gray-200 p-2 rounded-2xl hover:bg-gray-300 hover:text-primary"}>Final Project of Foundation G3-Taskify</NavLink>
            <ChevronRight strokeWidth={2} width={15} height={15} fontSize="xl" />
            <NavLink className={"bg-gray-200 p-2 rounded-2xl hover:bg-gray-300 hover:text-primary"}>On Progress List</NavLink>
            </nav>
        <div className={"flex rounded-2xl w-auto  items-center "}>

            <ProgressCardList/>
            {/*<ProgessCardDetail/>*/}
        </div>

        </div>
    )
}

