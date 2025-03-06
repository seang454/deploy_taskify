import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";


export default function WorkspaceCard({ workspace }) {
    return (
        <div className={` border border-gray-300 rounded-lg text-white h-full`}>
            <div className={`rounded-t-lg flex flex-row items-center justify-center ${workspace.color}`}>
                <h2 className='font-semibold text-center p-7 line-clamp-1'>{workspace.title}</h2>
                </div>

                <div className="flex flex-col justify-between gap-4 p-5 bg-white rounded-b-lg">
                    <p className="font-normal text-txt12 line-clamp-2 text-primary">{workspace.description}</p>
                    
                    <div className="flex justify-end">
                        <p className="px-2 text-gray-500 text-txt12 opacity-80"><FontAwesomeIcon icon={faCalendar} /> {workspace.date}</p>
                    </div>
            </div>
        </div>
    );
}
