import React, { useState, useEffect } from "react";
import { property, property1, property2, property3 } from "../assets";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { textVariant, fadeIn, slideIn } from "../animations";
import { motion } from "framer-motion";
export default function AboutUs() {
  const [position, setPosition] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const forward = () => {
    setPosition((prev) => (prev === 3 ? 0 : (prev = prev + 1)));
  };
  const backward = () => {
    setPosition((prev) => (prev === 0 ? 3 : (prev = prev - 1)));
  };
  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  // Attach the event listener when the component mounts
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);
  return (
    <div className=" py-12 px-8 flex justify-center items-center  ">
      <div className="  flex justify-center items-center flex-col gap-4 lg:grid lg:grid-cols-2  ">
        <motion.div
          variants={slideIn("left", "spring", 0.4, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className=" flex justify-center items-center flex-col max-w-[600px] 2xl:max-w-[800px] flex-shrink-0">
          <p className=" text-[28px] font-semibold text-white mb-4">About us </p>
          <p className=" text-white text-center">
            Gym24 is a leading fitness center located near Grushevka metro station, offering over
            1500 sq. m of space dedicated to top-of-the-line workout equipment from leading brands
            such as Hammer Strength, Life Fitness, and TechnoGym. <br />
            <br /> Certified trainers at Gym24 provide expert guidance and support to develop
            personalized workout plans tailored to each individual's needs and goals.
          </p>
        </motion.div>
        <motion.div
          variants={slideIn("right", "spring", 0.4, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className=" w-full overflow-x-hidden lg:max-w-[400px] 2xl:max-w-[570px]  mr-0 ml-auto">
          <div
            className=" flex items-center w-[fit-content] overflow-x-scroll gap-4 md:gap-0 lg:overflow-x-hidden transition-all duration-500 "
            style={
              width < 1536
                ? {
                    transform: `translateX(-${position * 400}px)`,
                  }
                : {
                    transform: `translateX(-${position * 570}px)`,
                  }
            }>
            <img
              className=" w-[100vw] lg:max-w-[400px] 2xl:max-w-[570px]  flex-shrink-0 rounded-2xl"
              src={property}
              alt=""
            />
            <img
              className=" w-[100vw] lg:max-w-[400px] 2xl:max-w-[570px]  flex-shrink-0 rounded-2xl"
              src={property}
              alt=""
            />
            <img
              className=" w-[100vw] lg:max-w-[400px] 2xl:max-w-[570px]  flex-shrink-0 rounded-2xl"
              src={property}
              alt=""
            />
            <img
              className=" w-[100vw] lg:max-w-[400px] 2xl:max-w-[570px]  flex-shrink-0 rounded-2xl"
              src={property}
              alt=""
            />
          </div>
          <div className="  justify-between items-center hidden lg:flex">
            <div className=" flex justify-center items-center gap-2 ">
              <div
                className={
                  position === 0 ? " w-6 h-[2px] bg-white active " : " w-6 h-[2px] bg-white "
                }></div>
              <div
                className={
                  position === 1 ? " w-6 h-[2px] bg-white active " : " w-6 h-[2px] bg-white "
                }></div>
              <div
                className={
                  position === 2 ? " w-6 h-[2px] bg-white active " : " w-6 h-[2px] bg-white "
                }></div>
              <div
                className={
                  position === 3 ? " w-6 h-[2px] bg-white active " : " w-6 h-[2px] bg-white "
                }></div>
            </div>
            <div className=" flex justify-center items-center gap-2">
              <BsArrowLeft className=" cursor-pointer" color="white" size={25} onClick={backward} />
              <BsArrowRight className=" cursor-pointer" color="white" size={25} onClick={forward} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
