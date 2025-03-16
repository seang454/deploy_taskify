// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import { useState } from "react";
// import Profilepic from "../assets/c910b642-cc3f-43c1-804e-6753b1d7e660.webp"
// import * as Yup from "yup";
// import { LuUserRoundCog } from "react-icons/lu";
// import { FaRegWindowRestore } from "react-icons/fa";

// export default function Userpf() {




//    const validationSchema = Yup.object({
//     firstName: Yup.string().required("First Name is required"),
//     username: Yup.string().required("Username is required"),
//     email: Yup.string().email("Invalid email format").required("Email is required"),
//     lastName: Yup.string().required("Last Name is required"),
//     gender: Yup.string().required("Gender is required"),
//     password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
//   });
//   return (
// <div className="w-screen mx-auto bg-white  shadow-md rounded-lg p-5 md:p-20 min-w-80 h-screen ">
//   <div className="flex flex-col justify-between md:grid md:grid-cols-2 gap-5 mb-10">
//     <div className="flex mb-5">
//       <img className="w-16 h-16 rounded-full" src={Profilepic} alt="" />
//       <div className="font-family ml-5">
//         <h1 className="font-semibold text-2xl">Narak Leng</h1>
//         <p className="text-sm">narakleng12345@gmail.com</p>
//       </div>
//     </div>
//     <div className="flex flex-col gap-5 md:grid md:grid-cols-2">
//       <div className="flex items-center">
//         <FaRegWindowRestore className="text-primary" />
//         <button className="text-primary font-semibold ml-5">View Archive</button>
//       </div>
//       <div className="flex items-center">
//         <LuUserRoundCog className="text-primary" />
//         <button className="text-primary font-semibold ml-5">Edit Profile</button>
//       </div>
//     </div>
//   </div>

//   <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
//   <div className="space-y-5">
//     {/* First Name & Last Name */}
//     <div className="flex flex-col gap-5 md:grid md:grid-cols-2">
//       <div className="text-gray-600 font-medium">First Name</div>
//       <div className="border p-2 rounded-md text-primary font-semibold">John</div>

//       <div className="text-gray-600 font-medium">Last Name</div>
//       <div className="border p-2 rounded-md text-primary font-semibold">Doe</div>
//     </div>

//     {/* Username, Email & Password */}
//     <div className="flex flex-col gap-5 md:grid md:grid-cols-2">
//       <div className="text-gray-600 font-medium">Username</div>
//       <div className="border p-2 rounded-md text-primary font-semibold">john_doe</div>

//       <div className="text-gray-600 font-medium">Email</div>
//       <div className="border p-2 rounded-md text-primary font-semibold">john@example.com</div>

//       <div className="text-gray-600 font-medium">Password</div>
//       <div className="border p-2 rounded-md text-primary font-semibold">••••••••</div>
//     </div>

//     {/* Gender */}
//     <div className="flex flex-col gap-5 md:grid md:grid-cols-2">
//       <div className="text-gray-600 font-medium">Gender</div>
//       <div className="border p-2 rounded-md text-primary font-semibold">Male</div>
//     </div>
//   </div>
// </div>

 
//   );
// }
import React from "react";
import Profilepic from "../assets/c910b642-cc3f-43c1-804e-6753b1d7e660.webp";
import { LuUserRoundCog } from "react-icons/lu";
import { FaRegWindowRestore } from "react-icons/fa";

export default function Userpf() {
  return (
    <div className="w-full mx-auto shadow-md p-8 min-h-screen bg-gray-100  dark:bg-[#121321]">
      {/* Profile Info */}
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-10">
        <div className="flex items-center">
          <img className="w-16 h-16 rounded-full border-2 border-primary" src={Profilepic} alt="Profile" />
          <div className="ml-5">
            <h1 className="font-semibold text-2xl dark:text-white">Narak Leng</h1>
            <p className="text-sm text-gray-500 dark:gray-100">narakleng12345@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-5">
          <button className="flex items-center text-white bg-primary rounded-3xl px-3 py-2 hover:text-white hover:bg-subaccent font-semibold">
            <FaRegWindowRestore className="mr-2" />
            View Archive
          </button>
          <button className="flex items-center text-white bg-primary rounded-3xl px-3 py-2 hover:text-white hover:bg-subaccent font-semibold">
            <LuUserRoundCog className="mr-2" />
            Edit Profile
          </button>
        </div>
      </div>

      {/* Personal Information */}
      <h2 className="text-2xl font-semibold mb-4 dark:text-white">Personal Information</h2>
      <div className="space-y-5">
        {/* First Name & Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <div className="text-gray-600 font-medium dark:text-gray-100">First Name</div>
            <div className="border p-3 rounded-md text-primary font-semibold bg-gray-50">
              John
            </div>
          </div>
          <div>
            <div className="text-gray-600 font-medium dark:text-gray-100">Last Name</div>
            <div className="border p-3 rounded-md text-primary font-semibold bg-gray-50">
              Doe
            </div>
          </div>
        </div>

        {/* Username, Email & Password */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <div className="text-gray-600 font-medium dark:text-gray-100">Username</div>
            <div className="border p-3 rounded-md text-primary font-semibold bg-gray-50">
              john_doe
            </div>
          </div>
          <div>
            <div className="text-gray-600 font-medium dark:text-gray-100">Email</div>
            <div className="border p-3 rounded-md text-primary font-semibold bg-gray-50">
              john@example.com
            </div>
          </div>
         
        </div>

        {/* Gender */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <div className="text-gray-600 font-medium dark:text-gray-100">Gender</div>
            <div className="border p-3 rounded-md text-primary font-semibold bg-gray-50">
              Male
            </div>
          </div>
            <div>
            <div className="text-gray-600 font-medium dark:text-gray-100">Password</div>
            <div className="border p-3 rounded-md text-primary font-semibold bg-gray-50">
              ••••••••
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
}

