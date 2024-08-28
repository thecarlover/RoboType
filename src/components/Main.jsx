import React, { useState } from "react";
import { fetchRoboImage } from "../../api.js"

const Main = () => {
  const [inputValue, setInputValue] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [showImage, setShowImage] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = async (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      try {
        const imageUrl = await fetchRoboImage(inputValue);
        setImageSrc(imageUrl);
        setShowImage(true);
      } catch (error) {
        console.error("Failed to fetch image:", error);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Type something and hit Enter"
        className="p-3 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 transition-all duration-300"
      />

      {showImage && (
        <div className="mt-8">
          <img
            src={imageSrc}
            alt="Generated"
            className="w-72 h-72 object-cover rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Main;
