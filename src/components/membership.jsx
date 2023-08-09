import React from "react";
import { vector_7 } from "../assets";
import { membership } from "../data";
import { textVariant, fadeIn, slideIn } from "../animations";
import { motion } from "framer-motion";
export default function Membership() {
  return (
    <div className=" py-12 px-8 flex justify-start items-center gap-8 flex-col">
      <p className=" text-[28px] font-semibold text-white mb-4">Gym membership </p>
      <div className=" w-[100vw] overflow-x-auto  md:flex justify-center items-center ">
        <div className=" flex justify-center items-center gap-8 w-[fit-content] px-8 md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-24 2xl:gap-40 ">
          {membership.map((card, index) => {
            return (
              <motion.div
                variants={fadeIn("up", "spring", index * 0.4, 0.75)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                key={index}
                className="  w-[275px] h-[400px]   2xl:w-[400px] 2xl:h-[550px] rounded-lg flex flex-col justify-start items-center gap-4  bg-grey border-2 border-black hover:border-primary hovering">
                <p className=" text-white text-center pt-4 text-[24px] border-b-2 w-full border-b-black  hovered font-semibold ">
                  {card.offre} <br />${card.price}
                </p>

                <div className=" flex justify-start items-start flex-col h-[60%] px-4 gap-4 2xl:gap-12">
                  {card.details.map((detail, index) => {
                    return (
                      <div key={index} className=" flex justify-center items-center gap-4">
                        <img className=" 2xl:w-[30px]" src={vector_7} alt="" />
                        <p className=" text-white 2xl:font-semibold ">{detail}</p>
                      </div>
                    );
                  })}
                </div>

                <button className=" bg-primary text-black rounded-full min-w-[107px] text-[clamp(16px , 10vw, 300%)] font-semibold py-1">
                  Buy
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
