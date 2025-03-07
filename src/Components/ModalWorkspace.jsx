import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import modelImage from "../assets/modelWorkspace.png"; // Ensure correct path
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";

export default function ModalWorkspace({ isOpen, onClose,token }) {
  if (!isOpen) return null;
  const initialValues = {
      title:"",
      discription:""
  }
  const validationSchema =Yup.object({
       title: Yup.string().required("Required") ,
       discription: Yup.string()
      })
 console.log(token)
 

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[75%] lg:w-[65%] relative ">
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute text-xl text-gray-500 top-3 right-3 hover:text-gray-700"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <div className="grid gap-4 md:grid-cols-2">
        
        
          {/* Left: Form */}
          <div>
          <div className="lg:pb-8 xl:pb-10">
          <h2 className="mb-4 text-xl font-bold lg:text-2xl xl:text-3xl text-primary">Let's built a Workspace</h2>
          <p className="text-txt12 lg:text-txt-14 xl:text-txt16 text-txtPrimary">Boost your productivity by making it easier for everyone to access boards in one location.</p>
          </div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                console.log(values);
                onClose();
              }}
            >
              {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit} className="flex flex-col">
                 <div className="pb-5 xl:pb-7">
                  <label htmlFor="title" className="font-medium text-primary md:text-txt16 lg:text-txt18 xl:text-txt20">Workspace name</label>
                 <Field 
                    name="title" 
                    type="text" 
                    placeholder="Put your workspace name..." 
                    className="w-full p-1 border rounded-md xl:p-2 text-txt14 xl:text-txt16"
                  />
                  <ErrorMessage name="name" component="div" className="text-sm text-red-500" />
                  <p className="text-txt12 text-txtPrimary">This is the name of your company, team or organization.</p>
                 </div>
                  <div>
                    <label htmlFor="discription" className="font-medium text-primary md:text-txt16 lg:text-txt18 xl:text-txt20">Workspace description (Optional)</label>
                  <Field 
                    name="discription"
                    as="textarea"
                    placeholder="Put your workspace name..."
                    className="w-full p-1 border rounded-md h-28 lg:h-32 xl:h-40 xl:p-2 text-txt14 xl:text-txt16 "
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
          <div>
            <img src={modelImage} alt="Workspace" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}