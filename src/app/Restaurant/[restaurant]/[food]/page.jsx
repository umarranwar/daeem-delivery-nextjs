// import React from "react";
// import { getSingleFood } from "../../../Helper/index";

// export default function page({ searchParams }) {
//   const id = searchParams.food;
//   const food = getSingleFood(id);
//   console.log("food", searchParams);
//   console.log("getSingleFood ", food);
//   return (
//     <div>
//       <h1> Food Detail {searchParams.id}</h1>
//     </div>
//   );
// }
"use client";
import React, { useContext } from "react";
import { getSingleFood } from "../../../Helper/index";
import Header from "@/components/Header";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Context } from "@/components/Context";
import Link from "next/link";
import { getSingleStore } from "@/app/Helper";

export default function AnotherPage(params) {
  let data = params;
  let foodId = parseInt(data.params.food);
  console.log("Params", params);

  const singleFood = getSingleFood(foodId);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("Small");
  const { handleAddToCart } = useContext(Context);

  const updatedSingleFood = {
    id: singleFood.id,
    img: singleFood.img,
    name: singleFood.name,
    price: singleFood.price,
    desc: singleFood.desc,
    quantity: quantity,
    size: size,
  };

  const singleStore = getSingleStore(params.params.restaurant);

  const handleAddToCartClick = () => {
    console.log("handleAddToCartClick", updatedSingleFood);
    handleAddToCart(updatedSingleFood);
  };

  return (
    <div className="flex bg-gradient-to-tl from-blue-400 to-orange-300 flex-col text-blue-900 items-center justify-center">
      <Header />
      <div className="flex flex-col justify-center items-center my-5 w-full">
        <div className="flex relative justify-center items-center p-4 w-8/12">
          <div className="flex absolute left-5 items-center">
            <div className="flex justify-center items-center relative w-16 h-16">
              <Image
                src={singleStore.logo}
                className="w-full h-full"
                width={300}
                height={300}
                alt="AlBAik Logo"
              />
            </div>
            <p
              style={{
                textShadow: "0px 1px 4px #2a2b2e",
              }}
              className="font-bold text-white ml-2"
            >
              {data.params.restaurant}
            </p>
          </div>
          <h1
            style={{
              textShadow: "0px 1px 4px #2a2b2e",
            }}
            className="text-2xl text-white mr-1 font-bold"
          >
            Order
          </h1>
          <h1
            style={{
              textShadow: "0px 1px 4px #2a2b2e",
            }}
            className="text-2xl text-white font-bold"
          >
            Detail
          </h1>
        </div>
        <div className="w-8/12 mt-5 h-0.5 rounded-full bg-gray-300"></div>
      </div>
      <div className="flex w-9/12 rounded-lg mb-20 bg-white shadow-[0px_2px_5px_#bab6b5] my-5 flex-row h-96">
        <div className=" relative w-2/4 h-full">
          <Image
            src={singleFood.img}
            width={500}
            height={500}
            className="w-full rounded-l-lg h-full"
            alt="image"
          />
        </div>
        <div className="flex gap-2 flex-col p-8 w-2/4 h-full">
          <h1 className="text-2xl">{singleFood.name}</h1>
          <div className="flex items-center">
            <FaStar size={15} color="orange" />
            <FaStar size={15} color="orange" />
            <FaStar size={15} color="orange" />
            <FaStar size={15} color="orange" />
            <p className="text-sm ml-2">100</p>
          </div>
          <p>{singleFood.desc}</p>
          <div className="flex gap-5">
            <p className="font-bold">Price</p>
            <p className="font-bold">{singleFood.price.toFixed(2)}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setQuantity(1)}
              // className="w-7 h-7 text-sm border-2 text-blue-900 border-blue-900 hover:border-orange-400 rounded-full"
              className={`w-7 h-7 text-sm border border-blue-900 ${
                quantity === 1 ? "border-orange-400 border-2" : ""
              } rounded-full`}
            >
              1
            </button>
            <button
              onClick={() => setQuantity(2)}
              className={`w-7 h-7 text-sm border border-blue-900 ${
                quantity === 2 ? "border-orange-400 border-2" : ""
              } rounded-full`}
            >
              2
            </button>
            <button
              onClick={() => setQuantity(3)}
              className={`w-7 h-7 text-sm border border-blue-900 ${
                quantity === 3 ? "border-orange-400 border-2" : ""
              } rounded-full`}
            >
              3
            </button>
            <button
              onClick={() => setQuantity(4)}
              className={`w-7 h-7 text-sm border border-blue-900 ${
                quantity === 4 ? "border-orange-400 border-2" : ""
              } rounded-full`}
            >
              4
            </button>
            <button
              onClick={() => setQuantity(5)}
              className={`w-7 h-7 text-sm border border-blue-900 ${
                quantity === 5 ? "border-orange-400 border-2" : ""
              } rounded-full`}
            >
              5
            </button>
          </div>
          <div className="flex gap-3 text-sm">
            <button
              onClick={() => setSize("Small")}
              className={`border border-blue-900 ${
                size === "Small" ? "border-orange-400 border-2" : ""
              } px-3 rounded-full py-0.5`}
            >
              Small
            </button>
            <button
              onClick={() => setSize("Large")}
              className={`border border-blue-900 ${
                size === "Large" ? "border-orange-400 border-2" : ""
              } px-3 rounded-full py-0.5`}
            >
              Large
            </button>
            <button
              onClick={() => setSize("Extra Large")}
              className={`border border-blue-900 ${
                size === "Extra Large" ? "border-orange-400 border-2" : ""
              } px-3 rounded-full py-0.5`}
            >
              Extra Large
            </button>
          </div>
          <div className="flex mt-10 gap-3 self-center">
            <Link href="/Cart">
              <button
                onClick={() => handleAddToCartClick()}
                className="self-center rounded-full hover:px-12 px-10 py-2 ease-in-out duration-300 hover:bg-blue-900 active:bg-orange-400 text-white text-sm bg-orange-400"
              >
                Add to Cart
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* {showMessage && (
        <div className="fixed top-20 px-3 py-2 rounded-lg border border-gray-200 right-5 justify-between items-center bg-blue-100">
          Your items have been added to the cart!
        </div>
      )} */}
    </div>
  );
}
