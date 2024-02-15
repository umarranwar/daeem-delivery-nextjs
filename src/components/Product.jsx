import React from "react";
import Image from "next/image";
import { BiHeart } from "react-icons/bi";
import { FaStar } from "react-icons/fa";

export default function Product({ name, price, desc, img }) {
  return (
    <>
      <div className="flex w-1/3 h-full justify-center items-center">
        <Image
          src={img}
          width={200}
          height={200}
          alt="image"
          className="w-full rounded-lg h-full"
        />
      </div>
      <div className="flex flex-col justify-between w-2/3 pl-2 h-full">
        <div>
          <div className="flex text-sm text-gray-700 font-semibold justify-between">
            <div className="w-32">
              <h1>{name}</h1>
            </div>
            <div className="flex gap-2">
              <h1 className="text-sm">SR {price}.0</h1>
              <BiHeart className="cursor-pointer size-5 text-blue-900" />
            </div>
          </div>
          <div className="w-full">
            <p className="text-sm">{desc}</p>
          </div>
        </div>
        <div className="flex justify-between my-1 items-center">
          <div className="flex ml-5 items-center">
            <FaStar size={15} color="orange" />
            <FaStar size={15} color="orange" />
            <FaStar size={15} color="orange" />
            <FaStar size={15} color="orange" />
            <p className="text-sm ml-2">89</p>
          </div>
          <button className="text-xs ease-in-out duration-300 hover:bg-blue-900 active:bg-orange-400 text-white rounded-2xl py-0.5 bg-orange-400 px-3">
            Order Now
          </button>
        </div>
      </div>
      {/* <div className="flex flex-col items-center justify-between w-5 h-full">
        <BiHeart className="cursor-pointer size-5 text-blue-900" />
        <div className="flex bg-gray-400 rounded-full p-1 flex-col justify-center items-center">
          <h1 className="text-sm">SAR</h1>
          <h1 className="text-sm">{price}.0</h1>
        </div>
      </div> */}
    </>
  );
}
