"use client";
import React from "react";
import { GiWorld } from "react-icons/gi";
import { TbLogin2 } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { IoIosCar } from "react-icons/io";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const router = useRouter();
  return (
    <div className="bg-blue-900 w-full flex justify-around items-center h-16">
      <Link href="/">
        <Image
          src="/images/daeem-logo.png"
          width={100}
          height={100}
          alt="logo"
          className="w-auto h-auto hover:cursor-pointer"
          style={{
            textShadow: "0px 1px 4px #2a2b2e",
          }}
        />
      </Link>
      <div className="flex gap-1 items-center">
        <h4
          style={{
            textShadow: "0px 1px 4px #2a2b2e",
          }}
          className="text-gray-100 cursor-pointer  pointer"
        >
          English
        </h4>
        <GiWorld size={20} className="text-gray-100" />
      </div>
      <div className="flex gap-4">
        <Link href="/Login">
          <div className="flex gap-1">
            <h4
              style={{
                textShadow: "0px 1px 4px #2a2b2e",
              }}
              className="text-gray-100 hover:cursor-pointer"
            >
              Login
            </h4>
            <TbLogin2 size={23} className="text-gray-100" />
          </div>
        </Link>
        <div className="flex gap-1">
          <h4
            style={{
              textShadow: "0px 1px 4px #2a2b2e",
            }}
            className="text-gray-100 hover:cursor-pointer"
          >
            Partner Login
          </h4>
          <FaRegUser size={18} className="text-gray-100 mt-0.5" />
        </div>
        <div className="flex gap-1">
          <h4
            style={{
              textShadow: "0px 1px 4px #2a2b2e",
            }}
            className="text-gray-100 hover:cursor-pointer"
          >
            Driver Login
          </h4>
          <IoIosCar size={24} className="text-gray-100" />
        </div>
        {/* <h4 className="text-gray-100 cursor-pointer">Contact Us</h4> */}
      </div>
    </div>
  );
}

export default Header;
