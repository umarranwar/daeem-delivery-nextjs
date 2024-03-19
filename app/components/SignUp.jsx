import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function SignUp({ showLogin, closeSignUp }) {
  // State to store user input and validation errors
  const [userData, setUserData] = useState({
    name: "",
    phoneOrEmail: "",
    password: "",
  });

  const [validationErrors, setValidationErrors] = useState({
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

    // Clear validation errors when the user starts typing
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  // Function to perform input validation
  const validateInputs = () => {
    let isValid = true;
    const newErrors = {};

    // Simple validation for demonstration purposes
    if (userData.name.trim() === "") {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (userData.phoneOrEmail.trim() === "") {
      newErrors.phoneOrEmail = "Phone or Email is required";
      isValid = false;
    }

    if (userData.password.trim() === "") {
      newErrors.password = "Password is required";
      isValid = false;
    }

    // Set validation errors
    setValidationErrors(newErrors);

    return isValid;
  };

  // Function to handle sign up button click
  const handleSignUp = () => {
    // Perform input validation
    if (validateInputs()) {
      // Save user data to local storage
      localStorage.setItem("userData", JSON.stringify(userData));

      // Close the sign-up modal or perform any other action
      closeSignUp();
      showLogin();
    }
  };
  return (
    <div className="fixed inset-20 justify-between items-center right-80 left-80 flex flex-col shadow-[0px_2px_5px_#bab6b5] rounded-xl bg-gradient-to-br bg-gray-100">
      <IoClose
        onClick={closeSignUp}
        className="size-7 cursor-pointer text-blue-900 absolute right-2 top-2 z-50"
      />

      <div className="w-8/12 flex flex-col items-center">
        <h1 className="mt-8 mb-3 font-bold text-xl text-blue-900">Sign up</h1>
        <div className="w-full">
          <p className="text-sm m-1 font-bold text-blue-900">Name</p>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            className="w-full px-3 h-9 mb-1 text-sm border shadow-[0px_1px_3px_#bab6b5] bg-transparent focus:outline-none focus:ring-blue-900 focus:ring-1 rounded-md"
          />
          {validationErrors.name && (
            <p className="text-xs ml-1 text-red-500">{validationErrors.name}</p>
          )}
        </div>
        <div className="w-full">
          <p className="text-sm m-1 font-bold text-blue-900">Phone or Email</p>
          <input
            type="text"
            name="phoneOrEmail"
            value={userData.phoneOrEmail}
            onChange={handleInputChange}
            placeholder="Enter your phone or email"
            className="w-full px-3 h-9 mb-1 text-sm border shadow-[0px_1px_3px_#bab6b5] bg-transparent focus:outline-none focus:ring-blue-900 focus:ring-1 rounded-md"
          />
          {validationErrors.phoneOrEmail && (
            <p className="text-xs ml-1 text-red-500">
              {validationErrors.phoneOrEmail}
            </p>
          )}
        </div>
        <div className="w-full">
          <p className="text-sm m-1 font-bold text-blue-900">Password</p>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
            placeholder="Password"
            className="w-full px-3 h-9 mb-1 text-sm border shadow-[0px_1px_3px_#bab6b5] bg-transparent focus:outline-none focus:ring-blue-900 focus:ring-1 rounded-md"
          />
          {validationErrors.password && (
            <p className="text-xs ml-1 text-red-500">
              {validationErrors.password}
            </p>
          )}
        </div>
        <button
          onClick={handleSignUp}
          className="flex self-center mt-5 bg-blue-900 ease-in-out duration-300 hover:bg-orange-400 active:bg-blue-800 justify-center rounded-full items-center hover:w-3/4 w-8/12 h-9"
        >
          <p className="flex text-sm text-white">Sign up</p>
        </button>
      </div>
    </div>
  );
}
