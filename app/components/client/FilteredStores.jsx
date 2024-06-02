"use client";
import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import storeData from "../../data/storeData.json";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

import { Context } from "@/components/Context";

export default function FilteredStores(props) {
  const {
    handleSetNearbyStores,
    filteredStores,
    handleSetFilteredStores,
  } = useContext(Context);

  const { searchParams } = props;

  const [loading, setLoading] = useState(false);
  const [nearbyCount, setNearbyCount] = useState(0); // Counter for nearby stores
  const [searchQuery, setSearchQuery] = useState("");

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
    handleSetNearbyStores(nearby);
    handleSetFilteredStores(nearby);

    console.log("nearby stores", nearby);
  }, [storeData, searchParams]); // Added dependencies storeData and searchParams

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

  const showLoader = () => {
    setLoading(true);
  };

  return (
    <div className="flex w-10/12 pb-10 gap-5 flex-wrap justify-center">
      {filteredStores.map((item) => (
        <Link
          href={`/Restaurants/${item.storeName}`}
          // onClick={showLoader}
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
  );
}
