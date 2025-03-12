import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaCloudUploadAlt } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function AddNewTaskPopUp({isOpen, onClose}) {
  // console.log("token",token)
  if (!isOpen) return null;

  const initialValues = {
    id: uuidv4(),
    title: "",
    due_date: "",
    user_id: "",
    note: "",
    file: "",
  };
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("title is required"),
    due_date: Yup.string().required("due date is required"),
    user_id: Yup.string().required("assign to is required"),
    note: Yup.string(),
    file:"",
  });
  
  const handleSubmit = async (values, { resetForm }) => {
    console.log("Submitting Task:", values);

    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Use token for authentication
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        console.log("Task added successfully");
        resetForm(); // Reset form after submission
        onClose(); // Close modal
      } else {
        console.error("Error adding task");
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  return (
    <>
      <div className=" font-roboto inset-0 fixed z-50 flex items-center justify-center bg-black bg-opacity-50 ">
        <div className="px-10 bg-white rounded-md ">
          <div className="">
            <div className="pb-5 flex justify-between">
              <div className="grid pr-10"> 
              <h3 className="pt-3 font-bold text-primary text-[24px]">
                Add a new task
              </h3>
              <p className="text-primary text-txt14 ">
              Effortlessly manage your to-do list: add a new task
            </p>
              </div>
              <button
                onClick={onClose}
                className=" text-2xl dark:text-gray-300 text-primary top-0 pl-10 right-3 "
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            
          </div>
           <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit
              // (values) => {
              //   console.log("Response :", values);
              // }
            }
          >
            <Form>
              {/* title */}
              <div className="pb-5 xl:pb-7">
                <label
                  htmlFor="title"
                  className="font-medium  text-primary md:text-txt14  "
                >
                  Task Title
                </label>
                <Field
                  name="title"
                  type="text"
                  placeholder="Put your workspace name..."
                  className="w-full p-1.5 border dark:text-gray-300 dark:bg-gray-800 border-primary rounded-md xl:p-2 text-txt14 xl:text-txt16 focus:outline-none focus:border-primary focus:ring-1 focus:ring-blue-300"
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="text-sm text-red-500 "
                />
                
              </div>
              {/* Due Date */}
              <div className="pb-5 xl:pb-7">
                <label
                  htmlFor="due_date"
                  className="font-medium text-primary md:text-txt16 lg:text-txt18"
                >
                 Due Date
                </label>
                <Field
                  name="due_date"
                  type="date"
                  placeholder="dd/mm/yyyy"
                  className="w-full p-1.5 border  dark:text-gray-400 dark:bg-gray-800 border-primary rounded-md xl:p-2 text-txt14 xl:text-txt16 
             focus:outline-none focus:border-primary focus:ring-1 focus:ring-blue-300"
                />
                <ErrorMessage
                  name="due_date"
                  component="div"
                  className="text-sm text-red-500"
                />
                
              </div>
              {/* Assigns to*/}
              <div className="pb-5 xl:pb-7">
                <label
                  htmlFor="user_id"
                  className="font-medium  text-primary focus:border-primary md:text-txt16 lg:text-txt18 "
                >
                  Assigns to
                </label>
                <Field
                  name="user_id"
                  type="text"
                  placeholder="Say Seyha"
                  className="w-full p-1.5 border dark:text-gray-300 dark:bg-gray-800 border-primary rounded-md xl:p-2 text-txt14 xl:text-txt16 
             focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300"
                />
                <ErrorMessage
                  name="user_id"
                  component="div"
                  className="text-sm text-red-500"
                />
                
              </div>
              {/* Description */}
              <div className="pb-5 xl:pb-7">
                <label
                  htmlFor="note"
                  className="font-medium text-primary md:text-txt16 lg:text-txt18 "
                >
                  Description
                </label>
                <Field
                  name="note"
                  as="textarea"
                  className="w-full p-1.5 border dark:text-gray-300 dark:bg-gray-800 border-primary rounded-md xl:p-2 text-txt14 xl:text-txt16 
             focus:outline-none focus:border-primary focus:ring-1 focus:ring-blue-300"
                />
                <ErrorMessage
                  name="note"
                  component="div"
                  className="text-sm text-red-500"
                />
                
              </div>
              {/* upload file */}
              <div className="flex items-center  justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex items-center  dark:bg-gray-800 justify-center w-full h-12 border border-primary rounded-lg cursor-pointer bg-white text-gray-500 hover:bg-gray-100"
                >
                  <FaCloudUploadAlt className="dark:text-gray-300 mr-2" size={20} />
                  <span className="text-sm">Click to upload your file</span>
                  <span className="ml-2 text-xs text-gray-400">
                    Max. File Size: 30MB
                  </span>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
              <div className="flex justify-end mb-5">
              <button
                  
                  className="m-2 px-6 py-2 dark:text-white text-center text-txtPrimary transition-all rounded-md text-btn-txt  border active:scale-95"
                >
                  cancle
                </button>
                <button
                  type="submit"
                  className="m-2 px-7 py-2 text-center text-white transition-all rounded-md text-btn-txt bg-primary hover:bg-subaccent hover:shadow-lg active:bg-subaccent active:scale-95"
                >
                  save
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}
