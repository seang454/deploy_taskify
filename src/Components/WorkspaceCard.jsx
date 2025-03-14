import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from 'react-router';


export default function WorkspaceCard({ workspace, userId }) {
    console.log('userId', userId)
    const navigate = useNavigate()
    const handleNavigate = ()=> {
        navigate(`/kanban/${workspace.id}`,{state: userId})
    }
    return (
        <section onClick={handleNavigate} className={` border border-gray-300 dark:bg-gray-800 rounded-lg text-white h-full`}>
            <div className={`rounded-t-lg flex flex-row items-center justify-center bg-primary`}>
                <h2 className='font-semibold line-clamp-1 text-center text-white p-7 text-txt20'>{workspace.title}</h2>
            
                </div>

                <div className="flex flex-col justify-between gap-6 px-5 pt-5 dark:bg-gray-800  bg-white  rounded-b-lg">
                    <p className="font-normal text-txt12 line-clamp-2 dark:text-white  text-primary">{workspace.description}</p>
                    
                    <div className="flex justify-end">
                        <p className="px-2 text-gray-500 text-txt12 opacity-80"><FontAwesomeIcon icon={faCalendar} /> {workspace.created_at}</p>
                    </div>
            </div>
        </section>
    );
}
