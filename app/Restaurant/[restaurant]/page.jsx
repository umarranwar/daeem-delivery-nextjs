"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Product from "../../components/Product";
import { IoSearchCircle } from "react-icons/io5";
import foodData from "../../data/foodData.json";
import { BiHeart } from "react-icons/bi";

import { getSingleStore } from "../../Helper/index";

import Link from "next/link";

export default function Restaurants({ params }) {
  const [loading, setLoading] = useState(false);

  const showLoader = () => {
    setLoading(true);
  };

  console.log("SearchParams", params.restaurant);
  const singleStore = getSingleStore(params.restaurant);
  console.log("singleStore", singleStore);

  const filteredFood = foodData.filter(
    (food) => food.storeName === params.restaurant
  );

  return (
    <div className="flex flex-col items-center bg-gray-100 ">
      {loading && (
        <div class="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div class="bg-black opacity-50 absolute inset-0"></div>
          <div class="absolute flex flex-col items-center justify-center z-50 animate-pulse">
            <Image
              src="/images/LoadingLogo2.png"
              alt="loading-icon"
              width={200}
              height={100}
            />
          </div>
        </div>
      )}
      <div
        style={{
          backgroundImage: `url('${singleStore.bgImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "300px",
          position: "relative",
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}
        className="flex relative justify-center items-center "
      >
        <div className="flex w-2/4 absolute bottom-5 left-20">
          <div className="w-32 h-32 relative">
            <Image
              src={singleStore.logo}
              width={100}
              height={100}
              className="w-full h-full"
              alt="Picture of the author"
            />
          </div>
          <div>
            <h2
              style={{
                textShadow: "0px 1px 4px #2a2b2e",
              }}
              className="text-xl ml-2 font-bold text-white mt-2"
            >
              {params.restaurant.replace(/-/g, " ")}
            </h2>
            <h2
              style={{
                textShadow: "0px 1px 4px #2a2b2e",
              }}
              className="text-lg ml-2 font-bold text-white"
            >
              {singleStore.type}
            </h2>
            <h2
              style={{
                textShadow: "0px 1px 4px #2a2b2e",
              }}
              className="ml-2 font-bold text-white"
            >
              Distance 2.0 km
            </h2>
            <h2
              style={{
                textShadow: "0px 1px 4px #2a2b2e",
              }}
              className="ml-2 font-bold text-white"
            >
              Delivery SAR 10
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-row my-10 w-full items-center justify-center p-5">
        <div className="flex justify-center flex-wrap gap-7 w-11/12">
          {filteredFood.map((item) => (
            <Link
              href={`/Restaurant/${params.restaurant}/${item.id}`}
              key={item.id}
              onClick={showLoader}
              className="flex xl:w-5/12 lg:w-5/12 md:w-7/12 sm:w-8/12 max-sm:w-96 rounded-lg h-32 hover:border-orange-400 border shadow-[0px_2px_5px_#bab6b5] p-2 bg-white items-center justify-between"
            >
              <Product
                id={item.id}
                name={item.name}
                price={item.price}
                desc={item.desc}
                img={item.img}
              />
            </Link>
          ))}
          <div className="flex w-5/12 rounded-lg h-32 p-2 items-center justify-between"></div>
        </div>
      </div>
    </div>
  );
}
