"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { CiUser } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";

export default function Page() {
  const [userAddress, setUserAddress] = useState(null); // State to hold user's address
  const [userEmail, setUserEmail] = useState(null);
  const [showOrderHistory, setShowOrderHistory] = useState(false);

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
      } else {
        console.error("User not found or address not available!");
      }
    } else {
      console.error("User data not found in local storage!");
    }

    // Check for order detail in local storage
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

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserAddress({
      ...userAddress,
      [name]: value,
    });
  };

  const handleOrdersButtonClick = () => {
    setShowOrderHistory((prevShowOrderHistory) => !prevShowOrderHistory);
  };

  return (
    <div className="flex bg-orange-50 flex-col items-center">
      <div className="flex my-10 w-10/12 justify-center">
        {/* Profile section */}
        <div className="flex items-center  p-4 border-1 bg-white flex-col w-56">
          {/* Profile details */}
          <h1 className="mb-4 text-gray-800 font-semibold text-lg">Profile</h1>
          <div className="flex justify-center items-center w-40 h-40 rounded-full bg-gray-100">
            <CiUser size={100} color="gray" />
          </div>
          <div className="flex gap-2 text-gray-700 mt-10 flex-col">
            {/* User name */}
            {/* Buttons */}
            <button
              onClick={handleOrdersButtonClick}
              className="hover:font-bold text-sm"
            >
              Account
            </button>
            <button
              onClick={handleOrdersButtonClick}
              className="hover:font-bold text-sm"
            >
              Orders
            </button>
            <button className="hover:font-bold text-sm">Payments</button>
          </div>
        </div>
        {/* User detail and address section */}
        {showOrderHistory ? (
          <div className="flex gap-2 pt-10 p-5 bg-white h-auto flex-col w-8/12">
            {/* User detail */}
            <div className="flex flex-col justify-between">
              <h1 className="text-sm font-semibold text-gray-800">
                Order History
              </h1>
              <div className="flex mt-3 bg-gray-300 py-2 text-xs w-full  justify-between items-center">
                <div className="flex text-gray-700 justify-between px-5 w-full items-center">
                  <h1>Date</h1>
                  <h1>Order ID</h1>
                  <h1>Items</h1>
                  <h1>Total</h1>
                  <h1>Status</h1>
                </div>
              </div>
              <div className="flex mt-3 py-2 text-xs w-full  justify-between items-center">
                <div className="flex justify-between px-5 w-full items-center">
                  <h1>12/04/2024</h1>
                  <h1>#4567</h1>
                  <div className="flex gap-2 justify-center items-center">
                    <div className="w-10 h-10 relative">
                      <Image
                        src="/images/AlBaikpic2.JPG"
                        className="rounded-full w-full h-full"
                        width={50}
                        height={50}
                        alt="items"
                      />
                    </div>
                    <h1>items name</h1>
                  </div>
                  <h1>SAR 40.0</h1>
                  <h1>Pending</h1>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex gap-2 pt-10 p-5 bg-white h-auto flex-col w-8/12">
            {/* User detail */}
            <div className="flex text-sm font-semibold text-gray-700 justify-between">
              <h1>Your Detail</h1>
              <FiEdit size={20} color="gray" />
            </div>
            {/* Input fields for user details */}
            <div className="p-3 rounded-lg border">
              <div className="flex w-full gap-5">
                {/* First Name */}
                <div className="w-2/4">
                  <p className="text-xs m-1 text-gray-700">First Name</p>
                  <input
                    type="text"
                    name="firstName"
                    value={userAddress?.firstName || ""}
                    onChange={handleInputChange}
                    placeholder="Enter your first name"
                    className="w-full px-3 text-sm mb-2 border bg-transparent focus:outline-none rounded-md h-9"
                  />
                </div>
                {/* Last Name */}
                <div className="w-2/4">
                  <p className="text-xs m-1 text-gray-700">Last Name</p>
                  <input
                    type="text"
                    name="lastName"
                    value={userAddress?.secondName || ""}
                    onChange={handleInputChange}
                    placeholder="Enter your last name"
                    className="w-full px-3 text-sm mb-2 border bg-transparent focus:outline-none rounded-md h-9"
                  />
                </div>
              </div>
              <div className="flex w-full gap-5">
                {/* First Name */}
                <div className="w-2/4">
                  <p className="text-xs m-1 text-gray-700">Username</p>
                  <input
                    type="text"
                    name="firstName"
                    value={userAddress?.username || ""}
                    onChange={handleInputChange}
                    placeholder="Enter your first name"
                    className="w-full px-3 text-sm mb-2 border bg-transparent focus:outline-none rounded-md h-9"
                  />
                </div>
                <div className="w-2/4">
                  <p className="text-xs m-1 text-gray-700">Email</p>
                  <input
                    type="email"
                    name="email"
                    value={userEmail}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full px-3 text-sm mb-2 border bg-transparent focus:outline-none rounded-md h-9"
                  />
                </div>
              </div>
              {/* Email and Phone number */}
              <div className="flex w-full gap-5">
                {/* Email */}

                {/* Phone number */}
                <div className="w-2/4 ">
                  <p className="text-xs m-1 text-gray-700">Phone number</p>
                  <input
                    type="tel"
                    name="phone"
                    value={userAddress?.phoneNo || ""}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    className="w-full px-3 text-sm mb-2 border bg-transparent focus:outline-none rounded-md h-9"
                  />
                </div>
                <div className="w-2/4 "></div>
              </div>
              <div>
                <button className="bg-orange-400 text-white text-xs rounded-lg font-bold my-3 px-5 py-1.5">
                  Save Changes
                </button>
              </div>
            </div>
            {/* User address */}
            <div className="flex mt-5 justify-between">
              <h1 className="font-semibold text-sm text-gray-700">
                Change Password
              </h1>
              <FiEdit size={20} color="gray" />
            </div>
            <div className="p-3 rounded-lg border">
              {/* Input fields for address */}
              <div className="flex w-full gap-5">
                {/* City */}
                <div className="w-2/4">
                  <p className="text-xs m-1 text-gray-700">Current Password</p>
                  <input
                    type="text"
                    name="city"
                    value={userAddress?.city || ""}
                    onChange={handleInputChange}
                    placeholder="Enter your current password"
                    className="w-full px-3 text-sm mb-2 border bg-transparent focus:outline-none rounded-md h-9"
                  />
                </div>
                {/* District */}
                <div className="w-2/4">
                  <p className="text-xs m-1 text-gray-700">New Password</p>
                  <input
                    type="text"
                    name="district"
                    value={userAddress?.password || ""}
                    onChange={handleInputChange}
                    placeholder="Enter your new password"
                    className="w-full px-3 text-sm mb-2 border bg-transparent focus:outline-none rounded-md h-9"
                  />
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-2/4 ">
                  <p className="text-xs m-1 text-gray-700">Confirm Password</p>
                  <input
                    type="text"
                    name="district"
                    value={userAddress?.password || ""}
                    onChange={handleInputChange}
                    placeholder="Enter your confirm password"
                    className="w-full px-3 text-sm mb-2 border bg-transparent focus:outline-none rounded-md h-9"
                  />
                </div>
                <div className="w-2/4"></div>
              </div>
              <button className="bg-orange-400 text-white text-xs rounded-lg font-bold my-3 px-5 py-1.5">
                Save Changes
              </button>
            </div>

            <div className="flex mt-5 justify-between">
              <h1 className="font-semibold text-sm text-gray-700">
                Your Address
              </h1>
              <FiEdit size={20} color="gray" />
            </div>
            <div className="p-3 border rounded-lg">
              {/* Input fields for address */}
              <div className="flex w-full gap-5">
                {/* City */}
                <div className="w-2/4">
                  <p className="text-xs m-1 text-gray-700">City</p>
                  <input
                    type="text"
                    name="city"
                    value={userAddress?.city || ""}
                    onChange={handleInputChange}
                    placeholder="Enter your city"
                    className="w-full px-3 text-sm mb-2 border bg-transparent focus:outline-none rounded-md h-9"
                  />
                </div>
                {/* District */}
                <div className="w-2/4">
                  <p className="text-xs m-1 text-gray-700">District</p>
                  <input
                    type="text"
                    name="district"
                    value={userAddress?.district || ""}
                    onChange={handleInputChange}
                    placeholder="Enter your district"
                    className="w-full px-3 text-sm mb-2 border bg-transparent focus:outline-none rounded-md h-9"
                  />
                </div>
              </div>
              {/* Street Address and Home Address */}
              <div className="flex w-full gap-5">
                {/* Street Address */}
                <div className="w-2/4">
                  <p className="text-xs m-1 text-gray-700">Street Address</p>
                  <input
                    type="text"
                    name="streetAddress"
                    value={userAddress?.streetAddress || ""}
                    onChange={handleInputChange}
                    placeholder="Enter your street address"
                    className="w-full px-3 text-sm mb-2 border bg-transparent focus:outline-none rounded-md h-9"
                  />
                </div>
                {/* Home Address */}
                <div className="w-2/4">
                  <p className="text-xs m-1 text-gray-700">Home Address</p>
                  <input
                    type="text"
                    name="homeAddress"
                    value={userAddress?.homeAddress || ""}
                    onChange={handleInputChange}
                    placeholder="Enter your home address"
                    className="w-full px-3 text-sm mb-2 border bg-transparent focus:outline-none rounded-md h-9"
                  />
                </div>
              </div>
              {/* Location */}
              <div className="flex w-full gap-5">
                <div className="w-2/4">
                  <p className="text-xs m-1 text-gray-700">Location</p>
                  <input
                    type="text"
                    name="location"
                    value={userAddress?.location || ""}
                    onChange={handleInputChange}
                    placeholder="Enter your location"
                    className="w-full px-3 text-sm mb-2 border bg-transparent focus:outline-none rounded-md h-9"
                  />
                  <button className="bg-orange-400 text-white text-xs rounded-lg font-bold my-3 px-5 py-1.5">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
