"use client";
import React from "react";

const ClearLocalStorageButton = () => {
  const handleClearLocalStorage = () => {
    localStorage.clear();
    alert("Local storage data cleared successfully!");
  };

  return (
    <div>
      <h2>Clear Local Storage</h2>
      <button onClick={handleClearLocalStorage}>Clear Local Storage</button>
    </div>
  );
};

export default ClearLocalStorageButton;
