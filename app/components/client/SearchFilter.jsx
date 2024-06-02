"use client";
import React, { useState, useContext } from "react";
import { IoSearchCircle } from "react-icons/io5";
import { Context } from "@/components/Context";

export default function SearchFilter() {
  const { handleSearchChange, searchQuery } = useContext(Context);

  // Handle search input change
  const handleChange = (e) => {
    handleSearchChange(e.target.value);
  };

  return (
    <div className="relative max-sm:mt-4 h-9 mt-4 lg:w-5/12 md:w-8/12 sm:w-9/12 max-sm:w-11/12 w-5/12 flex items-center text-gray-400">
      <input
        className="px-5 h-9 w-full hover:shadow-[0px_0px_10px_3px_#f28d35] ring-1 hover:ring-orange-400 ring-orange-400 focus:outline-none text-sm py-2 rounded-full fn border-none text-black"
        type="text"
        name="search"
        value={searchQuery}
        onChange={handleChange}
        placeholder="Search your favorite store"
      />
      <IoSearchCircle className="w-9 h-9 right-0 hover:scale-105 duration-500 hover:fill-orange-400 hover:cursor-pointer fill-blue-900 absolute cursor-default" />
    </div>
  );
}
