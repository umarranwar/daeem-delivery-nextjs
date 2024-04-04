"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.3,
      staggerChildren: 0.3,
    },
  },
};
const variants2 = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.3,
      staggerChildren: 0.3,
    },
  },
};

function Services() {
  const ref = useRef();
  const isInView = useInView(ref, { once: true }, { margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="flex flex-col items-center"
    >
      <motion.div
        variants={variants}
        className="flex flex-col w-1/2 gap-5 justify-center items-center"
      >
        <h1 className="font-extrabold text-gray-800 text-4xl">
          Our App Features
        </h1>
        <p className="text-center">
          Our app features a user-friendly interface for seamless navigation and
          a variety of customization options to tailor the experience to your
          needs.
        </p>
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-wrap justify-center lg:w-11/12 flex-row w-5/6 mt-10"
      >
        <motion.div
          variants={variants}
          className="flex max-sm:mb-2 sm:mr-2 md:w-72 sm:w-60 xl:w-56 lg:w-56 lg:ml-2 lg:mb-2 items-center flex-col"
        >
          <Image
            src="/images/booking.png"
            width={50}
            height={50}
            alt="image"
            className="w-24 h-24 hover:scale-105 duration-500"
          />
          <h2 className="text-lg text-gray-700 font-bold mt-2">
            Quick Booking
          </h2>
          <div className="text-center text-gray-700">
            <p>Streamline deliveries with Quick Booking for faster service.</p>
          </div>
        </motion.div>
        <motion.div
          variants={variants}
          className="flex max-sm:mb-2 sm:mr-2 md:w-72 sm:w-60 xl:w-56 lg:w-56 lg:ml-2 lg:mb-2 items-center flex-col"
        >
          <Image
            src="/images/courier.png"
            width={50}
            height={50}
            alt="image"
            className="w-24 h-24 hover:scale-105 duration-500"
          />
          <h2 className="text-lg font-bold text-gray-700 mt-2">
            Fast Delivery
          </h2>
          <div className="text-center text-gray-700">
            <p>
              Experience lightning-fast, reliable delivery for your convenience.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={variants}
          className="flex max-sm:mb-2 sm:mr-2 md:w-72 sm:w-60 xl:w-56 lg:w-56 lg:ml-2 lg:mb-2 items-center flex-col"
        >
          <Image
            src="/images/tracking.png"
            width={50}
            height={50}
            alt="image"
            className="w-24 h-24 hover:scale-105 duration-500"
          />
          <h2 className="text-lg font-bold text-gray-700 mt-2">Track Order</h2>
          <div className="text-center text-gray-700">
            <p>
              Easily track your order status in real-time for complete peace of
              mind.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={variants}
          className="flex max-sm:mb-2 sm:mr-2 md:w-72 sm:w-60 xl:w-56 lg:w-56 lg:ml-2 lg:mb-2 items-center flex-col"
        >
          <Image
            src="/images/store.png"
            width={50}
            height={50}
            alt="image"
            className="w-24 h-24 hover:scale-105 duration-500"
          />
          <h2 className="text-lg font-bold text-gray-700 mt-2">
            Unlimited Stores
          </h2>
          <div className="text-center text-gray-700">
            <p>
              Explore unlimited stores and discover endless shopping
              possibilities.
            </p>
          </div>
        </motion.div>
      </motion.div>
      <div className="flex my-24 w-full gap-10 justify-center">
        <motion.div
          ref={ref}
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex w-5/12 gap-5 p-5 justify-center bg-orange-50 rounded-2xl flex-col"
        >
          <h1 className="text-gray-800 font-extrabold text-4xl">
            How it Works
          </h1>
          <h1 className="text-lg text-gray-700 font-bold">
            01 Choose Your Meals
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy
          </p>
          <h1 className="text-lg text-gray-700 font-bold">
            02 Pay For The Order
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy
          </p>
          <h1 className="text-lg text-gray-700 font-bold">
            03 Wait For Delivery
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy
          </p>
        </motion.div>
        <motion.div
          ref={ref}
          variants={variants2}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex relative w-5/12 items-center"
        >
          <motion.div>
            <Image
              variants={variants2}
              src="/images/app-ui.png"
              className="rounded-3xl w-48 h-[400px] border-gray-700 border-4"
              width={500}
              height={300}
              alt="ui-screenshot"
            />
          </motion.div>
          <motion.div variants={variants2}>
            <Image
              src="/images/mobile-ui1.png"
              className="rounded-3xl top-4 left-44 border absolute w-[193px] h-[392px]"
              width={500}
              height={300}
              alt="ui-screenshot"
            />
          </motion.div>
          <motion.div variants={variants2}>
            <Image
              src="/images/mobile-ui2.png"
              className="rounded-3xl top-4 right-3 absolute w-[193px] h-[392px]"
              width={500}
              height={300}
              alt="ui-screenshot"
            />
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex justify-center w-full gap-10"
      >
        <div className="w-5/12 h-96">
          <Image
            src="/images/delivery-boy.jpg"
            className="rounded-3xl border p-2 w-full h-full"
            width={500}
            height={500}
            alt="ui-screenshot"
          />
        </div>
        <motion.div
          variants={variants}
          className="flex gap-10 flex-col p-5 justify-center items-center w-5/12 h-96"
        >
          <motion.h1
            variants={variants}
            className="text-center w-72 font-bold text-3xl"
          >
            Drive Towards Success with Us!
          </motion.h1>
          <motion.p variants={variants}>
            Embark on a rewarding journey as a delivery partner with our
            platform. Experience flexible working hours, competitive earnings,
            and a supportive environment that values your hard work. Join us
            today and accelerate your career towards success!
          </motion.p>
        </motion.div>
      </motion.div>
      <motion.div
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex  my-20 justify-center w-full gap-10"
      >
        <motion.div
          variants={variants}
          className="flex gap-10 flex-col p-5 justify-center items-center w-5/12 h-96"
        >
          <motion.h1
            variants={variants}
            className="text-center font-bold text-3xl"
          >
            Unlock Your Restaurant's Potential with Our Partnership
          </motion.h1>
          <motion.p variants={variants}>
            Elevate your restaurant's reach and revenue by partnering with us.
            Gain access to a vast customer base, seamless order management
            tools, and tailored marketing strategies to boost your brand
            visibility and sales. Let's collaborate and take your restaurant to
            new heights!
          </motion.p>
        </motion.div>
        <div className="w-5/12 h-96">
          <Image
            src="/images/restaurant.jpg"
            className="rounded-3xl border p-2 w-full h-full"
            width={500}
            height={500}
            alt="ui-screenshot"
          />
        </div>
      </motion.div>
      <motion.div
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex mt-20  justify-center w-full gap-10"
      >
        <div className="w-4/12 relative h-72">
          <Image
            src="/images/restaurant.jpg"
            className="rounded-3xl w-full h-full"
            width={500}
            height={500}
            alt="ui-screenshot"
          />
          <div className="flex gap-3 absolute left-3 bottom-3 flex-col">
            <h1 className="text-xl font-bold text-white">Partner with us</h1>
            <p className="text-white">
              Join Daeem Delivery and reach more customers than ever. We handle
              delivery, so you can focus on the food.
            </p>
            <button className=" w-1/3 bg-white p-2 rounded-lg text-sm">
              Join Now
            </button>
          </div>
        </div>
        <div className="w-4/12 relative h-72">
          <Image
            src="/images/delivery-boy2.jpg"
            className="rounded-3xl w-full h-full"
            width={500}
            height={500}
            alt="ui-screenshot"
          />
          <div className="flex gap-3 absolute left-3 bottom-3 flex-col">
            <h1 className="text-xl font-bold text-white">Ride with us</h1>
            <p className="text-white">
              The freedom to fit work around your life. Plus great fees, perks
              and discounts.
            </p>
            <button className="w-1/3 bg-white p-2 rounded-lg text-sm">
              Join Now
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Services;
