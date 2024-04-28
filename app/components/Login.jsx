import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import { CiLogin } from "react-icons/ci";

import OTPInput from "react-otp-input";
import OtpInput from "react-otp-input";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "./firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import { IoIosPhonePortrait } from "react-icons/io";

export default function Login({ closeLogin, isLogin, showSignUp }) {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);
  const [showError, setShowError] = useState(false);

  // State to store user input
  const [usingEmail, setUsingEmail] = useState(false);
  const [usingOTP, setUsingOTP] = useState(false);

  const [userData, setUserData] = useState({
    password: "",
    phoneOrEmail: "",
  });

  function onCaptchVerify() {
    if (typeof window !== "undefined" && !window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }
  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    handleOTP();
  }

  const handleOTP = () => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));

    // Save the user data and login status in local storage
    localStorage.setItem(
      "userAuth",
      JSON.stringify({
        isLoggedIn: true,
        currentUser: storedUserData,
      })
    );
    // Perform your login logic here
    isLogin(true);
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle login button click
  const handleLogin = () => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const { phoneOrEmail, password } = userData;

    // Find the user with the entered phoneOrEmail
    const userIndex = storedUsers.findIndex(
      (user) => user.phoneOrEmail === phoneOrEmail
    );

    if (userIndex === -1) {
      // User not found
      console.log("User not found!");
      setShowError(true);
      return;
    }

    const user = storedUsers[userIndex];

    if (user.password !== password) {
      // Incorrect password
      console.log("Incorrect password!");
      setShowError(true);
      return;
    }

    // Update the user's status to "loggedIn: true" and add additional data
    storedUsers[userIndex].status = { isLoggedIn: true };

    // Save the updated user data in local storage
    localStorage.setItem("users", JSON.stringify(storedUsers));

    // User found and password is correct
    console.log("Login successful!");

    // Save the user data and login status in local storage
    localStorage.setItem(
      "userAuth",
      JSON.stringify({
        isLoggedIn: true,
        currentUser: user,
      })
    );

    // Perform your login logic here
    isLogin(true);
  };

  return (
    <div className="w-2/4 flex items-center flex-col rounded-lg border">
      <h1 className="mt-5 mb-3 ml-10 self-start font-semibold text-gray-700">
        Login
      </h1>
      <div className="flex px-16 flex-col justify-center items-center w-full">
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
        </div>
        <div className="w-full">
          <p className="text-xs m-1 font-semibold text-gray-600">Password</p>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            className="w-full px-3 text-sm mb-2 border bg-transparent focus:outline-orange-400 rounded-md h-9"
          />
        </div>
        {showError && (
          <p className="text-red-500 text-sm">User is not signed up! </p>
        )}
        <button
          onClick={handleLogin}
          className="flex self-center mt-5 bg-orange-400 justify-center rounded-full items-center w-full h-9"
        >
          <p className="flex text-sm text-white">Login</p>
        </button>
        <p className="text-gray-700 text-sm my-3">
          Are you already registered?
        </p>
        <button className="flex self-center shadow-[0px_1px_3px_#bab6b5] border-2 border-orange-400 justify-center rounded-full items-center w-full h-9">
          <p onClick={showSignUp} className="flex text-sm text-gray-700">
            Sign up
          </p>
        </button>
      </div>
    </div>
  );
}
