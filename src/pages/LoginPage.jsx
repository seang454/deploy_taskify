import TaskifyLogoV2 from "../assets/TaskifyLogoV2.png"
import {Link} from "react-router";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import React from "react";
export default function LoginPage() {
    const error = false // this for error input set to true to see.
    const errorMessageN = "Invalid Name or Email" // for UesrName and Email
    const errorMessageP = "Invalid password" // for password
    function handleSubmit(e) {// To test handle for get Date
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        fetch('/some-api', {method: form.method, body: formData});
        const formJson = Object.fromEntries(formData.entries())
        console.log(formJson)
    }
    const [showPassword, setShowPassword] = React.useState(false)
    return(
        <>
            <div className="min-h-screen w-full relative overflow-hidden bg-background ">
            <div id={"BackgroundForLogin"} className="absolute inset-0 overflow-hidden blur-sm">
                <div className="absolute -left-4 top-1/4 w-8 h-8 rounded-full bg-[#4834D4] opacity-80" />
                <div className="absolute left-1/4 top-1/3 w-16 h-16 rounded-full bg-[#4834D4] opacity-80" />
                <div className="absolute right-1/4 bottom-1/4 w-12 h-12 rounded-full bg-[#4834D4] opacity-80" />
                <div className="absolute right-8 top-1/4 w-4 h-4 rounded-full bg-[#4834D4] opacity-80" />
                <div className="absolute right-1/3 top-1/6 w-6 h-6 rounded-full bg-[#4834D4] opacity-80" />
            </div>
                <div className={"absolute flex items-center justify-center align-middle mx-auto my-20 w-full"}>
                <form className="flex flex-col items-center rounded-lg space-y-4 bg-white p-16 pt-8 shadow" method="post" onSubmit={handleSubmit} >
                    <img src={TaskifyLogoV2} alt="" width={75} />
                    <p className={"text-txt20 text-primary"}><b>Log in to your account</b></p>
                <input name="name" defaultValue="" placeholder=" Username or email" className="w-80 h-10 rounded-md border-primary border-2 text-txt14"  />
                    {error && errorMessageN && <p className="text-sm text-red-500">{errorMessageN}</p>}
                    <div className={"border-primary border-2 mb-4 w-80 h-10  rounded-md  align-middle flex items-center"}>
                <input type={showPassword ? 'text' : 'password'} name="password" placeholder=" Password" className=" text-txt14 rounded-md bg-backgroundtext-foreground placeholder:text-muted-foreground border-none outline-none ring-0 shadow-none focus:border-0 focus:outline-none focus:ring-0 focus:shadow-none w-full"/>
                        <button type="button" variant="ghost" size="icon" className=" px-4 hover:bg-transparent" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Hide password" : "Show password"}>
                            {showPassword ? <FaEye className="h-4 w-4 text-gray-500" /> : <FaEyeSlash className="h-4 w-4 text-gray-500" />}
                        </button>

                </div>{error && errorMessageP && <p className="text-sm text-red-500">{errorMessageP}</p>}
                <button className="w-full bg-primary hover:bg-subaccent text-white rounded-lg text-txt12 h-10" type={"submit"} >
                    Log In
                </button>
                    <p className={"text-txt14 text-gray-600"}>Or continue with: </p>
                    <button className="w-full flex items-center justify-center border-primary border-2 rounded-md h-10" >
                        <img src="https://www.google.com/favicon.ico" alt="Google" width={20} height={20} className="mr-2"/>
                        Google
                    </button>
                    <div className="text-center text-sm">
                        <Link href="#" className="text-primary hover:underline">
                            Cannot Log in? Create an account
                        </Link>
                    </div>
                </form>
                </div>
            </div>

        </>
    )
}