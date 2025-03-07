import {NavLink} from "react-router";
import {MdOutlineLeaderboard} from "react-icons/md";
import {IoPersonOutline, IoSettingsOutline} from "react-icons/io5";
import {IoIosHelpCircleOutline, IoMdNotificationsOutline} from "react-icons/io";
import {TiArrowLeftOutline} from "react-icons/ti";

export default function Sidebar(){

    return (
        <>

            <nav className={"bg-background  dark:bg-[#121321] dark:text-background h-screen mr-8 py-4 hidden  justify-between flex-col lg:flex w-full lg:w-[200px]"}>
                <div className="flex flex-row md:flex-col mt-6">
                    <NavLink className={"flex justify-start space-x-4 pl-4 align-middle py-4 hover:bg-primary hover:text-background"} to="/">
                        <MdOutlineLeaderboard className={"w-5 h-5"} width={"10"} height={"10"}/>
                        <div>Workspace</div>
                    </NavLink>
                    <NavLink className={"flex justify-start space-x-4 pl-4 align-middle py-4 hover:bg-primary hover:text-background"} to="/">
                        <IoPersonOutline className={"w-5 h-5"} width={"10"} height={"10"}/>
                        <div>Members</div>
                    </NavLink>
                    <NavLink className={"flex justify-start space-x-4 pl-4 align-middle py-4 hover:bg-primary hover:text-background"} to="/">
                        <IoSettingsOutline className={"w-5 h-5"} width={"10"} height={"10"}/>
                        <div>Setting</div>
                    </NavLink>
                    <NavLink className={"flex justify-start space-x-4 pl-4 align-middle py-4 hover:bg-primary hover:text-background"} to="/">
                        <IoMdNotificationsOutline className={"w-5 h-5"} width={"10"} height={"10"}/>
                        <div>Notifications</div>
                    </NavLink>
                    <NavLink className={"flex justify-start space-x-4 pl-4 align-middle py-4 hover:bg-primary hover:text-background"} to="/">
                        <IoIosHelpCircleOutline className={"w-5 h-5"} width={"10"} height={"10"}/>
                        <div>About Taskify</div>
                    </NavLink>
                </div>
                <NavLink className={"flex justify-center items-center ml-8 space-x-4 align-middle py-4 text-primary hover:bg-gray-200 hover:font-bold rounded-xl w-28 h-10 "} to="/">
                    <div className={"flex justify-center  items-center "}>
                        <TiArrowLeftOutline />
                        <div className={"font-bold"}>|</div>
                    </div>
                    <div>Log Out</div>
                </NavLink>

            </nav>

        </>
    )
}