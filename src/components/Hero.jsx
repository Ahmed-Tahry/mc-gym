import React from "react";
import { background, background_big, background_x_big } from "../assets";
import { textVariant, fadeIn, slideIn } from "../animations";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <div className=" w-full py-12 px-8 md:my-0 relative  ">
      <img src={background} alt="background " className=" img md:hidden absolute right-0 -z-10" />
      <img
        src={background_big}
        alt="background "
        className=" hidden md:block 2xl:hidden absolute right-0 img -z-10 h-[100vh] "
      />

      <img
        src={background_x_big}
        alt="background "
        className=" hidden 2xl:block absolute right-0 img -z-10 h-[100vh] "
      />

      <div className="  w-full min-h-[450px] md:min-h-[100vh]  flex flex-col justify-center items-center md:items-start  gap-10 md:gap-0 pt-16 2xl:pl-48 ">
        <motion.h1
          variants={textVariant(0.1)}
          initial="hidden"
          animate="show"
          whileInView="show"
          viewport={{ once: true }}
          className=" text-white text-center  md:hidden ">
          Free trial <br />
          session with <br /> a trainer
        </motion.h1>
        <motion.h1
          variants={textVariant(0.1)}
          initial="hidden"
          animate="show"
          whileInView="show"
          viewport={{ once: true }}
          className=" text-white text-left  hidden md:block ">
          Free trial session <br /> with a trainer
        </motion.h1>
        <motion.button
          variants={fadeIn("up", "spring", 0.4, 0.75)}
          initial="hidden"
          animate="show"
          whileInView="show"
          viewport={{ once: true }}
          className=" bg-primary text-black rounded-full min-w-[177px] text-[clamp(16px , 10vw, 300%)] font-semibold py-4">
          Detailed
        </motion.button>
      </div>
    </div>
  );
}
