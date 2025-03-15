import { motion } from "framer-motion";
import { Clock,CheckSquare } from "lucide-react"; // Import icons for date & checklist
import { FiLink } from "react-icons/fi";
import { useGetCategoriesQuery } from "../features/categoriesApi";
import { useEffect, useState } from "react";
import { format } from 'date-fns';

const DropIndicator = ({ beforeId, column }) => {
  return (
    <div
      data-before={beforeId || "-1"}
      data-column={column}
      className="my-0.5 h-0.5 w-full  opacity-0"
    />
  );
};

const TaskCard = ({ title, id,note,link,created_at,checklist,category_id,due_date, column, handleDragStart }) => {
  const [categoryTitle, setCategoryTitle] = useState("");
  
  const { data: categoriesdata, error, isLoading } = useGetCategoriesQuery({ limit: 20, offset: 0 });

  useEffect(() => {
    if (categoriesdata) {
      const foundCategory = categoriesdata.find((cat) => cat.id === category_id);
      setCategoryTitle(foundCategory ? foundCategory.title : "Unknown");
    }
  }, [categoriesdata, category_id]);

  
const formatDate = (isoString) => {
  return format(new Date(isoString), "MMM do, yyyy");
};

// console.log(formatDate(created_at));
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
        <div className="font-roboto bg-white dark:bg-gray-400 rounded-lg shadow-md  hover:shadow-xl px-3 py-6">
          <p className="font-bold text-gray-700 text-[18px] dark:text-white">{title}</p>
          <div className="text-sm text-gray-500 mt-2 line-clamp-2">
            {note}
          </div>
           {/* Task Created Date */}
            <div className="text-sm text-gray-600 mt-4"> {/* Added spacing */}
               Created at : <span className="text-xs text-gray-500">{formatDate(created_at)}</span>
            </div>

              {checklist && (
                <div className="flex items-center text-blue-500 text-sm mt-2">
                    {/* Positioned immediately below "Created At" */}
                    <CheckSquare className="mr-2" size={16} /> {/* Icon */}
                    Checklist: {checklist}
                </div>
            )}


          <div className="flex items-center text-sm text-gray-600 mt-2 mb-2">
            
             {/* {category && (
                <div className="flex items-center text-sm text-gray-600 mt-2">
                    <span className="pr-2">Category:</span>
                    <span
                        className={`border-2 py-1 px-2 rounded-lg ${
                            category === "Design"
                                ? "border-amber-300 text-amber-300"
                                : category === "Coding"
                                    ? "border-blue-300 text-blue-300"
                                    : "border-green-300 text-green-300"
                        }`}
                    >
                        {category}
                    </span>
                </div>
            )} */}
           {category_id && (
            <div className="flex items-center text-sm text-gray-600 mt-2">
              <span className="pr-2">Category:</span>
              <span className="border-2 py-1 px-2 rounded-lg border-secondary text-secondary">
                {categoryTitle}
              </span>
            </div>
          )}
         
          </div>  
           {due_date && (
                <div className="flex items-center justify-center bg-red-200 rounded-md text-red-500   w-36 p-1 text-sm mt-4">
                    <Clock strokeWidth={1} className="mr-1" width={18} height={18} />
                    {formatDate(due_date)}
                </div>
            )}

             {link && (
                <div className=" flex  mt-4 space-y-1"><FiLink className="text-gray-600  mr-2  "/>
                    {link.map((link, index) => (
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
      </motion.div>
    </>
  );
};

export default TaskCard;



