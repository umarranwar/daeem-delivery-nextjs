export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "300px",
          position: "relative",
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}
        className="bg-gray-100"
      >
        <h1 className="text-5xl text-gray-200 font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Loading..
        </h1>
      </div>
      <div className="flex justify-center flex-wrap gap-10 my-10 self-center items-center w-10/12 h-auto">
        <div className="flex rounded-xl flex-col bg-gray-100 p-2">
          <div className="w-32 bg-gray-100 h-32"></div>
          <h1 className="text-gray-300">Loading..</h1>
        </div>
        <div className="flex rounded-xl flex-col bg-gray-100 p-2">
          <div className="w-32 bg-gray-100 h-32"></div>
          <h1 className="text-gray-300">Loading..</h1>
        </div>
        <div className="flex rounded-xl flex-col bg-gray-100 p-2">
          <div className="w-32 bg-gray-100 h-32"></div>
          <h1 className="text-gray-300">Loading..</h1>
        </div>
        <div className="flex rounded-xl flex-col bg-gray-100 p-2">
          <div className="w-32 bg-gray-100 h-32"></div>
          <h1 className="text-gray-300">Loading..</h1>
        </div>
      </div>
    </div>
  );
}
