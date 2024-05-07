// import React, { useState } from "react";
// import "../stylesheets/testimonial.css";

// import { FaQuoteLeft } from "react-icons/fa";
// import { FaChevronCircleLeft } from "react-icons/fa";
// import { FaChevronCircleRight } from "react-icons/fa";

// import studentTesti from "../pages/testimonial.json";

// function TestimonialSection() {
//   // Crousal
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === studentTesti.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? studentTesti.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <>
//       <div className="testi-container">
//         <div className="testi-main w-full h-[48vh] flex items-center justify-between mt-7 mb-28 py-2 px-10">
//           <div className="prev-btn-container">
//             <button
//               className="prev-btn text-4xl text-orange-600"
//               onClick={handlePrev}
//             >
//               <FaChevronCircleLeft />
//             </button>
//           </div>
//           {studentTesti
//             .slice(currentIndex, currentIndex + 3)
//             .map((item, index) => (
//               <div
//                 key={index}
//                 className={`card w-[20vw] h-full ${
//                   index === 0 ? "active" : ""
//                 }`}
//               >
//                 <div className="card-text w-full h-[70%] text-center p-4 text-[16px] font-semibold text-[#484175]">
//                   <FaQuoteLeft />
//                   {item.stuText}
//                 </div>
//                 <div className="img-all w-full flex items-center justify-between px-3  h-[30%] ">
//                   <div className="image-icn w-[80px] h-[80px]  rounded-full">
//                     <img
//                       className="w-full h-full rounded-full bg-center bg-cover"
//                       src={item.stuImg}
//                       alt=""
//                     />
//                   </div>
//                   <div className="stu-dtls flex flex-col  w-[200px] items-center">
//                     <h2 className="font-semibold">{item.stuName}</h2>
//                     <h3 className="text-[15px]">
//                       {item.stuCompany} • {item.stuPosition}
//                     </h3>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           <div className="next-btn-container">
//             <button
//               className="next-btn text-4xl text-orange-600"
//               onClick={handleNext}
//             >
//               <FaChevronCircleRight />
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default TestimonialSection;

// /*************************************
//  * *++++++++++++++++++++++++++++++++++++++ */

import React, { useState, useEffect } from "react";
import "../stylesheets/testimonial.css";

import { FaQuoteLeft } from "react-icons/fa";

import studentTesti from "../pages/testimonial.json";

function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mediaScreen, setMediaScreen] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setMediaScreen(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === studentTesti.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testi-container">
      <div className="testi-main sm:w-full sm:h-[48vh] flex items-center  justify-between mt-7 sm:mb-28 xl:mb-[5%] mb-[10%] py-2 sm:px-10 px-5">
        {mediaScreen < 430
          ? studentTesti
              .slice(currentIndex, currentIndex + 1)
              .map((item, index) => (
                <div
                  key={index}
                  className={`card sm:w-[20vw] pb-4 sm:pb-0 sm:h-full h-max ${
                    index === 0 ? "active" : ""
                  }`}
                >
                  <div className="card-text w-full h-[70%] text-center p-4 text-[16px] font-semibold text-[#484175]">
                    <FaQuoteLeft />
                    {item.stuText}
                  </div>
                  <div className="img-all w-full flex items-center justify-between px-3  h-[30%] ">
                    <div className="image-icn w-[80px] h-[80px]  rounded-full">
                      <img
                        className="w-full h-full rounded-full bg-center bg-cover"
                        src={item.stuImg}
                        alt=""
                      />
                    </div>
                    <div className="stu-dtls flex flex-col  w-[200px] items-center">
                      <h2 className="font-semibold">{item.stuName}</h2>
                      <h3 className="text-[15px]">
                        {item.stuCompany} • {item.stuPosition}
                      </h3>
                    </div>
                  </div>
                </div>
              ))
          : studentTesti
              .slice(currentIndex, currentIndex + 3)
              .map((item, index) => (
                <div
                  key={index}
                  className={`card w-[20vw] h-full ${
                    index === 0 ? "active" : ""
                  }`}
                >
                  <div className="card-text w-full h-[70%] text-center p-4 text-[16px] font-semibold text-[#484175]">
                    <FaQuoteLeft />
                    {item.stuText}
                  </div>
                  <div className="img-all w-full flex items-center justify-between px-3  h-[30%] ">
                    <div className="image-icn w-[80px] h-[80px]  rounded-full">
                      <img
                        className="w-full h-full rounded-full bg-center bg-cover"
                        src={item.stuImg}
                        alt=""
                      />
                    </div>
                    <div className="stu-dtls flex flex-col  w-[200px] items-center">
                      <h2 className="font-semibold">{item.stuName}</h2>
                      <h3 className="text-[15px]">
                        {item.stuCompany} • {item.stuPosition}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
      </div>
    </div>
  );
}

export default TestimonialSection;

// import React, { useState, useEffect } from "react";
// import "../stylesheets/testimonial.css";
// import { FaQuoteLeft } from "react-icons/fa";
// import studentTesti from "../pages/testimonial.json";

// function TestimonialSection() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [mediaScreen, setMediaScreen] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setMediaScreen(window.innerWidth);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === studentTesti.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="testi-container">
//       <div className={`testi-main ${mediaScreen < 450 ? 'grid' : 'flex'} items-center justify-between mt-7 ${mediaScreen < 450 ? 'mb-28' : 'mb-[10%]'} py-2 sm:px-10 px-5`}>
//         {studentTesti.slice(currentIndex, currentIndex + (mediaScreen < 430 ? 2 : 3)).map((item, index) => (
//           <div key={index} className={`card ${mediaScreen < 430 ? 'sm:w-[20vw] h-max' : 'w-[20vw] h-full'} ${index === 0 ? 'active' : ''}`}>
//             <div className="card-text w-full h-[70%] text-center p-4 text-[16px] font-semibold text-[#484175]">
//               <FaQuoteLeft />
//               {item.stuText}
//             </div>
//             <div className="img-all w-full flex items-center justify-between px-3 h-[30%]">
//               <div className="image-icn w-[80px] h-[80px] rounded-full">
//                 <img className="w-full h-full rounded-full bg-center bg-cover" src={item.stuImg} alt="" />
//               </div>
//               <div className="stu-dtls flex flex-col w-[200px] items-center">
//                 <h2 className="font-semibold">{item.stuName}</h2>
//                 <h3 className="text-[15px]">{item.stuCompany} • {item.stuPosition}</h3>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default TestimonialSection;
