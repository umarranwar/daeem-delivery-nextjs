"use client";
import React from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";
import { BiHeart } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { FaCircleChevronRight } from "react-icons/fa6";
import { FaCircleChevronLeft } from "react-icons/fa6";

import albaik03 from "../../public/images/albaik03.jpg";

import banner1 from "../../public/images/banner1.jpg";
import banner2 from "../../public/images/banner2.jpg";
import Link from "next/link";

import storeData from "../data/storeData.json";
import foodData from "../data/foodData.json";

export default function Restaurant() {
  const router = useRouter();

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 1000;
  };
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 1000;
  };

  return (
    <div className="bg-gray-100 pt-5">
      <div className="flex my-10 items-center gap-5 justify-between">
        <div className="w-2/4 h-auto">
          <Image src={banner1} alt="banner" className="w-full h-full" />
        </div>
        <div className=" w-2/4 h-auto">
          <Image src={banner2} alt="banner" className="w-full h-full" />
        </div>
      </div>
      <div className="ml-7 py-1 w-28 flex rounded-full bg-orange-400 items-center justify-center">
        <h1 className="text-sm text-white">Our Partners</h1>
      </div>
      <div className="flex px-5 overflow-x-scroll scroll scroll-smooth scrollbar-hide flex-row">
        <div className="flex my-5 gap-3">
          {storeData.map((item) => (
            <Link
              href={`/Restaurant/${item.store}`}
              key={item.id}
              className="relative w-80 h-52 rounded-xl p-1 bg-white border hover:border-orange-400 ease-in-out duration-300 cursor-pointer shadow-2xl hover:shadow-orange-400 "
            >
              <Image
                src={item.logo}
                alt="banner"
                width={100}
                height={100}
                className="absolute m-2 w-16 h-16"
              />
              <div className="bg-white opacity-90 absolute right-2 top-2 cursor-pointer rounded-full p-1.5">
                <BiHeart className="size-6 text-blue-900" />
              </div>
              <div className="absolute text-white left-3 bottom-3">
                <p
                  style={{
                    textShadow: "0px 1px 4px #2a2b2e",
                  }}
                  className="font-bold"
                >
                  {item.title}
                </p>
                <p
                  style={{
                    textShadow: "0px 1px 4px #2a2b2e",
                  }}
                  className="text-sm font-bold text-white text-stroke w-2/4"
                >
                  {item.desc}
                </p>
              </div>
              <div>
                <div className="absolute text-gray-600 right-20 bottom-3 h-7 w-28 px-2 rounded-full items-center flex justify-between flex-row bg-opacity-60 bg-white">
                  <div className="flex">
                    <span className="font-bold">4.30</span>
                    <FaStar className="mt-1 ml-1" size={15} color="orange" />
                  </div>
                  <div>
                    <p>(1.1k)</p>
                  </div>
                </div>
                <button className="absolute rounded-full px-2 h-7 bg-orange-400 text-white bottom-3 right-3">
                  Order
                </button>
              </div>
              <Image
                src={albaik03}
                alt="menu"
                width={300}
                height={300}
                className="w-full -z-50 rounded-lg h-full"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="flex mt-3 relative items-center">
        <button>
          <FaCircleChevronLeft
            onClick={slideLeft}
            className="size-6 text-blue-900 z-50"
          />
        </button>
        <div
          id="slider"
          className="flex overflow-x-scroll scroll scroll-smooth scrollbar-hide flex-row"
        >
          <div className="flex my-5 gap-3">
            {foodData.map((item) => (
              <Link
                href={`/Restaurant/${item.store}/${item.id}`}
                key={item.id}
                className="flex relative p-3 z-0 flex-col hover:border-blue-900 cursor-pointer bg-white rounded-xl border border-gray-300 w-52"
              >
                <div className="flex flex-col z-10 justify-between items-center p-2 bg-slate-100 rounded-lg h-60 w-full">
                  <div className="bg-white opacity-90 z-10 absolute right-4 top-4 cursor-pointer rounded-full p-1.5">
                    <BiHeart className="size-6 text-blue-900" />
                  </div>
                  <div className="flex w-full items-center justify-center h-full">
                    <div className="relative w-36 h-44">
                      <Image
                        src={item.img}
                        width={100}
                        height={100}
                        style={{ width: "100%", height: "100%" }} // optional
                        alt="Picture of the author"
                      />
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="h-7 w-28 text-sm text-gray-600 px-2 rounded-full items-center flex justify-between flex-row bg-white">
                      <div className="flex">
                        <span className="font-bold">4.00</span>
                        <FaStar
                          className="mt-0.5 ml-1"
                          size={15}
                          color="orange"
                        />
                      </div>
                      <div>
                        <p>(1.6k)</p>
                      </div>
                    </div>
                    <div className="bg-orange-400 cursor-pointer rounded-full p-1">
                      <p className="text-white text-sm">Order</p>
                    </div>
                  </div>
                </div>
                <div className="flex text-blue-900 text-sm mt-5 flex-col">
                  <h5 className=" text-sm">{item.name}</h5>
                  <div className="flex flex-row">
                    <div className="flex items-center gap-1">
                      <p className="text-xs">SAR</p>
                      <p className="font-bold">{item.price}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <button>
          <FaCircleChevronRight
            onClick={slideRight}
            className="size-6 text-blue-900 z-50"
          />
        </button>
      </div>
    </div>
  );
}
