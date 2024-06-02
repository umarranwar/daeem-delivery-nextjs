import { GiWorld } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { BiCategory } from "react-icons/bi";

import Image from "next/image";
import Link from "next/link";
import CartButton from "../client/CartButton";
import WishlistButton from "../client/WishlistButton";

function Header() {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <header
        className="w-full flex bg-orange-400 to-transparent rounded-b-xl justify-between items-center px-20 h-16 pointer-events-auto"
        // style={{
        //   backdropFilter: "blur(10px)",
        //   backgroundColor: "rgba(248, 131, 20, 0.3)", // Adjust the alpha value to control the opacity
        // }}
      >
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
        <div className="flex justify-center items-center">
          <h1 className="text-sm mr-1 text-white">Categories</h1>
          <BiCategory className="size-6 text-white" />
        </div>
        <div className="flex w-80 h-9 justify-center items-center">
          <input
            className="w-full h-full text-sm font-light p-1.5 px-3 outline-none rounded-l-full"
            placeholder="Search food, groceries and more"
          />
          <button className="flex hover:bg-gray-100 justify-center bg-white items-center w-12 h-9 rounded-r-full">
            <CiSearch className="text-gray-600 hover:size-7 size-6" />
          </button>
        </div>
        <div className="hidden md:block">
          <div className="flex justify-center items-center gap-4">
            <h1 className="text-white">العربية</h1>
            <h1 className="text-white font-light">|</h1>
            <WishlistButton />
            <h1 className="text-white font-light">|</h1>
            <CartButton />
            <h1 className="text-white font-light">|</h1>
            <Link href="/Profile" className="flex gap-1">
              <h1 className="text-sm text-white">Login</h1>
              <FaRegUser size={18} className="text-white" />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
