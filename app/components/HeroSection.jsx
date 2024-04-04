"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { FaMapMarkerAlt } from "react-icons/fa";
import { IoSearchCircle } from "react-icons/io5";

const HeroSection = () => {
  const textVariants = {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(true);
  const apiKey = "AIzaSyAvbj_IHZhiislshQVOq-YVXLNb0T7LgOQ"; // Replace 'YOUR_API_KEY' with your actual API key

  const currentAddress = () => {
    // Check if Geolocation is supported by the browser
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        // Success callback
        async (position) => {
          const { latitude, longitude } = position.coords;

          setLatitude(latitude);
          setLongitude(longitude);

          // Call reverse geocoding API to get address from coordinates
          const encodedLatitude = encodeURIComponent(latitude);
          const encodedLongitude = encodeURIComponent(longitude);
          const reverseGeocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${encodedLatitude},${encodedLongitude}&key=${apiKey}`;

          try {
            const response = await fetch(reverseGeocodingUrl);
            const data = await response.json();
            if (data.status === "OK" && data.results.length > 0) {
              setAddress(data.results[0].formatted_address);
            } else {
              setAddress("Address not found");
            }
          } catch (error) {
            console.error("Error fetching address:", error);
            setAddress("Error fetching address");
          } finally {
            setLoading(false);
          }
        },
        // Error callback
        (error) => {
          console.error("Error getting location:", error);
          setLoading(false);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full flex-col justify-center">
      <video
        className="object-cover opacity-65 max-sm:h-screen sm:h-96"
        src="/images/banner_video.webm"
        autoPlay
        loop
        muted
      />
      {/* <div className="absolute h-96 mt-16 inset-0 bg-orange-400 opacity-20"></div> */}

      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="flex flex-col absolute justify-center items-center text-center text-white text-3xl w-full"
      >
        <motion.div
          variants={textVariants}
          className="w-6/12 max-sm:w-5/6 sm:w-4/6 xl:w-5/12"
        >
          <h1 className="text-white font-sans font-light max-sm:text-2xl sm:text-2xl xl:text-3xl">
            We deliver your orders from <br /> Restaurants, Stores and
            Pharmacies
          </h1>
        </motion.div>

        <motion.div
          variants={textVariants}
          className="text-center mt-2 text-white text-sm"
        >
          <h4 className="font-light max-sm:text-sm">
            Order now from our website and enjoy the unique experience
          </h4>
        </motion.div>
        <motion.div
          variants={textVariants}
          className="relative max-sm:mt-4 h-9 mt-5 lg:w-6/12 md:w-8/12 sm:w-9/12 max-sm:w-11/12 w-5/12 flex items-center text-gray-400"
        >
          <FaMapMarkerAlt
            onClick={currentAddress}
            className="w-8 h-6 hover:cursor-pointer hover:scale-105 duration-500 hover:fill-orange-600 fill-blue-900 absolute cursor-default"
          />
          <input
            className="px-9 h-9 w-full hover:shadow-[0px_0px_10px_3px_#f28d35] focus:ring-1 focus:ring-offset-5 focus:ring-orange-500 focus:outline-none text-sm py-2 rounded-full fn border-none text-black"
            type="text"
            name="search"
            value={address}
            placeholder="Find your delivery location (landmark, street, or city)"
          />
          <Link
            className="h-full"
            href={{
              pathname: "/Restaurant",
              query: { lat: latitude, lon: longitude },
            }}
          >
            <IoSearchCircle className="w-9 h-9 right-0 hover:scale-105 duration-500 hover:fill-orange-600 hover:cursor-pointer fill-blue-900 absolute cursor-default" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
