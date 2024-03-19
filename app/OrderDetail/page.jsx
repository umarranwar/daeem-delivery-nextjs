"use client";
import Header from "@/components/Header";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { Context } from "@/components/Context";

export default function Page() {
  const { cartItems } = useContext(Context);
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userDataString = localStorage.getItem("orderDetail");
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        setOrderData(userData);
        console.log(userData, "userData");
      } else {
        console.log("userData not found in localStorage");
      }
    }
  }, []);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-gradient-to-br from-white to-orange-400">
      <Header />
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex relative my-8 justify-center items-center w-8/12">
          <h1
            style={{
              textShadow: "0px 1px 4px #2a2b2e",
            }}
            className="font-bold text-2xl text-white"
          >
            Order Detail
          </h1>
        </div>
        <div className="w-8/12 h-0.5 rounded-full bg-white"></div>
      </div>
      <div className="flex my-5 flex-col justify-center items-center">
        <p
          style={{
            textShadow: "0px 1px 4px #2a2b2e",
          }}
          className="font-bold text-2xl text-white"
        >
          Thank you for your order!
        </p>
        <p
          style={{
            textShadow: "0px 1px 4px #2a2b2e",
          }}
          className="font-bold mt-3 text-white"
        >
          We will deliver your order soon.
        </p>
        <p
          style={{
            textShadow: "0px 1px 4px #2a2b2e",
          }}
          className="font-bold mt-3 text-white"
        >
          Payment{" "}
          {orderData && orderData.address && orderData.address.paymentMode}
        </p>
      </div>
      <div className="flex gap-5 pb-10 text-blue-900 px-36">
        {orderData && orderData.address && (
          <div className="flex flex-col h-96 w-2/4">
            {/* <div className="flex p-2 flex-col w-full">
              <h1 className="text-xl my-3 font-bold">Your Address</h1>
            </div> */}
            <div className="flex mt-2 justify-center items-center  gap-1">
              <h1
                style={{
                  textShadow: "0px 1px 4px #2a2b2e",
                }}
                className="font-bold text-white mb-2"
              >
                Your Address
              </h1>
            </div>
            <div className="flex p-6 flex-col bg-white shadow-[0px_2px_5px_#bab6b5] rounded-lg">
              <div className="flex w-full">
                <div className="">
                  <p className="text-sm m-1 text-blue-900">
                    City {orderData.address.city}
                  </p>
                  <p className="text-sm m-1 text-blue-900">
                    District: {orderData.address.district}
                  </p>
                  <p className="text-sm m-1 text-blue-900">
                    Street Address {orderData.address.streetAddress}
                  </p>
                  <p className="text-sm m-1 text-blue-900">
                    Home Address {orderData.address.homeAddress}
                  </p>
                  <p className="text-sm m-1 text-blue-900">
                    Location: {orderData.address.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-col w-7/12 h-auto">
          <div className="flex w-full">
            <div className="flex p-2 flex-col w-full">
              <div className="flex justify-center items-center  gap-1">
                <h1
                  style={{
                    textShadow: "0px 1px 4px #2a2b2e",
                  }}
                  className="font-bold text-white mb-2"
                >
                  Order Your
                </h1>
              </div>
              <div className="flex p-6 flex-col bg-white shadow-[0px_2px_5px_#bab6b5] rounded-lg">
                {cartItems.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center w-full">
                      <div className="flex justify-center items-center gap-2">
                        <div className="w-16 p-1 rounded-full h-16 ">
                          <Image
                            alt="item-image"
                            src={item.img}
                            className="rounded-full w-full h-full"
                            width={50}
                            height={50}
                          />
                        </div>
                        <p>{item.quantity}</p>
                        <p>{item.name}</p>
                        <p>{item.size}</p>
                      </div>
                      <p className="font-bold">{item.price}.0</p>
                    </div>
                    <div className="w-full h-0.5 bg-gray-200"></div>
                  </div>
                ))}
                <div className="flex justify-between items-center w-full h-14">
                  <p className="flex">Subtotal Inc Vat</p>
                  <p className="flex">SAR {totalPrice}</p>
                </div>
                <div className="w-full h-0.5 bg-gray-200"></div>
                <div className="flex justify-between items-center w-full h-14">
                  <p className="flex">Delivery</p>
                  <p className="flex">SAR 10.0</p>
                </div>
                <div className="w-full h-0.5 bg-gray-200"></div>
                <div className="flex font-bold justify-between items-center w-full h-14">
                  <p className="flex">Total</p>
                  <p className="flex">SAR {totalPrice + 10}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
