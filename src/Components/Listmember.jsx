import React from "react";
import teacher from "../assets/Chaya.webp"

const DB_member = [
    {
        id:1,
        img:teacher,
        name:"Houy",
        email:"Houy@gmail.com"
    },
    {
        id:2,
        img:teacher,
        name:"Houy",
        email:"Houy@gmail.com"
    },
    {
        id:3,
        name:"Houy",
        img:teacher,
        email:"Houy@gmail.com"
    },
    {
        id:4,
        name:"Houy",
        img:teacher,
        email:"Houy@gmail.com"
    },
    {
        id:5,
        name:"Houy",
        img:teacher,
        email:"Houy@gmail.com"
    },
    {
        id:6,
        name:"Houy",
        img:teacher,
        email:"Houy@gmail.com"
    },
    {
        id:7,
        img:teacher,
        name:"Houy",
        email:"Houy@gmail.com"
    },
    {
        id:8,
        name:"Houy",
        img:teacher,
        email:"Houy@gmail.com"
    },
    {
        id:9,
        name:"Houy",
        img:teacher,
        email:"Houy@gmail.com"
    },
   
]





 function Cardmember({item}) {
    return (
        <div className={"w-full my-8"}>
            <div className={"flex justify-between"}>
            <div className={"flex space-x-2 align-middle items-center"}>
                <div className=""  >
                    <img className="w-12 h-12 border-2 rounded-full border-primary" src={item.img} alt="" />
                </div>
                <div>
                <h1 className={"font-bold text-txt18 dark:text-white"}>{item.name}</h1>
                <p className={"text-txt14 dark:text-gray-300"}>{item.email}</p>
                </div>
            </div>
                <div className={"flex space-x-2 h-10"}>
                    <button className={"w-auto rounded-lg px-4 h-30 bg-gray-50 hover:text-background hover:bg-primary"}>Member of Workspace</button>
                    <button className={"w-auto rounded-lg px-4 h-30 bg-gray-50 hover:text-background hover:bg-primary"}>Remove</button>
                </div>
            </div>
            <hr className={"border-dashed border-amber-400 my-2"} />
        </div>
    )
}
export default function Listmember () {
     return (
         <section className={"w-auto h-auto"}>
             {DB_member.map((item) => (
                 <Cardmember key={item.id} item={item}></Cardmember>
             ))}
         </section>
     )
}