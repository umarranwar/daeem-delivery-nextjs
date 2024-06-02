"use client";
import React, { useContext, useEffect } from "react";
import { getSingleFood } from "../../../Helper";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { FaStar } from "react-icons/fa";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa6";

import { Context } from "../../../components/Context";
import Link from "next/link";
import { getSingleStore } from "../../../Helper";

import Product from "../../../components/Product";
import foodData from "../../../data/foodData.json";

export default function Page(params) {
  let data = params;
  let foodId = parseInt(data.params.food);
  console.log("Params", params);

  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);

  const toggleImageSize = () => {
    setIsImageEnlarged(!isImageEnlarged);
  };

  const singleFood = getSingleFood(foodId);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("Small");
  const { handleAddToCart, toggleWishlistItem } = useContext(Context);

  const updatedSingleFood = {
    id: singleFood.id,
    img: singleFood.img,
    name: singleFood.name,
    price: singleFood.price,
    desc: singleFood.desc,
    quantity: quantity,
    size: size,
  };

  const filteredFood = foodData.filter(
    (food) => food.store === params.params.restaurant
  );

  const singleStore = getSingleStore(params.params.restaurant);

  const handleAddToCartClick = () => {
    setLoading(true);
    console.log("handleAddToCartClick", updatedSingleFood);
    handleAddToCart(updatedSingleFood);
  };

  useEffect(() => {
    if (singleFood) {
      setSelectedImage(singleFood.img);
    }
  }, []);

  // const handleHeartClick = (foodID) => {
  //   console.log("foodId: ", foodID);
  //   let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  //   const index = wishlist.indexOf(foodID);
  //   if (index !== -1) {
  //     wishlist.splice(index, 1);
  //   } else {
  //     wishlist.push(foodID);
  //   }

  //   localStorage.setItem("wishlist", JSON.stringify(wishlist));

  //   console.log("Updated Wishlist:", wishlist);
  // };

  const handleHeartClick = () => {
    toggleWishlistItem(updatedSingleFood);
  };

  return (
    <>
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
      <div className="flex bg-gradient-to-tl h-auto w-full flex-col items-center">
        <div className="flex flex-col justify-center items-center my-10 w-full">
          <div className="flex relative justify-center items-center w-8/12">
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
                // style={{
                //   textShadow: "0px 1px 4px #2a2b2e",
                // }}
                className="font-bold text-gray-800 ml-2"
              >
                {data.params.restaurant}
              </p>
            </div>
            <h1
              // style={{
              //   textShadow: "0px 1px 4px #2a2b2e",
              // }}
              className="text-2xl text-gray-800 mr-1 font-bold"
            >
              Order Detail
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap justify-between mx-10 w-full h-auto flex-row">
          <div className="flex justify-center items-center h-auto w-2/4">
            <div className="flex items-center w-44 flex-col">
              <Image
                src={singleFood.img}
                width={500}
                height={500}
                className={`w-28 rounded-lg border-orange-400 p-3 h-24 ${
                  selectedImage === singleFood.img
                    ? "border-2 border-orange-600"
                    : ""
                }`}
                alt="image"
                onClick={() => setSelectedImage(singleFood.img)}
              />
              <Image
                src="/images/AlBaikpic1.JPG"
                width={500}
                height={500}
                className={`w-28 rounded-lg border-orange-400 p-3 h-24 ${
                  selectedImage === "/images/AlBaikpic1.JPG"
                    ? "border-2 border-orange-600"
                    : ""
                }`}
                alt="image"
                onClick={() => setSelectedImage("/images/AlBaikpic1.JPG")}
              />
              <Image
                src="/images/AlBaikpic2.JPG"
                width={500}
                height={500}
                className={`w-28 rounded-lg border-orange-400 p-3 h-24 ${
                  selectedImage === "/images/AlBaikpic2.JPG"
                    ? "border-2 border-orange-600"
                    : ""
                }`}
                alt="image"
                onClick={() => setSelectedImage("/images/AlBaikpic2.JPG")}
              />
            </div>
            <div className="w-full h-96">
              <Image
                src={selectedImage ? selectedImage : singleFood.img}
                width={500}
                height={500}
                className="w-full h-full cursor-pointer"
                alt="image"
                onClick={toggleImageSize}
              />
              {isImageEnlarged && (
                <div
                  className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-75"
                  onClick={toggleImageSize}
                >
                  <div className="max-w-screen-xl">
                    <div className="flex justify-center items-center h-fit">
                      <Image
                        src={selectedImage ? selectedImage : singleFood.img}
                        width={1000}
                        height={1000}
                        className="object-contain"
                        alt="enlarged image"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex text-gray-800 gap-2 flex-col px-8 w-2/4 h-auto">
            <div className="flex w-full justify-between">
              <div>
                <h1 className="text-3xl font-semibold">{singleFood.name}</h1>
                <h1 className="font-semibold">by {singleFood.storeName}</h1>
              </div>
              <p className="text-2xl font-semibold">
                SAR {singleFood.price.toFixed(2)}
              </p>
            </div>

            <div className="flex gap-1 items-center">
              <FaStar size={15} color="orange" />
              <FaStar size={15} color="orange" />
              <FaStar size={15} color="orange" />
              <FaStar size={15} color="orange" />
              <span className="text-sm ml-2">|</span>
              <p className="text-sm ml-2">231 Reviews</p>
            </div>
            <p className="text-sm">{singleFood.desc}</p>
            <div className="flex my-2 items-center gap-2">
              <h1 className="text-sm text-gray-700">Quantity:</h1>
              <button
                onClick={() => setQuantity(1)}
                className={`w-7 h-7 text-sm ${
                  quantity === 1
                    ? "bg-orange-400 text-white"
                    : "bg-gray-200 text-gray-800"
                } rounded-full`}
              >
                1
              </button>
              <button
                onClick={() => setQuantity(2)}
                className={`w-7 h-7 text-sm ${
                  quantity === 2
                    ? "bg-orange-400 text-white"
                    : "bg-gray-200 text-gray-800"
                } rounded-full`}
              >
                2
              </button>
              <button
                onClick={() => setQuantity(3)}
                className={`w-7 h-7 text-sm ${
                  quantity === 3
                    ? "bg-orange-400 text-white"
                    : "bg-gray-200 text-gray-800"
                } rounded-full`}
              >
                3
              </button>
              <button
                onClick={() => setQuantity(4)}
                className={`w-7 h-7 text-sm ${
                  quantity === 4
                    ? "bg-orange-400 text-white"
                    : "bg-gray-200 text-gray-800"
                } rounded-full`}
              >
                4
              </button>
              <button
                onClick={() => setQuantity(5)}
                className={`w-7 h-7 text-sm  ${
                  quantity === 5
                    ? "bg-orange-400 text-white"
                    : "bg-gray-200 text-gray-800"
                } rounded-full`}
              >
                5
              </button>
            </div>
            <div className="flex gap-3 text-sm">
              <h1 className="text-sm text-gray-700">Size:</h1>
              <button
                onClick={() => setSize("Small")}
                className={` ${
                  size === "Small"
                    ? "bg-orange-400 text-white"
                    : "bg-gray-200 text-gray-800"
                } px-3 rounded-full py-0.5`}
              >
                Small
              </button>
              <button
                onClick={() => setSize("Medium")}
                className={`${
                  size === "Medium"
                    ? "bg-orange-400 text-white"
                    : "bg-gray-200 text-gray-800"
                } px-3 rounded-full py-0.5`}
              >
                Medium
              </button>
              <button
                onClick={() => setSize("Large")}
                className={`${
                  size === "Large"
                    ? "bg-orange-400 text-white"
                    : "bg-gray-200 text-gray-800"
                } px-3 rounded-full py-0.5`}
              >
                Large
              </button>
            </div>
            <div className="flex items-center my-2 gap-3">
              <Link href="/Cart">
                <button
                  onClick={() => handleAddToCartClick()}
                  className="self-center gap-2 flex bg-orange-400 justify-center items-center rounded-lg px-5 py-1.5 text-white text-sm"
                >
                  <LiaShoppingCartSolid className="text-white size-6" />
                  Add to Cart
                </button>
              </Link>
              <div onClick={() => handleHeartClick()}>
                <FaRegHeart
                  size={30}
                  className="text-orange-400 hover:cursor-pointer"
                />
              </div>
            </div>
            <h1 className="text-sm font-semibold">
              Nutrition Facts (per serving)
            </h1>
            <div className="flex border p-3 text-sm flex-col">
              <div className="flex font-semibold justify-evenly items-center">
                <h6>564</h6>
                <h6>306mg</h6>
                <h6>3mg</h6>
                <h6>6.5gm</h6>
              </div>
              <div className="flex justify-evenly items-center">
                <h6>Calories</h6>
                <h6>Fat</h6>
                <h6>Carbs</h6>
                <h6>Protein</h6>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-lg mt-16 ml-36 text-gray-800 font-semibold">
            You may also like
          </h1>
          <div className="flex flex-row mb-10 w-full items-center justify-center p-5">
            <div className="flex justify-center flex-wrap gap-7 w-11/12">
              {filteredFood.slice(0, 4).map((item) => (
                <Link
                  href={`/Restaurant/${params.restaurant}/${item.id}`}
                  key={item.id}
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
      </div>
    </>
  );
}
