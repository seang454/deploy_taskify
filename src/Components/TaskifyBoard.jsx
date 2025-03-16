import React from "react";
import { Filter, UserPlus } from "lucide-react";
import ToDo from "./ToDo";
import OnProgress from "./OnProgress";
import Completed from "./Completed";

const TaskifyBoard = () => {
    const allColumns = [
        {
            id: 1,
            title: "To Do",
            tasks: [
                {
                    id: 1,
                    title: "Design Poster + Banner",
                    description:
                        "Create wireframes and high-fidelity designs for the app's main screens.",
                    createdDate: "Feb 28th, 2025",
                    category: "Design",
                    dueDate: "Mar 10th, 2025",
                    links: ["docs.google.c..", "poster.png"],
                },
                {
                    id: 2,
                    title: "Implementation Backend",
                    description: "Start implementing backend with API in ISTAD’s API Group.",
                    createdDate: "Feb 12th, 2025",
                    category: "Coding",
                    dueDate: "Mar 10th, 2025",
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
                    description: "Create placeholders and responsive UI for all devices.",
                    createdDate: "Jan 30th, 2025",
                    checklist: "6/10",
                    category: "Design",
                    dueDate: "Mar 10th, 2025",
                },
                {
                    id: 2,
                    title: "Create a 3D mockup",
                    description: "Create a 3D mockup for the client’s product with the given colors.",
                    createdDate: "Jan 28th, 2025",
                    category: "Design",
                    dueDate: "Mar 10th, 2025",
                    links: ["poster.png"],
                },
            ],
        },
        {
            id: 3,
            title: "Completed",
            tasks: [
                {
                    id: 1,
                    title: "Create new Logo",
                    description: "Create a logo with our primary and accent color.",
                    createdDate: "Jan 01st, 2025",
                    checklist: "5/5",
                    category: "Design",
                },
                {
                    id: 2,
                    title: "Make components",
                    createdDate: "Jan 05th, 2025",
                    category: "Coding",
                    links: ["docs.google.c..", "poster.png"],
                },
            ],
        },
    ];

    return (
        <div className="p-8 bg-white min-h-screen">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="text-lg font-bold text-gray-800 dark:tex">
                    Final Project of Foundation G3 - Taskify
                </div>
                <div className="flex space-x-4">
                    <button className="flex items-center text-gray-700 bg-gray-200 px-3 py-2 rounded-md hover:bg-gray-300 transition">
                        <Filter className="mr-2" size={16} />
                        Filter & Search
                    </button>
                    <button className="flex items-center text-gray-700 bg-gray-200 px-3 py-2 rounded-md hover:bg-gray-300 transition">
                        <UserPlus className="mr-2" size={16} />
                        Add Member
                    </button>
                </div>
            </div>
            {/* Board Columns */}
            <div className="flex justify-center px-30">
                <ToDo tasks={allColumns[0].tasks} />
                <OnProgress tasks={allColumns[1].tasks} />
                <Completed tasks={allColumns[2].tasks} />
            </div>
        </div>
    );
};

export default TaskifyBoard;
