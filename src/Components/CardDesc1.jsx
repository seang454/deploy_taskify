import React from 'react'
import Button from "../assets/Button.gif"

export default function CardDesc1({title, description,color,linecolor}) {
  return (
    <section className={`rounded-lg shadow bg-${color} p-5`}>
      <div className=" p-2.5 rounded-t-lg font-bold font-family text-[22px]">{title}</div>
      <div className="bg-transparent p-2.5 font-family leading-7 text-[20px]">{description}</div>
      <hr className={`bg- mb-3 h-1 rounded-full m-2.5 border-0 ${linecolor}`}/>
    </section>
  )
}
