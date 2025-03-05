import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Profilepic from "../assets/c910b642-cc3f-43c1-804e-6753b1d7e660.webp"
import * as Yup from "yup";
export default function Profile() {
   const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    lastName: Yup.string().required("Last Name is required"),
    gender: Yup.string().required("Gender is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });
  return (
  <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-20 min-w-80 mb-20">
    <div className="flex mb-5">
      <img className="w-16 h-16 rounded-full" src={Profilepic} alt="" />
      <div className="font-family ml-5 ">
      <h1 className="font-semibold text-2xl">Narak Leng</h1>
      <p className="">narakleng12345@gmail.com</p>
      </div>
    </div>
      <h2 className="text-2xl font-semibold mb-4">Change Your Personal Information</h2>
<Formik
  initialValues={{
    firstName: "",
    username: "",
    email: "",
    lastName: "",
    gender: "",
    password: "",
  }}
  validationSchema={validationSchema}
  onSubmit={(values, { setSubmitting }) => {
    console.log("Form submitted:", values);
    setSubmitting(false);
  }}
>
  {({ isSubmitting, resetForm }) => (
    <Form className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left Column */}
      <div className="space-y-4">
        <div className="flex flex-col">
          <label className="block text-gray-800">First Name</label>
          <Field
            type="text"
            name="firstName"
            placeholder="Your First Name"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
          <ErrorMessage name="firstName" component="p" className="text-red-500 text-sm min-h-[20px]" />
        </div>

        <div className="flex flex-col">
          <label className="block text-gray-800">Username</label>
          <Field
            type="text"
            name="username"
            placeholder="Your Username"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
          <ErrorMessage name="username" component="p" className="text-red-500 text-sm min-h-[20px]" />
        </div>

        <div className="flex flex-col">
          <label className="block text-gray-800">Email</label>
          <Field
            type="email"
            name="email"
            placeholder="narakleng1234@gmail.com"
            className="w-full px-4 py-2 border rounded-md placeholder-primary focus:ring-2 focus:ring-blue-500"
          />
          <ErrorMessage name="email" component="p" className="text-red-500 text-sm min-h-[20px]" />
        </div>
      </div>

      {/* Right Column */}
      <div className="space-y-4">
        <div className="flex flex-col">
          <label className="block text-gray-800">Last Name</label>
          <Field
            type="text"
            name="lastName"
            placeholder="Your Last Name"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
          <ErrorMessage name="lastName" component="p" className="text-red-500 text-sm min-h-[20px]" />
        </div>

        <div className="flex flex-col">
          <label className="block text-gray-800">Gender</label>
          <Field
            as="select"
            name="gender"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 text-gray-500"
          >
            <option value="" disabled hidden>
              Select Gender
            </option>
            <option value="male" className="text-black">Male</option>
            <option value="female" className="text-black">Female</option>
          </Field>
          <ErrorMessage name="gender" component="p" className="text-red-500 text-sm min-h-[20px]" />
        </div>

        <div className="flex flex-col">
          <label className="block text-gray-800">Password</label>
          <Field
            type="password"
            name="password"
            placeholder="Set Up Your New Password"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
          <ErrorMessage name="password" component="p" className="text-red-500 text-sm min-h-[20px]" />
        </div>
      </div>

      {/* Buttons (Full-Width) */}
      <div className="col-span-1 md:col-span-2 flex  space-x-4">
        <button
          type="button"
          onClick={() => resetForm()}
          className="bg-gray-300 text-primary py-2 px-6 rounded-md hover:bg-gray-400"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-primary text-white py-2 px-6 rounded-md hover:bg-blue-600 disabled:bg-gray-400"
        >
          {isSubmitting ? "Updating..." : "Update Profile"}
        </button>
      </div>
    </Form>
  )}
</Formik>

      {/* <Formik
        initialValues={{
          firstName: "",
          username: "",
          email: "",
          lastName: "",
          gender: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log("Form submitted:", values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, resetForm }) => (
          <Form className="grid grid-cols-1 md:grid-cols-2 gap-6">
    
            <div className="space-y-4 md:items-center md:fle-row ">
              <div className="flex flex-col">
                <label className="block text-gray-800">First Name</label>
                <Field
                  type="text"
                  name="firstName"
                  placeholder="Your First Name"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="firstName" component="p" className="text-red-500 text-sm min-h-[20px]" />
              </div>

              <div className="flex flex-col">
                <label className="block text-gray-800">Username</label>
                <Field
                  type="text"
                  name="username"
                  placeholder= "Your Username"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="username" component="p" className="text-red-500 text-sm min-h-[20px]" />
              </div>

              <div className="flex flex-col">
                <label className="block text-gray-800">Email</label>
                <Field
                  type="email"
                  name="email"
                  placeholder= "narakleng1234@gmail.com"
                  className="w-full px-4 py-2 border rounded-md placeholder-primary focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="email" component="p" className="text-red-500  text-sm min-h-[20px] " />
              </div>
            </div>

           
            <div className="space-y-4 md:items-center md:flex-row ">
              <div className="flex flex-col ">
                <label className="block text-gray-800">Last Name</label>
                <Field
                  type="text"
                  name="lastName"
                  placeholder="Your Last Name"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="lastName" component="p" className="text-red-500 text-sm min-h-[20px]" />
              </div>

              <div className="flex flex-col">
                <label className="block text-gray-800">Gender</label>
                <Field
                  as="select"
                  name="gender"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 text-gray-500"
                >
                  <option value="" disabled hidden>
                    Select Gender
                  </option>
                  <option value="male" className="text-black">
                    Male
                  </option>
                  <option value="female" className="text-black">
                    Female
                  </option>
                </Field>
                <ErrorMessage name="gender" component="p" className="text-red-500 text-sm min-h-[20px]" />
              </div>

              <div className="flex flex-col">
                <label className="block text-gray-800">Password</label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Set Up Your New Password"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="password" component="p" className="text-red-500 text-sm  min-h-[20px]" />
              </div>
            </div>

   
            <div className="col-span-2 flex ">
              <button
                type="button"
                onClick={() => resetForm()} 
                className="bg-gray-300 text-primary py-2 px-6 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary text-white ml-10 py-2 px-6 rounded-md hover:bg-blue-600 disabled:bg-gray-400"
              >
                {isSubmitting ? "Updating..." : "Update Profile"}
              </button>
            </div>
          </Form>
        )}
      </Formik> */}
    </div>
 
  );
}