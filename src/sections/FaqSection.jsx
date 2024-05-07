import React from "react";
import { NavLink } from "react-router-dom";

function FaqSection() {
  return (
    <>
      <div className="main-faq sm:w-full w-[95%] m-auto sm:m-0 sm:mb-20 mb-[10%] xl:mb-8 ">
        <section
          className="grid grid-cols-1 p-5 gap-y-3 divide-y bg-white rounded-[10px]"
          style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
        >
          <details open className="group py-1 text-lg">
            <summary className="flex cursor-pointer flex-row items-center justify-between py-1 font-semibold text-gray-800 marker:[font-size:0px]">
              <span>What is Carrer Counsilling ?</span>
              <svg
                className="h-6 w-6 rotate-0 transform text-gray-400 group-open:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <p className="text-gray-700 text-[15px] leading-5">
              Carrer Counsiling is a process that helps to understand their
              straingth, weekness, and personality to make alert and consius
              about their carrer path
            </p>
          </details>
          <details className="group py-1 text-lg">
            <summary className="flex cursor-pointer flex-row items-center justify-between py-1 font-semibold text-gray-800 marker:[font-size:0px]">
              <span>How can Carrer Counsilling Benifits me ?</span>
              <svg
                className="h-6 w-6 rotate-0 transform text-gray-400 group-open:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <p className="text-gray-700 text-[15px] leading-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id odio
              corporis sunt, porro voluptatum ad itaque reiciendis eum quisquam
              magnam perspiciatis nisi amet delectus hic dolorem cum ipsam
              suscipit veritatis.
            </p>
          </details>
          <details className="group py-1 text-lg">
            <summary className="flex cursor-pointer flex-row items-center justify-between py-1 font-semibold text-gray-800 marker:[font-size:0px]">
              <span>What services GrowSharp offers ?</span>
              <svg
                className="h-6 w-6 rotate-0 transform text-gray-400 group-open:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <p className="text-gray-700 text-[15px] leading-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              officia expedita deserunt reprehenderit quaerat. Aliquam velit sed
              reprehenderit at atque obcaecati, provident quidem beatae tempore
              mollitia nobis adipisci enim modi.
            </p>
          </details>

          <details className="group py-1 text-lg">
            <summary className="flex cursor-pointer flex-row items-center justify-between py-1 font-semibold text-gray-800 marker:[font-size:0px]">
              <span>How do i get started ?</span>
              <svg
                className="h-6 w-6 rotate-0 transform text-gray-400 group-open:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <p className="text-gray-700 text-[15px] leading-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              officia expedita deserunt reprehenderit quaerat. Aliquam velit sed
              reprehenderit at atque obcaecati, provident quidem beatae tempore
              mollitia nobis adipisci enim modi.
            </p>
          </details>

          <details className="group py-1 text-lg">
            <summary className="flex cursor-pointer flex-row items-center justify-between py-1 font-semibold text-gray-800 marker:[font-size:0px]">
              <span>Is carrer counsilling confidential ?</span>
              <svg
                className="h-6 w-6 rotate-0 transform text-gray-400 group-open:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <p className="text-gray-700 text-[15px] leading-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              officia expedita deserunt reprehenderit quaerat. Aliquam velit sed
              reprehenderit at atque obcaecati, provident quidem beatae tempore
              mollitia nobis adipisci enim modi.
            </p>
          </details>
        </section>
    
      </div>
    </>
  );
}

export default FaqSection;
