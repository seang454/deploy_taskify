import { useState } from "react";
import TaskCard from "./TaskCard";
import { FiPlus } from "react-icons/fi";
import AddNewTaskPopUp from "../Components/AddNewTaskPopUp";
import { useGetMeQuery } from "../features/auth/authApiSlice";
import { useGetTasksQuery } from "../features/addTaskApi";
import { useParams } from "react-router";
import Kanban from "./Kanban";

// DropIndicator component
const DropIndicator = ({ beforeId, column }) => {
  return (
    <div
      data-before={beforeId || "-1"}
      data-column={column}
      className="my-0.5 h-0.5 w-full bg-primary opacity-0"
    />
  );
};

const Column = ({ title, headingColor, cards=[], column, setCards ,workspace_id }) => {
 
console.log('card in column', cards);
  // console.log('workspace_id', workspace_id)
  const [active, setActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  
  const handleDragStart = (e, card) => {
    
    e.dataTransfer.setData("cardId", card.id);
  };

  const handleDragEnd = (e) => {
    const cardId = e.dataTransfer.getData("cardId");

    setActive(false);
    clearHighlights();

    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);

    const before = element.dataset.before || "-1";

    if (before !== cardId) {
      let copy = [...cards];

      let cardToTransfer = copy.find((c) => c.id === cardId);
      if (!cardToTransfer) return;
      cardToTransfer = { ...cardToTransfer, column };

      copy = copy.filter((c) => c.id !== cardId);

      const moveToBack = before === "-1";

      if (moveToBack) {
        copy.push(cardToTransfer);
      } else {
        const insertAtIndex = copy.findIndex((el) => el.id === before);
        if (insertAtIndex === undefined) return;

        copy.splice(insertAtIndex, 0, cardToTransfer);
      }

      setCards(copy);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    highlightIndicator(e);

    setActive(true);
  };

  const clearHighlights = (els) => {
    const indicators = els || getIndicators();

    indicators.forEach((i) => {
      i.style.opacity = "0";
    });
  };

  const highlightIndicator = (e) => {
    const indicators = getIndicators();

    clearHighlights(indicators);

    const el = getNearestIndicator(e, indicators);

    el.element.style.opacity = "1";
  };

  const getNearestIndicator = (e, indicators) => {
    const DISTANCE_OFFSET = 50;

    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();

        const offset = e.clientY - (box.top + DISTANCE_OFFSET);

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    );

    return el;
  };

  const getIndicators = () => {
    return Array.from(document.querySelectorAll(`[data-column="${column}"]`));
  };

  const handleDragLeave = () => {
    clearHighlights();
    setActive(false);
  };


  // const filteredTasks = tasks ? tasks.filter((task) => task.column === column) : [];
  const filterCards = (cards || []).filter((c) => c.workspace_id === workspace_id);

console.log('filterCards', filterCards)
 
  return (
    <>
    <div className="w-full min-w-[310px] bg-white dark:bg-gray-500 rounded-md hover:shadow- p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between text-lg font-bold dark:text-white">
        <span>
          {title}{" "}
          <span className="px-2 py-1 text-sm font-medium bg-gray-200 text-primary rounded-2xl">
            {filterCards.length}
          </span>
        </span>
        <button
        onClick={() => setIsModalOpen(true)}
        className="px-1 py-1 text-white rounded-full hover:text-gray-200 bg-primary">
          <FiPlus />
        </button>
      </div>

      {/* Task List */}
      <div
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`mt-4 flex flex-col gap-4 h-auto w-full transition-colors ${
          active ? "bg-neutral-800/50" : "bg-neutral-800/0"
        }`}
        style={{
          overflowY: "hidden", // Prevent vertical scrollbars
          flexGrow: 1, // Allow the task list to grow based on available space
        }}
      >
        {filterCards.length > 0 ? (
          filterCards.map((card) => (
            <div key={card.id}>
              <TaskCard {...card} handleDragStart={handleDragStart} />
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center h-24 text-sm italic text-gray-500">
            No tasks available
          </div>
        )}

        <DropIndicator beforeId={null} column={column} />
      </div>
    </div>
    <AddNewTaskPopUp 
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            
            />
    </>
  );
};

export default Column;


