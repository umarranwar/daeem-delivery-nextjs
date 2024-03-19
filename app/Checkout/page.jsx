"use client";
import Header from "@/components/Header";
import Login from "@/components/Login";
import SignUp from "@/components/SignUp";
import Image from "next/image";
import Link from "next/link";
import { useState, useContext } from "react";
import { CiCreditCard2 } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";
import { Context } from "@/components/Context";

export default function Checkout() {
  const [debitCardChecked, setDebitCardChecked] = useState(false);
  const [cashOnDeliveryChecked, setCashOnDeliveryChecked] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userAddress, setUserAddress] = useState({
    city: "",
    district: "",
    streetAddress: "",
    homeAddress: "",
    location: "",
    paymentMode: null,
  });
  const { cartItems } = useContext(Context);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleDebitCardChange = () => {
    setDebitCardChecked(!debitCardChecked);
    setCashOnDeliveryChecked(false);
    setUserAddress((prevAddress) => ({
      ...prevAddress,
      paymentMode: !debitCardChecked ? "debitCard" : null,
    }));
  };

  const handleCashOnDeliveryChange = () => {
    setCashOnDeliveryChecked(!cashOnDeliveryChecked);
    setDebitCardChecked(false);
    setUserAddress((prevAddress) => ({
      ...prevAddress,
      paymentMode: !cashOnDeliveryChecked ? "cashOnDelivery" : null,
    }));
  };

  const handleCityChange = (e) => {
    setUserAddress((prevAddress) => ({
      ...prevAddress,
      city: e.target.value,
    }));
  };

  const handleDistrictChange = (e) => {
    setUserAddress((prevAddress) => ({
      ...prevAddress,
      district: e.target.value,
    }));
  };

  const handleStreetAddressChange = (e) => {
    setUserAddress((prevAddress) => ({
      ...prevAddress,
      streetAddress: e.target.value,
    }));
  };

  const handleHomeAddressChange = (e) => {
    setUserAddress((prevAddress) => ({
      ...prevAddress,
      homeAddress: e.target.value,
    }));
  };

  const handleLocationChange = (e) => {
    setUserAddress((prevAddress) => ({
      ...prevAddress,
      location: e.target.value,
    }));
  };

  const handleAddress = () => {
    showLoader();
    console.log("Debit Card Checked:", debitCardChecked);
    console.log("Cash on Delivery Checked:", cashOnDeliveryChecked);

    const orderDetail = {
      ...cartItems,
      address: userAddress,
    };
    console.log("Order detail :", orderDetail);

    if (typeof window !== "undefined") {
      localStorage.setItem("orderDetail", JSON.stringify(orderDetail));
    }
  };
  const showLoader = () => {
    setLoading(true);
  };
  const handleIsLogin = (value) => {
    setShowLogin(false);
    setIsLogin(value);
    console.log("is login : ", isLogin);
  };

  const handleShowLogin = () => {
    setShowLogin(true);
  };
  const handleCloseLogin = () => {
    setShowLogin(false);
  };
  const handleShowSignUp = () => {
    setShowLogin(false);
    setShowSignUp(true);
  };
  const handleCloseSignUp = () => {
    setShowSignUp(false);
  };

  return (
    <>
      <div className="bg-gradient-to-tl min-h-screen from-orange-400 to-white">
        <Header />
        {loading && (
          <div class="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
            <div class="bg-black opacity-50 absolute inset-0"></div>
            <div class="absolute flex flex-col items-center justify-center z-50 animate-pulse">
              <Image src="/images/LoadingLogo2.png" width={200} height={100} />
            </div>
          </div>
        )}
        <div className="flex flex-col justify-center items-center my-5 w-full">
          <div className="flex relative justify-center items-center p-4 w-8/12">
            <div className="flex absolute left-5 items-center">
              <div className="relative w-16 h-16">
                <Image
                  src="/images/AlBAaik.png"
                  width={100}
                  height={100}
                  className="w-full h-full"
                  alt="AlBAik Logo"
                />
              </div>
              <p
                style={{
                  textShadow: "0px 1px 4px #2a2b2e",
                }}
                className="font-bold text-white ml-2"
              >
                AlBAik
              </p>
            </div>
            <h1
              style={{
                textShadow: "0px 1px 4px #2a2b2e",
              }}
              className="text-2xl text-white font-extrabold"
            >
              Checkout
            </h1>
          </div>
          <div className="w-8/12 mt-5 h-0.5 rounded-full bg-white"></div>
        </div>
        <div className="flex  gap-5 pb-10 text-blue-900 px-36">
          {isLogin ? (
            <div className="flex flex-col h-96 w-2/4">
              <div className="flex justify-center items-center gap-1">
                <h1
                  style={{
                    textShadow: "0px 1px 4px #2a2b2e",
                  }}
                  className="text-xl my-4 text-white font-bold"
                >
                  Your Address
                </h1>
              </div>
              <div className="w-full rounded-lg p-6 shadow-[0px_2px_5px_#bab6b5] bg-white flex flex-col items-center">
                <div className="flex gap-4 w-full">
                  <div className="w-2/4">
                    <p className="text-sm m-1 font-bold text-blue-900">City</p>
                    <input
                      type="text"
                      name="city"
                      required={true}
                      placeholder="Enter your city"
                      value={userAddress.city}
                      onChange={handleCityChange}
                      className="w-full px-3 h-9 mb-1 text-sm border bg-white shadow-[0px_1px_3px_#bab6b5] bg-transparent focus:outline-none focus:ring-blue-900 focus:ring-1 rounded-md"
                    />
                  </div>
                  <div className="w-2/4">
                    <p className="text-sm m-1 font-bold text-blue-900">
                      District
                    </p>
                    <input
                      type="text"
                      name="district"
                      required={true}
                      placeholder="Enter your district"
                      value={userAddress.district}
                      onChange={handleDistrictChange}
                      className="w-full px-3 h-9 mb-1 text-sm border bg-white shadow-[0px_1px_3px_#bab6b5] bg-transparent focus:outline-none focus:ring-blue-900 focus:ring-1 rounded-md"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm m-1 font-bold text-blue-900">
                    Street Address
                  </p>
                  <input
                    type="text"
                    name="streetAddress"
                    required={true}
                    placeholder="Your street address"
                    value={userAddress.streetAddress}
                    onChange={handleStreetAddressChange}
                    className="w-full px-3 h-9 mb-1 text-sm border bg-white shadow-[0px_1px_3px_#bab6b5] bg-transparent focus:outline-none focus:ring-blue-900 focus:ring-1 rounded-md"
                  />
                </div>
                <div className="w-full">
                  <p className="text-sm m-1 font-bold text-blue-900">
                    Home Address
                  </p>
                  <input
                    type="text"
                    name="homeAddress"
                    required={true}
                    placeholder="Your home address"
                    value={userAddress.homeAddress}
                    onChange={handleHomeAddressChange}
                    className="w-full px-3 h-9 mb-1 text-sm border bg-white shadow-[0px_1px_3px_#bab6b5] bg-transparent focus:outline-none focus:ring-blue-900 focus:ring-1 rounded-md"
                  />
                </div>
                <div className="w-full pb-8">
                  <p className="text-sm m-1 font-bold text-blue-900">
                    Your location
                  </p>
                  <input
                    type="text"
                    name="location"
                    required={true}
                    placeholder="Past your location"
                    value={userAddress.location}
                    onChange={handleLocationChange}
                    className="w-full px-3 h-9 mb-1 text-sm border bg-white shadow-[0px_1px_3px_#bab6b5] bg-transparent focus:outline-none focus:ring-blue-900 focus:ring-1 rounded-md"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center mt-0 flex-col w-2/4 justify-center">
              <Image
                onClick={handleShowLogin}
                src="/images/login2.png"
                className="cursor-pointer"
                width={200}
                height={200}
                alt="image"
              />
              <button
                style={{
                  textShadow: "0px 1px 4px #2a2b2e",
                }}
                onClick={handleShowLogin}
                className="text-sm text-white"
              >
                Please log in to proceed with your order
              </button>
            </div>
          )}

          <div className="flex flex-col w-7/12 h-auto">
            <div className="flex w-full">
              <div className="flex px-2 flex-col w-full">
                <div className="flex justify-center items-center gap-1">
                  <h1
                    style={{
                      textShadow: "0px 1px 4px #2a2b2e",
                    }}
                    className="text-xl my-4 text-white font-bold"
                  >
                    Your
                  </h1>
                  <h1
                    style={{
                      textShadow: "0px 1px 4px #2a2b2e",
                    }}
                    className="text-xl my-4 text-white font-bold"
                  >
                    Order
                  </h1>
                </div>
                <div className="flex p-6 flex-col bg-white shadow-[0px_2px_5px_#bab6b5] rounded-lg">
                  {cartItems.map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center w-full">
                        <div className="flex justify-center items-center gap-2">
                          <div className="w-16 p-1 rounded-xl h-16 ">
                            <Image
                              alt="item-image"
                              src={item.img}
                              className="rounded-xl w-full h-full"
                              width={50}
                              height={50}
                            />
                          </div>
                          <p>{item.quantity}</p>
                          <p>{item.name}</p>
                          <p>{item.size}</p>
                        </div>
                        <p className="font-bold">{item.price}.0</p>
                      </div>
                      <div className="w-full h-0.5 bg-gray-200"></div>
                    </div>
                  ))}
                  <div className="flex justify-between items-center w-full h-14">
                    <p className="flex">Subtotal Inc Vat</p>
                    <p className="flex">SAR {totalPrice}.0</p>
                  </div>
                  <div className="w-full h-0.5 bg-gray-200"></div>
                  <div className="flex justify-between items-center w-full h-14">
                    <p className="flex">Delivery</p>
                    <p className="flex">SAR 10.0</p>
                  </div>
                  <div className="w-full h-0.5 bg-gray-200"></div>
                  <div className="flex font-bold justify-between items-center w-full h-14">
                    <p className="flex">Total</p>
                    <p className="flex">SAR {totalPrice + 10}.0</p>
                  </div>
                </div>
              </div>
            </div>
            {isLogin && (
              <div className="flex w-full">
                <div className="flex px-2 flex-col w-full">
                  <h1
                    style={{
                      textShadow: "0px 1px 4px #2a2b2e",
                    }}
                    className="text-xl self-center my-4 text-white font-bold"
                  >
                    Payment Method
                  </h1>
                  <div className="flex p-6 flex-col bg-white shadow-[0px_2px_10px_#bab6b5] rounded-lg">
                    <div className="flex items-center"></div>
                    <div className="flex justify-between items-center w-full h-14">
                      <div className="flex justify-center items-center gap-2">
                        <CiCreditCard2 className="size-9 text-blue-900" />
                        <p className="flex text-blue-900">Debit Card</p>
                      </div>
                      <input
                        type="checkbox"
                        id="debitCardCheckbox"
                        className="h-5 w-5 rounded-full focus:ring-blue-900 border-gray-300"
                        checked={debitCardChecked}
                        onChange={handleDebitCardChange}
                      />
                    </div>
                    <div className="w-full h-0.5 bg-gray-200"></div>
                    <div className="flex justify-between items-center w-full h-14">
                      <div className="flex justify-center items-center gap-2">
                        <CiMoneyBill size={35} className="text-blue-900" />
                        <p className="flex text-blue-900">Cash on Delivery</p>
                      </div>
                      <input
                        type="checkbox"
                        id="cashOnDeliveryCheckbox"
                        className="h-5 w-5 rounded-full border-gray-300"
                        checked={cashOnDeliveryChecked}
                        onChange={handleCashOnDeliveryChange}
                      />
                    </div>
                    <Link
                      className="self-center flex justify-center items-center rounded-full hover:px-12 px-10 py-2 ease-in-out duration-300 text-white text-sm bg-gradient-to-br hover:from-blue-500 hover:bg-blue-900 from-orange-300 to-orange-400"
                      href={
                        debitCardChecked
                          ? `/Payment?totalPrice=${totalPrice}`
                          : "/OrderDetail"
                      }
                    >
                      <button onClick={handleAddress}>Confirm Order</button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <>
        {showLogin && (
          <Login
            showSignUp={handleShowSignUp}
            isLogin={handleIsLogin}
            closeLogin={handleCloseLogin}
          />
        )}
        {showSignUp && (
          <SignUp showLogin={handleShowLogin} closeSignUp={handleCloseSignUp} />
        )}
      </>
    </>
  );
}
