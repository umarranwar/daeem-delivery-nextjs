"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { TiShoppingCart } from "react-icons/ti";
import { FaStar } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaCircleChevronRight } from "react-icons/fa6";
import { FaCircleChevronLeft } from "react-icons/fa6";

import { BiHeart } from "react-icons/bi";

const electronics = [
  {
    id: 1,
    name: "Apple iPhone 15 Pro (256 GB) - Natural Titanium.",
    price: "4,999.0",
    img: "/images/electronics01.png",
  },
  {
    id: 2,
    name: "HUAWEI MateBook D 14 Laptop,11th Generation, Intel Core i5-1135G7 processor, 14 inch FHD, 8GB RAM, 512GB SSD.",
    price: "3,999.0",
    img: "/images/electronics02.png",
  },
  {
    id: 3,
    name: "Apple iPhone 15 Pro (256 GB) - Natural TitaniumGalaxy S23 Ultra 5G Dual SIM Green 12GB RAM 256GB - Middle East Version.",
    price: "4,999.0",
    img: "/images/electronics05.png",
  },
  {
    id: 4,
    name: "Apple AirPods (3rd generation) with Lightning Charging Case, Wireless.",
    price: "599.0",
    img: "/images/electronics03.png",
  },
  {
    id: 5,
    name: "JBL Tune 520 OVER-EAR BT Headphone Black.",
    price: "299.0",
    img: "/images/electronics04.png",
  },
  {
    id: 6,
    name: "Apple iPhone 15 Pro (256 GB) - Natural TitaniumGalaxy S23 Ultra 5G Dual SIM Green 12GB RAM 256GB - Middle East Version.",
    price: "4,999.0",
    img: "/images/electronics05.png",
  },
  {
    id: 7,
    name: "Apple AirPods (3rd generation) with Lightning Charging Case, Wireless.",
    price: "799.0",
    img: "/images/electronics03.png",
  },
  {
    id: 8,
    name: "JBL Tune 520 OVER-EAR BT Headphone Black.",
    price: "299.0",
    img: "/images/electronics04.png",
  },
];
function Ecommerce() {
  const router = useRouter();

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 1000;
  };
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 1000;
  };

  const slideRight02 = () => {
    var slider = document.getElementById("slider02");
    slider.scrollLeft = slider.scrollLeft + 1000;
  };
  const slideLeft02 = () => {
    var slider = document.getElementById("slider02");
    slider.scrollLeft = slider.scrollLeft - 1000;
  };

  return (
    <div className="bg-gray-100 pt-5">
      <div className="bg-gray-200 pt-5">
        <div className="ml-7 py-1 w-36 flex rounded-full bg-orange-400 items-center justify-center">
          <h1 className="text-white">Electronics</h1>
        </div>
        <div className="flex mt-3 relative items-center">
          <FaCircleChevronLeft
            onClick={slideLeft02}
            className="size-9 cursor-pointer text-blue-900 z-50"
          />
          <div
            id="slider02"
            className="flex overflow-x-scroll scroll scroll-smooth scrollbar-hide flex-row"
          >
            <div className="flex my-5 gap-3">
              {electronics.map((item, index) => (
                <div
                  key={index}
                  className="flex relative p-3 z-0 flex-col hover:shadow-orange-400 hover:border-blue-900 bg-white rounded-xl border border-gray-300 w-52"
                >
                  <div className="flex flex-col z-10 justify-between p-2 bg-slate-100 rounded-lg h-60 w-full">
                    <div className="bg-white z-10 opacity-90 absolute right-4 top-4 cursor-pointer rounded-full p-1.5">
                      <BiHeart className="size-6 text-blue-900" />
                    </div>
                    <div className="flex w-full items-center justify-center h-full">
                      <div className="relative w-36 h-44">
                        <Image
                          src={item.img}
                          width={200}
                          height={200}
                          className="w-full h-full"
                          alt="Picture of the author"
                          priority={false}
                        />
                      </div>
                    </div>
                    <div className="flex items-center">
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
                      <div className="bg-white absolute right-4 cursor-pointer rounded-full p-1">
                        <TiShoppingCart color="orange" size={30} />
                      </div>
                    </div>
                  </div>
                  <div className="flex text-blue-900 text-sm mt-5 flex-col">
                    <h5 className=" text-sm">{item.name}</h5>
                    <div className="flex flex-row">
                      <div className="flex items-center gap-1">
                        <p className="text-xs">SAR</p>
                        <p className="font-bold">{item.price}</p>
                        <p className="line-through font-light text-gray-400">
                          5799
                        </p>
                        <p className="text-green-600 text-xs font-bold">13%</p>
                      </div>
                    </div>
                    <div className="flex gap-1 justify-start items-center">
                      <HiOutlineShoppingBag className="size-5 text-gray-500" />
                      <p className="text-xs">Only 6 left in stock</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <FaCircleChevronRight
            onClick={slideRight02}
            className="size-9 cursor-pointer text-blue-900 z-50"
          />
        </div>
      </div>
    </div>
  );
}

export default Ecommerce;
