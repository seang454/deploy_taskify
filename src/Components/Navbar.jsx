import React, { useState, useEffect } from "react";
import { IoIosSunny } from "react-icons/io";
import { BsMoonStarsFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TaskifyLogo from "../assets/TaskifyLogo1.png";
import { useGetMeQuery } from "../features/auth/authApiSlice";
import { getAceAccessToken, removeAccessToken } from "../lib/secureLocalStorage";
import { TiArrowLeftOutline } from "react-icons/ti";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const { data } = useGetMeQuery();
  const [name, setName] = useState("");

  useEffect(() => {
    if (data?.family_name && data?.given_name) {
      setName(
        `${data.family_name.charAt(0).toUpperCase()}${data.given_name
          .charAt(0)
          .toUpperCase()}`
      );
    }
  }, [data]);

  return (
    <nav className="sticky top-0 z-50 bg-primary text-white px-4 h-[86px] flex items-center w-full shadow-md">
      <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto">
        {/* Logo */}
        <img src={TaskifyLogo} className="w-[175px] z-10" alt="Taskify Logo" />

        {/* Desktop Buttons */}
        <div className="items-center hidden gap-4 sm:flex">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 bg-white border border-white rounded-full"
          >
            <motion.div
              key={darkMode ? "moon" : "sun"}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {darkMode ? (
                <BsMoonStarsFill size={26} color="gray" />
              ) : (
                <IoIosSunny size={26} color="gold" />
              )}
            </motion.div>
          </button>

          {getAceAccessToken() ? (
            <div className="flex items-center gap-2">
              <Link to="/dashboard">
                <button className="px-4 py-2 font-medium transition bg-white rounded-full text-primary hover:bg-secondary">
                  Dashboard
                </button>
              </Link>
              <Link to="/userpf">
                <div className="w-[43px] h-[41px] bg-white text-primary font-bold flex items-center justify-center rounded-full">
                  {name}
                </div>
              </Link>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link to="/register">
                <button className="px-4 py-2 font-medium transition bg-white rounded-full text-primary hover:bg-secondary">
                  Sign Up
                </button>
              </Link>
              <Link to="/login">
                <button className="px-4 py-2 font-medium transition bg-white rounded-full text-primary hover:bg-secondary">
                  Login
                </button>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="text-2xl sm:hidden" onClick={toggleMenu}>
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-primary flex flex-col items-center pt-24 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:hidden`}
      >
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 bg-white border border-white rounded-full"
        >
          {darkMode ? <BsMoonStarsFill size={26} color="gray" /> : <IoIosSunny size={26} color="gold" />}
        </button>

        <div className="flex flex-col items-center gap-4 mt-6">
          {!getAceAccessToken() ? (
            <>
              <Link to="/register">
                <button className="px-4 py-2 font-medium transition bg-white rounded text-primary hover:bg-secondary">
                  Sign Up
                </button>
              </Link>
              <Link to="/login">
                <button className="px-4 py-2 font-medium transition bg-white rounded text-primary hover:bg-secondary">
                  Login
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/dashboard">
                <button className="px-4 py-2 font-medium transition bg-white rounded text-primary hover:bg-secondary">
                  Dashboard
                </button>
              </Link>
              <Link to="/userpf">
                <div className="w-[43px] h-[41px] bg-white text-primary font-bold flex items-center justify-center rounded-full">
                  {name}
                </div>
              </Link>
              <button
                className="flex items-center gap-2 px-4 py-2 font-medium transition bg-white rounded text-primary hover:bg-secondary"
                onClick={() => {
                  removeAccessToken();
                  window.location.reload();
                }}
              >
                <TiArrowLeftOutline />
                Log Out
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
