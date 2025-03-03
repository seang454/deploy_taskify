import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";


export default function WorkspaceCard({ workspace }) {
    return (
        <div className={` border border-gray-300 rounded-lg text-white h-full`}>
            <div className={`rounded-t-lg flex flex-row items-center justify-center ${workspace.color}`}>
                <h2 className='font-semibold p-5 text-center line-clamp-1'>{workspace.title}</h2>
                </div>

                <div className="bg-white flex flex-col rounded-b-lg justify-between gap-4 p-5">
                    <p className="text-txt12 line-clamp-2 text-primary">{workspace.description}</p>
                    
                    <div className="flex justify-end">
                        <p className="text-txt12 text-gray-500 opacity-80 px-2"><FontAwesomeIcon icon={faCalendar} /> {workspace.date}</p>
                    </div>
            </div>

            
            
        </div>
    );
}
