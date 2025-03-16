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
// <div className="w-screen h-screen p-5 mx-auto bg-white rounded-lg shadow-md md:p-20 min-w-80 ">
//   <div className="flex flex-col justify-between gap-5 mb-10 md:grid md:grid-cols-2">
//     <div className="flex mb-5">
//       <img className="w-16 h-16 rounded-full" src={Profilepic} alt="" />
//       <div className="ml-5 font-family">
//         <h1 className="text-2xl font-semibold">Narak Leng</h1>
//         <p className="text-sm">narakleng12345@gmail.com</p>
//       </div>
//     </div>
//     <div className="flex flex-col gap-5 md:grid md:grid-cols-2">
//       <div className="flex items-center">
//         <FaRegWindowRestore className="text-primary" />
//         <button className="ml-5 font-semibold text-primary">View Archive</button>
//       </div>
//       <div className="flex items-center">
//         <LuUserRoundCog className="text-primary" />
//         <button className="ml-5 font-semibold text-primary">Edit Profile</button>
//       </div>
//     </div>
//   </div>

//   <h2 className="mb-4 text-2xl font-semibold">Personal Information</h2>
//   <div className="space-y-5">
//     {/* First Name & Last Name */}
//     <div className="flex flex-col gap-5 md:grid md:grid-cols-2">
//       <div className="font-medium text-gray-600">First Name</div>
//       <div className="p-2 font-semibold border rounded-md text-primary">John</div>

//       <div className="font-medium text-gray-600">Last Name</div>
//       <div className="p-2 font-semibold border rounded-md text-primary">Doe</div>
//     </div>

//     {/* Username, Email & Password */}
//     <div className="flex flex-col gap-5 md:grid md:grid-cols-2">
//       <div className="font-medium text-gray-600">Username</div>
//       <div className="p-2 font-semibold border rounded-md text-primary">john_doe</div>

//       <div className="font-medium text-gray-600">Email</div>
//       <div className="p-2 font-semibold border rounded-md text-primary">john@example.com</div>

//       <div className="font-medium text-gray-600">Password</div>
//       <div className="p-2 font-semibold border rounded-md text-primary">••••••••</div>
//     </div>

//     {/* Gender */}
//     <div className="flex flex-col gap-5 md:grid md:grid-cols-2">
//       <div className="font-medium text-gray-600">Gender</div>
//       <div className="p-2 font-semibold border rounded-md text-primary">Male</div>
//     </div>
//   </div>
// </div>

 
//   );
// }
import React from "react";
import Profilepic from "../assets/c910b642-cc3f-43c1-804e-6753b1d7e660.webp";
import { LuUserRoundCog } from "react-icons/lu";
import { FaRegWindowRestore } from "react-icons/fa";
import EditProfilePage from "./EditProfilePage";
import { Link } from "react-router";

export default function Userpf() {
  return (
    <div className="w-full mx-auto shadow-md p-8 min-h-screen bg-gray-100  dark:bg-[#121321]">
      {/* Profile Info */}
      <div className="flex flex-col justify-between gap-5 mb-10 md:flex-row">
        <div className="flex items-center">
          <img className="w-16 h-16 border-2 rounded-full border-primary" src={Profilepic} alt="Profile" />
          <div className="ml-5">
            <h1 className="text-2xl font-semibold dark:text-white">Narak Leng</h1>
            <p className="text-sm text-gray-500 dark:gray-100">narakleng12345@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-5">
          <button className="flex items-center px-3 py-2 font-semibold text-white bg-primary rounded-3xl hover:text-white hover:bg-subaccent">
            <FaRegWindowRestore className="mr-2" />
            View Archive
          </button>
          <Link to="/editprofilepage" className="flex items-center px-3 py-2 font-semibold text-white bg-primary rounded-3xl hover:text-white hover:bg-subaccent">
            <LuUserRoundCog className="mr-2" />
            Edit Profile
          </Link>
        </div>
      </div>

      {/* Personal Information */}
      <h2 className="mb-4 text-2xl font-semibold dark:text-white">Personal Information</h2>
      <div className="space-y-5">
        {/* First Name & Last Name */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <div className="font-medium text-gray-600 dark:text-gray-100">First Name</div>
            <div className="p-3 font-semibold border rounded-md text-primary bg-gray-50">
              John
            </div>
          </div>
          <div>
            <div className="font-medium text-gray-600 dark:text-gray-100">Last Name</div>
            <div className="p-3 font-semibold border rounded-md text-primary bg-gray-50">
              Doe
            </div>
          </div>
        </div>

        {/* Username, Email & Password */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <div className="font-medium text-gray-600 dark:text-gray-100">Username</div>
            <div className="p-3 font-semibold border rounded-md text-primary bg-gray-50">
              john_doe
            </div>
          </div>
          <div>
            <div className="font-medium text-gray-600 dark:text-gray-100">Email</div>
            <div className="p-3 font-semibold border rounded-md text-primary bg-gray-50">
              john@example.com
            </div>
          </div>
         
        </div>

        {/* Gender */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <div className="font-medium text-gray-600 dark:text-gray-100">Gender</div>
            <div className="p-3 font-semibold border rounded-md text-primary bg-gray-50">
              Male
            </div>
          </div>
            <div>
            <div className="font-medium text-gray-600 dark:text-gray-100">Password</div>
            <div className="p-3 font-semibold border rounded-md text-primary bg-gray-50">
              ••••••••
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
}

