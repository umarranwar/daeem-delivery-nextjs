"use client";
import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { getSingleFood } from "@/Helper";
import { Context } from "@/components/Context";

export default function Page() {
  const { wishlistItems, toggleWishlistItem, removeFromWishlist } =
    useContext(Context);

  // useEffect(() => {
  //   const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  //   console.log("Updated Wishlist:", wishlist);

  //   const foodsPromise = wishlist.map((foodId) => getSingleFood(foodId));

  //   Promise.all(foodsPromise)
  //     .then((foods) => {
  //       setWishlistFoods(foods);
  //       console.log("Wishlist Foods:", foods);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching wishlist foods:", error);
  //     });
  // }, []);

  // console.log("complete wishlist: ", wishlistFoods);

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
  //   const foodsPromise = wishlist.map((foodId) => getSingleFood(foodId));

  //   Promise.all(foodsPromise)
  //     .then((foods) => {
  //       setWishlistFoods(foods);
  //       console.log("Wishlist Foods:", foods);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching wishlist foods:", error);
  //     });
  // };

  const handleHeartClick = (id) => {
    removeFromWishlist(id);
    localStorage.removeItem("user");
  };

  return (
    <div>
      <div className="flex w-full h-auto flex-col justify-center items-center p-10">
        {wishlistItems.length === 0 ? (
          <div className="flex justify-center items-center">
            <div className="relative w-52 h-52">
              <Image
                src="/images/empty-cart-icon.png"
                className="w-full h-full"
                width={500}
                height={500}
              />
            </div>
          </div>
        ) : (
          wishlistItems.map((food, index) => (
            <div
              key={index}
              className="flex w-10/12 p-5 border rounded-lg justify-between items-center"
            >
              <div className="flex gap-4 items-center">
                <div className="flex w-16 h-16 relative justify-center items-center">
                  <Image
                    src={food.img} // Assuming food object has an 'image' property
                    className="rounded-full w-full h-full"
                    width={100}
                    height={100}
                  />
                  <div className="rounded-full w-full h-full bg-gray-300"></div>
                </div>
                <h1 className="font-semibold text-gray-700">{food.name}</h1>
                {/* Assuming food object has a 'name' property */}
              </div>
              <div className="flex gap-10 justify-center items-center">
                <h1 className="font-semibold text-gray-700">{food.price}</h1>
                {/* Assuming food object has a 'price' property */}
                <FaHeart
                  onClick={() => handleHeartClick(food.id)}
                  className="text-red-600 cursor-pointer"
                  size={15}
                />
                <button className="py-2 text-xs rounded-lg bg-orange-400 px-7 text-white font-semibold">
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
