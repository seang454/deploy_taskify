import React, { useState ,useEffect } from 'react';
import WorkspaceCard from '../Components/WorkspaceCard';
import ModalWorkspace from '../Components/ModalWorkspace';
import { useLocation } from 'react-router';

export default function DashboardPage() {
    const [activeTab, setActiveTab] = useState("your-workspace");
    const [isModelOpen, setIsModelOpen] = useState(false);
   
    const location = useLocation()
    console.log("location :",location);
    
    const [workspaceList, setWorkspaceList] = useState([]);
  
    const sharedWorkspaces = [
        { id: 4, title: "Design Poster + Banner Bamboo School", description: "Taskify is a productivity platform that allows users to organize tasks...", color: "bg-yellow-500", date:"12 Feb, 2025, at 3:05 PM" },
        { id: 5, title: "Math Homework - Grade 12", description: "Taskify is a productivity platform that allows users to organize tasks...", color: "bg-blue-500", date:"12 Feb, 2025, at 3:05 PM" },
        { id: 6, title: "Khmer Literature Homework Full-time class", description: "Taskify is a productivity platform that allows users to organize tasks...", color: "bg-gray-600" , date:"12 Feb, 2025, at 3:05 PM"},
    ];

    useEffect(() =>{
        const fetchWorkspaces = async ()=>{
            try {
                const respone = await fetch(`${import.meta.env.VITE_BASE_URL}/workspaces`,{
                    headers: {Authorization: `Bearer ${location.state?.token}`},
                });
                const data = await respone.json();
                setWorkspaceList(data);
            }catch(error){
                console.log("Error feching workspace:", error)
            }
        };
        fetchWorkspaces();
    },[location.state?.token]);

    const handleWorkspaceResponse = (newWorkspace) => {
        if (newWorkspace){
            setWorkspaceList((prevWorkspace) => [...prevWorkspace, newWorkspace]);
        }
    }

    return (
       <>
       <div className="flex px-8 py-5 bg-gray-100 border md:px-20 lg:px-24 xl:px-36">
            
            <section className="flex-1 p-6 bg-white ">
                {/* Tabs */}
                <div className="flex px-3 py-3 space-x-10 bg-gray-100 border-b-2 md:justify-around rounded-xl ">
                    <button 
                        className={`py-2 bg-white hover:bg-primary hover:text-white w-full rounded-md font-semibold ${
                            activeTab === "your-workspace" ? "border-b-2 border-gray-700" : "text-primary"
                        }`}
                        onClick={() => setActiveTab("your-workspace")}
                    >
                        Your Workspace
                    </button>

                    <button
                        className={`py-2 pb-1 bg-white hover:bg-primary hover:text-white w-full rounded-md font-semibold ${
                            activeTab === "shared-workspace" ? "border-b-2 border-gray-700" : "text-primary"
                        }`}
                        onClick={() => setActiveTab("shared-workspace")}
                    >
                        Shared Workspace
                    </button>
                </div>

                {/* Workspace Content */}
                <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-2 lg:grid-cols-3  auto-rows-fr">

                    {/* If "Your Workspace" is active */}
                    {activeTab === "your-workspace" && (
                        <>
                           
                           <div className="flex justify-center p-6 text-gray-500 border border-gray-300 rounded-lg cursor-pointer"
                                onClick={()=> setIsModelOpen(true)}
                           >
                            <h3 className='flex items-center'>+ Create New Workspace</h3>
                            </div>
                            {workspaceList.map((workspace) => (
                                <WorkspaceCard key={workspace.id} workspace={workspace} />
                            ))}
                           
                        </>
                    )}

                    {/* If "Shared Workspace" is active */}
                    {activeTab === "shared-workspace" &&(
                        <>
                        <div className="flex justify-center p-6 text-gray-500 border border-gray-300 rounded-lg cursor-pointer"
                            onClick={()=> setIsModelOpen(true)}
                        >
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
        <ModalWorkspace token={location.state.token} onResponse={handleWorkspaceResponse} isOpen = {isModelOpen} onClose ={()=> setIsModelOpen(false)} />
       </>
    
    );
}
