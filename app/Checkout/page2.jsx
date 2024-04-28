"use client";
import Header from "@/components/Header";
import Login from "@/components/Login";
import SignUp from "@/components/SignUp";
import Image from "next/image";
import Link from "next/link";
import { useState, useContext } from "react";
import { CiCreditCard2 } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";
import { BsCashCoin } from "react-icons/bs";
import { FaCreditCard } from "react-icons/fa";

import { Context } from "@/components/Context";

export default function Checkout() {
  const [debitCardChecked, setDebitCardChecked] = useState(false);
  const [cashOnDeliveryChecked, setCashOnDeliveryChecked] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userAddress, setUserAddress] = useState({
    city: "",
    district: "",
    streetAddress: "",
    homeAddress: "",
    location: "",
    paymentMode: null,
  });
  const { cartItems } = useContext(Context);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleDebitCardChange = () => {
    setDebitCardChecked(!debitCardChecked);
    setCashOnDeliveryChecked(false);
    setUserAddress((prevAddress) => ({
      ...prevAddress,
      paymentMode: !debitCardChecked ? "Debit Card" : null,
    }));
  };

  const handleCashOnDeliveryChange = () => {
    setCashOnDeliveryChecked(!cashOnDeliveryChecked);
    setDebitCardChecked(false);
    setUserAddress((prevAddress) => ({
      ...prevAddress,
      paymentMode: !cashOnDeliveryChecked ? "Cash on Delivery" : null,
    }));
  };

  const handleCityChange = (e) => {
    setUserAddress((prevAddress) => ({
      ...prevAddress,
      city: e.target.value,
    }));
  };

  const handleDistrictChange = (e) => {
    setUserAddress((prevAddress) => ({
      ...prevAddress,
      district: e.target.value,
    }));
  };

  const handleStreetAddressChange = (e) => {
    setUserAddress((prevAddress) => ({
      ...prevAddress,
      streetAddress: e.target.value,
    }));
  };

  const handleHomeAddressChange = (e) => {
    setUserAddress((prevAddress) => ({
      ...prevAddress,
      homeAddress: e.target.value,
    }));
  };

  const handleLocationChange = (e) => {
    setUserAddress((prevAddress) => ({
      ...prevAddress,
      location: e.target.value,
    }));
  };

  const handleAddress = () => {
    // showLoader(); // Uncomment if needed for UI feedback
    // console.log("Debit Card Checked:", debitCardChecked);
    // console.log("Cash on Delivery Checked:", cashOnDeliveryChecked);

    // Retrieve the current user's data from local storage
    const userAuth = JSON.parse(localStorage.getItem("userAuth"));
    if (!userAuth || !userAuth.currentUser) {
      console.error("User data not found!");
      // Display a user-friendly error message or redirect if needed
      return;
    }

    const currentUser = userAuth.currentUser;

    // Verify userAddress content
    console.log("User Address:", userAddress);

    // Retrieve the storedUsers array from local storage
    let storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Find the index of the current user in the storedUsers array
    const userIndex = storedUsers.findIndex(
      (user) => user.phoneOrEmail === currentUser.phoneOrEmail
    );
    if (userIndex === -1) {
      console.error("User not found in stored data!");
      // Display a user-friendly error message or handle the situation
      return;
    }

    // Update the current user's address in the storedUsers array
    storedUsers[userIndex].address = userAddress;

    // Save the updated user data back to local storage
    localStorage.setItem("users", JSON.stringify(storedUsers));

    console.log("Address updated successfully!"); // Log success message
  };

  const showLoader = () => {
    setLoading(true);
  };
  const handleIsLogin = (value) => {
    setShowLogin(false);
    setIsLogin(value);
    console.log("is login : ", isLogin);
  };

  const handleShowLogin = () => {
    setShowLogin(true);
  };
  const handleCloseLogin = () => {
    setShowLogin(false);
  };
  const handleShowSignUp = () => {
    setShowLogin(false);
    setShowSignUp(true);
  };
  const handleCloseSignUp = () => {
    setShowSignUp(false);
  };

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center my-5 w-full">
        <div className="flex relative justify-center items-center p-4 w-8/12">
          <div className="flex absolute left-5 items-center">
            <div className="relative w-16 h-16">
              <Image
                src="/images/AlBAaik.png"
                width={100}
                height={100}
                className="w-full h-full"
                alt="AlBAik Logo"
              />
            </div>
            <p
              style={{
                textShadow: "0px 1px 4px #2a2b2e",
              }}
              className="font-bold text-white ml-2"
            >
              AlBAik
            </p>
          </div>
          <h1
            style={{
              textShadow: "0px 1px 4px #2a2b2e",
            }}
            className="text-2xl text-white font-extrabold"
          >
            Checkout
          </h1>
        </div>
        <div className="w-8/12 mt-5 h-0.5 rounded-full bg-orange-200"></div>
      </div>
      <div className="flex w-full h-auto px-10">
        <div className="flex justify-center w-8/12 h-auto">
          {isLogin && (
            <div className="w-3/4 rounded-lg p-6 border bg-white flex flex-col items-center">
              <h1 className="self-start text-gray-700 font-semibold">
                Your Address
              </h1>
              <div className="flex mt-4 gap-4 w-full">
                <div className="w-2/4">
                  <p className="text-xs m-1 font-semibold text-gray-600">
                    City
                  </p>
                  <input
                    type="text"
                    name="city"
                    required={true}
                    placeholder="Enter your city"
                    value={userAddress.city}
                    onChange={handleCityChange}
                    className="w-full px-3 text-sm mb-2 border bg-white focus:outline-orange-400 rounded-md h-9"
                  />
                </div>
                <div className="w-2/4">
                  <p className="text-xs m-1 font-semibold text-gray-600">
                    District
                  </p>
                  <input
                    type="text"
                    name="district"
                    required={true}
                    placeholder="Enter your district"
                    value={userAddress.district}
                    onChange={handleDistrictChange}
                    className="w-full px-3 text-sm mb-2 border bg-white focus:outline-orange-400 rounded-md h-9"
                  />
                </div>
              </div>
              <div className="w-full">
                <p className="text-xs m-1 font-semibold text-gray-600">
                  Street Address
                </p>
                <input
                  type="text"
                  name="streetAddress"
                  required={true}
                  placeholder="Your street address"
                  value={userAddress.streetAddress}
                  onChange={handleStreetAddressChange}
                  className="w-full px-3 text-sm mb-2 border bg-white focus:outline-orange-400 rounded-md h-9"
                />
              </div>
              <div className="w-full">
                <p className="text-xs m-1 font-semibold text-gray-600">
                  Home Address
                </p>
                <input
                  type="text"
                  name="homeAddress"
                  required={true}
                  placeholder="Your home address"
                  value={userAddress.homeAddress}
                  onChange={handleHomeAddressChange}
                  className="w-full px-3 text-sm mb-2 border bg-white focus:outline-orange-400 rounded-md h-9"
                />
              </div>
              <div className="w-full pb-8">
                <p className="text-xs m-1 font-semibold text-gray-600">
                  Your location
                </p>
                <div className="flex items-center justify-between">
                  <input
                    type="text"
                    name="location"
                    required={true}
                    placeholder="Past your location"
                    value={userAddress.location}
                    onChange={handleLocationChange}
                    className="w-10/12 px-3 text-sm border bg-white focus:outline-orange-400 rounded-md h-9"
                  />
                  <button className="p-2 rounded-lg text-sm text-white font-bold bg-orange-400">
                    Get
                  </button>
                </div>
                <div className="flex mt-10 w-full justify-evenly items-center">
                  <button className="flex gap-2 flex-col justify-center items-center w-28 h-28">
                    <BsCashCoin size={30} className="text-orange-400" />
                    <p className="text-xs text-gray-700 font-semibold">
                      Cash on Delivery
                    </p>
                    <input
                      type="checkbox"
                      id="cashOnDeliveryCheckbox"
                      className="h-5 w-5 rounded-full border-gray-300"
                      checked={cashOnDeliveryChecked}
                      onChange={handleCashOnDeliveryChange}
                    />
                  </button>
                  <button className="flex gap-2 flex-col justify-center items-center w-28 h-28">
                    <FaCreditCard size={30} className="text-orange-400" />
                    <p className="text-xs text-gray-700 font-semibold">
                      Debit/Credit Card
                    </p>
                    <input
                      type="checkbox"
                      id="debitCardCheckbox"
                      className="h-5 w-5 rounded-full focus:ring-orange-400 border-gray-300"
                      checked={debitCardChecked}
                      onChange={handleDebitCardChange}
                    />
                  </button>
                </div>
              </div>
            </div>
          )}
          {showLogin && (
            <Login
              showSignUp={handleShowSignUp}
              isLogin={handleIsLogin}
              closeLogin={handleCloseLogin}
            />
          )}
          {showSignUp && (
            <SignUp
              showLogin={handleShowLogin}
              closeSignUp={handleCloseSignUp}
            />
          )}
        </div>
        <di v className="flex p-5 flex-col border rounded-lg w-4/12 h-auto">
          <h1 className="text-gray-800 mb-5 font-semibold">Order Summary</h1>
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
                      {item.quantity} x SAR {item.price}.0
                    </p>
                  </div>
                </div>
                <h1 className="font-semibold text-sm">{item.price}</h1>
              </div>
            </div>
          ))}
          <div className="flex my-2 text-sm justify-between">
            <h1>Sub-total</h1>
            <h1>SAR {totalPrice}</h1>
          </div>
          <div className="flex text-sm justify-between">
            <h1>Delivery</h1>
            <h1>SAR 10</h1>
          </div>
          <div className="w-full my-2 h-0.5 bg-gray-200"></div>
          <div className="flex text-sm text-gray-700 justify-between">
            <h1 className="font-bold">Total</h1>
            <h1 className="font-bold">SAR {totalPrice + 10}.0</h1>
          </div>
          <Link
            className="self-center mt-3 rounded-md flex justify-center items-center w-full py-2 text-white bg-orange-400 font-bold text-sm"
            href={
              debitCardChecked
                ? `/Payment?totalPrice=${totalPrice}`
                : "/OrderDetail"
            }
          >
            <button onClick={handleAddress}>Confirm Order</button>
          </Link>
          {/* <button className="py-2.5 mt-3 rounded-md text-white text-xs font-bold bg-orange-400">
            Place Order
          </button> */}
        </di>
      </div>
    </>
  );
}
