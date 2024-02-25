"use client";
import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { CgSpinner } from "react-icons/cg";
import Link from "next/link";
import { Context } from "@/components/Context";
import Header from "@/components/Header";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(Context);
  const [totalItems, setTotalItems] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [deliveryCost, setDeliveryCost] = useState(10); // Adjust the delivery cost as needed
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let itemsCount = 0;
    let total = 0;
    console.log("cartItemsFromCart", cartItems);
    for (const item of cartItems) {
      itemsCount += item.quantity;
      total += item.quantity * item.price;
    }

    setTotalItems(itemsCount);
    setSubtotal(total);
  }, [cartItems]);

  useEffect(() => {
    setTotal(subtotal + deliveryCost);
  }, [subtotal, deliveryCost]);

  const showLoader = () => {
    setLoading(true)
  };

  return (
    <div className="flex z-50 h-screen bg-gradient-to-tl from-orange-400 to-white flex-col items-center">
      <Header />
      <div className="flex z-40  flex-col justify-center items-center my-5 w-full">
        <div className="flex relative justify-center items-center p-4 w-8/12">
          {/* <div className="flex absolute left-5 items-center">
            <div className="relative w-16 h-16">
              <Image
                src="/images/AlBAaik.png"
                width={100}
                height={100}
                className="w-full h-full"
                alt="AlBAik Logo"
              />
            </div>
            <p className="font-bold text-blue-900 ml-2">AlBAik</p>
          </div> */}
          <h1
            style={{
              textShadow: "0px 1px 4px #2a2b2e",
            }}
            className="text-2xl text-white mr-1 font-bold"
          >
            Your
          </h1>
          <h1
            style={{
              textShadow: "0px 1px 4px #2a2b2e",
            }}
            className="text-2xl text-white font-bold"
          >
            Cart
          </h1>
        </div>
        <div className="w-7/12 mt-5 h-0.5 rounded-full bg-gray-100"></div>
      </div>
      <div className="flex z-50 justify-center text-sm gap-5 w-full">
        <div className="flex w-5/12 gap-2 mb-10 flex-col">
          {cartItems.length === 0 ? (
            <Link href="/Restaurant">
              <div className="flex justify-center items-center self-center">
                <Image
                  src="/images/empty-cart.png"
                  alt="item-image"
                  width={200}
                  height={200}
                />
                <div className="w-2/4">
                  <p>
                    Your cart is empty go to your favorite restaurant click here
                  </p>
                </div>
              </div>
            </Link>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex p-3 border bg-gray-100 shadow-[0px_1px_3px_#bab6b5] rounded-xl text-blue-900 gap-4 items-center justify-between flex-row"
              >
                <div className="flex justify-center items-center gap-3">
                  <div className="relative w-16 h-16">
                    <Image
                      src={item.img}
                      className="rounded-full w-full h-full"
                      width={100}
                      height={100}
                      alt="items"
                    />
                  </div>
                  <p>{item.name}</p>
                  <p>{item.size}</p>
                </div>
                <div className="flex justify-center items-center gap-5">
                  <div className="flex justify-center items-center gap-3">
                    <p>Qty</p>
                    <button onClick={() => decreaseQuantity(item.id)}>
                      <CiCircleMinus size={30} />
                    </button>
                    <p>{item.quantity}</p>
                    <button onClick={() => increaseQuantity(item.id)}>
                      <CiCirclePlus size={30} />
                    </button>
                  </div>
                  <p>SAR {item.price.toFixed(2)}</p>
                  <button onClick={() => removeFromCart(item.id)}>
                    <IoClose className="size-5 text-gray-700" />
                  </button>
                </div>
              </div>
            ))
          )}
          {/* {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex px-3 py-1 border text-blue-900 gap-4 items-center justify-between flex-row"
            >
              <div className="flex justify-center items-center gap-3">
                <div className="relative w-16 h-16">
                  <Image
                    src={item.img}
                    className="rounded-full w-full h-full"
                    width={100}
                    height={100}
                    alt="items"
                  />
                </div>
                <p>{item.name}</p>
                <p>{item.size}</p>
              </div>
              <div className="flex justify-center items-center gap-5">
                <div className="flex justify-center items-center gap-3">
                  <p>Qty</p>
                  <button onClick={() => decreaseQuantity(item.id)}>
                    <CiCircleMinus size={30} />
                  </button>
                  <p>{item.quantity}</p>
                  <button onClick={() => increaseQuantity(item.id)}>
                    <CiCirclePlus size={30} />
                  </button>
                </div>
                <p>SAR {item.price.toFixed(2)}</p>
                <button onClick={() => removeFromCart(item.id)}>
                  <IoClose className="size-5 text-gray-700" />
                </button>
              </div>
            </div>
          ))} */}
        </div>
        <div className="h-auto w-64">
          <div className="flex p-5 shadow-[0px_1px_3px_#bab6b5] bg-gray-100 rounded-xl border gap-4 flex-col">
            <div className="flex font-bold text-gra justify-between items-center">
              <p>Total Items</p>
              <p>{totalItems}</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Subtotal Inc Vat</p>
              <p>SAR {subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Delivery</p>
              <p>SAR {deliveryCost.toFixed(2)}</p>
            </div>
            <div className="flex font-bold justify-between items-center">
              <p>Total</p>
              <p>SAR {total.toFixed(2)}</p>
            </div>
            <div className="self-center mt-3">
              <Link href="/Checkout">
                <button
                  onClick={showLoader}
                  className="bg-blue-900 flex justify-center items-center ease-in-out duration-300 self-center text-white hover:bg-orange-400 active:bg-blue-900 rounded-full hover:px-10 py-1 px-8"
                >
                  Checkout
                  {loading && (
                    <CgSpinner size={30} className="ml-2 animate-spin" />
                  )}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
