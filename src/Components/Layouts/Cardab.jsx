import React from "react";
import Profilepic from "../../assets/c910b642-cc3f-43c1-804e-6753b1d7e660.webp"
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook , FaTelegram ,FaGithub} from "react-icons/fa";

const ProfileCard = ({ firstName, lastName, job, position,img}) => {
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true); // Trigger animation when in view
        } else {
          setIsInView(false); // Optionally reset animation when out of view
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div className="mb-20 flex flex-col items-center justify-center ">
      <motion.div
        ref={cardRef}
        className="w-80 shadow-lg hover:shadow-2xl -mb-8 rounded-lg p-4 flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }} // Trigger animation based on visibility
        transition={{ duration: 1 }}
      >
        <motion.div
          className="w-[150px] h-[150px] rounded-[50%] border-[5px] border-primary p-1"
          initial={{ scale: 0 }}
          animate={{ scale: isInView ? 1 : 0 }} // Trigger scale animation based on visibility
          transition={{ duration: 0.8 }}
        >
          {/* <img className="h-full w-full rounded-[50%]" src={Profilepic} alt="profile pic" />
           */}
            <motion.img
      className="h-full w-full rounded-[50%]"
      src={Profilepic}
      alt="profile pic"
      whileHover={{ scale: 1.05, rotate: 2 }}  // Hover effect
      transition={{ type: "spring", stiffness: 300 }}  // Smooth spring animation
    />
        </motion.div>

        <div className="flex flex-col items-center justify-center gap-[15px] w-full">
          <motion.div
            className="text-center mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }} // Trigger opacity animation based on visibility
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h2 className="text-[25px] font-family text-secondary font-bold">{firstName}</h2>
            <h2 className="text-[25px] font-family text-secondary font-bold">{lastName}</h2>
          </motion.div>

          <p className="text-[20px] font-family text-black font-medium">{job}</p>
          <motion.h2
            className="text-[20px] font-family text-white font-medium bg-primary rounded-tl-[30px] rounded-br-[30px] py-[8px] px-[15px]"
            initial={{ x: -100 }}
            animate={{ x: isInView ? 0 : -100 }} // Trigger x-axis animation based on visibility
            transition={{ type: 'spring', stiffness: 100 }}
          >
            {position}
          </motion.h2>

          <div className="mt-6 sm:mt-0">
            <ul className="flex items-center space-x-4">
              <motion.li
                className="flex items-center justify-center w-10 h-10 border border-white rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ delay: 1, duration: 1 }}
              >
                  <div className={"flex space-x-5 items-center justify-center text-primary text-xl"}>
                      <FaFacebook />
                      <FaTelegram />
                      <FaGithub  />
                  </div>


              </motion.li>
            </ul>
          </div>
        </div>
      </motion.div>
        <div className="w-80 mt-2 h-8 rounded-b-xl border-r-amber-500 border-r-6 border-8 border-t-0 border-l-6 border-b-10 border-l-amber-500 border-amber-400 " ></div>
     </div>
  );
};

export default ProfileCard;