import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function Phone({ closeSignUp }) {
  // State to store user input
  const [userData, setUserData] = useState({
    name: "",
    phoneOrEmail: "",
    password: "",
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle sign up button click
  const handleSignUp = () => {
    // Save user data to local storage
    localStorage.setItem("userData", JSON.stringify(userData));

    // Close the sign-up modal or perform any other action
    closeSignUp();
  };

  return (
    <div className="fixed inset-20 justify-between items-center right-96 left-96 flex flex-col shadow-[0px_2px_5px_#bab6b5] rounded-xl bg-gradient-to-br bg-white">
      <IoClose
        onClick={closeSignUp}
        className="size-7 cursor-pointer text-blue-900 absolute right-2 top-2 z-50"
      />

      <div className="w-8/12 flex flex-col items-center">
        <h1 className="mt-8 mb-3 font-bold text-xl text-blue-900">Sign Up</h1>
        <div className="w-full">
          <p className="text-sm m-1 font-bold text-blue-900">Name</p>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            className="w-full px-3 h-9 mb-2 text-sm border shadow-[0px_1px_3px_#bab6b5] bg-transparent focus:outline-none focus:ring-blue-900 focus:ring-1 rounded-md"
          />
        </div>
        <div className="w-full">
          <p className="text-sm m-1 font-bold text-blue-900">Phone or Email</p>
          <input
            type="text"
            name="phoneOrEmail"
            value={userData.phoneOrEmail}
            onChange={handleInputChange}
            placeholder="Enter your phone or email"
            className="w-full px-3 h-9 mb-2 text-sm border shadow-[0px_1px_3px_#bab6b5] bg-transparent focus:outline-none focus:ring-blue-900 focus:ring-1 rounded-md"
          />
        </div>
        <div className="w-full">
          <p className="text-sm m-1 font-bold text-blue-900">Password</p>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
            placeholder="Password"
            className="w-full px-3 h-9 mb-2 text-sm border shadow-[0px_1px_3px_#bab6b5] bg-transparent focus:outline-none focus:ring-blue-900 focus:ring-1 rounded-md"
          />
        </div>
        <button
          onClick={handleSignUp}
          className="flex self-center shadow-[0px_2px_5px_#bab6b5] mt-5 bg-blue-900 ease-in-out duration-200 hover:bg-orange-400 active:bg-blue-800 justify-center rounded-full items-center w-3/4 h-9"
        >
          <p className="flex text-sm text-white">Sign Up</p>
        </button>
      </div>
    </div>
  );
}
