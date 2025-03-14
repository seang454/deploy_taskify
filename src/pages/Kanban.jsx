import { useEffect, useState } from "react";
import Column from "./Column";
import AddMemberForm from "../Components/MemberCard";
import AddNewTaskPopUp from "../Components/AddNewTaskPopUp";
import { useLocation, useParams } from "react-router";
import { useGetWorkspacesQuery } from "../features/workspaceApi";
import { getAceAccessToken } from "../lib/secureLocalStorage";
import { useGetMeQuery } from "../features/auth/authApiSlice";
import { useGetTasksQuery } from "../features/addTaskApi";

function Kanban() {
  const location = useLocation();
  console.log('location', location)
  const [cards, setCards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const token = getAceAccessToken()
  console.log("before get data :", token)
  const {data: userData} = useGetMeQuery()
  // console.log("my data in kanban : ", data);

  // Set userId once data is available
  // useEffect(() => {
  //   if (data?.id) {
  //     setUserId(data?.id);
  //   }
  // }, [data]);

  // console.log("My user ID:", userId);

  const { id } = useParams();
  console.log("on workspace get")
  const { data: workspaceList } = useGetWorkspacesQuery(location?.state);


  const workspace = workspaceList?.find((w) => w.id === id);
    // const { data: tasks, error, isLoading } = useGetTasksQuery();
  // console.log("API Response1:", { tasks, error, isLoading });
  // console.log('tasks', tasks)
  console.log("Fetching tasks...");

  // console.log("Found workspace:", workspace);
  // console.log("API Response:", workspace);


  console.log("workspace", workspace);
  console.log("cards :", cards);

  const {
    data: taskdata,
    error,
    isLoading,
  } = useGetTasksQuery({ limit: 20, offset: 0 });

  useEffect(() => {
    console.log("API Response:", { taskdata, error, isLoading });
    setCards(taskdata);
  }, [taskdata, error, isLoading]);
 
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="font-roboto p-8 bg-gray-100 dark:bg-[#121321]">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 mb-6 md:flex-row">
        <div className="p-2 font-bold text-center bg-gray-200 rounded-lg text-txt16 md:text-txt20 dark:bg-gray-800 text-primary dark:text-white hover:shadow-sm">
          {workspace?.title || "Loading..."}
        </div>

        {/* Add Member Button */}
        <div className="flex space-x-2 md:space-x-4">
          <button
            onClick={openModal}
            className="flex items-center px-3 py-2 text-gray-700 transition bg-gray-200 rounded-md hover:bg-gray-300"
          >
            <span className="mr-2">+</span>
            Add Member
          </button>
        </div>
      </div>

      {/* Board Columns */}
      <div className="flex max-w-full gap-3 overflow-x-auto">
        <Column
        workspace_id={id}
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
          cards={[]}
          setCards={setCards}
        />
        <Column
          title="Complete"
          column="done"
          headingColor="text-emerald-200"
          cards={[]}
          setCards={setCards}
        />
      </div>

      {/* Add Member Modal */}
      <AddMemberForm isOpen={isModalOpen} closeModal={closeModal} />
      {/* Add task Modal */}
    </div>
  );
}

export default Kanban;
