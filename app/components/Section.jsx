import React from "react";
import Image from "next/image";

function Section() {
  return (
    <div className="flex flex-col bg-opacity-50">
      <div className="flex py-20 justify-evenly items-center">
        <div className="flex gap-5">
          <Image
            src="/images/app-ui.png"
            className="rounded-3xl w-48 h-[400px] border-gray-700 border-4"
            width={500}
            height={300}
            alt="ui-screenshot"
          />
          <Image
            src="/images/app-ui2.png"
            className="rounded-3xl w-48 h-[400px] border-gray-700 border-4"
            width={500}
            height={300}
            alt="ui-screenshot"
          />
        </div>
        <div className="w-80 font-sans mt-12 text-center">
          <h1 className="text-3xl text-gray-800 mb-5 font-extrabold">
            Simple Way to Order Your Food Faster
          </h1>
          <h3 className="text-lg text-orange-400 ">
            Download the app on your mobile and enjoy ordering now
          </h3>
          <div className="mt-12 gap-5 mb-10 flex flex-row">
            <div className="hover:cursor-pointer">
              <Image
                src="/images/playstore.png"
                height={150}
                alt="/"
                style={{ height: "auto" }}
                width={150}
              />
            </div>
            <div className="hover:cursor-pointer">
              <Image
                src="/images/appstore.png"
                height={150}
                style={{ height: "auto" }}
                alt="/"
                width={150}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
