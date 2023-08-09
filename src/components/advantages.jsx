import React from "react";
import { zone, time, equip, line } from "../assets/index";
import { textVariant, fadeIn, slideIn } from "../animations";
import { motion } from "framer-motion";
export default function Advantages() {
  return (
    <div className=" flex flex-col justify-center items-center py-12   ">
      <p className=" text-[28px] font-semibold text-white mb-4">Reasons to join</p>
      <div className="md:items-start gap-12 my-12 px-12 lg:grid grid-cols-2 2xl:px-48 justify-center items-center">
        <motion.div
          variants={fadeIn("right", "spring", 0.4, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className=" flex justify-start items-center gap-[54px] w-full mb-4">
          <img src={line} alt="" />

          <p className=" text-white">
            A spacious gym for sports - a safe distance between exercices machines
          </p>
        </motion.div>
        <motion.div
          variants={slideIn("right", "spring", 0.8, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className=" flex justify-start items-center gap-4 w-full mb-4">
          <img src={equip} alt="" />

          <p className=" text-white">
            No queues at the simulators. Premium equipment from LifeStyle, Hammer Strength,
            TechnoGym.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("right", "spring", 1.2, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className=" flex justify-start items-center gap-[37px] w-full mb-4">
          <img src={zone} alt="" />

          <p className=" text-white">
            From cardio to functional and cycle. Separate area for boxing and mixed martial arts
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("left", "spring", 1.6, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className=" flex justify-start items-center gap-[29px] w-full mb-4">
          <img src={time} alt="" />

          <p className=" text-white">
            The gym is open 24 hours a day, also works on all holidays and weekends
          </p>
        </motion.div>
      </div>
    </div>
  );
}
