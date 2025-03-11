import {Search} from "lucide-react";
import React from "react";

export default function Searchmember(){
    return (
        <div>
            <div className="relative mb-8">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input className="w-[500px] h-10 pl-10 py-6 focus:outline-none border border-gray-400 rounded-lg" placeholder="Search by name or email" />
            </div>
        </div>
    )
}