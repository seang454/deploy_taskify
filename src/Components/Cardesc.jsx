import React from "react";

export default function Cardesc({title,description,color}) {
  return (
    <section className="rounded-lg shadow dark:text-white bg-white/10 backdrop-opacity-5 backdrop-invert backdrop-blur-3xl">
      <div className="px-5 rounded-t-lg py-2.5 bg-secondary font-bold  text-[22px] font-family">{title}</div>
      <div className="p-5 bg-transparent text-[20px] font-family">{description}</div>
    </section>
  );
}
