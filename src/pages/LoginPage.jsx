import TaskifyLogoV2 from "../assets/TaskifyLogoV2.png"
import {Link} from "react-router";
import { ArrowLeft } from "lucide-react"
import React from "react";
import BackgroundForLogin from "../Components/BackgroundForLogin.jsx";
import PasswordInput from "../Components/Password_Input.jsx";
import UserNameInput from "../Components/UserNameInput.jsx";


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
    return(
        <>
            <div className="min-h-screen w-full relative overflow-hidden bg-background ">
                <BackgroundForLogin/>
                <div className={"absolute flex items-center justify-center align-middle w-full mx-auto my-4 sm:my-10 md:my-20"}>
                <form className="flex flex-col items-center rounded-lg space-y-4 bg-white p-16 pt-8 shadow " method="post" onSubmit={handleSubmit} >
                    <Link to={"/"} className={"items-start w-full relative right-8"}>
                        <ArrowLeft/>
                    </Link>
                    <img src={TaskifyLogoV2} alt="" width={75} />
                    <p className={"text-txt14 md:text-txt16 lg:text-txt20 text-primary"}><b>Log in to your account</b></p>
                    <UserNameInput/>
                    {error && errorMessageN && <p className="text-sm text-accent items-start w-full">{errorMessageN}</p>}
                    <PasswordInput/>
                    {error && errorMessageP && <p className="text-sm text-accent items-start w-full">{errorMessageP}</p>}
                <button className="w-full bg-primary hover:bg-subaccent text-white rounded-lg text-txt12 md:text-txt14 lg:text-txt16  h-10" type={"submit"} >
                    Log In
                </button>
                    <p className={"text-txt14 text-gray-600"}>Or continue with: </p>
                    <button className="w-full flex items-center justify-center border-primary border-2 rounded-md h-10 text-gray-500 font-bold" >
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