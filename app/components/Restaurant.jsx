"use client";
import React, { useState } from "react";

import Image from "next/image";
import { BiHeart } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { FaCircleChevronRight } from "react-icons/fa6";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

import albaik03 from "../../public/images/albaik03.jpg";

import banner1 from "../../public/images/banner1.jpg";
import banner2 from "../../public/images/banner2.jpg";
import Link from "next/link";

import storeData from "../data/storeData.json";
import foodData from "../data/foodData.json";
import Carousel from "./Carousel";

export default function Restaurant({ setLoading }) {
  const showLoader = () => {
    setLoading(true);
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 1000;
  };
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 1000;
  };

  return (
    <div className="bg-orange-50 pt-5">
      <div className="flex my-10 items-center gap-5 justify-between">
        <Carousel />
      </div>
      <div className="flex my-5 justify-center items-center w-full">
        <h1 className="font-bold text-2xl text-orange-400">Special Today</h1>
      </div>
      <div className="flex mb-10 gap-5 w-full justify-center items-center">
        <Image
          className="cursor-pointer"
          src="/images/food01.png"
          alt="food01"
          width={180}
          height={180}
        />
        <Image src="/images/food02.png" alt="food01" width={180} height={180} />
        <Image src="/images/food03.png" alt="food01" width={180} height={180} />
        <Image src="/images/food04.png" alt="food01" width={180} height={180} />
        {/* <Image src="/images/food05.png" alt="food01" width={150} height={150} /> */}
        <Image src="/images/food06.png" alt="food01" width={180} height={180} />
      </div>
      <div className="flex ml-5 my-2 items-center w-full">
        <h1 className="font-bold text-xl text-gray-600">Top Restaurants</h1>
      </div>
      {/* <div className="flex px-5 overflow-x-scroll scroll scroll-smooth scrollbar-hide flex-row">
        <div className="flex my-5 gap-3">
          {storeData.map((item) => (
            <Link
              href={`/Restaurant/${item.store}`}
              onClick={showLoader}
              key={item.id}
              className="relative w-80 h-52 rounded-xl bg-orange-500 border cursor-pointer"
            >
              <div className="relative">
                <Image
                  src={item.logo}
                  alt="banner"
                  width={100}
                  height={100}
                  className="absolute m-2 w-16 h-16"
                />
                <div className="absolute inset-0 bg-orange-500 shadow-inner rounded-lg"></div>
              </div>
              <div className="bg-white opacity-90 absolute right-2 top-2 cursor-pointer rounded-full p-1.5">
                <BiHeart className="size-6 text-orange-400" />
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
                <div className="absolute text-gray-600 right-3 bottom-3 px-2 rounded-full items-center flex justify-between flex-row bg-opacity-60">
                  <div className="flex gap-1">
                    <FaStar className="mt-1" size={15} color="orange" />
                    <p>4.0</p>
                  </div>
                </div>
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
      </div> */}
      <div className="flex px-5 overflow-x-scroll scroll scroll-smooth scrollbar-hide flex-row">
        <div className="flex my-5 gap-3">
          {storeData.map((item) => (
            <Link
              href={`/Restaurant/${item.store}`}
              onClick={showLoader}
              key={item.id}
              className="relative w-80 h-52 hover:border hover:border-orange-400 rounded-xl border cursor-pointer overflow-hidden"
            >
              {/* Orange shadow */}
              <div className="absolute inset-0">
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-orange-400 to-transparent"></div>
              </div>
              {/* Image */}
              <div className="relative">
                <Image
                  src={item.logo}
                  alt="banner"
                  width={100}
                  height={100}
                  className="absolute m-2 w-16 h-16"
                />
              </div>

              {/* Heart icon */}
              <div className="bg-white opacity-90 absolute right-2 top-2 cursor-pointer rounded-full p-1.5">
                <BiHeart className="size-6 text-orange-400" />
              </div>

              {/* Title and description */}
              <div className="absolute text-white left-3 bottom-2">
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
                  className="text-sm font-bold text-white text-stroke w-3/4"
                >
                  {item.desc}
                </p>
                <div className="flex items-center mt-1 gap-1">
                  <IoLocationOutline size={18} className="text-white" />
                  <p className="text-sm">Location of the Restaurant</p>
                </div>
              </div>

              {/* Rating */}
              <div className="absolute right-3 bottom-2 px-2 rounded-full items-center flex justify-between flex-row bg-opacity-60">
                <div className="flex gap-1">
                  <FaStar className="mt-0.5 text-white" size={15} />
                  <p className="text-white text-sm">4.0</p>
                </div>
              </div>

              {/* Image overlay */}
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
      {/* <div className="flex flex-wrap justify-center">
        {foodData.map((item) => (
          <Link
            key={item.id}
            href={`/Restaurant/${item.store}/${item.id}`}
            className="flex flex-col bg-white p-4 rounded-xl w-96 m-2"
          >
            <div className="flex justify-center items-center h-52">
              <Image
                src={item.img}
                width={100}
                height={100}
                alt="Picture of the author"
                className="w-full h-full rounded-xl"
              />
            </div>
            <div className="flex mt-3 gap-2 flex-col">
              <h5 className="text-gray-800 font-bold text-lg">{item.name}</h5>
              <div className="flex gap-1.5 items-center">
                <FaStar size={17} className="text-orange-400" />
                <p className="text-gray-500 text-sm">
                  4.8 (3781 delivery reviews)
                </p>
              </div>
              <div className="flex gap-1.5 items-center">
                <FaLocationDot size={17} className="text-red-600" />
                <p className="text-gray-500 text-sm">
                  4.8 (3781 delivery reviews)
                </p>
              </div>
              <div className="flex justify-between">
                <h2 className="text-gray-800 font-bold text-lg">
                  {item.price}
                </h2>
                <h2 className="text-gray-800 font-bold text-lg">
                  {item.price}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div> */}
      {/* <div className="flex xl:w-5/12 lg:w-5/12 md:w-7/12 sm:w-8/12 max-sm:w-96 rounded-lg h-32 hover:border-orange-400 border shadow-[0px_2px_5px_#bab6b5] p-2 bg-white items-center justify-between">
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
              <p className="text-sm text-gray-500">{desc}</p>
            </div>
            <div className="flex gap-3">
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
      </div> */}
      <div className="flex my-5 justify-center items-center w-full">
        <h1 className="font-bold text-2xl text-orange-400">
          Recommended For You
        </h1>
      </div>
      <div className="flex pt-5 pb-10 gap-5 flex-wrap justify-center">
        {foodData.slice(0, 6).map((item) => (
          <Link
            key={item.id}
            href={`/Restaurant/${item.store}/${item.id}`}
            className="flex xl:w-5/12 lg:w-5/12 md:w-7/12 sm:w-8/12 max-sm:w-96 rounded-lg h-32 hover:border-orange-400 border shadow-[0px_2px_5px_#bab6b5] p-2 bg-white items-center justify-between"
          >
            <div className="flex w-3/12 h-full justify-center items-center">
              <Image
                src={item.img}
                width={200}
                height={200}
                alt="image"
                className="w-full rounded-lg h-full"
              />
            </div>
            <div className="flex font-semibold h-full w-9/12">
              <div className="flex flex-col justify-between items-baseline w-full pl-2 h-full">
                <div>
                  <h1 className="text-lg text-gray-700">{item.name}</h1>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
                <div className="flex w-full gap-2">
                  <div className="flex items-center gap-3">
                    <h1 className="text-gray-800">{item.price}.0 SAR</h1>
                    <h1 className="text-sm text-gray-500 line-through">
                      {item.price}.0 SAR
                    </h1>
                  </div>
                  <div className="flex mt-1 gap-1">
                    <IoLocationOutline size={18} className="text-gray-500" />
                    <p className="text-sm text-gray-500">Restaurant Location</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-1 font-semibold text-gray-600">
                <FaStar size={20} color="orange" />
                <p className="text-sm mt-0.5">4.1</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

{
  /* <div className="flex flex-wrap justify-center">
  {foodData.map((item) => (
    <Link
      key={item.id}
      href={`/Restaurant/${item.store}/${item.id}`}
      className="flex flex-col bg-white p-4 rounded-xl w-96 m-2"
    >
      <div className="flex justify-center items-center h-52">
        <Image
          src={item.img}
          width={100}
          height={100}
          alt="Picture of the author"
          className="w-full h-full rounded-xl"
        />
      </div>
      <div className="flex mt-3 gap-2 flex-col">
        <h5 className="text-gray-800 font-bold text-lg">{item.name}</h5>
        <div className="flex gap-1.5 items-center">
          <FaStar size={17} className="text-orange-400" />
          <p className="text-gray-500 text-sm">4.8 (3781 delivery reviews)</p>
        </div>
        <div className="flex gap-1.5 items-center">
          <FaLocationDot size={17} className="text-red-600" />
          <p className="text-gray-500 text-sm">4.8 (3781 delivery reviews)</p>
        </div>
        <div className="flex justify-between">
          <h2 className="text-gray-800 font-bold text-lg">{item.price}</h2>
          <h2 className="text-gray-800 font-bold text-lg">{item.price}</h2>
        </div>
      </div>
    </Link>
  ))}
</div>; */
}
