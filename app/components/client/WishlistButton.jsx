"use client";
import Link from "next/link";
import React, { useContext } from "react";
import { FaRegHeart } from "react-icons/fa";
import { Context } from "../Context";

export default function WishlistButton() {
  const { wishlistItems } = useContext(Context);
  const totalWishlistItems = wishlistItems.length;

  return (
    <Link href="/Wishlist" className="flex justify-center items-center">
      <h1 className="text-sm text-white mr-1">Wishlist</h1>
      <div className="flex items-center w-8 h-10 relative">
        <div className="flex absolute right-0 top-0 w-5 h-5 justify-center items-center rounded-full bg-white">
          <p className="text-xs text-orange-400 font-semibold">
            {totalWishlistItems}
          </p>
        </div>
        <FaRegHeart size={20} className="text-white mt-0.5" />
      </div>
    </Link>
  );
}
