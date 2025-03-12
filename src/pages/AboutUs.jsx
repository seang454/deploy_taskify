import React from "react";
import Cardab from "../Components/Layouts/Cardab";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import profilepic from "../assets/c910b642-cc3f-43c1-804e-6753b1d7e660.webp";
import { motion } from "framer-motion";
import Cardvs from "../Components/Layouts/Cardvs";
import { RiSpaceShipFill } from "react-icons/ri";
import groupwork from "../assets/teamwork.jpg";
import rocket from "../assets/rocket_icon.png";
import box from "../assets/box_icon.png";
import card from "../assets/card_icon.png";
import message from "../assets/message_icon.png";
import teacher from "../assets/teacher.webp";
import logo from "../assets/ISTAD_Logo.png";
import mentor from "../assets/mentor.JPG";
import student from "../assets/student.JPG";
import lyzhia from "../assets/lyzhia.JPG";
export function AboutUs() {
  const cardab = [
    {
      img: profilepic,
      firstName: "CHAN ",
      lastName: "CHAYA",
      job: "Mentor",
      position: "FULL STACK",
    },
    {
      img: lyzhia,
      firstName: "EUNG ",
      lastName: "LYZHIA",
      job: "Mentor",
      position: "FULL STACK",
    },
  ];
  const cardac = [
    {
      img: profilepic,
      firstName: "SIM ",
      lastName: "PENG SEANG",
      job: "Student",
      position: "FULL STACK",
    },
    {
      img: profilepic,
      firstName: "LENG",
      lastName: "NARAK",
      job: "Student",
      position: "FULL STACK",
    },
    {
      img: profilepic,
      firstName: "SAM",
      lastName: "SOKUNSREYPICH",
      job: "Student",
      position: "FULL STACK",
    },

    {
      img: profilepic,
      firstName: "SIM",
      lastName: "SEANGLY",
      job: "Student",
      position: "FULL STACK",
    },
    {
      img: profilepic,
      firstName: "SRUN",
      lastName: "OUDOMSAMBATH",
      name: "SIM SEANGLY",
      job: "Student",
      position: "FULL STACK",
    },
    {
      img: profilepic,
      firstName: "TANG",
      lastName: "MENG HUY",
      job: "Student",
      position: "FULL STACK",
    },
  ];
  const cardvs = [
    {
      icon: rocket,
      title: "Efficient Task Organization",
      description:
        "Easily create, prioritize, and categorize tasks to streamline your workflow and improve efficiency.",
    },
    {
      icon: card,
      title: "Seamless Team Collaboration",
      description:
        "Assign tasks, leave comments, and collaborate effortlessly to keep everyone on the same page.",
    },
    {
      icon: message,
      title: "Customizable Workflows",
      description:
        "Customize task stages, automate processes, optimize productivity with a system that works for you.",
    },
    {
      icon: box,
      title: "Real-Time Progress Tracking",
      description:
        "Monitor task completion, track milestones, and visualize progress with detailed insights.",
    },
  ];
  return (
    <>
      <section className="flex flex-col gap-20 font-family min-w-80 w-full">
        <section className="min-w-80">
          <div className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[700px] flex items-center justify-center ">
            <img
              className="absolute inset-0 object-cover w-full h-full opacity-60"
              src={groupwork}
              alt="Background Image"
            />

            <div className="relative z-0 px-6 text-center text-white sm:px-12">
              <p className="text-lg sm:text-xl text-primary">
                WANNA LEARN WHO WE ARE?
              </p>
              <h1 className="text-primary text-2xl sm:text-3xl md:text-4xl font-bold max-w-[90%] sm:max-w-[500px] mx-auto">
                Get a Chance to know About Us and Relive Our Journey
              </h1>
              <p className="mt-4 text-lg sm:text-2xl text-secondary font-semibold max-w-[90%] sm:max-w-[500px] mx-auto">
                Meet our dynamic team and discover the roadmap to success as we
                will let you know how it works.
              </p>
            </div>

            <div className="absolute inset-0 "></div>
          </div>
          <div className="custom-shape-divider-bottom-1741223493 fill-white rotate-180 h-20 -mt-[70px] ">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                className="shape-fill"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                className="shape-fill"
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </section>

        <hr className="bg-transparent w-3/3 border-[2px] border-dashed border-primary relative ml-[0px]" />
        <section className="items-center justify-center w-4/5 h-auto m-auto ">
          <div className="bg-primary p-10 rounded-tl-[100px] rounded-br-[100px] text-center">
            <h1 className="mb-5 text-4xl text-secondary">About Taskify</h1>
            <p className="mb-10 text-2xl text-white">
              Taskify is a productivity platform that allows users to organize
              tasks, collaborate with teams, track progress, set deadlines, and
              streamline workflow efficiently, enhancing project management and
              overall productivity.
            </p>
          </div>
        </section>
        
        <div className="relative flex items-center justify-center mb-10 text-center">
         <hr className="absolute w-full border-[2px] border-dashed border-primary z-0 mt-5" />
          <h1 className="absolute text-white text-4xl bg-secondary py-5 px-6 rounded-tl-[30px] rounded-br-[30px] w-[380px] h-[80px] z-0">
            OUR VISION
          </h1>
             
        </div>

        <section>
          <div className="grid grid-cols-1  md:grid-cols-2 gap-20 w-[80%] sm:w-3/5 md:w-4/5 lg:w-4/5 m-auto my-5">
            {cardvs.map((cardvs, index) => (
              <Cardvs
                key={index}
                icon={cardvs.icon}
                title={cardvs.title}
                description={cardvs.description}
              />
            ))}
          </div>
        </section>

        <div className="relative w-full h-auto">
          {/* SVG Shape Divider - Stays on Top */}
          <div className="w-full">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full h-[60px] sm:h-[80px] md:h-[80px] lg:h-[110px] fill-blue-300"
            >
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
            </svg>
          </div>

          {/* Content Section */}
          <div className="relative w-full py-20 bg-blue-300">
            <section className="flex flex-col items-center justify-between w-4/5 gap-10 m-auto md:flex-row">
              <div className="flex flex-col gap-6 text-center md:text-left">
                <h2 className="font-bold text-subheading text-primary">
                  Let’s try a new Experience with us
                </h2>
                <p className="text-[18px] text-gray-700">
                  Taskify streamlines task management, collaboration, progress
                  tracking, and workflows, keeping teams productive and aligned
                  with an intuitive interface.
                </p>
              </div>

              {/* Image Section */}
              <div className="relative p-5 rounded-lg w-full max-w-[400px] md:max-w-[500px]">
                <img
                  src="https://cdn.prod.website-files.com/619cef5c40cb8925cd33ece3/621e3d842f5305af9170e4eb_619cef5c40cb8963c133f5fc_6076f40a7bc433d96f4663f4_template-vignette-TO-DO-LIST-1200x900.png"
                  className="w-full rounded-lg"
                  alt="Taskify App"
                />
              </div>
            </section>
          </div>
        </div>

        {/* <div class="custom-shape-divider-top-1741177377">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"
        class="w-full h-auto fill-blue-300">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
    </svg>
</div>
<div className="bg-blue-300 h-full w-full -mt-[80px] ">
  <section className="flex flex-col items-center justify-between w-4/5 gap-10 m-auto md:flex-row">
          <div className="flex flex-col gap-10 ">
            <h2 className="font-bold font-family text-subheading text-primary">
             Let’s try new Experience with us
            </h2>
            <p className="text-[20px] text-gray-700 mb-10">Taskify streamlines task management, collaboration, progress tracking, and workflows, keeping teams productive and aligned with an intuitive interface.</p>
           </div>
              <div className="relative p-10 rounded-lg w-fit ">
            <img src="https://cdn.prod.website-files.com/619cef5c40cb8925cd33ece3/621e3d842f5305af9170e4eb_619cef5c40cb8963c133f5fc_6076f40a7bc433d96f4663f4_template-vignette-TO-DO-LIST-1200x900.png" className="w-full rounded-lg" />
          </div>
        </section>
</div> */}
        <div className="relative flex items-center justify-center mb-10 text-center">
          {/* hr stays behind the text */}
          {/* <hr className="absolute left-1/2 transform -translate-x-1/2 w-[calc(100%+32px)] border-[2px] border-dashed border-secondary z-0 mt-5" /> */}
           <hr className="absolute w-full border-[2px] border-dashed border-secondary z-0 mt-5" />
          <h1 className="absolute text-white text-4xl bg-primary py-5 px-6 rounded-tl-[30px] rounded-br-[30px] w-[380px] h-[80px] z-0">
            OUR MENTOR
          </h1>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  gap-10 w-[90%] sm:w-3/5 md:w-4/5 lg:w-3/5 m-auto my-10">
          {cardab.map((Card, index) => (
            <Cardab
              key={index}
              img={Card.img}
              firstName={Card.firstName}
              lastName={Card.lastName}
              job={Card.job}
              position={Card.position}
            />
          ))}
        </div>
        <section className="">
          <div className="relative flex items-center justify-center mb-10 text-center">
            {/* <hr className="absolute left-1/2 transform -translate-x-1/2 w-[calc(100%+32px)] border-[2px] border-dashed border-primary z-0 mt-5" /> */}
             <hr className="absolute w-full border-[2px] border-dashed border-primary z-0 mt-5" />
            <h1 className="absolute text-white text-4xl bg-secondary py-5 px-6 rounded-tl-[30px] rounded-br-[30px] w-[380px] h-[80px] z-0">
              OUR MEMBER
            </h1>
          </div>
        </section>
        <div className="grid grid-cols-1  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2  gap-20 w-[90%] sm:4/5 md:w-4/5 lg:w-4/5 m-auto my-10">
          {cardac.map((Card1, index) => (
            <Cardab
              img={Card1.img}
              firstName={Card1.firstName}
              lastName={Card1.lastName}
              job={Card1.job}
              position={Card1.position}
            />
          ))}
        </div>
        <div className="bg-primary	 h-full w-full -mt-[80px] px-10 py-10 border-t-[10px] border-b-[10px] border-secondary">
          <h1 className="text-center font-bold text-white text-[32px] mb-20 w-fit mx-auto relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-full after:h-[8px] after:bg-[linear-gradient(to_right,_theme('colors.blue.600')_33%,_theme('colors.secondary')_33%_66%,_theme('colors.red.500')_66%)]">
            Sponsored and organized by
          </h1>

          <div className="flex items-center justify-center -mt-20 ">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="relative w-full h-auto mb-20 -mt-20">
          <img className="w-full mb-" src={student} alt="Teacher" />
          <div className="absolute left-0 w-full -bottom-1 ">
            <svg
  data-name="Layer 1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1200 120"
  preserveAspectRatio="none"
  className="w-full h-auto rotate-180 fill-white dark:fill-[#121321]"
>
  <path
    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
    className="shape-fill"
  ></path>
</svg>

            {/* <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full h-auto rotate-180 fill-white"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
              ></path>
            </svg> */}
          </div>
        </div>
      </section>
    </>
  );
}
export default AboutUs;
