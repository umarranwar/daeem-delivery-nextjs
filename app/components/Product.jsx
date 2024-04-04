import React from "react";
import Image from "next/image";
import { BiHeart } from "react-icons/bi";
import { FaStar } from "react-icons/fa";

export default function Product({ name, price, desc, img }) {
  return (
    <>
      <div className="flex w-3/12 h-full justify-center items-center">
        <Image
          src={img}
          width={200}
          height={200}
          alt="image"
          className="w-full rounded-lg h-full"
        />
      </div>
      <div className="flex font-semibold h-full w-9/12">
        <div className="flex flex-col justify-between items-baseline w-full pl-2 h-full">
          <div>
            <h1 className="text-lg text-gray-700">{name}</h1>
            <p className="text-sm text-gray-500">
              {desc.split(" ").slice(0, 10).join(" ")}{" "}
              {desc.split(" ").length > 10 ? "..." : ""}
            </p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <h1 className="text-gray-800">{price}.00 SAR</h1>
            <h1 className="text-sm text-gray-500 line-through">
              {price}.00 SAR
            </h1>
          </div>
        </div>
        <div className="flex gap-1 font-semibold text-gray-600">
          <FaStar size={20} color="orange" />
          <p className="text-sm mt-0.5">4.1</p>
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
