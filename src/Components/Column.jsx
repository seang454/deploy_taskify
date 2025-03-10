import React from "react";
import TaskCard from "./TaskCard";

const Column = ({ title, tasks, onAddTask }) => {
    return (
        <div className="w-72 bg-gray-100 rounded-md shadow-md p-6 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between text-lg font-bold">
                <span>
                    {title}{" "}
                    <span className="bg-gray-300 px-2 py-1 rounded-full text-sm font-medium">
                        {tasks.length}
                    </span>
                </span>
                <button
                    onClick={onAddTask}
                    className="text-gray-500 hover:text-gray-700 rounded"
                >
                    +
                </button>
            </div>

            {/* Task List */}
            <div className="mt-4">
                {tasks.length > 0 ? (
                    tasks.map((task) => (
                        <div key={task.id} className="mb-4">
                            <TaskCard task={task} />
                        </div>
                    ))
                ) : (
                    <div className="text-gray-500 text-sm italic flex items-center justify-center h-24">
                        No tasks available
                    </div>
                )}
            </div>
        </div>
    );
};

export default Column;