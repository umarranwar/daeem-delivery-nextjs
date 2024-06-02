"use client";
import React, { useState } from "react";

const ImageUploader = () => {
  const [imageSrc, setImageSrc] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const imageDataUrl = reader.result;
      setImageSrc(imageDataUrl);

      // Save the image data URL to local storage
      localStorage.setItem("savedImage", imageDataUrl);
      console.log("Image saved to local storage.");
    };

    reader.readAsDataURL(file);
  };

  const retrieveSavedImage = () => {
    const savedImage = localStorage.getItem("savedImage");
    if (savedImage) {
      setImageSrc(savedImage);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageUpload} />
      <br />
      <button onClick={retrieveSavedImage}>Retrieve Saved Image</button>
      <br />
      {imageSrc && <img src={imageSrc} alt="Uploaded" />}
    </div>
  );
};

export default ImageUploader;
