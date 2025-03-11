import React from "react";
import { Clock, CheckSquare } from "lucide-react"; // Import icons for date & checklist

const TaskCard = ({ task }) => {
    // Helper function to format dates
    const formatDate = (dateString) => {
        const cleanedDate = dateString.replace(/(st|nd|rd|th)/g, ""); // Removes ordinal suffixes
        const date = new Date(cleanedDate);

        // Check for valid date
        if (isNaN(date)) {
            return "Invalid Date";
        }

        const options = { month: "short", day: "numeric", year: "numeric" };
        return date.toLocaleDateString("en-US", options);
    };

    return (
        <div className="bg-white rounded-lg shadow-sm px-4 py-6">
            {/* Task Title */}
            <div className="font-bold text-gray-700">{task.title}</div>

            {/* Task Description */}
            {task.description && (
                <div className="text-sm text-gray-500 mt-2 line-clamp-2">
                    {task.description}
                </div>
            )}

            {/* Task Created Date */}
            <div className="text-xs text-gray-400 mt-4"> {/* Added spacing */}
                Created at: {formatDate(task.createdDate)}
            </div>

            {/* Task Checklist */}
            {task.checklist && (
                <div className="flex items-center text-blue-500 text-sm mt-2">
                    {/* Positioned immediately below "Created At" */}
                    <CheckSquare className="mr-2" size={16} /> {/* Icon */}
                    Checklist: {task.checklist}
                </div>
            )}

            {/* Task Category */}
            {task.category && (
                <div className="flex items-center text-sm text-gray-600 mt-2">
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
                <div className="flex items-center bg-red-200 rounded-md text-accent justify-center w-36 p-1 text-sm mt-4">
                    <Clock strokeWidth={1} className="mr-1" width={18} height={18} />
                    {formatDate(task.dueDate)}
                </div>
            )}

            {/* Task Links */}
            {task.links && (
                <div className="mt-4 space-y-1">
                    {task.links.map((link, index) => (
                        <a
                            key={index}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-blue-500 text-xs underline hover:text-blue-700"
                        >
                            {link}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TaskCard;