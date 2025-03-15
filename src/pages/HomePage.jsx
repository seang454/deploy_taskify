import React from "react";
import Cardesc from "../Components/Cardesc";
import CardDesc1 from "../Components/CardDesc1";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import qimage from "../assets/question.jpg";
import seconstimage from "../assets/todo.png";
import Homepage from "../assets/Homepage.gif"
import CardDiscription2 from "../Components/CardDiscription2";
export default function HomePage() {
  const card = [
    {
      title: "Project Management",
      description:
        "Keep tasks in order, deadlines on track, and team members aligned with Trackify.",
      color: "",
    },
    {
      title: "Assign Meeting",
      description:
        "Empower your team meeting to be more productive, empowering and dare we day-fun. ",
      color: "",
    },
    {
      title: "Onboarding",
      description:
        "On boarding to a new company or project is a snap with Trackify’s visual layout of to-do’s, resources, and process tracking.",
      color: "",
    },
    {
      title: "Task Management Card",
      description:
        "Use Trackify to track, manage, complete, and bring tasks together like pieces of a puzzle, and make your team’s project a cohesive success every time.",
      color: "",
    },
    {
      title: "Brainstorming",
      description:
        "Unleash your team’s creativity and keep ideas visible, collaborative, and actionable.",
      color: "",
    },
    {
      title: "Resource Hub",
      description:
        "Save time with a well-designed hub that help teams find information easily and quickly.",
      color: "",
    },
  ];
  const card1 = [
    {
      title: "Simple",
      description:
        "Trackify created with the most simple look, but with modern UI. That’s very easy to interact with and we provide for our users with many efficiency features to complete your work on time.  ",
      color: "white",
      linecolor: "bg-secondary",
    },
    {
      title: "Flexible",
      description:
        "Trackify created with the most simple look, but with modern UI. That’s very easy to interact with and we provide for our users with many efficiency features to complete your work on time.  ",
      color: "white",
      linecolor: "bg-accent",
    },
    {
      title: "Powerful",
      description:
        "Trackify created with the most simple look, but with modern UI. That’s very easy to interact with and we provide for our users with many efficiency features to complete your work on time.  ",
      color: "white",
      linecolor: "bg-secondary",
    },
    {
      title: "Friendly User ",
      description:
        "Trackify created with the most simple look, but with modern UI. That’s very easy to interact with and we provide for our users with many efficiency features to complete your work on time.  ",
      color: "white",
      linecolor: "bg-secondary",
    },
  ];

  const card3 = [
    {
      title: "Project Management",
      description:
        "Trackify boards keep tasks organized and work moving forward. In a glance, see everything from “things to do” to “aww yeah, we did it!”",
      colorline: "bg-[#DE16B6]",
      color: "border-l-[#DE16B6]",
    },
    {
      title: "Lists",
      description:
        "The different stages of a task. Start as simple as To Do, Doing or Done—or build a workflow custom fit to your team’s needs. There’s no wrong way to Trackify.",
      colorline: "bg-[#12297A]",
      color: "border-l-[#12297A]",
    },
    {
      title: "Cards",
      description:
        "Cards represent tasks and ideas and hold all the information to get the job done. As you make progress, move cards across lists to show their status.",
      colorline: "bg-[#FF9500]",
      color: "border-l-[#FF9500]",
    },
  ];
  const el = React.useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Taskify makes it easy to navigate with everyone, everything is in your hand.",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
      backDelay: 1000,
      showCursor: false,
      cursorChar: "🔥",
    });

    return () => {
      typed.destroy(); // Cleanup to avoid memory leaks
    };
  }, []);

  return (
    <>
      {" "}
      <section className="flex flex-col gap-20 min-w-80">
        {/* Go to known tasks */}
       <motion.hr
  className="bg-transparent w-2/3 mt-10 border-[2px] border-dashed relative ml-[calc(1/3*100%)] border-primary"
  initial={{ width: 0, opacity: 0 }}
  whileInView={{ width: '66.66%', opacity: 1 }}
  transition={{
    duration: 0.8,
    ease: 'easeInOut'
  }}
/>
        <section className="flex flex-col font-family ">
          <section className="flex w-4/5 gap-10 m-auto justify-between items-center h-[70vh] sm:flex-col flex-col md:flex-col lg:flex-row">
       
<div className="flex flex-col w-full sm:w-full md:w-full lg:w-1/2">
  <motion.div
    className="lg:w-[40vw] w-full h-[162px] lg: sm:w-full text-heading text-primary"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    viewport={{ once: false }}
  >
    <h1 ref={el} className="sm:text-subheading text-[25px] dark:text-white"></h1>
  </motion.div>

  <motion.p
    className="mb-10 text-txt18 font-family dark:text-white"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    viewport={{ once: false }}
  >
    Now explore your life, your career, and your potential with us.
  </motion.p>

  <div className="h-[48px] flex justify-center md:justify-normal">
    <motion.input
      type="text"
      placeholder="Email"
      className="text-primary p-2 rounded-lg shadow dark:text-white bg-white/10 backdrop-opacity-5 backdrop-invert backdrop-blur-3xl  border-primary  h-full lg:w-[372px] w-32 transition-all ease-in-out duration-500 hover:dark:bg-white/30"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: false }}
    />

    <motion.button
      className="w-32 h-full p-2 mx-5 text-white transition-all duration-500 ease-out rounded-full shadow dark:rounded-lg bg-primary dark:text-white dark:bg-white/10 hover:dark:bg-white/30 backdrop-opacity-5 backdrop-invert backdrop-blur-3xl hover:bg-subaccent"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: false }}
    >
      Let's sign up!
    </motion.button>
  </div>
</div>

            <div className="flex justify-end w-1/2 min-w-80">
  <motion.img
    src={Homepage}
    alt=""
    className="rounded-md"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    viewport={{ once: false }}
  />
</div>
          </section>
        </section>
        
<motion.hr
  className="bg-transparent w-2/3 mt-36 xl:mt-0 border-[2px] border-dashed relative ml-[0px] border-secondary"
  initial={{ width: 0, opacity: 0 }}
  whileInView={{ width: '66%', opacity: 1 }}
  transition={{ duration: 1, ease: 'easeInOut' }}
  viewport={{ once: false }}
/>

        {/* GET start */}
<section className="pt-10 pb-20 m-auto gap-3.5 bg-primary">
  <div className="w-4/5 m-auto text-center bottom-5">
      <motion.p
      className="font-bold text-white text-subheading font-family "
      initial={{ opacity: 0, y: 20 }} // Start slightly lower with opacity 0
      whileInView={{ opacity: 1, y: 0 }} // Fade in and move up to original position
      transition={{ duration: 1, ease: 'easeInOut' }}
      viewport={{ once: false }} // Trigger every time it comes into view
    >
      Get to know us!
    </motion.p>
    <motion.p
      className="font-bold text-white text-subheading font-family dark:text-white mb-10"
      initial={{ opacity: 0, y: 20 }} // Start slightly lower with opacity 0
      whileInView={{ opacity: 1, y: 0 }} // Fade in and move up to original position
      transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }} // Delay the second text slightly
      viewport={{ once: false }} // Trigger every time it comes into view
    >
      Taskify is an easy, modern UI, and powerful Dashboard Management
    </motion.p>
  </div>

  <div className="grid grid-cols-1 w-4/5 m-auto gap-[60px] md:grid-cols-2">
    {card1.map((card, index) => (
      <motion.div
        key={index}
        className="flex justify-center"
        initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}  // Animate from left (-100) or right (100)
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        viewport={{ once: false }}
      >
        <CardDesc1
          color={card.color}
          title={card.title}
          description={card.description}
          linecolor={card.linecolor}
        />
      </motion.div>
    ))}
  </div>
</section>


        {/* flow */}
        <section className="flex flex-col w-4/5 gap-10 m-auto">
          <motion.h1
  className="font-family text-primary font-semibold text-subheading dark:text-white"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: 'easeInOut' }}
  viewport={{ once: false }}
>
  Workflows for any projects, don’t care how big it is. Tackify can help you with that
</motion.h1>

         <motion.section
  className="grid grid-cols-1 gap-7 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1, ease: 'easeInOut' }}
  viewport={{ once: false }}
>
  {card.map((card, index) => (
    <Cardesc
      key={index}
      title={card.title}
      description={card.description}
      color={card.color}
    />
  ))}
</motion.section>


         <motion.div
  className="flex flex-col justify-between md:items-center md:flex-row"
  initial={{ opacity: 0, x: -100 }} // Start from left
  whileInView={{ opacity: 1, x: 0 }} // Move to normal position
  transition={{ duration: 1, ease: 'easeInOut' }}
  viewport={{ once: false }}
>
  <motion.p
    className="w-full md:w-2/3 font-semibold text-primary text-[22px] dark:text-white"
    initial={{ opacity: 0, x: -100 }} // Start from left
    whileInView={{ opacity: 1, x: 0 }} // Move to normal position
    transition={{ duration: 1, ease: 'easeInOut' }}
  >
    No need to start from scratch. Jump-start your workflow with a
    proven playbook designed for different teams. Customize it to make
    it yours.
  </motion.p>

  <motion.div
    initial={{ opacity: 0, x: 100 }} // Start from right
    whileInView={{ opacity: 1, x: 0 }} // Move to normal position
    transition={{ duration: 1, ease: 'easeInOut' }}
  >
    <Link
      to="/aboutus"
      className="p-3 m-0 mt-5 text-white no-underline text-[22px] rounded-lg md:m-5 bg-primary decoration-0 hover:underline"
    >
      click explore us
    </Link>
  </motion.div>
</motion.div>

        </section>

        {/* choose Taskfy */}

        <motion.section
  className="flex flex-col items-center justify-between w-4/5 gap-10 m-auto md:flex-row"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1, ease: 'easeInOut' }}
  viewport={{ once: false }}
>
  <motion.div
    className="relative p-10 bg-white rounded-lg w-fit bg-opacity-20 backdrop-blur-lg"
    initial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 1, ease: 'easeInOut' }}
  >
    <img src={qimage} className="w-[600px] rounded-lg" />
  </motion.div>

  <motion.div
    className="flex flex-col gap-10"
    initial={{ x: 100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 1, ease: 'easeInOut' }}
  >
    <h2 className="font-family font-semibold text-subheading dark:text-white">
      Why should you choose Trackify?
    </h2>
    <motion.ul
      className="flex flex-col space-y-4 list-none dark:text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      {[
        "We are free to use",
        "Many useful features for users",
        "Available for all devices",
        "Stay supporting with you",
        "Modern UI is provided to users",
      ].map((text, index) => (
        <motion.li
          key={index}
          className="flex items-center space-x-3.5 text-[25px]"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: index * 0.2 }}
        >
          <FontAwesomeIcon
            className="text-secondary"
            icon={faArrowAltCircleRight}
          />
          <p className="text-txt2 font-family">{text}</p>
        </motion.li>
      ))}
    </motion.ul>
  </motion.div>
</motion.section>


        {/* todo */}

      <motion.section
  className="flex flex-col items-center justify-between w-4/5 gap-10 pb-10 m-auto lg:flex-row"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1, ease: 'easeInOut' }}
  viewport={{ once: false }}
>
  {/* Left Side: Cards */}
  <motion.div
    className="flex flex-col w-full lg:w-3/5 gap-3.5"
    initial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 1, ease: 'easeInOut' }}
  >
    {card3.map((card, index) => (
      <CardDiscription2
        key={index}
        title={card.title}
        description={card.description}
        color={card.color}
        colorline={card.colorline}
      />
    ))}
  </motion.div>

  {/* Right Side: Image */}
  <motion.div
    className="flex justify-center w-full lg:w-2/5"
    initial={{ x: 100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 1, ease: 'easeInOut' }}
  >
    <img
      src={seconstimage}
      alt="Image"
      className="w-full max-w-[500px] object-cover rounded-lg"
    />
  </motion.div>
</motion.section>

      </section>
    </>
  );
  
}

