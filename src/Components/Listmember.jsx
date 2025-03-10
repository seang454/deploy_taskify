import React from "react";

export default function Listmember() {
    return (
        <>
            <div className={"flex justify-between"}>
            <div className={"flex space-x-2 align-middle items-center"}>
                <div className="bg-primary w-20 h-20 rounded-full" />
                <div>
                <h1>Narak Leng</h1>
                <p>narakleng13579@gmail.com</p>
                </div>
            </div>
                <div className={"flex space-x-2"}>
                    <button className={"w-auto h-30 bg-gray-50"}>Member of Workspace</button>
                    <button className={"w-auto h-30 bg-gray-50"}>Remove</button>
                </div>
            </div>
            <hr className="bg-transparent w-2/3 mt-10 border-[2px] border-dashed  relative ml-[calc(1/3*100%)] border-primary" />
        </>
    )
}