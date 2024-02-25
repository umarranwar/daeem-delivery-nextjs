"use client";
import Header from "@/components/Header";
import React, { useState, useEffect } from "react";
import { CiUser } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";

export default function Page() {
  const [orderData, setOrderData] = useState(null);
  const [userInfo, setUserInfo] = useState({}); // Initialize userInfo as an empty object

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userDataString = localStorage.getItem("orderDetail");
      const userInfoString = localStorage.getItem("userData");

      if (userDataString) {
        const userData = JSON.parse(userDataString);
        setOrderData(userData);
        console.log(userData, "orderData");
      } else {
        console.log("orderData not found in localStorage");
      }

      if (userInfoString) {
        const userData = JSON.parse(userInfoString);
        setUserInfo(userData);
        console.log(userData, "userInfo");
      } else {
        console.log("userInfo not found in localStorage");
      }
    }
  }, []);

  return (
    <div className="flex flex-col items-center">
      <Header />
      <h1 className="font-bold text-xl my-8 text-gray-700">User Profile</h1>
      <div className="flex w-8/12 justify-center">
        <div className="flex items-center p-4 border-1 bg-gray-50 h-96 flex-col w-56">
          <div className="flex justify-center items-center w-40 h-40 rounded-full bg-gray-200">
            <CiUser size={100} color="gray" />
          </div>
          <div className="flex gap-2 text-gray-700 mt-3 items-center flex-col ">
            <h1 className="font-semibold">{userInfo.name}</h1>
            <button className="hover:font-bold">Your Orders</button>
            <button className="hover:font-bold">Your Payments</button>
          </div>
        </div>
        <div className="flex gap-2 p-5 bg-gray-50 h-auto flex-col w-8/12">
          <div className="flex justify-between">
            <h1>Your Detail</h1>
            <FiEdit size={20} color="gray" />
          </div>
          <div className="flex p-2 text-gray-700 gap-5 bg-white">
            <h1>Name:</h1>
            <h1>{userInfo.name}</h1>
          </div>
          <div className="flex p-2 text-gray-700 gap-5 bg-white">
            <h1>Phone No:</h1>
            <h1>{userInfo.phoneOrEmail}</h1>
          </div>
          <div className="flex p-2 text-gray-700 gap-5 bg-white">
            <h1>Email:</h1>
            <h1>{userInfo.phoneOrEmail}</h1>
          </div>
          <div className="flex p-2 text-gray-700 gap-5 bg-white">
            <h1>Password:</h1>
            <h1>{userInfo.password}</h1>
          </div>
          <div className="flex justify-between">
            <h1>Your Address</h1>
            <FiEdit size={20} color="gray" />
          </div>
          <p>
            {orderData && orderData.address && (
              <div className="flex p-3 bg-white w-full">
                <div className="flex flex-col gap-3">
                  <p className="text-sm">City: {orderData.address.city}</p>
                  <p className="text-sm">
                    District: {orderData.address.district}
                  </p>
                  <p className="text-sm">
                    Street Address {orderData.address.streetAddress}
                  </p>
                  <p className="text-sm">
                    Home Address {orderData.address.homeAddress}
                  </p>
                  <p className="text-sm">
                    Location: {orderData.address.location}
                  </p>
                </div>
              </div>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
