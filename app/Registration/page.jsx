"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FiSave } from "react-icons/fi";

export default function Page() {
  const [logoImage, setLogoImage] = useState(null);
  const [bannerImage, setBannerImage] = useState(null);
  const [showPersonalDetail, setShowPersonalDetail] = useState(true);
  const [showBusinessDetail, setShowBusinessDetail] = useState(false);

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setLogoImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleBannerUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setBannerImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handlePersonalSave = () => {
    const personalData = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      phoneNo: document.getElementById("phoneNoPersonal").value,
      email: document.getElementById("emailPersonal").value,
      city: document.getElementById("city").value,
      address: document.getElementById("addressPersonal").value,
    };

    let businessData = JSON.parse(localStorage.getItem("businessData")) || {};
    businessData.personalDetail = personalData;

    localStorage.setItem("businessData", JSON.stringify(businessData));

    // Show alert for successful save
    alert("Personal details saved successfully!");
    setShowPersonalDetail(false);
    setShowBusinessDetail(true);
  };

  const handleBusinessSave = () => {
    const businessData = {
      logoImage: logoImage,
      bannerImage: bannerImage,
      businessName: document.getElementById("businessName").value,
      businessType: document.getElementById("businessType").value,
      contactNumber: document.getElementById("contactNumber").value,
      email: document.getElementById("emailBusiness").value,
      website: document.getElementById("website").value,
      address: document.getElementById("addressBusiness").value,
    };

    let businessDataStored =
      JSON.parse(localStorage.getItem("businessData")) || {};
    businessDataStored.businessDetail = businessData;

    localStorage.setItem("businessData", JSON.stringify(businessDataStored));

    // Show alert for successful save
    alert("Business details saved successfully!");
  };

  return (
    <div className="flex p-10 flex-col w-full justify-center items-center">
      <div className="flex w-8/12 justify-start flex-col">
        <h1 className="text-lg text-gray-800 font-semibold">
          Create Business Account
        </h1>
        <div className="flex my-5 justify-center items-center gap-5">
          <button
            className={`${
              showPersonalDetail
                ? "bg-orange-400 text-white"
                : "bg-orange-50 text-orange-400"
            } hover:bg-orange-400 hover:text-white rounded-md w-1/3 py-2.5 text-sm font-semibold`}
            onClick={() => {
              setShowPersonalDetail(true);
              setShowBusinessDetail(false);
            }}
          >
            Personal Detail
          </button>
          <button
            className={`${
              showBusinessDetail
                ? "bg-orange-400 text-white"
                : "bg-orange-50 text-orange-400"
            } hover:bg-orange-400 hover:text-white rounded-md w-1/3 py-2.5 text-sm font-semibold`}
            onClick={() => {
              setShowPersonalDetail(false);
              setShowBusinessDetail(true);
            }}
          >
            Business Detail
          </button>
        </div>
      </div>
      {showPersonalDetail && (
        <div className="flex flex-col rounded-md border p-4 w-8/12">
          <div className="flex w-full mb-2 justify-start">
            <h1 className="text-xs font-semibold">Personal Details:</h1>
          </div>
          <div className="flex w-full gap-5">
            <div className="w-2/4">
              <p className="text-xs m-1 font-semibold text-gray-600">
                First Name
              </p>
              <input
                type="text"
                id="firstName"
                placeholder="Enter your first name"
                className="w-full px-3 text-sm mb-2 border outline-none focus:border-orange-500 bg-white rounded-md h-9"
              />
            </div>
            <div className="w-2/4">
              <p className="text-xs m-1 font-semibold text-gray-600">
                Last Name
              </p>
              <input
                type="text"
                id="lastName"
                placeholder="Enter your last name"
                className="w-full px-3 text-sm mb-2 border outline-none focus:border-orange-500 bg-white rounded-md h-9"
              />
            </div>
          </div>
          <div className="flex my-3 w-full gap-5">
            <div className="w-2/4">
              <p className="text-xs m-1 font-semibold text-gray-600">
                Contact Number
              </p>
              <input
                type="text"
                id="phoneNoPersonal"
                placeholder="Enter your phone number"
                className="w-full px-3 text-sm mb-2 border outline-none focus:border-orange-500 bg-white rounded-md h-9"
              />
            </div>
            <div className="w-2/4">
              <p className="text-xs m-1 font-semibold text-gray-600">Email</p>
              <input
                type="text"
                id="emailPersonal"
                placeholder="Enter your email"
                className="w-full px-3 text-sm mb-2 border outline-none focus:border-orange-500 bg-white rounded-md h-9"
              />
            </div>
          </div>
          <div className="flex w-full gap-5">
            <div className="w-2/4">
              <p className="text-xs m-1 font-semibold text-gray-600">City</p>
              <input
                type="text"
                id="city"
                placeholder="Enter your city"
                className="w-full px-3 text-sm mb-2 border outline-none focus:border-orange-500 bg-white rounded-md h-9"
              />
            </div>
            <div className="w-2/4">
              <p className="text-xs m-1 font-semibold text-gray-600">Address</p>
              <input
                type="text"
                id="addressPersonal"
                placeholder="Enter your address"
                className="w-full px-3 text-sm mb-2 border outline-none focus:border-orange-500 bg-white rounded-md h-9"
              />
            </div>
          </div>
          <div className="flex gap-2 my-3 justify-end">
            <button
              onClick={handlePersonalSave}
              className="flex gap-2 text-xs text-white rounded-md font-semibold justify-center items-center py-2 px-4 hover:bg-orange-400 bg-orange-400"
            >
              Save Personal
            </button>
          </div>
        </div>
      )}
      {showBusinessDetail && (
        <div className="flex flex-col rounded-md border p-4 w-8/12">
          <div className="flex w-full mb-2 justify-start">
            <h1 className="text-xs font-semibold">Step 2:</h1>
          </div>
          <div className="flex w-full gap-5">
            <div className="w-2/4">
              <p className="text-xs m-1 font-semibold text-gray-600">
                Upload Logo
              </p>
              <input
                type="file"
                onChange={handleLogoUpload}
                accept="image/*"
                className="hidden"
                id="logoInput"
              />
              <label htmlFor="logoInput" className="cursor-pointer">
                {logoImage ? (
                  <div className="w-2/3 my-4 relative h-52">
                    <img
                      src={logoImage}
                      alt="Banner"
                      width={300}
                      height={300}
                      className="w-full h-full"
                    />
                  </div>
                ) : (
                  <span className="bg-gray-200 px-3 py-2 text-xs text-gray-600 rounded-md cursor-pointer">
                    Click to Upload Logo
                  </span>
                )}
              </label>
            </div>
            <div className="w-2/4">
              <p className="text-xs m-1 font-semibold text-gray-600">
                Upload Banner
              </p>
              <input
                type="file"
                onChange={handleBannerUpload}
                accept="image/*"
                className="hidden"
                id="bannerInput"
              />
              <label htmlFor="bannerInput" className="bg-black cursor-pointer">
                {bannerImage ? (
                  <div className="w-full my-4 relative h-52">
                    <img
                      src={bannerImage}
                      alt="Banner"
                      width={500}
                      height={300}
                      className="w-full h-full"
                    />
                  </div>
                ) : (
                  <span className="bg-gray-200 px-3 py-2 text-xs text-gray-600 rounded-md cursor-pointer">
                    Click to Upload Banner
                  </span>
                )}
              </label>
            </div>
          </div>
          <div className="flex w-full gap-5">
            <div className="w-2/4">
              <p className="text-xs m-1 font-semibold text-gray-600">
                Business Name
              </p>
              <input
                type="text"
                id="businessName"
                placeholder="Enter business name"
                className="w-full px-3 text-sm mb-2 border outline-none focus:border-orange-500 bg-white rounded-md h-9"
              />
            </div>
            <div className="w-2/4">
              <p className="text-xs m-1 font-semibold text-gray-600">
                Business Type
              </p>
              <select
                id="businessType"
                className="w-full px-3 text-sm mb-2 border outline-none focus:border-orange-500 bg-white rounded-md h-9"
              >
                <option value="" disabled selected hidden>
                  Select business type
                </option>
                <option value="Restaurant">Restaurant</option>
                <option value="Electronics Store">Electronics Store</option>
                <option value="Grocery Store">Grocery Store</option>
                <option value="Clothing Boutique">Clothing Boutique</option>
                <option value="Bookstore">Bookstore</option>
                <option value="Coffee Shop">Coffee Shop</option>
              </select>
            </div>
          </div>
          <div className="flex my-3 w-full gap-5">
            <div className="w-2/4">
              <p className="text-xs m-1 font-semibold text-gray-600">
                Contact Number
              </p>
              <input
                type="text"
                id="contactNumber"
                placeholder="Enter contact number"
                className="w-full px-3 text-sm mb-2 border outline-none focus:border-orange-500 bg-white rounded-md h-9"
              />
            </div>
            <div className="w-2/4">
              <p className="text-xs m-1 font-semibold text-gray-600">Email</p>
              <input
                type="text"
                id="emailBusiness"
                placeholder="Enter email"
                className="w-full px-3 text-sm mb-2 border outline-none focus:border-orange-500 bg-white rounded-md h-9"
              />
            </div>
          </div>
          <div className="flex w-full gap-5">
            <div className="w-2/4">
              <p className="text-xs m-1 font-semibold text-gray-600">Website</p>
              <input
                type="text"
                id="website"
                placeholder="Enter website"
                className="w-full px-3 text-sm mb-2 border outline-none focus:border-orange-500 bg-white rounded-md h-9"
              />
            </div>
            <div className="w-2/4">
              <p className="text-xs m-1 font-semibold text-gray-600">Address</p>
              <input
                type="text"
                id="addressBusiness"
                placeholder="Enter address"
                className="w-full px-3 text-sm mb-2 border outline-none focus:border-orange-500 bg-white rounded-md h-9"
              />
            </div>
          </div>
          <div className="flex my-3 justify-end">
            <Link href="/Business">
              <button
                onClick={handleBusinessSave}
                className="flex gap-2 text-xs text-white rounded-md font-semibold justify-center items-center py-2 px-4 bg-orange-400"
              >
                <FiSave className="size-4 text-white" />
                Save Business
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
