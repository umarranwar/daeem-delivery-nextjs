import { FaMapMarkerAlt } from "react-icons/fa";
import { IoSearchCircle } from "react-icons/io5";
import Search from "../client/Search";

const HeroSection = () => {
  return (
    <div className="flex w-full flex-col justify-center">
      <video
        className="object-cover opacity-65 max-sm:h-screen sm:h-96"
        src="/images/banner_video.webm"
        autoPlay
        loop
        muted
      />

      <div className="flex flex-col absolute justify-center items-center text-center text-white text-3xl w-full">
        <div className="w-6/12 max-sm:w-5/6 sm:w-4/6 xl:w-5/12">
          <h1 className="text-white font-sans font-light max-sm:text-2xl sm:text-2xl xl:text-3xl">
            We deliver your orders from <br /> Restaurants, Stores and
            Pharmacies
          </h1>
        </div>

        <div className="text-center mt-2 text-white text-sm">
          <h4 className="font-light max-sm:text-sm">
            Order now from our website and enjoy the unique experience
          </h4>
        </div>
        <Search />
      </div>
    </div>
  );
};

export default HeroSection;
