"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import storeData from "../data/storeData.json";

import { FaStar } from "react-icons/fa";
import { IoSearchCircle } from "react-icons/io5";


export default function Page({ searchParams }) {
  const [loading, setLoading] = useState(false);
  const [nearbyStores, setNearbyStores] = useState([]);
  const [nearbyCount, setNearbyCount] = useState(0); // Counter for nearby stores
  const [filteredStores, setFilteredStores] = useState([]); // State for filtered stores
  const [searchQuery, setSearchQuery] = useState("");

  console.log("latitude", searchParams.lat);

  useEffect(() => {
    // Filter nearby stores

    const nearby = storeData.filter((store) => {
      const distance = calculateDistance(
        searchParams.lat,
        searchParams.lon,
        store.lat,
        store.lon
      );
      return distance <= 8; // Filter stores within 9 kilometers
    });
    setNearbyStores(nearby);
    setFilteredStores(nearby);
    setNearbyCount(nearby.length); // Update nearby store count
    setLoading(false);
  }, [storeData, searchParams]); // Added dependencies storeData and searchParams

  // Function to calculate distance between two points using Haversine formula
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    filterStores(e.target.value);
  };

  // Function to filter stores based on search query
  const filterStores = (query) => {
    const filtered = nearbyStores.filter((store) =>
      store.storeName.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredStores(filtered);
  };

  const filterCategory = (category) => {
    const filtered = nearbyStores.filter(
      (store) => store.category === category
    );
    setFilteredStores(filtered);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        {loading && (
          <div class="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
            <div class="bg-black opacity-50 absolute inset-0"></div>
            <div class="absolute flex flex-col items-center justify-center z-50 animate-pulse">
              <Image
                src="/images/LoadingLogo2.png"
                alt="loading-icon"
                width={200}
                height={100}
              />
            </div>
          </div>
        )}
        <div
          style={{
            backgroundImage: "url('/images/bgRestaurant.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "300px",
            position: "relative",
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
          }}
          className="flex justify-center items-center "
        >
          <div className="flex flex-col w-full justify-center items-center">
            <div className="relative max-sm:mt-4 h-9 mt-4 lg:w-5/12 md:w-8/12 sm:w-9/12 max-sm:w-11/12 w-5/12 flex items-center text-gray-400">
              <input
                className="px-5 h-9 w-full hover:shadow-[0px_0px_10px_3px_#f28d35] ring-1 hover:ring-orange-400 ring-orange-400 focus:outline-none text-sm py-2 rounded-full fn border-none text-black"
                type="text"
                name="search"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search your favorite store"
              />
              <IoSearchCircle className="w-9 h-9 right-0 hover:scale-105 duration-500 hover:fill-orange-400 hover:cursor-pointer fill-blue-900 absolute cursor-default" />
            </div>
          </div>
        </div>
        
        {/* <div className="flex w-full h-72 bg-orange-400"></div> */}
        <div className="flex p-5 w-full h-auto">
          <div className="flex gap-5 p-3 flex-col w-2/12 ">
            <div className="flex gap-2">
              <h1 className="font-bold text-orange-400">
                {nearbyCount} Stores
              </h1>
              <button
                onClick={() => setFilteredStores(storeData)}
                className="font-bold text-gray-700"
              >
                See All
              </button>
            </div>
            <button
              onClick={() => filterCategory("fastFood")}
              className="flex items-center gap-2 w-full"
            >
              <div className="w-10 h-10 relative">
                <Image
                  src="/images/png/fast-food.png"
                  className="w-full h-full"
                  width={50}
                  height={50}
                />
              </div>
              <h1 className="text-sm text-gray-600 font-bold">Fast Food</h1>
            </button>
            <button className="flex items-center gap-2 w-full">
              <div className="w-10 h-10 relative">
                <Image
                  src="/images/png/breakfast.png"
                  className="w-full h-full"
                  width={50}
                  height={50}
                />
              </div>
              <h1 className="text-sm text-gray-600 font-bold">Sandwich</h1>
            </button>
            <button className="flex items-center gap-2 w-full">
              <div className="w-10 h-10 relative">
                <Image
                  src="/images/png/teapot.png"
                  className="w-full h-full"
                  width={50}
                  height={50}
                />
              </div>
              <h1 className="text-sm text-gray-600 font-bold">Arabic</h1>
            </button>
            <button className="flex items-center gap-2 w-full">
              <div className="w-10 h-10 relative">
                <Image
                  src="/images/png/coffee-cup.png"
                  className="w-full h-full"
                  width={50}
                  height={50}
                />
              </div>
              <h1 className="text-sm text-gray-600 font-bold">Coffee</h1>
            </button>
            <button
              onClick={() => filterCategory("juices")}
              className="flex items-center gap-2 w-full"
            >
              <div className="w-10 h-10 relative">
                <Image
                  src="/images/png/juice.png"
                  className="w-full h-full"
                  width={50}
                  height={50}
                />
              </div>
              <h1 className="text-sm text-gray-600 font-bold">Juices</h1>
            </button>
          </div>
          <div className="flex w-10/12 pb-10 gap-5 flex-wrap justify-center">
            {filteredStores.map((item) => (
              <Link
                href={`/Restaurants/${item.storeName}`}
                onClick={showLoader}
                key={item.id}
                className="relative w-80 z-0 h-52 hover:border hover:border-orange-400 rounded-xl border cursor-pointer overflow-hidden"
              >
                {/* Orange shadow */}
                <div className="absolute inset-0">
                  <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-orange-400 to-transparent"></div>
                </div>
                {/* Image */}

                <div className="flex bg-black">
                  <Image
                    src={item.logo}
                    alt="banner"
                    width={100}
                    height={100}
                    className="absolute rounded-xl m-2 w-16 h-16"
                  />
                  <h1
                    style={{
                      textShadow: "0px 1px 4px #2a2b2e",
                    }}
                    className="absolute text-white left-20 font-bold top-7"
                  >
                    {item.storeName}
                  </h1>
                </div>

                {/* Title and description */}
                <div className="absolute text-white left-3 bottom-2">
                  <p
                    style={{
                      textShadow: "0px 1px 4px #2a2b2e",
                    }}
                    className="text-xl font-bold"
                  >
                    {item.store}
                  </p>
                  <div className="flex gap-1">
                    <FaStar className="mt-0.5 text-white" size={15} />
                    <p className="text-sm font-bold">4.0 (100+) Very Good</p>
                  </div>
                  <p className="text-white font-bold text-sm">
                    (2.1 km) delivery SAR 10
                  </p>
                </div>
                {/* Image overlay */}
                <Image
                  src={item.bgImage}
                  alt="bgImage"
                  width={300}
                  height={300}
                  className="w-full -z-50 rounded-lg h-full"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
