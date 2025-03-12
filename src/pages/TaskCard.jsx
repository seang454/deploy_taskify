import { motion } from "framer-motion";

const DropIndicator = ({ beforeId, column }) => {
  return (
    <div
      data-before={beforeId || "-1"}
      data-column={column}
      className="my-0.5 h-0.5 w-full  opacity-0"
    />
  );
};

const TaskCard = ({ title, id, column, handleDragStart }) => {
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable="true"
        onDragStart={(e) => handleDragStart(e, { title, id, column })}
        className="cursor-grab rounded   p-3 active:cursor-grabbing"
      >
        <div className="bg-white rounded-lg shadow-sm px-4 py-6">
          <p className="font-bold text-gray-700">{title}</p>
          <div className="text-sm text-gray-500 mt-2 line-clamp-2">
            Create wireframes and high-fidelity designs for the app's
          </div>
          <div className="text-xs text-gray-400 mt-4">Created at: 12:00 PM</div>
          <div className="flex items-center text-sm text-gray-600 mt-2">
            <span className="pr-2">Category:</span>
            <span className={`border-2 py-1 px-2 bg-red-300 rounded-lg`}>
              Mar 10,2025
            </span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default TaskCard;
