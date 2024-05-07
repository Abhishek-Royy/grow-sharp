import React from "react";
import "../stylesheets/ctaSection.css";

// import { FaHandPointRight } from "react-icons/fa";

function CtaSection() {
  return (
    <>
      <div className="main-div sm:w-full w-[95%] sm:h-auto h-auto md:h-max xl:mt-12 xl:mb-10 lg:h-auto sm:my-28 m-auto mt-[11%] md:block lg:flex sm:flex ">
        <div className="md-l md:w-full lg:w-[70%] sm:w-[70%] w-full h-full sm:py-8 px-5 py-8">
          <h1 className="sm:text-3xl text-4xl font-semibold sm:w-[85%] text-[#2a2646]">
            Join our GrowSharp ecosystem SigningUp on app now..!
          </h1>

          <ul className="mt-5 sm:pl-3 pl-1">
            <li className="my-3">
              <span className="font-semibold">Personalized Growth: </span>Gain
              inside into academic standing and carrer aspirations through the
              Student Profile, aligning education with figure goals.
            </li>
            <li className="my-3">
              <span className="font-semibold">Expert Guidance: </span>Recived
              tailored carrer counsiling from industry professional, aiding in
              identifying strengths, weeknesses, and setting clear carrer
              objectives
            </li>
            <li className="my-3">
              <span className="font-semibold">Nationwide Exposure: </span>
              Complete on a national scale, connecting with peers and experts
              from diverse backgrounds, enhancing learning and networking
              opportunaties.
            </li>
            <li className="my-3">
              <span className="font-semibold">Scholarship Opportunities: </span>
              Unlock rewards and scholarship based on performance of Student
              profule exam, recognizing and incentivizing accademic acchivement.
            </li>
            <li className="my-3">
              <span className="font-semibold">Holistic Development: </span>
              Develop resilience, self-awareness, and essential life skills
              through comprehesive support, preparing for sucess in both
              accademic and professional shpheres.
            </li>
          </ul>
          <div className="flex w-full  right-2 sm:right-0 justify-between  items-center sm:justify-start h-[8vh]">
            <img
              className="ab-qr sm:w-[20%]  h-full cursor-pointer"
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="play"
            />
            <img
              className=" bc-qr sm:w-[17%] w-full h-[66%] cursor-pointer"
              src="https://www.pikpng.com/pngl/b/506-5064409_apple-ios-download-on-apple-store-clipart.png"
              alt="apple"
            />
          </div>
        </div>
        <div className="md-r md:w-1/2 md:m-auto lg:w-[30%] w-full h-full  flex items-center justify-center flex-col md:pb-8 pb-8 lg:pb-0 sm:pb-0">
          <img
            className="w-[80%] h-[60%]"
            src="https://pngimg.com/d/qr_code_PNG33.png"
            alt="company-QR"
          />
          <p className="bg-[#FFAD17] sm:w-[60%] w-[70%] text-white font-semibold sm:py-3 py-4 text-center text-lg rounded-lg">
            Scan it to Download
          </p>
        </div>
      </div>
    </>
  );
}

export default CtaSection;
