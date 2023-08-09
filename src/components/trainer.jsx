import React from "react";
import { trainers } from "../data";
import { vector_2, vector_3, vector_6 } from "../assets";
import { textVariant, fadeIn, slideIn } from "../animations";
import { motion } from "framer-motion";
export default function Trainer() {
  return (
    <div className=" w-full py-12 px-8 flex justify-center items-center flex-col">
      <p className=" text-[28px] font-semibold text-white mb-4">Trainers staff </p>
      <div className=" w-full overflow-x-hidden flex items-center justify-center">
        <div className=" flex items-center w-[fit-content] overflow-x-auto gap-4 md:grid md:grid-cols-2 lg:grid-cols-3  ">
          {trainers.map((trainer, index) => {
            return (
              <motion.div
                variants={fadeIn("up", "spring", index * 0.2, 0.75)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                key={index}
                className=" flex justify-center w-[275px] flex-shrink-0 items-center bg-grey gap-4 flex-col p-4 rounded-3xl hovering_1 ">
                <img className=" rounded-3xl" src={trainer.image} alt="" />
                <p className=" text-white font-semibold">{trainer.name}</p>
                <div className=" w-full flex justify-around items-center ">
                  <div className=" w-[35px] h-[35px] flex justify-center items-center border-[1px] p-2 rounded-[100%] hovered_1">
                    <img src={vector_3} alt="" />
                  </div>{" "}
                  <div className=" w-[35px] h-[35px] flex justify-center items-center border-[1px] p-2 rounded-[100%] hovered_1">
                    <img src={vector_2} alt="" />
                  </div>
                  <div className=" w-[35px] h-[35px] flex justify-center items-center border-[1px] p-2 rounded-[100%] hovered_1">
                    <img src={vector_6} alt="" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
