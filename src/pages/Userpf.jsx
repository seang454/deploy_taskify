import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import Profilepic from "../assets/c910b642-cc3f-43c1-804e-6753b1d7e660.webp"
import * as Yup from "yup";
import { LuUserRoundCog } from "react-icons/lu";
import { FaRegWindowRestore } from "react-icons/fa";

export default function Userpf() {




   const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    lastName: Yup.string().required("Last Name is required"),
    gender: Yup.string().required("Gender is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });
  return (
<div className="w-screen mx-auto bg-white  shadow-md rounded-lg p-5 md:p-20 min-w-80 h-screen ">
  <div className="flex flex-col justify-between md:grid md:grid-cols-2 gap-5 mb-10">
    <div className="flex mb-5">
      <img className="w-16 h-16 rounded-full" src={Profilepic} alt="" />
      <div className="font-family ml-5">
        <h1 className="font-semibold text-2xl">Narak Leng</h1>
        <p className="text-sm">narakleng12345@gmail.com</p>
      </div>
    </div>
    <div className="flex flex-col gap-5 md:grid md:grid-cols-2">
      <div className="flex items-center">
        <FaRegWindowRestore className="text-primary" />
        <button className="text-primary font-semibold ml-5">View Archive</button>
      </div>
      <div className="flex items-center">
        <LuUserRoundCog className="text-primary" />
        <button className="text-primary font-semibold ml-5">Edit Profile</button>
      </div>
    </div>
  </div>

  <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
  <div className="space-y-5">
    {/* First Name & Last Name */}
    <div className="flex flex-col gap-5 md:grid md:grid-cols-2">
      <div className="text-gray-600 font-medium">First Name</div>
      <div className="border p-2 rounded-md text-primary font-semibold">John</div>

      <div className="text-gray-600 font-medium">Last Name</div>
      <div className="border p-2 rounded-md text-primary font-semibold">Doe</div>
    </div>

    {/* Username, Email & Password */}
    <div className="flex flex-col gap-5 md:grid md:grid-cols-2">
      <div className="text-gray-600 font-medium">Username</div>
      <div className="border p-2 rounded-md text-primary font-semibold">john_doe</div>

      <div className="text-gray-600 font-medium">Email</div>
      <div className="border p-2 rounded-md text-primary font-semibold">john@example.com</div>

      <div className="text-gray-600 font-medium">Password</div>
      <div className="border p-2 rounded-md text-primary font-semibold">••••••••</div>
    </div>

    {/* Gender */}
    <div className="flex flex-col gap-5 md:grid md:grid-cols-2">
      <div className="text-gray-600 font-medium">Gender</div>
      <div className="border p-2 rounded-md text-primary font-semibold">Male</div>
    </div>
  </div>
</div>

 
  );
}
