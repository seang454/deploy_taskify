import {NavLink} from "react-router";
import {ChevronRight} from "lucide-react";

export default  function NavbarForworkShop ({title,link}){
    return (
        <div className={"md:flex align-center align-middle items-center hidden md:ml-20 lg:ml-10 my-2"}>
            <nav className={"flex space-x-1 items-center  h-4 mt-6 lg:my-16 mx-2 md:text-[18px] lg:text-[22px]  font-bold  "}>
                <NavLink to="/" className={"bg-gray-200 p-2 rounded-2xl hover:bg-gray-300 hover:text-primary"}>Final Project of Foundation G3-Taskify</NavLink>
                <ChevronRight strokeWidth={2} width={15} height={15} fontSize="xl" />
                <NavLink to={link} className={"bg-gray-200 p-2 rounded-2xl hover:bg-gray-300 hover:text-primary"}>{title}</NavLink>
            </nav>
        </div>
    )
}