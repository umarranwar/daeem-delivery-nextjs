"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MdBusiness, MdPersonOutline } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { FiSave } from "react-icons/fi";

export default function page() {
  const [businessData, setBusinessData] = useState(null);
  const [showPersonalDetail, setShowPersonalDetail] = useState(false);
  const [showProduct, setShowProduct] = useState(false);
  const [showBusinessDetail, setShowBusinessDetail] = useState(false);
  const [productImage, setProductImage] = useState(null);
  const [additionalImage, setAdditionalImage] = useState(null);

  const handleProductImageUpload = (event) => {
    const file = event.target.files[0];
    setProductImage(file);
  };

  const handleAdditionalImageUpload = (event) => {
    const file = event.target.files[0];
    setAdditionalImage(file);
  };

  useEffect(() => {
    // Simulate fetching data (replace with actual fetch logic)
    const storedData = localStorage.getItem("businessData");
    if (storedData) {
      setBusinessData(JSON.parse(storedData));
    }
    setShowPersonalDetail(true);
  }, []);

  const handlePersonalDetailClick = () => {
    setShowPersonalDetail(true);
    setShowBusinessDetail(false);
    setShowProduct(false);
  };

  const handleBusinessDetailClick = () => {
    setShowPersonalDetail(false);
    setShowBusinessDetail(true);
    setShowProduct(false);
  };
  const handleAddProductClick = () => {
    setShowProduct(true);
    setShowPersonalDetail(false);
    setShowBusinessDetail(false);
  };

  const handleProductSave = () => {
    const productName = document.getElementById("productName").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("categorySelect").value;
    const price = document.getElementById("price").value;
    const additionalOption = document.getElementById("additionalOption").value;
    const additionalPrice = document.getElementById("additionalPrice").value;

    const productData = {
      productName,
      description,
      category,
      price,
      additionalOption,
      additionalPrice,
      productImage: productImage ? URL.createObjectURL(productImage) : null,
      additionalImage: additionalImage
        ? URL.createObjectURL(additionalImage)
        : null,
    };

    let businessData = JSON.parse(localStorage.getItem("businessData")) || {};
    businessData.productDetail = productData;

    // Store images in local storage
    if (productImage) {
      const productImageKey = `productImage_${Date.now()}`;
      businessData[productImageKey] = URL.createObjectURL(productImage);
    }

    if (additionalImage) {
      const additionalImageKey = `additionalImage_${Date.now()}`;
      businessData[additionalImageKey] = URL.createObjectURL(additionalImage);
    }

    localStorage.setItem("businessData", JSON.stringify(businessData));

    // Show alert for successful save
    alert("Product details saved successfully!");
  };

  return (
    <div className="flex flex-col items-center bg-gray-100">
      {businessData ? (
        <div
          style={{
            backgroundImage: `url('${businessData.businessDetail.bannerImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "300px",
            position: "relative",
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
          }}
          className="flex relative justify-center items-center"
        >
          <div className="flex w-2/4 absolute bottom-5 left-20">
            <div className="w-32 h-32 relative">
              <Image
                src={businessData.businessDetail.logoImage}
                width={100}
                height={100}
                className="w-full rounded-lg h-full"
                alt="Business Logo"
              />
            </div>
            <div>
              <h2 className="text-xl ml-2 font-bold text-white mt-2">
                {businessData.businessDetail.businessName}
              </h2>
              <h2 className="text-lg ml-2 font-bold text-white">
                {businessData.businessDetail.businessType}
              </h2>
              <h2 className="ml-2 font-bold text-white">Distance 2.0 km</h2>
              <h2 className="ml-2 font-bold text-white">Delivery SAR 10</h2>
            </div>
          </div>
        </div>
      ) : (
        <p>No business data available.</p>
      )}
      <div className="flex gap-10 bg-white p-10 w-full">
        <div className="flex justify-start border rounded-lg py-5 px-2.5 gap-3 flex-col">
          <button
            className={`flex rounded-lg py-1.5 px-5 justify-center items-center gap-1 text-gray-700 text-xs font-semibold ${
              showPersonalDetail ? "bg-gray-200" : "hover:bg-gray-200"
            }`}
            onClick={handlePersonalDetailClick}
          >
            <MdPersonOutline className="size-5 text-gray-700" />
            Personal Detail
          </button>
          <button
            className={`flex rounded-lg py-1.5 px-5 justify-center items-center gap-1 text-gray-700 text-xs font-semibold ${
              showBusinessDetail ? "bg-gray-200" : "hover:bg-gray-200"
            }`}
            onClick={handleBusinessDetailClick}
          >
            <MdBusiness className="size-5 text-gray-700" />
            Business Detail
          </button>
          <button
            onClick={handleAddProductClick}
            className="flex rounded-lg hover:bg-gray-200 py-1.5 px-5 justify-center items-center gap-1 text-gray-700 text-xs font-semibold"
          >
            <IoFastFoodOutline className="size-5 text-gray-700" />
            Add Products
          </button>
          {/* <button
            onClick={handleAddProductClick}
            className="flex rounded-lg hover:bg-gray-200 py-1.5 px-5 justify-center items-center gap-1 text-gray-700 text-xs font-semibold"
          >
            <IoFastFoodOutline className="size-5 text-gray-700" />
            Show
             Products
          </button> */}
        </div>
        {/* Display Personal or Business Detail based on button click */}
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
                  value={businessData.personalDetail.firstName}
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
                  value={businessData.personalDetail.lastName}
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
                  value={businessData.personalDetail.phoneNo}
                  type="text"
                  id="phoneNoPersonal"
                  placeholder="Enter your phone number"
                  className="w-full px-3 text-sm mb-2 border outline-none focus:border-orange-500 bg-white rounded-md h-9"
                />
              </div>
              <div className="w-2/4">
                <p className="text-xs m-1 font-semibold text-gray-600">Email</p>
                <input
                  value={businessData.personalDetail.email}
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
                  value={businessData.personalDetail.city}
                  type="text"
                  id="city"
                  placeholder="Enter your city"
                  className="w-full px-3 text-sm mb-2 border outline-none focus:border-orange-500 bg-white rounded-md h-9"
                />
              </div>
              <div className="w-2/4">
                <p className="text-xs m-1 font-semibold text-gray-600">
                  Address
                </p>
                <input
                  value={businessData.personalDetail.address}
                  type="text"
                  id="addressPersonal"
                  placeholder="Enter your address"
                  className="w-full px-3 text-sm mb-2 border outline-none focus:border-orange-500 bg-white rounded-md h-9"
                />
              </div>
            </div>
            <div className="flex gap-2 my-3 justify-end">
              {/* <button className="flex gap-2 text-xs text-white rounded-md font-semibold justify-center items-center py-2 px-4 hover:bg-orange-400 bg-orange-400">
                Save Personal
              </button> */}
            </div>
          </div>
        )}
        {showBusinessDetail && (
          <div className="flex flex-col rounded-md border p-4 w-8/12">
            <div className="flex w-full mb-2 justify-start">
              <h1 className="text-xs font-semibold">Business Detail</h1>
            </div>
            <div className="flex w-full gap-5">
              <div className="w-2/4">
                <div className="w-2/3 my-4 relative h-52">
                  <img
                    src={businessData.businessDetail.logoImage}
                    alt="Banner"
                    width={300}
                    height={300}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="w-2/4">
                <div className="w-full my-4 relative h-52">
                  <img
                    src={businessData.businessDetail.bannerImage}
                    alt="Banner"
                    width={500}
                    height={300}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full gap-5">
              <div className="w-2/4">
                <p className="text-xs m-1 font-semibold text-gray-600">
                  Business Name
                </p>
                <input
                  value={businessData.businessDetail.businessName}
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
                <input
                  value={businessData.businessDetail.businessType}
                  type="text"
                  id="contactNumber"
                  placeholder="Enter contact number"
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
                  value={businessData.businessDetail.contactNumber}
                  type="text"
                  id="contactNumber"
                  placeholder="Enter contact number"
                  className="w-full px-3 text-sm mb-2 border outline-none focus:border-orange-500 bg-white rounded-md h-9"
                />
              </div>
              <div className="w-2/4">
                <p className="text-xs m-1 font-semibold text-gray-600">Email</p>
                <input
                  value={businessData.businessDetail.email}
                  type="text"
                  id="emailBusiness"
                  placeholder="Enter email"
                  className="w-full px-3 text-sm mb-2 border outline-none focus:border-orange-500 bg-white rounded-md h-9"
                />
              </div>
            </div>
            <div className="flex w-full gap-5">
              <div className="w-2/4">
                <p className="text-xs m-1 font-semibold text-gray-600">
                  Website
                </p>
                <input
                  value={businessData.businessDetail.website}
                  type="text"
                  id="website"
                  placeholder="Enter website"
                  className="w-full px-3 text-sm mb-2 border outline-none focus:border-orange-500 bg-white rounded-md h-9"
                />
              </div>
              <div className="w-2/4">
                <p className="text-xs m-1 font-semibold text-gray-600">
                  Address
                </p>
                <input
                  value={businessData.businessDetail.address}
                  type="text"
                  id="addressBusiness"
                  placeholder="Enter address"
                  className="w-full px-3 text-sm mb-2 border outline-none focus:border-orange-500 bg-white rounded-md h-9"
                />
              </div>
            </div>
            <div className="flex my-3 justify-end"></div>
          </div>
        )}

        {showProduct && (
          <div className="flex gap-5 w-8/12 p-5 rounded-lg border">
            <div className="flex flex-col">
              <h1 className="font-semibold mb-5 text-gray-700">Add Product</h1>
              <input
                type="file"
                accept="image/*"
                onChange={handleProductImageUpload}
                style={{ display: "none" }}
                id="productImageInput"
              />
              <div
                className="flex justify-center text-gray-700 items-center w-52 h-52 border-2 bg-orange-50 border-dashed border-orange-400 rounded-md cursor-pointer"
                onClick={() =>
                  document.getElementById("productImageInput").click()
                }
              >
                {productImage ? (
                  <img
                    src={URL.createObjectURL(productImage)}
                    alt="Product"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  "Upload Product Image"
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleAdditionalImageUpload}
                style={{ display: "none" }}
                id="additionalImageInput"
              />
              <h1
                className="font-semibold my-5 text-gray-700 cursor-pointer"
                onClick={() =>
                  document.getElementById("additionalImageInput").click()
                }
              >
                Additional Image
              </h1>
              <div
                className="flex text-xs justify-center items-center w-32 h-32 border-2 bg-orange-50 border-dashed border-orange-400 rounded-md cursor-pointer"
                onClick={() =>
                  document.getElementById("additionalImageInput").click()
                }
              >
                {additionalImage ? (
                  <img
                    src={URL.createObjectURL(additionalImage)}
                    alt="Additional"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex text-center justify-center items-center w-full h-full">
                    Upload Additional Image
                  </div>
                )}
              </div>
            </div>
            <div className="flex w-full flex-col border rounded-lg p-5">
              <div className="w-full">
                <p className="m-1 text-sm font-semibold text-gray-700">
                  Product Name
                </p>
                <input
                  type="text"
                  id="productName"
                  placeholder="Enter product name"
                  className="w-full px-3 text-sm mb-2 border outline-none focus:border-orange-500 bg-white rounded-md h-9"
                />
              </div>
              <div className="w-full">
                <p className="m-1 text-sm font-semibold text-gray-700">
                  Description
                </p>
                <input
                  type="text"
                  id="description"
                  placeholder="Enter product description"
                  className="w-full px-3 text-sm mb-2 border outline-none focus:border-orange-500 bg-white rounded-md h-9"
                />
              </div>
              <div className="w-full">
                <p className="m-1 text-sm font-semibold text-gray-700">
                  Select Categories
                </p>
                <select
                  id="categorySelect"
                  className="w-full px-3 text-sm mb-2 border outline-none focus:border-orange-500 bg-white rounded-md h-9"
                >
                  <option value="">Select a category</option>
                  <option value="burger">Burger</option>
                  <option value="pizza">Pizza</option>
                  <option value="electronics">Electronics</option>
                  <option value="groceries">Groceries</option>
                </select>
              </div>
              <div className="w-full">
                <p className="m-1 text-sm font-semibold text-gray-700">Price</p>
                <input
                  type="number"
                  id="price"
                  placeholder="Enter price"
                  className="w-full px-3 text-sm mb-2 border outline-none focus:border-orange-500 bg-white rounded-md h-9"
                />
              </div>
              <div className="w-full">
                <p className="m-1 text-sm font-semibold text-gray-700">
                  Additional Option
                </p>
                <input
                  type="text"
                  id="additionalOption"
                  placeholder="Enter additional option"
                  className="w-full px-3 text-sm mb-2 border outline-none focus:border-orange-500 bg-white rounded-md h-9"
                />
              </div>
              <div className="w-full">
                <p className="m-1 text-sm font-semibold text-gray-700">
                  Additional Price
                </p>
                <input
                  type="number"
                  id="additionalPrice"
                  placeholder="Enter additional price"
                  className="w-full px-3 text-sm mb-2 border outline-none focus:border-orange-500 bg-white rounded-md h-9"
                />
              </div>
              <button
                onClick={handleProductSave}
                className="flex gap-2 text-xs text-white rounded-md font-semibold justify-center items-center py-2 px-4 bg-orange-300 hover:bg-orange-400"
              >
                Save Product
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
