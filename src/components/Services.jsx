import Image from "next/image";
import React from "react";
Image;
function Services() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>
        <h2 className="text-2xl max-sm:text-base mt-24 text-orange-500">
          The Entire Range Of Stores At your Fingertips
        </h2>
      </div>
      <div className="flex flex-wrap justify-center lg:w-11/12 flex-row w-5/6 mt-20">
        <div className="flex max-sm:mb-2 p-5 sm:mb-2 sm:mr-2 sm:w-60 md:w-72 xl:w-56 lg:w-56 border border-gray-200 hover:bg-gray-100 items-center flex-col">
          <Image
            src="/images/courier.png"
            width={50}
            height={50}
            alt="image"
            className="w-24 h-24 hover:scale-105 duration-500"
          />
          <h2 className="text-lg mt-2">FAST DELIVERY</h2>
          <div style={{ textAlign: "center", color: "gray" }}>
            <p>
              Enjoy fast delivery that exceeds expectations. Thanks to our
              streamlined processes, your order arrives quickly
            </p>
          </div>
        </div>
        <div className="flex p-5 max-sm:mb-2 sm:mb-2 sm:w-60 xl:w-56 md:w-72 lg:w-56 border border-gray-200 hover:bg-gray-100 items-center flex-col">
          <Image
            src="/images/tracking.png"
            width={50}
            height={50}
            alt="image"
            className="w-24 h-24 hover:scale-105 duration-500"
          />
          <h2 className="text-lg mt-2">TRACK ORDER</h2>
          <div style={{ textAlign: "center", color: "gray" }}>
            <p>
              Track your order hassle-free with our user-friendly interface.
              Stay updated in real-time on your purchase&rsquo;s journey from
              our warehouse
            </p>
          </div>
        </div>
        <div className="flex p-5 max-sm:mb-2 sm:mr-2 md:w-72 sm:w-60 xl:w-56 lg:w-56 border lg:ml-2 lg:mb-2 border-gray-200 hover:bg-gray-100 items-center flex-col">
          <Image
            src="/images/store.png"
            width={50}
            height={50}
            alt="image"
            className="w-24 h-24 hover:scale-105 duration-500"
          />
          <h2 className="text-lg mt-2">UNLIMITED STORES</h2>
          <div style={{ textAlign: "center", color: "gray" }}>
            <p>
              Welcome to our boundless emporium, where choices know no limits.
              Explore an infinite array of products and options, ensuring you
              find
            </p>
          </div>
        </div>
        <div className="flex p-5 sm:w-60 md:w-72 xl:w-56 lg:w-56 border border-gray-200 hover:bg-gray-100 items-center flex-col">
          <Image
            src="/images/booking.png"
            width={50}
            height={50}
            alt="image"
            className="w-24 h-24 hover:scale-105 duration-500"
          />
          <h2 className="text-lg mt-2">QUICK BOOKING</h2>
          <div style={{ textAlign: "center", color: "gray" }}>
            <p>
              Fast and seamless booking at your fingertips! Our streamlined
              process ensures you can secure your bookings in just moments
            </p>
          </div>
        </div>
      </div>
      <div className="text-center flex justify-center flex-col items-center max-sm:w-80 sm: md:w-2/4 mt-16 sm:w-96 ">
        <p className="text-gray-500 mb-6">
          We are more than just a service; We are determined to excel. Our
          mission is dedicated to providing unparalleled experiences, empowering
          customers, and making them happy by providing high-quality,
          exceptional service, and innovating at every step. Relentlessly
          pursuing customer satisfaction, we strive to be a trusted partner on
          every journey you take.
        </p>
        <h3>More About Us</h3>
        <div className="flex justify-evenly items-center max-sm:w-full self-center max-sm:h-40 w-11/12  rounded-2xl border border-gray-200 flex-col bg-gradient-to-br from-orange-400 to-orange-200 mt-24 h-52">
          <h1 className="text-2xl text-white">Join Us</h1>
          <p className="text-white">Be part of our success story</p>
          <div className="flex flex-row justify-between">
            <button className="flex justify-center text-white text-sm items-center transition ease-in-out duration-300  max-sm:h-7 max-sm:w-36 mr-3 h-9 w-40 bg-blue-900 hover:bg-orange-400 active:bg-blue-800 rounded-full hover:cursor-pointer">
              Join as Restaurant
            </button>
            <button className="flex justify-center text-white text-sm items-center transition ease-in-out duration-300  max-sm:h-7 max-sm:w-36 mr-3 h-9 w-40 bg-blue-900 hover:bg-orange-400 active:bg-blue-800 rounded-full hover:cursor-pointer">
              Join as Driver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
