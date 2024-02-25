"use client";
import Header from "@/components/Header";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import storeData from "../../data/storeData.json";
import Loader from "../../components/Loader";

export default function Page() {
  const [Loading, setLoading] = useState(false);

  const handleStart = () => setLoading(true);

  return (
    <>
      <div className="text-black text-2xl">Loading...</div>
      <div className="flex bg-gray-100 flex-col justify-center items-center">
        <Header />
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
        >
          <h1
            style={{
              textShadow: "0px 1px 4px #2a2b2e",
            }}
            className="text-5xl text-white font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            Our Partners
          </h1>
        </div>
        <div className="flex justify-center flex-wrap gap-10 my-10 self-center items-center w-10/12 h-auto">
          {storeData.map((item) => (
            <Link
              onClick={handleStart}
              key={item.id}
              href={`/Restaurant/${item.store}`}
            >
              <div className="flex rounded-xl flex-col bg-white p-2">
                <div className="w-32 relative h-32">
                  <Image
                    src={item.logo}
                    width={400}
                    height={400}
                    className="w-full h-full"
                    alt="item-image"
                  />
                </div>
                <h1
                  style={{
                    textShadow: "0px 1px 4px #2a2b2e",
                  }}
                  className="my-2 font-bold text-white text-2xl self-center"
                >
                  {item.store}
                </h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {Loading && <div className="text-black text-2xl">Loading...</div>}
    </>
  );
}
