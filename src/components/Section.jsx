import React from "react";
import Image from "next/image";

function Section() {
  return (
    <div className="flex bg-orange-100 bg-opacity-50 flex-col items-center">
      <div className="text-orange-400 w-72 font-sans mt-12 text-center">
        <h3 className="text-lg">
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
      {/* <div>
        <div className="flex flex-row mb-10">
          <img src="/images/app1.png" width={200} alt="icon" />
        </div>
      </div> */}
    </div>
  );
}

export default Section;
