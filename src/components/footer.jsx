import React from "react";
import { vector_1, vector_2, vector_3, vector_4, vector_5, vector_6, vector_7 } from "../assets";
import { gym } from "../assets";
export default function Footer() {
  return (
    <div className=" flex justify-center items-center gap-2 flex-col px-8 py-12 md:flex-row md:justify-between xl:px-24">
      <div className=" md:flex justify-center items-start flex-col gap-4 hidden ">
        <img className=" mb-4" src={gym} alt="" />
        <p className=" text-white text-left w-[300px]">
          Build strength and confidence at our gym with state-of-the-art equipment, personalized
          training, and a motivating community
        </p>
      </div>
      <div className=" flex justify-center items-center flex-col md:items-start">
        <p className=" text-white mb-6">Address</p>
        <p className=" text-white text-center mb-6 md:text-left">
          Republic of Belarus
          <br />
          Minsk city <br />
          Dzerzhinsky Avenue 15
        </p>
      </div>

      <div className=" flex justify-center items-center flex-col md:items-start">
        <p className=" text-white mb-6">contact</p>
        <div className=" flex justify-center items-center gap-2">
          <img className=" w-6" src={vector_4} alt="" />
          <p className=" text-white">+375(44)-777-24-12</p>
        </div>
        <div className=" flex justify-center items-center gap-2">
          <img className=" w-6" src={vector_5} alt="" />
          <p className=" text-white">+375(44)-777-24-12</p>
        </div>
        <div className=" flex justify-center items-center gap-6 mt-4">
          <div className=" w-[50px] h-[50px] flex justify-center items-center border-[1px] p-0 rounded-[100%] hovered_1">
            <img src={vector_3} alt="" />
          </div>
          <div className=" w-[50px] h-[50px] flex justify-center items-center border-[1px] p-0 rounded-[100%] hovered_1">
            <img src={vector_1} alt="" />
          </div>
          <div className=" w-[50px] h-[50px] flex justify-center items-center border-[1px] p-0 rounded-[100%] hovered_1">
            <img src={vector_2} alt="" />
          </div>
          <div className=" w-[50px] h-[50px] flex justify-center items-center border-[1px] p-0 rounded-[100%] hovered_1">
            <img src={vector_6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
