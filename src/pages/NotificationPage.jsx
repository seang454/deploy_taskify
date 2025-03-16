import React from 'react'
import roith from "../assets/roith.png"
import teacher from "../assets/Chaya.webp"
import { Notification } from '../Components/Notification'
import huy from "../assets/huy.jpg"
export const NotificationPage = () => {
    const notification =[
        {
        profile : roith,
        name:"Rathana Chit",
        description: "Moved the task to 'In Progress' – let's pretend we're working hard, shall we?",
        },
        {
        profile : huy,
        name:"Kanha Jolly ",
        description: "Updated the task deadline to tomorrow – let's make sure everything is ready before the meeting!",
        },
        {
        profile : roith,
        name:"Sreymom Zippy",
        description: "Updated the task status – now we wait, like watching paint dry… but with more stress!",
        },
        {
        profile : teacher,
        name:"Vannara Noodle",
        description: "Reassigned the task to someone else for further updates – make sure it’s done!",
        },
        {
        profile : roith,
        name:"Dara Zing",
        description: "Changed the task label to 'Urgent' – needs immediate attention before the deadline.",
        },
         {
        profile : teacher,
        name:"Kosal Pudding",
        description: " Changed the task status to 'In Progress' – making good progress, let’s keep the momentum going!",
        },
         {
        profile : teacher,
        name:"Vannak hanuman",
        description: "Commented: 'This task is like a plot twist – unexpected, but we’re almost there!",
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
