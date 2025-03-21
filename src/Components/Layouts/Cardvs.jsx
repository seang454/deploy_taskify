import React from 'react'
export default function Cardvs({icon,title,description}) {
    return (
           <section className={` shadow-lg hover:shadow-2xl text-center rounded-lg  bg-white/10 backdrop-opacity-5 backdrop-invert backdrop-blur-3xl p-5 border-l-10 dark:text-white`}>
            <div className="flex items-center justify-center text-2xl">
              <img className="w-8" src={icon} alt="" />
            </div>
      <div className=" p-2.5 rounded-t-lg font-family text-[22px] font-medium">{title}</div>
      <div className="bg-transparent p-2.5 font-family text-[18px] text-gray-500 leading-7 dark:text-gray-300">{description}</div>
    </section>
    //   <div  className="w-[400px] shadow-lg hover:shadow-2xl  -mb-8 rounded-lg p-4 flex flex-col items-center justify-center">
    //     <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary"></div>
    //       <img src={icon} alt="icon" />
    //     <div className="flex flex-col items-center justify-center gap-[15px] text-center w-full">
    //         <h2 className="text-[20px] font-family text-black font-semibold">{title}</h2>
    //       <p className="text-[15px] font-family text-gray-500 font-medium">{description}</p>
    //     </div>
    //     </div>
    )}
