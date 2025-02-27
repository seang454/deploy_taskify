import {FaEye, FaEyeSlash} from "react-icons/fa";
import React from "react";

export default function PasswordInput(props) {
    const [showPassword, setShowPassword] = React.useState(false)
    return (
        <div className={"border-primary border-2 mb-4 w-60 md:w-80 h-10  rounded-md  align-middle flex items-center"}>
            <input type={showPassword ? 'text' : 'password'} name="password" placeholder=" Password" className=" text-txt12 md:text-txt14 lg:text-txt16 rounded-md bg-backgroundtext-foreground border-none outline-none ring-0 shadow-none focus:border-0 focus:outline-none focus:ring-0 focus:shadow-none w-full"/>
            <button type="button" variant="ghost" size="icon" className=" px-4 hover:bg-transparent" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Hide password" : "Show password"}>
                {showPassword ? <FaEye className="h-4 w-4 text-gray-500" /> : <FaEyeSlash className="h-4 w-4 text-gray-500" />}
            </button>
        </div>
    )
}