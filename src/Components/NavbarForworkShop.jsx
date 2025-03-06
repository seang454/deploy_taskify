import {NavLink} from "react-router";
import {ChevronRight} from "lucide-react";

export default  function NavbarForworkShop ({title}){
    return (
        <div className={"flex align-center align-middle items-center"}>
            <nav className={"flex space-x-1 items-center align-middle h-4 my-10 mx-2 md:text-xl text-txt16  font-bold  "}>
                <NavLink to="/" className={"bg-gray-200 p-2 rounded-2xl hover:bg-gray-300 hover:text-primary"}>Final Project of Foundation G3-Taskify</NavLink>
                <ChevronRight strokeWidth={2} width={15} height={15} fontSize="xl" />
                <NavLink to="/" className={"bg-gray-200 p-2 rounded-2xl hover:bg-gray-300 hover:text-primary"}>{title}</NavLink>
            </nav>
        </div>
    )
}