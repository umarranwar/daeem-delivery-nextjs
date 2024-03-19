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
    const storedUserData = JSON.parse(localStorage.getItem("userData"));

    if (storedUserData) {
      if (
        userData.password === storedUserData.password &&
        userData.phoneOrEmail === storedUserData.phoneOrEmail
      ) {
        // User is signed up, perform the login action
        console.log("User is signed up!");

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
      } else {
        // User is not signed up
        console.log("User is not signed up!");
        setShowError(true);
      }
    } else {
      // User is not signed up
      console.log("User is not signed up!");
      setShowError(true);
    }
  };

  return (
    <div className="fixed inset-20 right-80 left-80 flex items-center flex-col shadow-[0px_2px_5px_#bab6b5] rounded-xl bg-white">
      <IoClose
        onClick={closeLogin}
        className="size-7 cursor-pointer text-blue-900 absolute right-2 top-2 z-50"
      />
      <h1 className="mt-8 mb-3 font-bold text-xl text-blue-900">Login</h1>

      <div className="w-8/12 flex flex-col justify-center items-center">
        {usingEmail && (
          <div className="flex flex-col justify-center items-center w-full">
            <div className="w-full">
              <p className="text-sm m-1 font-bold text-blue-900">
                Phone or Email
              </p>
              <input
                type="text"
                name="phoneOrEmail"
                value={userData.phoneOrEmail}
                onChange={handleInputChange}
                placeholder="Enter your phone or email"
                className="w-full px-3 text-sm mb-2 border shadow-[0px_1px_3px_#bab6b5] bg-transparent focus:outline-none focus:ring-blue-900 focus:ring-1 rounded-md h-9"
              />
            </div>
            <div className="w-full">
              <p className="text-sm m-1 font-bold text-blue-900">Password</p>
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className="w-full px-3 text-sm h-9 mb-2 border shadow-[0px_1px_3px_#bab6b5] bg-transparent focus:outline-none focus:ring-blue-900 focus:ring-1 rounded-md"
              />
            </div>
            {showError && (
              <p className="text-red-500 text-sm">User is not signed up! </p>
            )}
            <button
              onClick={handleLogin}
              className="flex self-center mt-5 bg-blue-900 ease-in-out duration-300 hover:bg-orange-400 active:bg-blue-800 justify-center rounded-full items-center hover:w-3/4 w-8/12 h-9"
            >
              <p className="flex text-sm text-white">Login</p>
            </button>
            <p className="text-blue-900 text-sm my-3">
              Are you already registered?
            </p>
            <button className="flex self-center shadow-[0px_1px_3px_#bab6b5] ease-in-out duration-300 border-2 active:border-blue-800 border-orange-400 justify-center rounded-full items-center hover:w-3/4 w-8/12 h-9">
              <p onClick={showSignUp} className="flex text-sm text-blue-900">
                Sign up
              </p>
            </button>
          </div>
        )}
        {usingOTP && (
          <div className="flex justify-center items-center w-full">
            <Toaster toastOptions={{ duration: 4000 }} />
            <div id="recaptcha-container"></div>
            {user ? (
              <h2 className="text-center text-white font-medium text-2xl">
                👍Login Success
              </h2>
            ) : (
              <div className="w-80 flex justify-center items-center flex-col gap-4 rounded-lg p-4">
                {showOTP ? (
                  <>
                    <div className="bg-white text-orange-400 w-fit mx-auto p-4 rounded-full">
                      <BsFillShieldLockFill size={30} />
                    </div>
                    <label
                      htmlFor="otp"
                      className="font-bold text-xl text-blue-900 text-center"
                    >
                      Enter your OTP
                    </label>
                    <OTPInput
                      inputStyle={{ width: 30, height: 30 }}
                      value={otp}
                      onChange={setOtp}
                      numInputs={6}
                      renderSeparator={<span>-</span>}
                      renderInput={(props) => <input {...props} />}
                    />
                    {/* <OtpInput
                      value={otp}
                      onChange={setOtp}
                      OTPLength={6}
                      otpType="number"
                      disabled={false}
                      autoFocus
                      className="opt-container text-blue-900"
                    ></OtpInput> */}
                    <button
                      onClick={onOTPVerify}
                      className="bg-blue-900 text-white w-full flex gap-1 items-center justify-center py-2.5 rounded"
                    >
                      {loading && (
                        <CgSpinner size={20} className="mt-1 animate-spin" />
                      )}
                      <span>Verify OTP</span>
                    </button>
                  </>
                ) : (
                  <>
                    <IoIosPhonePortrait className="text-orange-400 size-28" />
                    <label
                      htmlFor=""
                      className="font text-blue-900 text-center"
                    >
                      Verify your phone number
                    </label>
                    <div className="mx-3">
                      <PhoneInput country={"sa"} value={ph} onChange={setPh} />
                    </div>
                    <button
                      onClick={onSignup}
                      className="bg-blue-900 hover:bg-orange-400 active:bg-blue-800 w-full self-center flex gap-1 items-center justify-center py-2 text-white rounded-full"
                    >
                      {loading && (
                        <CgSpinner size={20} className="mt-1 animate-spin" />
                      )}
                      <span>Send code via SMS</span>
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        )}
        {!(usingEmail || usingOTP) && (
          <div className="flex w-full text-white h-52 mt-10 justify-center items-center gap-5">
            <CiLogin className="text-blue-900 size-40" />
            <div className="flex flex-col gap-4">
              <button
                onClick={() => setUsingEmail(true)}
                className="flex ease-in-out duration-300 w-56  rounded-full py-2 bg-orange-400 hover:bg-blue-900 active:to-orange-400 justify-center items-center"
              >
                Using Email Password
              </button>
              <button
                onClick={() => setUsingOTP(true)}
                className="flex ease-in-out duration-300 hover:border-orange-400 rounded-full py-1.5 text-blue-900 border-2 border-blue-900 justify-center items-center"
              >
                Using Phone OTP
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
