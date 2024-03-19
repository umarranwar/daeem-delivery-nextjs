"use client";
// pages/index.js
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const showToast = () => {
    toast.success("This is a success toast message!");
  };

  return (
    <div>
      <h1>Next.js Toast Example</h1>
      <button onClick={showToast}>Show Toast</button>
      <ToastContainer />
    </div>
  );
}
