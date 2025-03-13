import {Clock, Filter, UserPlus} from "lucide-react";
import { useState,  } from "react";
import AddNewTaskPopUp from "../Components/AddNewTaskPopUp";
import { useParams } from "react-router-dom";

const WorkspacePage = () => {
    const { id } = useParams();
    console.log('id', id)
    const columns = [
        {
            id: 1,
            title: "To Do",
            tasks: [
                {
                    id: 1,
                    title: "Design Poster + Banner",
                    description:
                        "Create wireframes and high-fidelity designs for the app's main screens.",
                    createdDate: "2025-02-28",
                    category: "Design",
                    dueDate: "2025-03-10",
                    checklist: "2/5",
                    links: ["https://docs.google.com", "https://poster.png"],
                },
                {
                    id: 2,
                    title: "Implement Backend",
                    description: "Start implementing the backend with API in ISTAD's API Group.",
                    createdDate: "2025-02-12",
                    category: "Coding",
                    dueDate: "2025-03-10",
                },
                {
                    id: 3,
                    title: "Redesign User Interface",
                    createdDate: "2025-02-17",
                    dueDate: "2025-03-10",
                },
                {
                    id: 4,
                    title: "Fetch API for BA Project",
                    description: "API has been provided as the base URL.",
                    createdDate: "2025-02-10",
                    category: "Coding",
                    dueDate: "2025-03-10",
                    checklist: "10/10",
                    links: ["https://docs.google.com", "https://poster.png"],
                },
                {
                    id: 5,
                    title: "Homework about Math",
                    description: "Limit Exercise from p-10 to 38",
                    createdDate: "2025-02-10",
                    category: "Education",
                    dueDate: "2025-03-10",
                    checklist: "30/30",
                    links: ["https://docs.google.com", "https://poster.png"],
                },
            ],
        },
        {
            id: 2,
            title: "On Progress",
            tasks: [
                {
                    id: 1,
                    title: "Homepage UX/UI",
                    description: "Create placeholder and ensure responsiveness for all devices.",
                    createdDate: "2025-01-28",
                    category: "Design",
                    dueDate: "2025-01-30",
                },
                {
                    id: 2,
                    title: "Create a 3D Mockup",
                    description: "Create a 3D mockup with the client's product color palette.",
                    createdDate: "2025-01-28",
                    category: "Design",
                    dueDate: "2025-03-10",
                    links: ["poster.png"],
                },
                {
                    id: 3,
                    title: "Create About Us Page",
                    createdDate: "2025-02-20",
                    dueDate: "2025-03-10",
                },
                {
                    id: 4,
                    title: "Design User Interface",
                    createdDate: "2025-02-25",
                    dueDate: "2025-03-10",
                },
            ],
        },
        {
            id: 3,
            title: "Completed",
            tasks: [
                {
                    id: 1,
                    title: "Create New Logo",
                    description: "Design a logo using primary and accent colors.",
                    createdDate: "2025-01-01",
                    checklist: "5/5",
                    category: "Design",
                },
                {
                    id: 2,
                    title: "Make Components",
                    createdDate: "2025-01-05",
                    checklist: "5/5",
                    category: "Design",
                    links: ["poster.png", "https://docs.google.com"],
                },
                {

                    id: 3,
                    title: "Draft Ideas for Project",
                    description: "Outline a progress tracking project for multiple types of work.",
                    createdDate: "2024-11-12",
                },
                {
                    id: 4,
                    title: "Find Static Data",
                    createdDate: "2025-02-01",
                },
                {
                    id: 5,
                    title: "Sketch Placeholders",
                    description: "Create placeholders and find icons. Use Tailwind CSS v3.0.",
                    createdDate: "2024-12-28",
                    checklist: "8/8",
                    category: "Design",
                    links: ["poster.png"],
                },
            ],
        },
    ];
   

    return (
        <div className="min-h-screen p-8 bg-white dark:bg-[#121321]">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                {/* Title */}
                <div className="text-lg font-bold text-gray-800">
                    Final Project of Foundation G3-Taskify
                </div>

                {/* Buttons */}
                <div className="flex space-x-4">
                    {/* Filter & Search Button */}
                    <button
                        onClick={() => console.log("Filter & Search triggered")}
                        className="flex items-center px-3 py-2 text-gray-700 transition bg-gray-200 rounded-md hover:bg-gray-300"
                    >
                        <Filter className="mr-2" size={16} />
                        Filter & Search
                    </button>

                    {/* Add Member Button */}
                    <button
                        onClick={() => console.log("Add Member triggered")}
                        className="flex items-center px-3 py-2 text-gray-700 transition bg-gray-200 rounded-md hover:bg-gray-300"
                    >
                        <UserPlus className="mr-2" size={16} />
                        Add Member
                    </button>
                </div>
            </div>

            {/* Board Columns */}
            <div className="flex ">
                {columns.map((column) => (
                    <Column key={column.id} column={column} />
                ))}
            </div>
            
        </div>  
    );
};
// const token = localStorage.getItem("%$$");

// console.log('token', token) p
const Column = ({ column }) => {
    
    const [isModelOpen,setIsModelOpen] = useState(false);
    return (
        <>
        <div className="flex flex-col w-full p-4 bg-gray-100 rounded-lg shadow-md">
            {/* Column Header with the "+" button */}
            <div className="flex items-center justify-between pb-2 text-lg font-bold border-gray-300">
                <span>
                    {column.title}{" "}
                    <span className="px-2 py-1 text-sm font-medium bg-gray-300 rounded-full">
                        {column.tasks.length}
                    </span>
                </span>
                {/* "+" Button */}
                <button
                    onClick={() =>setIsModelOpen(true)}
                    className="px-2 py-1 text-gray-500 rounded-lg hover:text-gray-600"
                >
                    +
                </button>
            </div>

            {/* Task List */}
            <div className="mt-4">
                {column.tasks.length > 0 ? (
                    column.tasks.map((task) => (
                        <div key={task.id} className="mb-4">
                            <TaskCard task={task} />
                        </div>
                    ))
                ) : (
                    <div className="flex items-center justify-center h-32 text-sm italic text-gray-400">
                        {column.title === "Completed" ? "No archived tasks" : "No tasks available"}
                    </div>
                )}
            </div>
            
        </div>
        <AddNewTaskPopUp 
            isOpen={isModelOpen}
            onClose={() => setIsModelOpen(false)}
            
            />
        </>
    );
};


const TaskCard = ({ task }) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { month: "short", day: "numeric", year: "numeric" };
        return date.toLocaleDateString("en-US", options);
    };

    return (
        <div className="px-4 py-6 bg-white rounded-lg shadow-sm">
            {/* Task Title */}
            <div className="font-bold text-gray-700">{task.title}</div>

            {/* Task Description */}
            {task.description && (
                <div className="mt-2 text-sm text-gray-500 line-clamp-2">{task.description}</div>
            )}

            {/* Task Created Date */}
            <div className="mt-2 text-xs text-gray-400">Created: {formatDate(task.createdDate)}</div>

            {/* Task Category */}
            {task.category && (
                <div className="flex items-center mt-2 text-sm text-gray-600">
                    <span className="pr-2">Category:</span>
                    <span
                        className={`border-2 py-1 px-2 rounded-lg ${
                            task.category === "Design"
                                ? "border-amber-300 text-amber-300"
                                : task.category === "Coding"
                                    ? "border-blue-300 text-blue-300"
                                    : "border-green-300 text-green-300"
                        }`}
                    >
                        {task.category}
                    </span>
                </div>
            )}

            {/* Task Due Date */}
            {task.dueDate && (
                <div className="flex items-center justify-center p-1 mt-2 text-sm bg-red-200 rounded-md text-accent w-36">
                    <Clock strokeWidth={1} className="mr-1" width={18} height={18} />
                    {formatDate(task.dueDate)}
                </div>
            )}

            {/* Task Checklist */}
            {task.checklist && (
                <div className="mt-4 text-sm text-gray-700">
                    <span className="font-medium">Checklist:</span>{" "}
                    <span className="text-gray-600">{task.checklist}</span>
                </div>
            )}

            {/* Task Links */}
            {task.links && (
                <div className="mt-2 space-y-1 text-xs text-blue-500 underline">
                    {task.links.map((link, index) => (
                        <a
                            key={index}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block hover:text-blue-700"
                        >
                            {link}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default WorkspacePage;
