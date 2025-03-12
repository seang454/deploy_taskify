// import { useState } from 'react'
// import { FiPlus, FiTrash } from "react-icons/fi";
// import { motion } from "framer-motion";
// import { FaFire } from "react-icons/fa";


// function Kanban() {

//   return (
//     <div className="h-screen w-full bg-slate-400 text-neutral-50">
//       <Board />
//     </div>
//   );
// };

// const Board = () => {
//   const [cards, setCards] = useState(DEFAULT_CARDS);

//   return (
//     <div className="flex h-full w-full gap-3 overflow-scroll p-12">
   
//       <Column
//         title="TODO"
//         column="todo"
//         headingColor="text-yellow-200"
//         cards={cards}
//         setCards={setCards}
//       />
//       <Column
//         title="In progress"
//         column="doing"
//         headingColor="text-blue-200"
//         cards={cards}
//         setCards={setCards}
//       />
//       <Column
//         title="Complete"
//         column="done"
//         headingColor="text-emerald-200"
//         cards={cards}
//         setCards={setCards}
//       />
//       <BurnBarrel setCards={setCards} />
//     </div>
//   );
// };

// const Column = ({ title, headingColor, cards, column, setCards }) => {
//   const [active, setActive] = useState(false);

//   const handleDragStart = (e, card) => {
//     e.dataTransfer.setData("cardId", card.id);
//   };

//   const handleDragEnd = (e) => {
//     const cardId = e.dataTransfer.getData("cardId");

//     setActive(false);
//     clearHighlights();

//     const indicators = getIndicators();
//     const { element } = getNearestIndicator(e, indicators);

//     const before = element.dataset.before || "-1";

//     if (before !== cardId) {
//       let copy = [...cards];

//       let cardToTransfer = copy.find((c) => c.id === cardId);
//       if (!cardToTransfer) return;
//       cardToTransfer = { ...cardToTransfer, column };

//       copy = copy.filter((c) => c.id !== cardId);

//       const moveToBack = before === "-1";

//       if (moveToBack) {
//         copy.push(cardToTransfer);
//       } else {
//         const insertAtIndex = copy.findIndex((el) => el.id === before);
//         if (insertAtIndex === undefined) return;

//         copy.splice(insertAtIndex, 0, cardToTransfer);
//       }

//       setCards(copy);
//     }
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     highlightIndicator(e);

//     setActive(true);
//   };

//   const clearHighlights = (els) => {
//     const indicators = els || getIndicators();

//     indicators.forEach((i) => {
//       i.style.opacity = "0";
//     });
//   };

//   const highlightIndicator = (e) => {
//     const indicators = getIndicators();

//     clearHighlights(indicators);

//     const el = getNearestIndicator(e, indicators);

//     el.element.style.opacity = "1";
//   };

//   const getNearestIndicator = (e, indicators) => {
//     const DISTANCE_OFFSET = 50;

//     const el = indicators.reduce(
//       (closest, child) => {
//         const box = child.getBoundingClientRect();

//         const offset = e.clientY - (box.top + DISTANCE_OFFSET);

//         if (offset < 0 && offset > closest.offset) {
//           return { offset: offset, element: child };
//         } else {
//           return closest;
//         }
//       },
//       {
//         offset: Number.NEGATIVE_INFINITY,
//         element: indicators[indicators.length - 1],
//       }
//     );

//     return el;
//   };

//   const getIndicators = () => {
//     return Array.from(document.querySelectorAll(`[data-column="${column}"]`));
//   };

//   const handleDragLeave = () => {
//     clearHighlights();
//     setActive(false);
//   };

//   const filteredCards = cards.filter((c) => c.column === column);

//   return (
    
//     <div className="w-56 shrink-0">
//       <div className="mb-3 flex items-center justify-between">
//         <h3 className={`font-medium  ${headingColor}`}>{title}</h3>
//         <span className="rounded text-sm text-neutral-400">
//           {filteredCards.length}
//         </span>
//       </div>
//       <div
//         onDrop={handleDragEnd}
//         onDragOver={handleDragOver}
//         onDragLeave={handleDragLeave}
//         className={`h-full w-full transition-colors ${
//           active ? "bg-neutral-800/50" : "bg-neutral-800/0"
//         }`}
//       >
//         {filteredCards.map((c) => {
//           return <Card key={c.id} {...c} handleDragStart={handleDragStart} />;
//         })}
//         <DropIndicator beforeId={null} column={column} />
//         <AddCard column={column} setCards={setCards} />
//       </div>
//     </div>
//   );
// };

// const Card = ({ title, id, column, handleDragStart }) => {
//   return (
//     <>
//       <DropIndicator beforeId={id} column={column} />
//       <motion.div
//         layout
//         layoutId={id}
//         draggable="true"
//         onDragStart={(e) => handleDragStart(e, { title, id, column })}
//         className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
//       >
//         <div className="bg-white rounded-lg shadow-sm px-4 py-6">
//         <p className="font-bold text-gray-700">{title}</p>
//          <div className="text-sm text-gray-500 mt-2 line-clamp-2">Create wireframes and high-fidelity designs for the app's </div>
//          <div className="text-xs text-gray-400 mt-4"> {/* Added spacing */}
//                 Created at: 12:00 PM
//             </div>
//              <div className="flex items-center text-sm text-gray-600 mt-2">
//                     <span className="pr-2">Category:</span>
//                     <span
//                         className={`border-2 py-1 px-2 bg-red-300 rounded-lg` }  >
//                         Mar 10,2025
//                     </span>
//                 </div>

        
//         </div>
//       </motion.div>
//     </>
//   );
// };

// const DropIndicator = ({ beforeId, column }) => {
//   return (
//     <div
//       data-before={beforeId || "-1"}
//       data-column={column}
//       className="my-0.5 h-0.5 w-full bg-violet-400 opacity-0"
//     />
//   );
// };

// const BurnBarrel = ({ setCards }) => {
//   const [active, setActive] = useState(false);

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     setActive(true);
//   };

//   const handleDragLeave = () => {
//     setActive(false);
//   };

//   const handleDragEnd = (e) => {
//     const cardId = e.dataTransfer.getData("cardId");

//     setCards((pv) => pv.filter((c) => c.id !== cardId));

//     setActive(false);
//   };

//   return (
//     <div
//       onDrop={handleDragEnd}
//       onDragOver={handleDragOver}
//       onDragLeave={handleDragLeave}
//       className={`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl ${
//         active
//           ? "border-red-800 bg-red-800/20 text-red-500"
//           : "border-neutral-500 bg-neutral-500/20 text-neutral-500"
//       }`}
//     >
//       {active ? <FaFire className="animate-bounce" /> : <FiTrash />}
//     </div>
//   );
// };

// const AddCard = ({ column, setCards }) => {
//   const [text, setText] = useState("");
//   const [adding, setAdding] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!text.trim().length) return;

//     const newCard = {
//       column,
//       title: text.trim(),
//       id: Math.random().toString(),
//     };

//     setCards((pv) => [...pv, newCard]);

//     setAdding(false);
//   };

//   return (
//     <>
//       {adding ? (
//         <motion.form layout onSubmit={handleSubmit}>
//           <textarea
//             onChange={(e) => setText(e.target.value)}
//             autoFocus
//             placeholder="Add new task..."
//             className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline-0"
//           />
//           <div className="mt-1.5 flex items-center justify-end gap-1.5">
//             <button
//               onClick={() => setAdding(false)}
//               className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
//             >
//               Close
//             </button>
//             <button
//               type="submit"
//               className="flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-xs text-blue-600 transition-colors hover:bg-neutral-300"
//             >
//               <span>Add</span>
//               <FiPlus />
//             </button>
//           </div>
//         </motion.form>
//       ) : (
//         <motion.button
//           layout
//           onClick={() => setAdding(true)}
//           className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
//         >
//           <span>Add card</span>
//           <FiPlus />
//         </motion.button>
//       )}
//     </>
//   );
// };

// const DEFAULT_CARDS = [
//   // BACKLOG
//   { title: "Look into render bug in dashboard", id: "1", column: "backlog" },
//   { title: "SOX compliance checklist", id: "2", column: "backlog" },
//   { title: "[SPIKE] Migrate to Azure", id: "3", column: "backlog" },
//   { title: "Document Notifications service", id: "4", column: "backlog" },
//   // TODO
//   {
//     title: "Research DB options for new microservice",
//     id: "5",
//     column: "todo",
//   },
//   { title: "Postmortem for outage", id: "6", column: "todo" },
//   { title: "Sync with product on Q3 roadmap", id: "7", column: "todo" },

//   // DOING
//   {
//     title: "Refactor context providers to use Zustand",
//     id: "8",
//     column: "doing",
//   },
//   { title: "Add logging to daily CRON", id: "9", column: "doing" },
//   // DONE
//   {
//     title: "Set up DD dashboards for Lambda listener",
//     id: "10",
//     column: "done",
//   },
// ];
// export default Kanban;
// import { useState } from "react";
// import Column from "./Column";

// const DEFAULT_CARDS = [
//   { title: "Look into render bug in dashboard", id: "1", column: "todo" },
//   { title: "SOX compliance checklist", id: "2", column: "todo" },
//   { title: "[SPIKE] Migrate to Azure", id: "3", column: "doing" },
//   { title: "Document Notifications service", id: "4", column: "done" },
// ];

// function Kanban() {
//   const [cards, setCards] = useState(DEFAULT_CARDS);

//   return (
//     <div className="h-screen w-full bg-slate-400 text-neutral-50">
//       <div className="flex h-full w-full gap-3 overflow-scroll p-12">
//         <Column
//           title="TODO"
//           column="todo"
//           headingColor="text-yellow-200"
//           cards={cards}
//           setCards={setCards}
//         />
//         <Column
//           title="In Progress"
//           column="doing"
//           headingColor="text-blue-200"
//           cards={cards}
//           setCards={setCards}
//         />
//         <Column
//           title="Complete"
//           column="done"
//           headingColor="text-emerald-200"
//           cards={cards}
//           setCards={setCards}
//         />
//       </div>
//     </div>
//   );
// }

// export default Kanban;
// import { useState } from "react";
// import { Clock } from "lucide-react";
// import Column from "./Column";

// const DEFAULT_CARDS = [
//   { title: "Look into render bug in dashboard", id: "1", column: "todo", createdDate: "2025-02-28", dueDate: "2025-03-10" },
//   { title: "SOX compliance checklist", id: "2", column: "todo", createdDate: "2025-02-12", dueDate: "2025-03-10" },
//   { title: "[SPIKE] Migrate to Azure", id: "3", column: "doing", createdDate: "2025-02-17", dueDate: "2025-03-10" },
//   { title: "Document Notifications service", id: "4", column: "done", createdDate: "2025-02-10", dueDate: "2025-03-10" },
// ];

// function Kanban() {
//   const [cards, setCards] = useState(DEFAULT_CARDS);

//   return (
//     <div className="min-h-screen p-8 bg-white dark:bg-[#121321]">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-6">
//         <div className="text-lg font-bold text-gray-800">
//           Kanban Board
//         </div>

//         {/* Add Member Button */}
//         <div className="flex space-x-4">
//           <button
//             onClick={() => console.log("Add Member triggered")}
//             className="flex items-center px-3 py-2 text-gray-700 transition bg-gray-200 rounded-md hover:bg-gray-300"
//           >
//             <span className="mr-2">+</span>
//             Add Member
//           </button>
//         </div>
//       </div>

//       {/* Board Columns */}
//       <div className="flex gap-3 overflow-scroll">
//         <Column
//           title="To Do"
//           column="todo"
//           headingColor="text-yellow-200"
//           cards={cards}
//           setCards={setCards}
//         />
//         <Column
//           title="In Progress"
//           column="doing"
//           headingColor="text-blue-200"
//           cards={cards}
//           setCards={setCards}
//         />
//         <Column
//           title="Complete"
//           column="done"
//           headingColor="text-emerald-200"
//           cards={cards}
//           setCards={setCards}
//         />
//       </div>
//     </div>
//   );
// }

// export default Kanban;
import { useState } from "react";
import { Clock } from "lucide-react";
import Column from "./Column";

const DEFAULT_CARDS = [
  { title: "Look into render bug in dashboard", id: "1", column: "todo", createdDate: "2025-02-28", dueDate: "2025-03-10" },
  { title: "SOX compliance checklist", id: "2", column: "todo", createdDate: "2025-02-12", dueDate: "2025-03-10" },
  { title: "[SPIKE] Migrate to Azure", id: "3", column: "doing", createdDate: "2025-02-17", dueDate: "2025-03-10" },
  { title: "Document Notifications service", id: "4", column: "done", createdDate: "2025-02-10", dueDate: "2025-03-10" },
];

function Kanban() {
  const [cards, setCards] = useState(DEFAULT_CARDS);

  return (
    <div className=" p-8 bg-white dark:bg-[#121321]">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="text-lg font-bold text-gray-800">
          Kanban Board
        </div>

        {/* Add Member Button */}
        <div className="flex space-x-4">
          <button
            onClick={() => console.log("Add Member triggered")}
            className="flex items-center px-3 py-2 text-gray-700 transition bg-gray-200 rounded-md hover:bg-gray-300"
          >
            <span className="mr-2">+</span>
            Add Member
          </button>
        </div>
      </div>

      {/* Board Columns */}
      <div className="flex gap-3 overflow-x-auto max-w-full">
        <Column
          title="To Do"
          column="todo"
          headingColor="text-yellow-200"
          cards={cards}
          setCards={setCards}
        />
        <Column
          title="In Progress"
          column="doing"
          headingColor="text-blue-200"
          cards={cards}
          setCards={setCards}
        />
        <Column
          title="Complete"
          column="done"
          headingColor="text-emerald-200"
          cards={cards}
          setCards={setCards}
        />
      </div>
    </div>
  );
}

export default Kanban;

