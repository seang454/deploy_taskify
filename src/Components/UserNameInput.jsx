import React from "react";

export default function UserNameInput(props){
    return (
        <div className={"border-primary border-2 rounded-md"}>
        <input name="name" defaultValue="" placeholder=" Username or email" className="w-60 md:w-80 h-10 rounded-md  text-txt12 md:text-txt14 lg:text-txt16 border-none outline-none ring-0 shadow-none focus:border-0 focus:outline-none focus:ring-0 focus:shadow-none"  />
        </div>
    )
}