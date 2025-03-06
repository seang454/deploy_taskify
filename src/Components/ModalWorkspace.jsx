import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import modelImage from "../assets/modelWorkspace.png"; // Ensure correct path
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { useCreateWorkspaceMutation } from "../features/workspaceApi";

export default function ModalWorkspace({ isOpen, onClose }) {
  const [ createWorkspace, {isLoading}] = useCreateWorkspaceMutation();
 
  const handlePostCreatWorkspace = async (value) => {
    console.log("Submitting Data to API:", value); // Debugging
    try {
      const response = await createWorkspace(value).unwrap();
      console.log("API Response:", response);
    } catch (err) {
      console.error("API Error:", err);
    }
  };
  if (!isOpen) return null;
  const initialValues = {
      title:"",
      description:"",
      id: crypto.randomUUID(),
  }
  const validationSchema =Yup.object({
       title: Yup.string().required("Required") ,
       description: Yup.string()
      })

 

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
  <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[75%] lg:w-[65%]">
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <div className="grid md:grid-cols-2 gap-4">
        
        
          {/* Left: Form */}
          <div>
          <div className="lg:pb-8 xl:pb-10">
          <h2 className="text-xl lg:text-2xl xl:text-3xl text-primary font-bold mb-4">Let's built a Workspace</h2>
          <p className="text-txt12 lg:text-txt-14 xl:text-txt16 pb-2 text-txtPrimary">Boost your productivity by making it easier for everyone to access boards in one location.</p>
          </div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                console.log("Response :",values)
                handlePostCreatWorkspace(values);
              }}
            >
              {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit} className="flex flex-col">
                 <div className="pb-5 xl:pb-7">
                  <label htmlFor="title" className="text-primary md:text-txt16 lg:text-txt18 xl:text-txt20 font-medium">Workspace name</label>
                 <Field 
                    name="title" 
                    type="text" 
                    placeholder="Put your workspace name..." 
                    className="border w-full p-1 xl:p-2 rounded-md text-txt14 xl:text-txt16"
                  />
                  <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                  <p className="text-txt12 pb-1 text-txtPrimary">This is the name of your company, team or organization.</p>
                 </div>
                  <div>
                    <label htmlFor="description" className="text-primary md:text-txt16 lg:text-txt18 xl:text-txt20 font-medium">Workspace description (Optional)</label>
                  <Field 
                    name="description"
                    as="textarea"
                    placeholder="Put your workspace name..."
                    className="border w-full h-28 lg:h-32 xl:h-40 p-1 xl:p-2 rounded-md text-txt14 xl:text-txt16 "
                  />
                  </div>
                  <button 
                    type="submit" 
                    className="mt-4 bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600"
                  >
                    Continue
                  </button>
                </Form>
              )}
            </Formik>
          </div>

          {/* Right: Image */}
          <div className="hidden md:block">
            <img src={modelImage} alt="Workspace" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}