import React from "react";
import Image from "next/image";
function Footer() {
  return (
    <div className="flex p-10 duration-300 justify-between hover:opacity-100 flex-wrap opacity-90 flex-row bg-blue-900 text-white mt-40">
      <div className="lg:w-80 mt-5 md:w-96 sm:w-full">
        <h2 style={{ fontSize: 20, fontWeight: "bold" }}>Contact Us</h2>
        <p>Contact Us</p>
        <p>+966 920003103</p>
        <p>daeemdelivery@gmail.com</p>
        <p>
          Daeem Commercial Services Company Head Office Bin Commercial Center
          Building A, Office Bin-01 2319 Quraysh Street Al Salamah District
        </p>
      </div>
      <div className="lg:w-80 mt-5 md:w-80">
        <h2 style={{ fontSize: 20, fontWeight: "bold" }}>Newsletters</h2>
        <h3>Join our newsletter to get the best details and updates</h3>
        <div className="flex flex-row my-2 max-sm:w-80 sm:w-80 md:w-80 lg:w-80 justify-between items-center border-solid border">
          <input
            className="p-1 pl-2 focus:ring-1 max-sm:w-56 xl:w-56 focus:ring-orange-500 focus:outline-none text-black"
            placeholder="Your email"
          />
          <button className="fex mr-4 hover:cursor-pointer flex-row text-sm justify-center items-center">
            Join Now
          </button>
        </div>
        <button className="mr-2 text- sm text-white">
          Terms and Conditions
        </button>
        <button className="text-sm text-white">Privacy Policy</button>
        <button className="mt- mr-2 text-sm text-white">Return Policy</button>
        <button className="text-sm text-white">FAQ</button>
      </div>
      <div className="lg:w-80 mt-5 md:w-full">
        <h2 style={{ fontSize: 20, fontWeight: "bold" }}>
          Follow Us On Social Media
        </h2>
        <div className="flex flex-row mt-5">
          <Image
            src="/images/twitter.png"
            className="hover:cursor-pointer mr-5"
            height={30}
            width={30}
            alt="image"
          />
          <Image
            src="/images/facebook.png"
            className="hover:cursor-pointer mr-5"
            height={30}
            width={30}
            alt="image"
          />
          <Image
            src="/images/linkedin.png"
            className="hover:cursor-pointer"
            height={30}
            width={30}
            alt="image"
          />
        </div>
        <div className="flex flex-row mt-5 items-center">
          <Image
            src="/images/playstore.png"
            className="hover:cursor-pointer mr-5"
            width={100}
            height={100}
            alt="image"
          />
          <Image
            src="/images/appstore.png"
            className="hover:cursor-pointer"
            width={100}
            height={100}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
