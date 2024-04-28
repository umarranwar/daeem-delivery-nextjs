import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function SignUp({ showLogin, closeSignUp }) {
  // State to store user input and validation errors
  const [userData, setUserData] = useState({
    username: "",
    phoneOrEmail: "",
    password: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    username: "",
    phoneOrEmail: "",
    password: "",
  });

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
    if (userData.username.trim() === "") {
      newErrors.username = "Name is required";
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

  const handleSignUp = () => {
    // Perform input validation
    if (validateInputs()) {
      // Get existing users from local storage
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

      // Check if the email already exists
      const emailExists = existingUsers.some(
        (user) => user.phoneOrEmail === userData.phoneOrEmail
      );

      if (emailExists) {
        alert(
          "Email or phone already exists. Please use a different email or phone number."
        );
        return; // Stop sign-up process if email already exists
      }

      // Add the new user to the array of users
      const newUser = {
        username: userData.username,
        phoneOrEmail: userData.phoneOrEmail,
        password: userData.password,
      };
      const updatedUsers = [...existingUsers, newUser];

      // Store the updated array of users back in local storage
      localStorage.setItem("users", JSON.stringify(updatedUsers));

      // Log the updated array of users to the console
      console.log("All users:", updatedUsers);

      // Clear form fields and perform any other actions
      setUserData({
        username: "",
        phoneOrEmail: "",
        password: "",
      });

      // Display success message
      alert("User signed up successfully!");
    }
  };

  const handleLoginButton = () => {
    closeSignUp();
    showLogin();
  };
  return (
    <div className="w-2/4 flex mb-10 items-center flex-col rounded-lg border">
      <h1 className="mt-5 mb-3 ml-10 self-start font-semibold text-gray-700">
        Sign Up
        {/* {closeSignUp && (
          <IoClose onClick={closeSignUp} className="float-right" />
        )} */}
      </h1>
      <div className="flex px-16 flex-col justify-center items-center w-full">
        <div className="w-full">
          <p className="text-xs m-1 font-semibold text-gray-600">Name</p>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
            placeholder="Enter your name"
            className="w-full px-3 text-sm mb-2 border bg-transparent focus:outline-orange-400 rounded-md h-9"
          />
          {validationErrors.username && (
            <p className="text-xs ml-1 text-red-500">
              {validationErrors.username}
            </p>
          )}
        </div>
        <div className="w-full">
          <p className="text-xs m-1 font-semibold text-gray-600">
            Phone or Email
          </p>
          <input
            type="text"
            name="phoneOrEmail"
            value={userData.phoneOrEmail}
            onChange={handleInputChange}
            placeholder="Enter your phone or email"
            className="w-full px-3 text-sm mb-2 border bg-transparent focus:outline-orange-400 rounded-md h-9"
          />
          {validationErrors.phoneOrEmail && (
            <p className="text-xs ml-1 text-red-500">
              {validationErrors.phoneOrEmail}
            </p>
          )}
        </div>
        <div className="w-full">
          <p className="text-xs m-1 font-semibold text-gray-600">Password</p>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
            placeholder="Password"
            className="w-full px-3 text-sm mb-2 border bg-transparent focus:outline-orange-400 rounded-md h-9"
          />
          {validationErrors.password && (
            <p className="text-xs ml-1 text-red-500">
              {validationErrors.password}
            </p>
          )}
        </div>
        <button
          onClick={handleSignUp}
          className="flex self-center mt-5 bg-orange-400 justify-center rounded-full items-center w-full h-9"
        >
          <p className="flex text-sm text-white">Sign up</p>
        </button>
        <button
          onClick={handleLoginButton}
          className="flex self-center mt-5 border justify-center rounded-full items-center w-full h-9"
        >
          <p className="flex text-sm text-black">Login</p>
        </button>
      </div>
    </div>
  );
}
