import { Link } from "react-router";
import { MdOutlineLeaderboard } from "react-icons/md";
import { IoPersonOutline, IoSettingsOutline } from "react-icons/io5";
import {
  IoIosHelpCircleOutline,
  IoMdNotificationsOutline,
} from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { TiThMenu } from "react-icons/ti";
import { TiArrowLeftOutline } from "react-icons/ti";
import { useState } from "react";
import {
  getAceAccessToken,
  removeAccessToken,
} from "../lib/secureLocalStorage";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    removeAccessToken(); // Remove the access token
    window.location.reload(); // Reload the page to reflect the change
  };

  return (
    <>
      <nav
        className={
          "bg-white h-auto  top-0  dark:bg-gray-800 md:flex flex-col text-txt16 place-content-between w-1/5 bottom-0 gap-y-[330px] py-2 hidden"
        }
      >
        <div className="flex flex-row mt-6 md:flex-col dark:text-white">
          <Link
            to="/"
            className="flex justify-start py-4 pl-4 space-x-4 align-middle transition-all duration-500 hover:bg-primary hover:text-background"
          >
            <MdOutlineLeaderboard className="w-5 h-5" />
            <div>Home Page</div>
          </Link>
          <Link
            to="/dashboard"
            className="flex justify-start py-4 pl-4 space-x-4 align-middle transition-all duration-500 hover:bg-primary hover:text-background"
          >
            <MdOutlineLeaderboard className="w-5 h-5" />
            <div>Workspace</div>
          </Link>
          <Link
            className="flex justify-start py-4 pl-4 space-x-4 align-middle transition-all duration-500 hover:bg-primary hover:text-background"
            to="/member"
          >
            <IoPersonOutline className="w-5 h-5" />
            <div>Members</div>
          </Link>
          <Link
            className="flex justify-start py-4 pl-4 space-x-4 align-middle transition-all duration-500 hover:bg-primary hover:text-background"
            to="/userpf"
          >
            <IoSettingsOutline className="w-5 h-5" />
            <div>User Profile</div>
          </Link>
          <Link
            className="flex justify-start py-4 pl-4 space-x-4 align-middle transition-all duration-500 hover:bg-primary hover:text-background"
            to="/notification"
          >
            <IoMdNotificationsOutline className="w-5 h-5" />
            <div>Notifications</div>
          </Link>
          <Link
            className="flex justify-start py-4 pl-4 space-x-4 align-middle transition-all duration-500 hover:bg-primary hover:text-background"
            to="/aboutus"
          >
            <IoIosHelpCircleOutline className="w-5 h-5" />
            <div>About Taskify</div>
          </Link>
          {getAceAccessToken() && (
            <button
              className="flex justify-start py-4 pl-4 space-x-4 align-middle transition-all duration-500 hover:bg-primary hover:text-background"
              onClick={handleLogout}
            >
              <TiArrowLeftOutline className="w-5 h-5" />
              <div>Log Out</div>
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Menu Toggle Button */}
      <div className={"absolute top-4 z-10"}>
        <button
          className="flex gap-10 p-5 mt-20 text-2xl rounded-full text-primary md:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? "" : <TiThMenu />} {/* Changes icon when open/closed */}
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="absolute">
          <nav className="fixed bottom-0 z-10 flex flex-col w-1/3 h-full py-2 mt-2 transition-transform bg-background text-txt16 place-content-between top-20 gap-y-10 md:hidden min-w-56">
            {/* Close Button */}
            <button
              className="absolute top-0 right-0 flex gap-10 p-5 text-2xl rounded-full text-primary"
              onClick={toggleMenu}
            >
              <AiOutlineClose />
            </button>
            {/* Navigation Links */}
            <div className="flex flex-col mt-10">
              <Link
                to="/"
                className="flex justify-start py-4 pl-4 space-x-4 transition-all duration-500 hover:bg-primary hover:text-background"
              >
                <MdOutlineLeaderboard className="w-5 h-5" />
                <div>Home Page</div>
              </Link>
              <Link
                to="/dashboard"
                className="flex justify-start py-4 pl-4 space-x-4 transition-all duration-500 hover:bg-primary hover:text-background"
              >
                <MdOutlineLeaderboard className="w-5 h-5" />
                <div>Workspace</div>
              </Link>
              <Link
                className="flex justify-start py-4 pl-4 space-x-4 transition-all duration-500 hover:bg-primary hover:text-background"
                to="/member"
              >
                <IoPersonOutline className="w-5 h-5" />
                <div>Members</div>
              </Link>
              <Link
                className="flex justify-start py-4 pl-4 space-x-4 transition-all duration-500 hover:bg-primary hover:text-background"
                to="/userpf"
              >
                <IoSettingsOutline className="w-5 h-5" />
                <div>User Profile</div>
              </Link>
              <Link
                className="flex justify-start py-4 pl-4 space-x-4 transition-all duration-500 hover:bg-primary hover:text-background"
                to="/notification"
              >
                <IoMdNotificationsOutline className="w-5 h-5" />
                <div>Notifications</div>
              </Link>
              <Link
                className="flex justify-start py-4 pl-4 space-x-4 transition-all duration-500 hover:bg-primary hover:text-background"
                to="/aboutus"
              >
                <IoIosHelpCircleOutline className="w-5 h-5" />
                <div>About Taskify</div>
              </Link>
              {getAceAccessToken() && (
                <button
                  className="flex justify-start py-4 pl-4 space-x-4 transition-all duration-500 hover:bg-primary hover:text-background"
                  onClick={handleLogout}
                >
                  <TiArrowLeftOutline className="w-5 h-5" />
                  <div>Log Out</div>
                </button>
              )}
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
