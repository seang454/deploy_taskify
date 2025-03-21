import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import modelImage from "../assets/modelWorkspace.png"; // Ensure correct path
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { useState,useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ModalWorkspace({ isOpen, onClose,token, onResponse }) {
  console.log("isopen",isOpen);
  console.log("token",token)
  if (!isOpen) return null;

  const [userId, setUserId] = useState(null);

  
  const fetchUserId = async (token) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/rpc/me`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error("Failed to fetch user data");

      const user = await response.json();
      console.log("Fetched User Data:", user);
      return user.id; 
    } catch (error) {
      console.error("Error fetching user ID:", error);
      return null;
    }
  };

 
  useEffect(() => {
    if (token) {
      fetchUserId(token).then((id) => setUserId(id));
    }
  }, [token]);

  
  const handlePostCreateWorkspace = async (values) => {
    try {
        if (!userId) {
            console.error("User ID is not available");
            return;
        }

        const workspaceData = {
            id: uuidv4(), 
            title: values.title,
            description: values.description,
            user_id: userId,
            created_at: new Date().toISOString(),
        };

        console.log("Sending Data:", workspaceData); 

        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/workspaces`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(workspaceData),
        });

        console.log("Raw Response:", response);

        if (!response.ok) {
            const text = await response.text(); 
            console.error("Failed Response:", text);
            throw new Error(`Failed to create workspace: ${text || response.statusText}`);
        }

        console.log("Workspace Created Successfully");
        toast.success("Workspace Created Successfully");
        window.location.reload();

        onResponse(workspaceData);
        onClose();
    } catch (error) {
        console.error("Error creating workspace:", error.message);
    }
};




  const initialValues = {
    title: "",
    description: "",
    user_id: userId || "", 
    id : uuidv4(),
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Workspace name is required"),
    description: Yup.string(),
  });

  if (!userId) {
    return <div>Loading user data...</div>;
  }


  return (
    <div className="sticky top-0 h-[100vh] w-full bottom-0 inset-0 z-50 flex items-center justify-center bg-black  bg-opacity-50">
      <ToastContainer/>
      <div className="bg-white rounded-lg shadow-lg dark:bg-gray-900  w-[90%] lg:w-[80%] xl:w-[75%]  sticky top-0 bottom-0">
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute text-xl text-gray-500 top-1.5 right-1.5 hover:text-gray-700"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <div className="grid gap-4 p-6 md:grid-cols-2 dark:text-white">
        
        
          {/* Left: Form */}
          <div>
          <div className="lg:pb-8 ">
          <h2 className="mb-4 text-xl font-bold lg:text-2xl xl:text-3xl text-primary dark:text-white">Let's built a Workspace</h2>
          <p className="py-3 text-txt14 lg:text-txt-16 xl:text-txt18 text-txtPrimary dark:text-white">Boost your productivity by making it easier for everyone to access boards in one location.</p>
          </div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                console.log("Response :",values)
                handlePostCreateWorkspace(values);
              }}
            >
              {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit} className="flex flex-col">
                 <div className="pb-5 xl:pb-7">
                  <label htmlFor="title" className="font-semibold text-primary text-txt16 lg:text-txt18 xl:text-txt20 dark:text-white">Workspace name</label>
                 <Field 
                    name="title" 
                    type="text" 
                    placeholder="Put your workspace name... " 
                    className="w-full p-1 border rounded-md xl:p-2 xl:my-3 text-txt14 md:text-txt16 xl:text-txt18"
                  />
                  <ErrorMessage name="name" component="div" className="text-sm text-red-500" />
                  <p className="text-txt14 md:text-txt16 xl:text-txt18 text-txtPrimary dark:text-white">This is the name of your company, team or organization.</p>
                 </div>
                  <div>
                    <label htmlFor="discription" className="font-semibold text-primary text-txt16 lg:text-txt18 xl:text-txt20 dark:text-white">Workspace description (Optional)</label>
                  <Field 
                    name="description"
                    as="textarea"
                    placeholder="Put your workspace name..."
                    className="w-full p-1 border rounded-md h-28 xl:my-3 xl:p-2 text-txt14 md:text-txt16 xl:text-txt18"
                  />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full p-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                  >
                    Continue
                  </button>
                </Form>
              )}
            </Formik>
          </div>

          {/* Right: Image */}
          <div className="hidden md:block">
            <img src={modelImage} alt="Workspace" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}