"use client";
import React, { useState } from "react";
import { GiWorld } from "react-icons/gi";
import { IoMenuOutline } from "react-icons/io5";
import { TbLogin2 } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoIosCar } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
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
            className="text-gray-100 cursor-pointer pointer"
          >
            English
          </h4>
          <GiWorld size={20} className="text-gray-100" />
        </div>
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <IoClose className="size-8 text-gray-100" />
          ) : (
            <IoMenuOutline className="size-10 text-gray-100" />
          )}
        </button>
        <div className="hidden md:block">
          <div className="flex gap-4">
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

            <Link href="/Profile" className="flex gap-1">
              <h4
                style={{
                  textShadow: "0px 1px 4px #2a2b2e",
                }}
                className="text-gray-100 hover:cursor-pointer"
              >
                Profile
              </h4>
              <FaRegUser size={18} className="text-gray-100 mt-0.5" />
            </Link>
          </div>
        </div>
      </div>
      {isOpen && (
        <ul className="flex md:hidden text-gray-100 bg-blue-900 gap-5 p-2 justify-center items-center w-full">
          <li className="flex gap-1">
            Login <TbLogin2 size={23} className="text-gray-100" />
          </li>
          <li className="flex gap-1">
            Partner Login
            <FaRegUser size={18} className="text-gray-100 mt-0.5" />
          </li>
          <li className="flex gap-1">
            Driver Login
            <FaRegUser size={18} className="text-gray-100 mt-0.5" />
          </li>
        </ul>
      )}
    </>
  );
}

export default Header;
