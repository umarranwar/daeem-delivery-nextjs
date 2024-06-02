import Image from "next/image";

import { IoSearchCircle } from "react-icons/io5";
import FilteredStores from "@/components/client/FilteredStores";
import SearchFilter from "@/components/client/SearchFilter";

export default function Page({ searchParams }) {
  console.log("latitude", searchParams);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div
          style={{
            backgroundImage: "url('/images/bgRestaurant.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "300px",
            position: "relative",
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
          }}
          className="flex justify-center items-center "
        >
          <div className="flex flex-col w-full justify-center items-center">
            <SearchFilter />
          </div>
        </div>
        {/* <div className="flex w-full h-72 bg-orange-400"></div> */}
        <div className="flex p-5 w-full h-auto">
          <div className="flex gap-5 p-3 flex-col w-2/12 ">
            <div className="flex gap-2">
              <h1 className="font-bold text-orange-400">
                {/* {nearbyCount} Stores */}
              </h1>
              <button
                // onClick={() => setFilteredStores(storeData)}
                className="font-bold text-gray-700"
              >
                See All
              </button>
            </div>
            <button
              // onClick={() => filterCategory("fastFood")}
              className="flex items-center gap-2 w-full"
            >
              <div className="w-10 h-10 relative">
                <Image
                  src="/images/png/fast-food.png"
                  className="w-full h-full"
                  width={50}
                  height={50}
                />
              </div>
              <h1 className="text-sm text-gray-600 font-bold">Fast Food</h1>
            </button>
            <button className="flex items-center gap-2 w-full">
              <div className="w-10 h-10 relative">
                <Image
                  src="/images/png/breakfast.png"
                  className="w-full h-full"
                  width={50}
                  height={50}
                />
              </div>
              <h1 className="text-sm text-gray-600 font-bold">Sandwich</h1>
            </button>
            <button className="flex items-center gap-2 w-full">
              <div className="w-10 h-10 relative">
                <Image
                  src="/images/png/teapot.png"
                  className="w-full h-full"
                  width={50}
                  height={50}
                />
              </div>
              <h1 className="text-sm text-gray-600 font-bold">Arabic</h1>
            </button>
            <button className="flex items-center gap-2 w-full">
              <div className="w-10 h-10 relative">
                <Image
                  src="/images/png/coffee-cup.png"
                  className="w-full h-full"
                  width={50}
                  height={50}
                />
              </div>
              <h1 className="text-sm text-gray-600 font-bold">Coffee</h1>
            </button>
            <button
              // onClick={() => filterCategory("juices")}
              className="flex items-center gap-2 w-full"
            >
              <div className="w-10 h-10 relative">
                <Image
                  src="/images/png/juice.png"
                  className="w-full h-full"
                  width={50}
                  height={50}
                />
              </div>
              <h1 className="text-sm text-gray-600 font-bold">Juices</h1>
            </button>
          </div>
          <FilteredStores searchParams={searchParams} />
        </div>
      </div>
    </>
  );
}
