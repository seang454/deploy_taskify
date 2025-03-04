import ProgressCardList from "../Components/ProgressCardList.jsx";
import ProgessCardDetail from "../Components/ProgessCardDetail.jsx";
import { ChevronRight} from "lucide-react";
import {NavLink} from "react-router";

export default function OnProgessPage() {

    return (
        <>
            <nav className={"flex space-x-1 items-center align-middle h-20 absolute text-xl font-bold"}>
            <NavLink className={"bg-gray-200 p-2 rounded-2xl"}>Final Project of Foundation G3-Taskify</NavLink>
            <ChevronRight strokeWidth={2} width={15} height={15} fontSize="xl" />
            <NavLink className={"bg-gray-200 p-2 rounded-2xl"}>On Progress List</NavLink>
            </nav>
        <div className={"flex rounded-2xl w-auto  items-center my-10"}>

            <ProgressCardList/>
            <ProgessCardDetail/>
        </div>
        </>
    )
}

