"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { Context } from "@/components/Context";

export default function Page() {
  const { cartItems } = useContext(Context);
  const [userAddress, setUserAddress] = useState(null); // State to hold user's address
  const [userEmail, setUserEmail] = useState(null); // State to hold user's email

  useEffect(() => {
    // Retrieve the current user's data from local storage
    const userAuth = JSON.parse(localStorage.getItem("userAuth"));
    if (userAuth && userAuth.currentUser) {
      const currentUser = userAuth.currentUser;

      // Set the user's email
      setUserEmail(currentUser.phoneOrEmail);

      // Retrieve the storedUsers array from local storage
      let storedUsers = JSON.parse(localStorage.getItem("users")) || [];

      // Find the index of the current user in the storedUsers array
      const userIndex = storedUsers.findIndex(
        (user) => user.phoneOrEmail === currentUser.phoneOrEmail
      );

      if (userIndex !== -1 && storedUsers[userIndex].address) {
        // Set the user's address in state
        setUserAddress(storedUsers[userIndex].address);

        // Add cartItems to user's history if not already added
        if (!storedUsers[userIndex].history) {
          storedUsers[userIndex].history = cartItems;
        } else {
          storedUsers[userIndex].history = [
            ...storedUsers[userIndex].history,
            ...cartItems,
          ];
        }

        // Update local storage with updated storedUsers array
        localStorage.setItem("users", JSON.stringify(storedUsers));
      } else {
        console.error("User not found or address not available!");
      }
    } else {
      console.error("User data not found in local storage!");
    }
  }, []);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-orange-100">
      <div className="flex justify-center bg-orange-50 items-center w-full h-auto">
        <div className="flex w-9/12 p-10 h-auto justify-center items-center">
          <div className="flex w-2/4 flex-col px-10">
            <h1 className="font-bold Your order is currently being processed and will soon be delivered to your doorstep, ensuring your satisfaction and delight.d text-3xl">
              Thank you for your order!
            </h1>
            <p className="text-xs mt-4">
              Your order is currently being processed and will soon be delivered
              to your doorstep, ensuring your satisfaction and delight.
            </p>
            <h1 className="font-bold mt-6">Your Address</h1>
            {userAddress && (
              <>
                <div className="flex mt-3 gap-16">
                  <h1 className="text-xs font-bold">Name</h1>
                  <p className="text-xs">
                    {userAddress.firstName} {userAddress.secondName}
                  </p>
                </div>
                <div className="flex mt-3 gap-12">
                  <h1 className="text-xs font-bold">Address</h1>
                  <p className="text-xs">
                    {userAddress.homeAddress} {userAddress.streetAddress}{" "}
                    {userAddress.district} {userAddress.city}{" "}
                    {userAddress.location}
                  </p>
                </div>
                <div className="flex mt-3 gap-14">
                  <h1 className="text-xs font-bold">Phone</h1>
                  <p className="text-xs">{userAddress.phoneNo}</p>
                </div>
                <div className="flex mt-3 gap-16">
                  <h1 className="text-xs font-bold">Email</h1>
                  <p className="text-xs">{userEmail}</p>
                </div>
              </>
            )}
            <button className="w-2/4 mt-7 text-white font-bold text-xs rounded-full py-1.5 bg-orange-400">
              Track Your Order
            </button>
          </div>
          <div className="flex justify-center px-3 items-center relative w-6/12 flex-col">
            <div className="h-8 absolute top-0 w-full bg-gray-200 rounded-full"></div>
            <div className="flex p-5 w-full z-10 mt-4 bg-white flex-col">
              <h1 className="font-extrabold text-gray-800">Order Summary</h1>
              <div className="h-0.5 my-3 rounded-full w-full bg-gray-200"></div>
              <div className="flex justify-between">
                <div className="flex flex-col gap-1">
                  <h1 className="text-xs font-semibold text-gray-800">Date</h1>
                  <h1 className="text-xs text-gray-800 font-bold">
                    02 May 2024
                  </h1>
                </div>
                <div className="w-0.5 h-full bg-gray-200"></div>
                <div className="flex flex-col gap-1">
                  <h1 className="text-xs font-semibold text-gray-800">
                    Order Number
                  </h1>
                  <h1 className="text-xs text-gray-800 font-bold">
                    #123456789
                  </h1>
                </div>
                <div className="w-0.5 h-full bg-gray-200"></div>
                <div className="flex flex-col gap-1">
                  <h1 className="text-xs font-semibold text-gray-800">
                    Payment Method
                  </h1>
                  {userAddress && (
                    <h1 className="text-xs text-gray-800 font-bold">
                      {userAddress.paymentMode}
                    </h1>
                  )}
                </div>
              </div>
              <div class="border-b-2 border-dash border-gray-200 border-dash border-dash-sm my-3"></div>
              {cartItems.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center m-3 gap-5">
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-16 p-1 rounded-xl h-16 ">
                        <Image
                          alt="item-image"
                          src={item.img}
                          className="rounded-full w-full h-full"
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className="flex justify-center text-sm flex-col">
                        <h1>{item.name}</h1>
                        <p className="text-xs">
                          {item.quantity} x SAR {item.price}
                        </p>
                      </div>
                    </div>
                    <h1 className="font-semibold text-sm">
                      {item.quantity * item.price}
                    </h1>
                  </div>
                </div>
              ))}
              <div className="flex my-2 text-sm text-gray-600 font-semibold justify-between">
                <h1>Sub-total</h1>
                <h1>SAR {totalPrice}</h1>
              </div>
              <div className="flex text-sm text-gray-600 font-semibold justify-between">
                <h1>Delivery</h1>
                <h1>SAR 10</h1>
              </div>
              <div className="w-full my-2 h-0.5 bg-gray-200"></div>
              <div className="flex text-sm justify-between">
                <h1 className="font-bold text-gray-800">Total</h1>
                <h1 className="font-bold">SAR {totalPrice + 10}.0</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
