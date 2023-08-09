import React, { useState } from "react";
import { gym, humberger } from "../assets/index";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { textVariant, fadeIn, slideIn } from "../animations";
import { motion } from "framer-motion";
export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <motion.div
        variants={fadeIn("left", "spring", 0.8, 0.75)}
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        className=" w-full px-12 py-8 md:py-4 md:px-6  flex justify-between 2xl:justify-around items-center fixed z-50">
        <img src={gym} alt="gym-logo" />
        <ul className=" hidden  md:flex justify-around items-center  gap-12 ">
          <li className=" list-none text-white hover:text-primary ">Advangtages</li>
          <li className=" list-none text-white hover:text-primary ">Membership</li>
          <li className=" list-none text-white hover:text-primary ">About</li>
          <li className=" list-none text-white hover:text-primary ">Trainers</li>
        </ul>
        {toggle ? (
          <AiOutlineCloseCircle
            color="white"
            size={26}
            className=" md:hidden cursor-pointer"
            onClick={() => setToggle(false)}
          />
        ) : (
          <img
            className=" md:hidden cursor-pointer my-[6px] "
            src={humberger}
            alt="uhmberger-menu"
            onClick={() => setToggle(true)}
          />
        )}
      </motion.div>
      {toggle && (
        <div className=" absolute top-0 right-0 w-full h-[100vh] md:hidden  flex justify-center items-start py-[30%] z-40 bg-black slide-top opacity-90 ">
          <ul className=" flex justify-center items-center flex-col gap-12">
            <li className=" list-none text-white hover:text-primary ">Advangtages</li>
            <li className=" list-none text-white hover:text-primary ">Membership</li>
            <li className=" list-none text-white hover:text-primary ">About</li>
            <li className=" list-none text-white hover:text-primary ">Trainers</li>
          </ul>
        </div>
      )}
    </>
  );
}
