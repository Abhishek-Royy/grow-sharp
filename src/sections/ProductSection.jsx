import React from "react";
import "../stylesheets/productsection.css";

import { FaCaretRight } from "react-icons/fa";

// import { FaHandPointDown } from "react-icons/fa";

import ImageSlider from "./ImageSlider";

function ProductSection() {
  return (
    <>
      <div className="main w-full">
        <div className="container w-full text-white">
          
          <div className="benifits w-full h-auto md:block lg:flex  sm:flex sm:gap-8">
            <div className="benifit-left md:w-full lg:w-[55%]  sm:w-[55%] w-[95%] m-auto sm:m-0 h-max  sm:p-10 px-5 py-8">
              <div className="bl-text w-full ">
              <h2 className="mb-3 sm:text-3xl text-4xl  text-black font-semibold">
              Unravelling the GrowSharp Student Profile Exam
                </h2>
                <p className="text-black text-[17px]">
                  The{" "}
                  <span className="font-semibold">
                    GrowSharp Student Profile Exam
                  </span>{" "}
                  is a pioneering initiative in India, designed to assist
                  students in aligning their education and personality with
                  their career objectives. This comprehensive exam encompasses
                  academic assessments alongside a uniquely crafted psychometric
                  evaluation.
                </p>
              </div>
              <p className=" p1-btn  text-[#484175] text-center flex items-center gap-2 justify-start text-2xl font-semibold my-5">
                Key Benifits{" "}
                <lord-icon
                  src="https://cdn.lordicon.com/xcrjfuzb.json"
                  trigger="hover"
                  style={{ width: "28px", height: "28px" }}
                ></lord-icon>
              </p>

              <ul className="text-black">
                <li className="flex my-3 gap-2 text-wrap">
                  <FaCaretRight />
                  Gain insights into your academic standing at district, state,
                  and national levels.
                </li>
                <li className="flex my-3 gap-2 text-wrap">
                  <FaCaretRight />
                  Compete with peers from across states and schools on a
                  nationwide scale.
                </li>
                <li className="flex my-3 gap-2 text-wrap">
                  <FaCaretRight />
                  Develop and refine your student profile over time, aligning
                  your personality traits with your career aspirations.
                </li>
                <li className="flex my-3 gap-2 text-wrap">
                  <FaCaretRight />
                  Unlock exciting rewards and scholarships based on your
                  performance.
                </li>
              </ul>
            </div>
            <div className="benifit-right mt-12 sm:mt-0 md:w-full lg:w-[45%] sm:w-[45%] w-[95%] m-auto sm:m-0 h-max sm:p-10 md:my-[10%] lg:my-0 px-5 py-8">
              <div className="bl-text w-full ">
                <h2 className="mb-3 sm:text-3xl text-4xl text-black font-semibold">
                  Nationwide Talent Hunt Exam
                </h2>
                <p className="text-black text-[17px]">
                  Discover the National Talent Hunt Exam, a meticulously curated
                  national-level assessment tailored for students specializing
                  in key subjects such as mathematics, English, social studies,
                  science, and logical reasoning.
                </p>
              </div>
              <p className=" p1-btn  text-[#484175] text-center flex items-center gap-2 justify-start text-2xl font-semibold my-5">
                Key Benifits{" "}
                <lord-icon
                  src="https://cdn.lordicon.com/xcrjfuzb.json"
                  trigger="hover"
                  style={{ width: "28px", height: "28px" }}
                ></lord-icon>
              </p>

              <ul className="text-black w-full ">
                <li className="flex my-3 gap-2 text-wrap">
                  <FaCaretRight />
                  Proficiency Showcase: Boosts confidence by demonstrating
                  skills in various subjects.
                </li>
                <li className="flex my-3 gap-2 text-wrap">
                  <FaCaretRight />
                  National-Level Benchmarking: Compares abilities with peers
                  across the country.
                </li>
                <li className="flex my-3 gap-2 text-wrap">
                  <FaCaretRight />
                  Quality Content: Engages students with high-quality,
                  educator-curated material.
                </li>
                <li className="flex my-3 gap-2 text-wrap">
                  <FaCaretRight />
                  Platform for Potential: Opens doors to scholarships and
                  mentorship programs.
                </li>
                <li className="flex my-3 gap-2 text-wrap">
                  <FaCaretRight />
                  Personal Growth: Encourages excellence and critical thinking,
                  fostering development.
                </li>
              </ul>
            </div>
          </div>

          <div className="carrer-talk sm:w-full w-[95%]  h-auto sm:flex sm:mt-5 mt-[10%] xl:mt-[5%] md:mt-[4%] lg:mt-28 m-auto  text-black">
            <div className="ct-l  md:p-0 lg:p-10  sm:w-1/2 h-full sm:p-10 flex items-center justify-center">
              <img
                src="https://static.vecteezy.com/system/resources/previews/010/872/643/original/3d-educational-webinar-illustration-png.png"
                alt="weinars"
              />
            </div>
            <div className="ct-r sm:w-1/2 w-full h-full sm:p-10 px-5 pb-8">
              <h2 className="sm:text-3xl text-4xl font-semibold mb-3">
                Carrer Talks / Webinars
              </h2>
              <p className="text-[17px]">
                Connecting students within our network of Industry Experts, IIT,
                IIM, AIMS and other top institute graduates. Objective is to
                Inspire and guide students to achieve their dreams and provide
                insights into the qualities and mindset necessary for success.
              </p>
              <p className=" p1-btn  text-[#484175] text-center flex items-center gap-2 justify-start text-2xl font-semibold my-5">
                Key Benifits{" "}
                <lord-icon
                  src="https://cdn.lordicon.com/xcrjfuzb.json"
                  trigger="hover"
                  style={{ width: "28px", height: "28px" }}
                ></lord-icon>
              </p>
              <ul className="text-black w-full h-[28vh] overflow-y-scroll">
                <li className=" my-3 gap-2">
                  <span className="font-semibold">
                    Inspiration and Guidance:
                  </span>{" "}
                  Students learn from successful individuals, understanding what
                  drives achievement.
                </li>
                <li className=" my-3 gap-2">
                  <span className="font-semibold">
                    Self-awareness and Growth:{" "}
                  </span>
                  Discover essential qualities like perseverance, adaptability,
                  and resilience for personal development.
                </li>
                <li className="my-3 gap-2">
                  <span className="font-semibold">
                    Resilience and Learning:{" "}
                  </span>
                  Resilience and Learning: Strategies teach students to bounce
                  back from setbacks and turn failures into opportunities.
                </li>
                <li className="my-3 gap-2">
                  <span className="font-semibold">
                    Confidence and Competence:{" "}
                  </span>
                  Tips on developing a growth mindset and self-confidence foster
                  competence.
                </li>
                <li className="my-3 gap-2">
                  <span className="font-semibold">Avoidance of Pitfalls: </span>
                  Guidance helps students identify and navigate common mistakes,
                  enhancing success prospects.
                </li>
              </ul>
            </div>
          </div>

          <div className="group-counsill sm:w-full w-[95%] m-auto sm:h-auto md:h-auto xl:h-auto lg:h-auto h-max sm:flex sm:mt-32 xl:mt-14 md:mt-20 lg:mt-32 mt-[11%]   text-black">
            <div className="gc-r sm:w-1/2 w-full h-full sm:p-10 px-5 py-8">
              <h2 className="sm:text-3xl text-4xl font-semibold mb-3">
                GrowSharp Group Counselling
              </h2>
              <p className="text-[17px]">
                Forming close-knit groups of students with shared career
                aspirations. Objective is to Cultivate interest and passion for
                chosen career paths and provide firsthand insights and guidance
                from experts in the field.
              </p>
              <p className=" p1-btn  text-[#484175] text-center flex items-center gap-2 justify-start text-2xl font-semibold my-5">
                Key Benifits{" "}
                <lord-icon
                  src="https://cdn.lordicon.com/xcrjfuzb.json"
                  trigger="hover"
                  style={{ width: "28px", height: "28px" }}
                ></lord-icon>
              </p>
              <ul className="text-black w-full">
                <li className="flex my-3 gap-2 text-wrap">
                  <FaCaretRight />
                  Gain a deeper understanding of the chosen career path.
                </li>
                <li className="flex my-3 gap-2 text-wrap">
                  <FaCaretRight />
                  Realistic expectations and insights into the challenges and
                  rewards.
                </li>
                <li className="flex my-3 gap-2 text-wrap">
                  <FaCaretRight />
                  Networking opportunities with peers
                </li>
                <li className="flex my-3 gap-2 text-wrap">
                  <FaCaretRight />
                  Inspires students to pursue their goals with passion and
                  determination.
                </li>
                <li className="flex my-3 gap-2 text-wrap">
                  <FaCaretRight />
                  Empowers students with the knowledge and resources needed for
                  success.
                </li>
              </ul>
            </div>
            <div className="gc-l sm:w-1/2 h-full xl:mt-16  md:p-0 lg:p-10 md:mt-56 lg:mt-0 sm:p-10 flex items-center justify-center">
              <img
                src="https://images.squarespace-cdn.com/content/v1/6106e498e188440329fddaea/1629821144054-HP14YMKRFPO3Y2OTPYI8/Individual+Therapy+Session.png"
                alt="group counsil"
              />
            </div>
          </div>

          <div className="personal-mentor sm:w-full w-[95%] sm:h-auto xl:h-auto md:h-auto lg:h-auto sm:flex sm:mt-32 mt-[11%] xl:mt-12 m-auto text-black">
            <div className="pm-l sm:w-1/2 h-full sm:p-10 md:p-0 lg:p-10 md:mt-28 lg:mt-0 flex items-center justify-center">
              <img
                src="https://png.pngtree.com/png-vector/20220923/ourmid/pngtree-office-worker-mentoring-png-image_6213642.png"
                alt="group counsil"
              />
            </div>
            <div className="gc-r sm:w-1/2 h-full sm:p-10 px-5 py-8 flex flex-col items-start justify-center">
              <h2 className="sm:text-3xl text-4xl tracking-tight sm:-tracking-normal font-semibold mb-3">
                Personalized Mentorship Sessons
              </h2>
              <p className="text-[17px]">
                Our mentorship sessions offer a{" "}
                <span className="font-semibold">
                  {" "}
                  one-on-one hand-holding support and guidance
                </span>{" "}
                experience, pairing students with experienced mentors{" "}
                <span className="font-semibold">
                  who specialize in the specific fields that is alighed to the
                  student's dream career goal.
                </span>
              </p>
              <p className="text-[17px] mt-8">
                Through these sessions, students receive personalized support
                and advice on how to improve their current academic performance,
                focusing on his/her dream career goal and overcoming any
                challenges facing towards achieving the same
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductSection;
