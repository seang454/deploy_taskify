import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faXmark, faCircleCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaCloudUploadAlt } from "react-icons/fa";


export default function EditTaskPupUp({ isOpen, onClose, token }) {
  console.log("isopen",isOpen);
  console.log("token",token)
  if (!isOpen) return null;

  const initialValues = {
    title: "",
    note: "",
    file: null,
    due_date: "",
    reminder_date: "",
    assignee: "",
    category_id: "",
    checklist: [{ text: "Sketch low-fidelity wireframes", checked: false }],
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Task title is required"),
    note: Yup.string(),
    due_date: Yup.string().required("Due date is required"),
    reminder_date: Yup.string(),
    assignee: Yup.string().required("Assignee is required"),
  });

  const [tasks, setTasks] = useState([
    { id: 1, text: "Sketch low-fidelity wireframes", completed: false },
    { id: 2, text: "Sketch low-fidelity wireframes", completed: false },
  ]);

  const toggleCompletion = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <div className="font-roboto inset-0 fixed
       top-0 bottom-0 z-50 flex items-center justify-center bg-black  bg-opacity-50">
        <div className="bg-white dark:bg-gray-900 dark:text-gray-200 p-6 rounded-lg shadow-lg w-[95%] max-w-5xl relative flex flex-col ">
          {/* Header */}
          <div className="text-xl font-semibold flex justify-between items-center">
            <h3>
              <span>Final Project of Foundation G3-Taskify</span>
              <span className="px-1">
                <FontAwesomeIcon icon={faGreaterThan} />
              </span>
              <span className="pr-1">Design User Interface</span>
            </h3>
            <button
            onClick={onClose}
            className="text-xl text-gray-500 hover:text-primary dark:text-gray-400 ">
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>

          {/* Divider */}
          <div className="mx-3 bg-transparent w-full mt-4 border-[2px] border-dashed border-secondary"></div>

          {/* Form Section */}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => console.log("values :", values)}
          >
            <Form className="flex-grow p-6  rounded-lg space-y-4 flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Section */}
                <div>
                  {/* Task Title */}
                  <div className="pb-5 xl:pb-7">
                    <label className="text-primary  font-medium">Change Task Title</label>
                    <Field
                      type="text"
                      placeholder="Your new task title"
                      name="title"
                      className="w-full border dark:bg-gray-800 border-primary rounded-md p-2"
                    />
                    <ErrorMessage name="title" component="div" className="text-red-500 text-sm" />
                  </div>

                  {/* Description */}
                  <div className="pb-5 xl:pb-7">
                    <label className="text-primary  font-medium">Change Description</label>
                    <Field
                      as="textarea"
                      name="description"
                      placeholder="Change description"
                      className="w-full border border-primary dark:bg-gray-800 rounded-md p-2 h-24"
                    />
                  </div>

                  {/* File Upload */}
                  <div className="border pb-5 xl:pb-7 dark:bg-gray-800 border-primary dark:text-secondary p-6 rounded-lg flex flex-col items-center justify-center">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full cursor-pointer">
                      <FaCloudUploadAlt className="text-gray-400 mb-2" size={30} />
                      <span className="text-gray-400 text-sm">Click to upload your file</span>
                      <span className="text-xs text-gray-500">Max. File Size: 30MB</span>
                      <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                    <button type="button" className="bg-primary text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600">
                      Browse File
                    </button>
                  </div>

                  {/* Checklist */}
                  <div className="border pb-5 xl:pb-7 rounded-lg p-4 mt-3  border-primary bg-white dark:bg-gray-800">
                    <h2 className="text-lg font-semibold text-primary">Creating Components</h2>
                    <ul className="mt-4">
                      {tasks.map((task) => (
                        <li key={task.id} className="flex items-center justify-between py-2">
                          <label className="flex dark:bg-gray-800 items-center space-x-2">
                            <input
                              type="checkbox"
                              checked={task.completed}
                              onChange={() => toggleCompletion(task.id)}
                              className="form-checkbox h-5 w-5 dark:bg-gray-800 text-primary"
                            />
                            <span>{task.text}</span>
                          </label>
                          <button onClick={() => removeTask(task.id)} className="text-red-500">
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </li>
                      ))}
                    </ul>
                    <div className="flex justify-end">
                      <button className="bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-lg mt-4">
                        Add Checklist
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Section */}
                <div className="flex flex-col ">
                  {/* Due Date & Reminder */}
                  <div className=" pb-5 xl:pb-7">
                    <label className="text-primary font-medium">Due Date</label>
                    <Field type="date" name="due_date" className="w-full border dark:bg-gray-800 border-primary rounded-md p-2" />
                  </div>
                  <div className=" pb-5 xl:pb-7">
                    <label className="text-primary font-medium">Set Reminder</label>
                    <Field type="date" name="reminder_date" className="w-full dark:bg-gray-800 border border-primary rounded-md p-2" />
                  </div>

                  {/* Assignee & Category */}
                  <div className=" pb-5 xl:pb-7">
                    <label className="text-primary font-medium">Assigns to</label>
                    <Field as="select" name="assignee" className="w-full dark:bg-gray-800 border border-primary rounded-md p-2">
                      <option value="">Select</option>
                      <option value="Mr. Say Seyha">Mr. Say Seyha</option>
                    </Field>
                  </div>
                  <div className=" pb-5 xl:pb-7">
                    <label className="text-primary font-medium">Category</label>
                    <Field as="select" name="category_id" className="w-full dark:bg-gray-800 border border-primary rounded-md p-2">
                    <option value="">Select Category</option>
                  {/* {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.title}
                    </option>
                  ))} */}
                    </Field>
                  </div>
                  <div className="flex flex-col md:flex-row px-5 pt-5 justify-end items-end md:space-x-4 mt-auto">
                      <button className="flex items-center justify-center border w-full md:w-auto border-primary px-4 mb-2 md:mb-0 py-2 rounded-lg text-gray-700 dark:text-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                        <FontAwesomeIcon icon={faTrash} className="mr-2" />
                        Delete Task
                      </button>
                      <button type="submit" className="bg-primary w-full md:w-auto text-white px-4 py-2 rounded-lg hover:bg-blue-900 dark:hover:bg-blue-700 transition">
                        Save Task
                      </button>
                    </div>
                </div>
              </div>

             
              
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}
