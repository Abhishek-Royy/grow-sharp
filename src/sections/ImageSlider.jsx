import React, { useEffect, useState } from "react";

import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const ImageSlider = () => {
  const images = [
    "https://images.ctfassets.net/pdf29us7flmy/1W4mWmQrRzH02LBdWrpBLY/c906998b82b45310f65a341f5a3e4293/B7094-How-To-Answer-The-Most-Common-Scholarship-Interview-Questions_Social_D1.png",
    "https://comprehensioninmiddleschool.weebly.com/uploads/5/5/7/0/55705387/307929114.jpg",
    "https://e0.pxfuel.com/wallpapers/997/165/desktop-wallpaper-blog-munich-business-school-coaching.jpg",
    "https://wallpaper.dog/large/20539589.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 2000); // Change interval duration as needed
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="relative w-full h-[45vh]">
      {/* <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-3xl px-3 py-1 bg-gray-800 text-white rounded"
        onClick={previousImage}
      >
        <FaChevronLeft />
      </button> */}
      {/* <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 px-3 py-1 text-3xl bg-gray-800 text-white rounded"
        onClick={nextImage}
      >
        <FaChevronRight />
      </button> */}
      <img
        className="mx-auto bg-center bg-cover w-[60%] h-full rounded"
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
      />
    </div>
  );
};

export default ImageSlider;
