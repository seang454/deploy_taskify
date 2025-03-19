import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useParams, Link } from "react-router-dom";
import { useGetPatchMutation } from "../features/addTaskApi";
import { useGetDetailTaskQuery } from "../features/addTaskApi";

export default function EditTaskPopup() {

  const { id } = useParams(); // Get task ID from URL
    const { data: task1, error, isLoading } = useGetDetailTaskQuery(id);
  const [patchData] = useGetPatchMutation();
  const [selectedStatus, setSelectedStatus] = useState("");

  if (isLoading) return <p className="text-center">Loading task details...</p>;
  if (error)
    return (
      <p className="text-center text-red-500">
        Error loading task: {error.message}
      </p>
    );
  if (!task1) return <p className="text-center">Task not found.</p>;
  const task = task1[0];
  console.log(task)

  const initialValues = {
    title: "",
    note: "",
    start_date: "2025-03-01",
    due_date: "2025-03-10",
    reminder_date: "2025-03-08",
    is_completed: "false",
    is_important: "false",
    is_archived: "false",
    is_deleted: "false",
    category_id: "22c9d05d-402a-44aa-b811-041bf4632ae4",
    position: 1,
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Task title is required"),
    start_date: Yup.date().required("Start date is required"),
    due_date: Yup.date().required("Due date is required"),
    reminder_date: Yup.date(),
    category_id: Yup.string().required("Category is required"),
  });

  const handlePatch = async (values) => {
    try {
      await patchData({ body: values, taskId: id }).unwrap();
      console.log("Task updated successfully:", values);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleStatusChange = (field, setFieldValue) => {
    setSelectedStatus(field);
    ["is_completed", "is_important", "is_archived", "is_deleted"].forEach((status) => {
      setFieldValue(status, status === field ? "true" : "false");
    });
  };
  
  

  return (
    <div className="flex items-center justify-center w-full h-screen font-roboto">
      <div className="bg-white dark:bg-gray-900 dark:text-gray-200 p-6 rounded-lg shadow-lg w-[95%] max-w-5xl">
        {/* Header */}
        <div className="flex items-center justify-between text-xl font-semibold">
          <h3>
            <span>Final Project of Foundation G3-Taskify</span>
            <span className="px-1">
              <FontAwesomeIcon icon={faGreaterThan} />
            </span>
            <span className="pr-1">Design User Interface</span>
          </h3>
        </div>

        {/* Divider */}
        <div className="w-full mx-3 mt-4 bg-transparent border-2 border-dashed border-secondary"></div>

        {/* Form Section */}
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handlePatch}>
          {({ setFieldValue }) => (
            <Form className="p-6 space-y-4">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Left Section */}
                <div>
                  <div className="pb-5">
                    <label className="font-medium text-primary">Task Title</label>
                    <Field type="text" value={task.title} name="title" className="w-full p-2 border rounded-md dark:bg-gray-800 border-primary" plac/>
                    <ErrorMessage name="title" component="div" className="text-sm text-red-500" />
                  </div>
                  <div className="pb-5">
                    <label className="font-medium text-primary">Task Note</label>
                    <Field as="textarea" name="note" className="w-full h-24 p-2 border rounded-md border-primary dark:bg-gray-800" />
                  </div>
                </div>

                {/* Right Section */}
                <div>
                  <div className="pb-5">
                    <label className="font-medium text-primary">Start Date</label>
                    <Field type="date" name="start_date" className="w-full p-2 border rounded-md dark:bg-gray-800 border-primary" />
                  </div>
                  <div className="pb-5">
                    <label className="font-medium text-primary">Due Date</label>
                    <Field type="date" name="due_date" className="w-full p-2 border rounded-md dark:bg-gray-800 border-primary" />
                  </div>
                  <div className="pb-5">
                    <label className="font-medium text-primary">Reminder Date</label>
                    <Field type="date" name="reminder_date" className="w-full p-2 border rounded-md dark:bg-gray-800 border-primary" />
                  </div>
                </div>
              </div>

              {/* Task Status Fields */}
              <div className="grid grid-cols-1 gap-6 pb-5 md:grid-cols-2">
                {["is_completed", "is_important", "is_archived", "is_deleted"].map((field) => (
                  <div key={field}>
                    <label className="font-medium capitalize text-primary">{field.replace("_", " ")}</label>
                    <Field
                      as="select"
                      name={field}
                      value={selectedStatus === field ? "true" : "false"}
                      onChange={() => handleStatusChange(field, setFieldValue)}
                      className="w-full p-2 border rounded-md dark:bg-gray-800 border-primary"
                    >
                      <option value="false">False</option>
                      <option value="true">True</option>
                    </Field>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex justify-end space-x-4">
                <Link to={`/todolistdetail/${id}`} className="px-4 py-2 text-gray-700 bg-gray-300 rounded-lg dark:bg-gray-700 dark:text-white">
                  Cancel
                </Link>
                <button type="submit" className="px-4 py-2 text-white rounded-lg bg-primary hover:bg-blue-700">
                  Save Task
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
