import React from "react";
import "../stylesheets/homepage.css";

import { NavLink } from "react-router-dom";

import Counter from "../components/Counter";
import ProductSection from "../sections/ProductSection";
import CtaSection from "../sections/CtaSection";
import TestimonialSection from "../sections/TestimonialSection";
import Logolist from "../sections/Logolist";
import FaqSection from "../sections/FaqSection";
import ContactUs from "../sections/ContactUs";

import TestiCard from "../sections/TestiCard";

// import { FaHandPointDown } from "react-icons/fa";

function HomePage() {
  return (
    <>
      <div className="hero-main pb-4 lg:px-[120px] pt-20 md:px-4 ">
        <div className="main-box   lg:flex  md:block w-full">
          <div className="left md:w-full lg:w-[55%] ">
            <div className="text  sm:w-full w-[95%] ">
              <h1 className="ab leading-none sm:text-5xl md:text-6xl text-4xl xl:text-5xl lg:text-6xl font-semibold sm:w-[80%] md:w-full lg:w-[90%] text-[#fff]">
                <span className="text-[#F05A3F] lg:text-7xl md:text-7xl">
                  GrowSharp,{" "}
                </span>
                India's No.1 Most Trusted Student Profile and Exam Platfrom{" "}
              </h1>
            </div>
            <div className="text-2  sm:w-full w-[95%] mt-6">
              <p className="sm:text-base sm:w-[70%] md:w-[90%] lg:w-full md:text-xl lg:text-lg sm:m-0 text-[#fff] font-semibold w-full text-lg tracking-wide ">
                Unlock your potential by signing up with GrowSharp-The best exam
                & counselling pltfrom for your success
              </p>
            </div>
            <div className="qr-box w-full h-[40%]  flex  items-center justify-start gap-8 mt-6">
              <div className="qr sm:w-1/3 sm:h-[250px] xl:w-[40%] bg-transparent w-[70%]">
                <img
                  className="w-full h-full object-cover object-center"
                  src="https://upload.wikimedia.org/wikipedia/commons/8/8a/QR_Code.png"
                  alt="qr-code"
                />
              </div>
              <div className="icons w-[75%] lg:w-[40%] xl:w-[50%] md:w-[62%] ">
                <h2 className="bg-[#FFAD17] px-6 py-4 sm:py-7 md:py-7 lg:py-4 text-center rounded-lg sm:text-lg md:text-2xl lg:text-base flex items-center justify-center gap-2 xl:py-3 text-white font-semibold cursor-pointer">
                  Download Our App Now!
                  <lord-icon
                    src="https://cdn.lordicon.com/xkmjbjuw.json"
                    trigger="hover"
                    colors="primary:#ffffff"
                  ></lord-icon>
                </h2>

                <div className="app-icon w-full h-[60px] sm:h-[90px] md:h-[90px] lg:h-[60px] flex items-center justify-between mt-4">
                  <img
                    className="w-1/2 h-full"
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                    alt="play"
                  />
                  <img
                    className="w-1/2 h-full"
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                    alt="play"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="right   md:w-full lg:w-[45%]  sm:w-[45%] sm:h-[95vh]  sm:flex sm:items-center my-5 sm:my-0 sm:justify-center w-full">
            <div className="image sm:w-full  lg:top-0 md:top-[925px] sm:h-[85%] w-80% ">
              <img
                className="w-full h-full object-cover object-centere"
                src="https://www.tarmac.io/hubfs/Tarmac_December_2021/images/Ico%20Industry%20Edtech.png"
                alt="right-img"
              />
            </div>
          </div>
        </div>
        <div className="counter">
          <Counter />
        </div>

        <div className="stu-360 sm:w-full w-[95%]  sm:h-[50vh] h-max sm:flex rounded-[10px] my-14 m-auto sm:m-0 sm:my-28 lg:my-10 ">
          <div className="stu-360-l sm:w-[60%] h-full px-5 py-8   sm:p-16 flex flex-col sm:item-center sm:justify-center">
            <h1 className="sm:text-4xl text-4xl font-bold ">
              Join Student 360* Program
            </h1>
            <p className="mt-3 sm:text-base text-[20px]">
              Students Aspiration to become Doctor, Engineer could be fullfilled
              with our{" "}
              <span className="text-lg font-semibold">Student 360*</span>{" "}
              program
            </p>
            <p className="bg-[#FFAD17] text-white rounded-xl font-semibold md:w-full lg:w-1/2 sm:w-1/2 text-center sm:text-lg md:text-2xl lg:text-lg text-xl  sm:px-16 sm:py-3 md:py-6 lg:py-3 py-4 mt-5">
              Join Now
            </p>
          </div>
          <div className="stu-360-r sm:w-[40%] w-full h-full flex items-center justify-center py-5 right-2 sm:right-0 ">
            <img
              className="sm:w-[90%] w-[80%] h-full"
              src="https://www.ingeniux.com/Images/Landing%20Pages/360%20Success/360-overview.png"
              alt="360 img"
            />
          </div>
        </div>

        <div className="productSection mt-14">
          <ProductSection />
        </div>
        <CtaSection />
        <h1 className="sm:h-[50px] mt-[10%]  sm:text-4xl text-3xl sm:mt-0 text-center font-bold text-[#fff]">
          Students{" "}
          <lord-icon
            src="https://cdn.lordicon.com/igciyimj.json"
            trigger="hover"
            style={{ width: "50px", height: "50px" }}
          ></lord-icon>{" "}
          GrowSharp
        </h1>
        <TestimonialSection />

        <Logolist />

        {/* JoinUs button */}
        <div className="join-us w-full  h-16 flex items-center  sm:mb-24 xl:mb-6 mb-[10%] justify-center ">
          <span className="flex items-center justify-center sm:gap-5 gap-3">
            <NavLink to="/joinus">
              <button className="bg-[#FFAD17] text-white rounded-xl text-lg font-semibold w-[135px] sm:w-max  sm:px-16 py-3">
                Join US
              </button>
            </NavLink>
            <p className="text-xl font-semibold text-white">
              To Make Partner with us !
            </p>
          </span>
        </div>

        <h1 className="sm:h-[100px] w-[95%] m-auto sm:text-4xl text-3xl text-center justify-center flex flex-col gap-2 mb-4 font-bold text-[#fff]">
          Frequently Asked Question
          <p className="text-lg font-medium">
            Find some common questions to answer about Carrer Counsiling &
            GrowSharpo's services.
          </p>
        </h1>
        <FaqSection />

        <h1 className="h-[100px]  w-[95%] m-auto sm:text-4xl text-3xl text-center justify-center flex flex-col gap-2 mb-1 font-bold text-[#fff]">
          Contact Us
          <p className="text-lg font-medium sm:font-semibold">
            Have any questions ? Feel free to reach out us.
          </p>
        </h1>
        <ContactUs />
      </div>
    </>
  );
}

export default HomePage;
