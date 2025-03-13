// // import {Clock, Filter, UserPlus} from "lucide-react";

// // const WorkspacePage = () => {
// //     const columns = [
// //         {
// //             id: 1,
// //             title: "To Do",
// //             tasks: [
// //                 {
// //                     id: 1,
// //                     title: "Design Poster + Banner",
// //                     description:
// //                         "Create wireframes and high-fidelity designs for the app's main screens.",
// //                     createdDate: "2025-02-28",
// //                     category: "Design",
// //                     dueDate: "2025-03-10",
// //                     checklist: "2/5",
// //                     links: ["https://docs.google.com", "https://poster.png"],
// //                 },
// //                 {
// //                     id: 2,
// //                     title: "Implement Backend",
// //                     description: "Start implementing the backend with API in ISTAD's API Group.",
// //                     createdDate: "2025-02-12",
// //                     category: "Coding",
// //                     dueDate: "2025-03-10",
// //                 },
// //                 {
// //                     id: 3,
// //                     title: "Redesign User Interface",
// //                     createdDate: "2025-02-17",
// //                     dueDate: "2025-03-10",
// //                 },
// //                 {
// //                     id: 4,
// //                     title: "Fetch API for BA Project",
// //                     description: "API has been provided as the base URL.",
// //                     createdDate: "2025-02-10",
// //                     category: "Coding",
// //                     dueDate: "2025-03-10",
// //                     checklist: "10/10",
// //                     links: ["https://docs.google.com", "https://poster.png"],
// //                 },
// //                 {
// //                     id: 5,
// //                     title: "Homework about Math",
// //                     description: "Limit Exercise from p-10 to 38",
// //                     createdDate: "2025-02-10",
// //                     category: "Education",
// //                     dueDate: "2025-03-10",
// //                     checklist: "30/30",
// //                     links: ["https://docs.google.com", "https://poster.png"],
// //                 },
// //             ],
// //         },
// //         {
// //             id: 2,
// //             title: "On Progress",
// //             tasks: [
// //                 {
// //                     id: 1,
// //                     title: "Homepage UX/UI",
// //                     description: "Create placeholder and ensure responsiveness for all devices.",
// //                     createdDate: "2025-01-28",
// //                     category: "Design",
// //                     dueDate: "2025-01-30",
// //                 },
// //                 {
// //                     id: 2,
// //                     title: "Create a 3D Mockup",
// //                     description: "Create a 3D mockup with the client's product color palette.",
// //                     createdDate: "2025-01-28",
// //                     category: "Design",
// //                     dueDate: "2025-03-10",
// //                     links: ["poster.png"],
// //                 },
// //                 {
// //                     id: 3,
// //                     title: "Create About Us Page",
// //                     createdDate: "2025-02-20",
// //                     dueDate: "2025-03-10",
// //                 },
// //                 {
// //                     id: 4,
// //                     title: "Design User Interface",
// //                     createdDate: "2025-02-25",
// //                     dueDate: "2025-03-10",
// //                 },
// //             ],
// //         },
// //         {
// //             id: 3,
// //             title: "Completed",
// //             tasks: [
// //                 {
// //                     id: 1,
// //                     title: "Create New Logo",
// //                     description: "Design a logo using primary and accent colors.",
// //                     createdDate: "2025-01-01",
// //                     checklist: "5/5",
// //                     category: "Design",
// //                 },
// //                 {
// //                     id: 2,
// //                     title: "Make Components",
// //                     createdDate: "2025-01-05",
// //                     checklist: "5/5",
// //                     category: "Design",
// //                     links: ["poster.png", "https://docs.google.com"],
// //                 },
// //                 {

// //                     id: 3,
// //                     title: "Draft Ideas for Project",
// //                     description: "Outline a progress tracking project for multiple types of work.",
// //                     createdDate: "2024-11-12",
// //                 },
// //                 {
// //                     id: 4,
// //                     title: "Find Static Data",
// //                     createdDate: "2025-02-01",
// //                 },
// //                 {
// //                     id: 5,
// //                     title: "Sketch Placeholders",
// //                     description: "Create placeholders and find icons. Use Tailwind CSS v3.0.",
// //                     createdDate: "2024-12-28",
// //                     checklist: "8/8",
// //                     category: "Design",
// //                     links: ["poster.png"],
// //                 },
// //             ],
// //         },
// //     ];

// //     return (
// //         <div className="min-h-screen p-8 bg-white dark:bg-[#121321]">
// //             {/* Header */}
// //             <div className="flex items-center justify-between mb-6">
// //                 {/* Title */}
// //                 <div className="text-lg font-bold text-gray-800">
// //                     Final Project of Foundation G3-Taskify
// //                 </div>

// //                 {/* Buttons */}
// //                 <div className="flex space-x-4">
// //                     {/* Filter & Search Button */}
// //                     <button
// //                         onClick={() => console.log("Filter & Search triggered")}
// //                         className="flex items-center px-3 py-2 text-gray-700 transition bg-gray-200 rounded-md hover:bg-gray-300"
// //                     >
// //                         <Filter className="mr-2" size={16} />
// //                         Filter & Search
// //                     </button>

// //                     {/* Add Member Button */}
// //                     <button
// //                         onClick={() => console.log("Add Member triggered")}
// //                         className="flex items-center px-3 py-2 text-gray-700 transition bg-gray-200 rounded-md hover:bg-gray-300"
// //                     >
// //                         <UserPlus className="mr-2" size={16} />
// //                         Add Member
// //                     </button>
// //                 </div>
// //             </div>

// //             {/* Board Columns */}
// //             <div className="flex ">
// //                 {columns.map((column) => (
// //                     <Column key={column.id} column={column} />
// //                 ))}
// //             </div>
// //         </div>
// //     );
// // };

// // const Column = ({ column }) => {
// //     return (
// //         <div className="flex flex-col w-full p-4 bg-gray-100 rounded-lg shadow-md">
// //             {/* Column Header with the "+" button */}
// //             <div className="flex items-center justify-between pb-2 text-lg font-bold border-gray-300">
// //                 <span>
// //                     {column.title}{" "}
// //                     <span className="px-2 py-1 text-sm font-medium bg-gray-300 rounded-full">
// //                         {column.tasks.length}
// //                     </span>
// //                 </span>
// //                 {/* "+" Button */}
// //                 <button
// //                     onClick={() => console.log(`Add task to column: ${column.title}`)}
// //                     className="px-2 py-1 text-gray-500 rounded-lg hover:text-gray-600"
// //                 >
// //                     +
// //                 </button>
// //             </div>

// //             {/* Task List */}
// //             <div className="mt-4">
// //                 {column.tasks.length > 0 ? (
// //                     column.tasks.map((task) => (
// //                         <div key={task.id} className="mb-4">
// //                             <TaskCard task={task} />
// //                         </div>
// //                     ))
// //                 ) : (
// //                     <div className="flex items-center justify-center h-32 text-sm italic text-gray-400">
// //                         {column.title === "Completed" ? "No archived tasks" : "No tasks available"}
// //                     </div>
// //                 )}
// //             </div>
// //         </div>
// //     );
// // };


// // const TaskCard = ({ task }) => {
// //     const formatDate = (dateString) => {
// //         const date = new Date(dateString);
// //         const options = { month: "short", day: "numeric", year: "numeric" };
// //         return date.toLocaleDateString("en-US", options);
// //     };

// //     return (
// //         <div className="px-4 py-6 bg-white rounded-lg shadow-sm">
// //             {/* Task Title */}
// //             <div className="font-bold text-gray-700">{task.title}</div>

// //             {/* Task Description */}
// //             {task.description && (
// //                 <div className="mt-2 text-sm text-gray-500 line-clamp-2">{task.description}</div>
// //             )}

// //             {/* Task Created Date */}
// //             <div className="mt-2 text-xs text-gray-400">Created: {formatDate(task.createdDate)}</div>

// //             {/* Task Category */}
// //             {task.category && (
// //                 <div className="flex items-center mt-2 text-sm text-gray-600">
// //                     <span className="pr-2">Category:</span>
// //                     <span
// //                         className={`border-2 py-1 px-2 rounded-lg ${
// //                             task.category === "Design"
// //                                 ? "border-amber-300 text-amber-300"
// //                                 : task.category === "Coding"
// //                                     ? "border-blue-300 text-blue-300"
// //                                     : "border-green-300 text-green-300"
// //                         }`}
// //                     >
// //                         {task.category}
// //                     </span>
// //                 </div>
// //             )}

// //             {/* Task Due Date */}
// //             {task.dueDate && (
// //                 <div className="flex items-center justify-center p-1 mt-2 text-sm bg-red-200 rounded-md text-accent w-36">
// //                     <Clock strokeWidth={1} className="mr-1" width={18} height={18} />
// //                     {formatDate(task.dueDate)}
// //                 </div>
// //             )}

// //             {/* Task Checklist */}
// //             {task.checklist && (
// //                 <div className="mt-4 text-sm text-gray-700">
// //                     <span className="font-medium">Checklist:</span>{" "}
// //                     <span className="text-gray-600">{task.checklist}</span>
// //                 </div>
// //             )}

// //             {/* Task Links */}
// //             {task.links && (
// //                 <div className="mt-2 space-y-1 text-xs text-blue-500 underline">
// //                     {task.links.map((link, index) => (
// //                         <a
// //                             key={index}
// //                             href={link}
// //                             target="_blank"
// //                             rel="noopener noreferrer"
// //                             className="block hover:text-blue-700"
// //                         >
// //                             {link}
// //                         </a>
// //                     ))}
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default WorkspacePage;

// import React, { useState } from "react";
// import { DndContext, closestCorners, useDroppable } from "@dnd-kit/core";
// import { arrayMove, SortableContext, verticalListSortingStrategy, useSortable } from "@dnd-kit/sortable";
// import { Clock, Filter, UserPlus } from "lucide-react";
// import { CSS } from "@dnd-kit/utilities";

// const WorkspacePage = () => {
//     const [columns, setColumns] = useState([
//         {
//             id: 1,
//             title: "To Do",
//             tasks: [
//                 { id: 1, title: "Design Poster + Banner", description: "Create wireframes", createdDate: "2025-02-28", category: "Design", dueDate: "2025-03-10" },
//                 { id: 2, title: "Implement Backend", description: "Start coding backend", createdDate: "2025-02-12", category: "Coding", dueDate: "2025-03-10" },
//             ],
//         },
//         {
//             id: 2,
//             title: "On Progress",
//             tasks: [
//                 { id: 3, title: "Homepage UX/UI", description: "Create responsive design", createdDate: "2025-01-28", category: "Design", dueDate: "2025-01-30" },
//                 { id: 4, title: "Create a 3D Mockup", createdDate: "2025-01-28", dueDate: "2025-03-10" },
           
//             ],
//         },
//         {
//             id: 3,
//             title: "Done",
//             tasks: [], // ✅ Empty column to test drag-and-drop
//         },
//     ]);

//     // ✅ Handle Drag End
//     const handleDragEnd = (event) => {
//         const { active, over } = event;

//         if (!over) return;

//         setColumns((prev) => {
//             const sourceColumn = prev.find((col) =>
//                 col.tasks.some((task) => task.id === active.id)
//             );
//             const targetColumn = prev.find((col) =>
//                 col.id === Number(over.id)
//             );

//             if (sourceColumn && targetColumn) {
//                 const oldIndex = sourceColumn.tasks.findIndex((task) => task.id === active.id);

//                 // ✅ Remove the task from source column
//                 const [movedTask] = sourceColumn.tasks.splice(oldIndex, 1);

//                 // ✅ If target column has tasks, place it at the right position
//                 if (targetColumn.tasks.length > 0) {
//                     const newIndex = targetColumn.tasks.findIndex((task) => task.id === over.id);
//                     targetColumn.tasks.splice(newIndex !== -1 ? newIndex : targetColumn.tasks.length, 0, movedTask);
//                 } else {
//                     // ✅ If target column is empty, push task directly
//                     targetColumn.tasks.push(movedTask);
//                 }
//             }

//             return [...prev];
//         });
//     };

//     return (
//         <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
//             <div className="min-h-screen p-8 bg-white dark:bg-[#121321]">
//                 {/* Header */}
//                 <div className="flex items-center justify-between mb-6">
//                     <div className="text-lg font-bold text-gray-800">
//                         Final Project of Foundation G3-Taskify
//                     </div>
//                     <div className="flex space-x-4">
//                         <button className="flex items-center px-3 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300">
//                             <Filter className="mr-2" size={16} />
//                             Filter & Search
//                         </button>
//                         <button className="flex items-center px-3 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300">
//                             <UserPlus className="mr-2" size={16} />
//                             Add Member
//                         </button>
//                     </div>
//                 </div>

//                 {/* ✅ Board Columns */}
//                 <div className="flex gap-4">
//                     {columns.map((column) => (
//                         <Column key={column.id} column={column} />
//                     ))}
//                 </div>
//             </div>
//         </DndContext>
//     );
// };
// // const token = localStorage.getItem("%$$");

// // ✅ Column Component with Droppable Support
// const Column = ({ column }) => {
//     const { setNodeRef, isOver } = useDroppable({
//         id: column.id,
//     });

//     return (
//         <div
//             ref={setNodeRef}
//             className={`flex flex-col w-1/3 p-4 rounded-lg shadow-md transition ${
//                 isOver ? "bg-blue-100" : "bg-gray-100"
//             }`}
//         >
//             <div className="flex items-center justify-between pb-2 text-lg font-bold border-b border-gray-300">
//                 <span>
//                     {column.title}
//                     <span className="px-2 py-1 text-sm font-medium bg-gray-300 rounded-full">
//                         {column.tasks.length}
//                     </span>
//                 </span>
//                 <button className="px-2 py-1 text-gray-500 rounded-lg hover:text-gray-600">+</button>
//             </div>

//             {/* ✅ Wrap tasks in SortableContext */}
//             <SortableContext
//                 items={column.tasks.map((task) => task.id)}
//                 strategy={verticalListSortingStrategy}
//             >
//                 <div className="mt-4 space-y-4 min-h-[100px]">
//                     {column.tasks.length === 0 ? (
//                         <div className="py-6 text-center text-gray-400">Drop tasks here</div>
//                     ) : (
//                         column.tasks.map((task) => (
//                             <TaskCard key={task.id} task={task} />
//                         ))
//                     )}
//                 </div>
//             </SortableContext>
//         </div>
//         <AddNewTaskPopUp 
//             isOpen={isModelOpen}
//             onClose={() => setIsModelOpen(false)}
//             // token={token}
//             />
//         </>
//     );
// };

// // ✅ TaskCard Component with Drag-and-Drop Support
// const TaskCard = ({ task }) => {
//     const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
//         id: task.id,
//     });

//     const style = {
//         transform: CSS.Transform.toString(transform),
//         transition,
//     };

//     const formatDate = (dateString) => {
//         const date = new Date(dateString);
//         if (isNaN(date)) return "Invalid Date";
//         return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
//     };

//     return (
//         <div
//             ref={setNodeRef}
//             {...attributes}
//             {...listeners}
//             style={style}
//             className="px-4 py-6 bg-white rounded-lg shadow-sm cursor-grab active:cursor-grabbing"
//         >
//             <div className="font-bold text-gray-700">{task.title}</div>
//             {task.description && (
//                 <div className="mt-2 text-sm text-gray-500 line-clamp-2">
//                     {task.description}
//                 </div>
//             )}
//             <div className="mt-4 text-xs text-gray-400">
//                 Created at: {formatDate(task.createdDate)}
//             </div>
//             {task.dueDate && (
//                 <div className="flex items-center justify-center p-1 mt-4 text-sm bg-red-200 rounded-md text-accent w-36">
//                     <Clock strokeWidth={1} className="mr-1" width={18} height={18} />
//                     {formatDate(task.dueDate)}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default WorkspacePage;
