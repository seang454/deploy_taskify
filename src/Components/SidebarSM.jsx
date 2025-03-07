import {NavLink} from "react-router";
import {MdOutlineLeaderboard} from "react-icons/md";
import {TiArrowLeftOutline} from "react-icons/ti";
import {IoPersonOutline, IoSettingsOutline} from "react-icons/io5";
import {IoIosHelpCircleOutline, IoMdNotificationsOutline} from "react-icons/io";

export default function SidebarSM() {

    return (
        <div className={"bg-background lg:hidden w-40 h-[500px] absolute top-[90px] z-20"}>
            <div>
            <nav className={"flex flex-col"}>
                <div className={"space-y-8 py-4"}>
                <NavLink to="/" className={"flex space-x-4 px-4"}>
                    <MdOutlineLeaderboard className={"w-5 h-5"} width={"10"} height={"10"}/>
                    <div>Workspace</div>
                </NavLink>
                <NavLink to="/" className={"flex space-x-4 px-4"}>
                    <IoPersonOutline className={"w-5 h-5"} width={"10"} height={"10"}/>
                    <div>Members</div>
                </NavLink>
                <NavLink to="/" className={"flex space-x-4 px-4"}>
                    <IoSettingsOutline className={"w-5 h-5"} width={"10"} height={"10"}/>
                    <div>Setting</div>
                </NavLink>
                <NavLink to="/" className={"flex space-x-4 px-4"}>
                    <IoMdNotificationsOutline className={"w-5 h-5"} width={"10"} height={"10"}/>
                    <div>Notifications</div>
                </NavLink>
                <NavLink to="/" className={"flex space-x-4 px-4"}>
                    <IoIosHelpCircleOutline className={"w-5 h-5"} width={"10"} height={"10"}/>
                    <div>About Taskify</div>
                </NavLink>
                </div>
                <NavLink className={"flex justify-center items-center ml-8 space-x-4 align-middle py-4 text-primary hover:bg-gray-200 hover:font-bold rounded-xl w-28 h-10 mt-32  "} to="/">
                    <div className={"flex justify-center  items-center "}>
                        <TiArrowLeftOutline />
                        <div className={"font-bold"}>|</div>
                    </div>
                    <div>Log Out</div>
                </NavLink>
            </nav>
            </div>
        </div>
    )
}