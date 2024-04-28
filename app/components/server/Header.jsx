import { GiWorld } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { LiaShoppingCartSolid } from "react-icons/lia";

import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="bg-blue-900 w-full flex justify-around items-center h-16">
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

      <div className="hidden md:block">
        <div className="flex justify-center items-center gap-4">
          <Link
            href="/Wishlist"
            className="flex justify-center items-center w-10 h-10 relative"
          >
            <div className="flex absolute right-0 top-0 w-5 h-5 justify-center items-center rounded-full bg-orange-400">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
            <FaRegHeart size={20} className="text-gray-100 mt-0.5" />
          </Link>
          <Link
            href="/Cart"
            className="flex justify-center items-center w-10 h-10 relative"
          >
            <div className="flex absolute right-0 top-0 w-5 h-5 justify-center items-center rounded-full bg-orange-400">
              <p className="text-xs text-white font-semibold">3</p>
            </div>
            <LiaShoppingCartSolid size={30} className="text-gray-100 mt-0.5" />
          </Link>
          <Link href="/Profile" className="flex gap-1">
            <FaRegUser size={18} className="text-gray-100" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
