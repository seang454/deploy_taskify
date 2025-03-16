import React from 'react'
import roith from "../assets/roith.png"
import teacher from "../assets/Chaya.webp"
import { Notification } from '../Components/Notification'
export const NotificationPage = () => {
    const notification =[
        {
        profile : roith,
        name:"Justin Bieber",
        description: "Hi Everyone, thanks for sharing your thoughts regarding  this message.",
        },
        {
        profile : teacher,
        name:"Tony Stark ",
        description: "Hi Everyone, thanks for sharing your thoughts regarding  this message.",
        },
        {
        profile : roith,
        name:"Tom Cruise",
        description: "Hi Everyone, thanks for sharing your thoughts regarding  this message.",
        },
        {
        profile : teacher,
        name:"Meng Huy",
        description: "Hi Everyone, thanks for sharing your thoughts regarding  this message.",
        },
        {
        profile : roith,
        name:"Meng Huy",
        description: "Hi Everyone, thanks for sharing your thoughts regarding  this message.",
        },
         {
        profile : teacher,
        name:"Meng Huy",
        description: "Hi Everyone, thanks for sharing your thoughts regarding  this message.",
        },
         {
        profile : teacher,
        name:"Meng Huy",
        description: "Hi Everyone, thanks for sharing your thoughts regarding  this message.",
        },
    ]
  return (
    <>
     <div className="w-full p-4 sm:p-6 md:p-8 bg-background dark:bg-gray-900">
  {/* Notification Header */}
  <section className="bg-primary rounded-[30px] md:rounded-[50px] lg:rounded-[100px] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 px-4 py-3 md:px-6 md:py-4">
    <h1 className="text-white text-[14px] sm:text-[16px] md:text-[14px] font-roboto">
      Turn on push notifications to know when you get notifications from TASKIFY and interact with.
    </h1>
    <div className="flex space-x-2 md:space-x-4">
      <button className="flex items-center text-[14px] px-3 py-2 border border-secondary text-white transition-all duration-500 bg-primary rounded-2xl md:rounded-3xl hover:bg-blue-600">
        Allow push notification
      </button>
      <button className="flex items-center text-[14px] px-3 py-2 text-white transition-all duration-500 bg-primary rounded-2xl md:rounded-3xl hover:bg-blue-600">
        Dismiss
      </button>
    </div>
  </section>

  {/* Notification List */}
  <div className="mt-4 space-y-3">
    {notification.map((notification, index) => (
      <Notification
        key={index}
        profile={notification.profile}
        name={notification.name}
        description={notification.description}
      />
    ))}
  </div>
</div>

    
    </>
  )
}
