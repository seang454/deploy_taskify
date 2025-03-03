import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function ModalWorkspace(isOpen, onClose) {
  if (!isOpen) return null;
  const validationSchema = Yup.object({
    workspaceTitle: Yup.string()
      .required("Workspace title is required")
      .min(3, "Title must be at least 3 characters"),
  });
  return (
    <>
      <div className="grid grid-cols-2">
        <div className='className="bg-white p-6 rounded-lg"'>
          <h2 className="text-xl font-semibold mb-4">Create New Workspace</h2>
          {/* Formik Form */}
        </div>
        <div>
          <img src="./src/assets/modelWorkspace.png" alt="modelWorkspace.png" />
        </div>
      </div>
      {/* image */}
    </>
  );
}
