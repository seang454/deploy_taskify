import React, { useState } from 'react';
import WorkspaceCard from '../Components/WorkspaceCard';
import ModalWorkspace from '../Components/ModalWorkspace';


export default function DashboardPage() {
    const [activeTab, setActiveTab] = useState("your-workspace");
    const [isModelOpen, setIsModelOpen] = useState(false);
    const yourWorkspaces = [
        { id: 1, title: "Final Project of Foundation G3-Taskify", description: "Taskify is a productivity platform that allows users to organize tasks...", color: "bg-red-500" , date:"12 Feb, 2025, at 3:05 PM"},
        { id: 2, title: "E-commerce Project for Client A", description: "Taskify is a productivity platform that allows users to organize tasks...", color: "bg-green-500", date:"12 Feb, 2025, at 3:05 PM" },
        { id: 3, title: "Assignment about History Subject (Group 5)", description: "Taskify is a productivity platform that allows users to organize tasks...", color: "bg-pink-500", date:"12 Feb, 2025, at 3:05 PM" },
    ];

    const sharedWorkspaces = [
        { id: 4, title: "Design Poster + Banner Bamboo School", description: "Taskify is a productivity platform that allows users to organize tasks...", color: "bg-yellow-500", date:"12 Feb, 2025, at 3:05 PM" },
        { id: 5, title: "Math Homework - Grade 12", description: "Taskify is a productivity platform that allows users to organize tasks...", color: "bg-blue-500", date:"12 Feb, 2025, at 3:05 PM" },
        { id: 6, title: "Khmer Literature Homework Full-time class", description: "Taskify is a productivity platform that allows users to organize tasks...", color: "bg-gray-600" , date:"12 Feb, 2025, at 3:05 PM"},
    ];

    return (
       <>
       <div className="flex  bg-gray-100 px-8 md:px-20 lg:px-24 xl:px-36 py-5  border">
            
            <section className=" bg-white p-6 flex-1">
                {/* Tabs */}
                <div className="flex justify-around space-x-10 bg-gray-300 border-b-2 py-3 px-3 rounded-xl ">
                    <button 
                        className={`py-2 bg-white hover:bg-primary hover:text-white w-full rounded-md font-semibold ${
                            activeTab === "your-workspace" ? "border-b-2 border-gray-700" : "text-primary"
                        }`}
                        onClick={() => setActiveTab("your-workspace")}
                    >
                        Your Workspace
                    </button>

                    <button
                        className={`pb-1 bg-white hover:bg-primary hover:text-white w-full rounded-md font-semibold ${
                            activeTab === "shared-workspace" ? "border-b-2 border-gray-700" : "text-primary"
                        }`}
                        onClick={() => setActiveTab("shared-workspace")}
                    >
                        Shared Workspace
                    </button>
                </div>

                {/* Workspace Content */}
                <div className="mt-5  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-fr">

                    {/* If "Your Workspace" is active */}
                    {activeTab === "your-workspace" && (
                        <>
                           
                           <div className="p-6 border border-gray-300 rounded-lg flex justify-center text-gray-500 cursor-pointer"
                                onClick={()=> setIsModelOpen(true)}
                           >
                            <h3 className='flex items-center'>+ Create New Workspace</h3>
                            </div>
                            {yourWorkspaces.map((workspace) => (
                                <WorkspaceCard key={workspace.id} workspace={workspace} />
                            ))}
                           
                        </>
                    )}

                    {/* If "Shared Workspace" is active */}
                    {activeTab === "shared-workspace" &&(
                        <>
                        <div className="p-6 border border-gray-300 rounded-lg flex justify-center text-gray-500 cursor-pointer">
                            <h3 className='flex items-center'>+ Create New Workspace</h3>
                        </div>
                        {sharedWorkspaces.map((workspace) => (
                            <WorkspaceCard key={workspace.id} workspace={workspace} />
                        ))}
                    </>
                    )}
                </div>
            </section>
        </div>
        {/* use Model component*/}
        {/* <ModalWorkspace isOpen = {isModelOpen} onclose={()=> setIsModelOpen(false)}/> */}
        <ModalWorkspace isOpen = {isModelOpen} onClose ={()=> setIsModelOpen(false)} />
       </>
    
    );
}
