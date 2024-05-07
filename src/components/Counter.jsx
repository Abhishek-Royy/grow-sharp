import React from "react";
import "../stylesheets/counter.css";



function Counter() {
  return (
    <div>
      <div className="counter-box bg-[#c9fffa]  py-10 sm:w-full  w-[95%] m-auto sm:m-0">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="flex sm:gap-x-8 gap-x-6 gap-y-16 text-center">
            <div className="mx-auto flex max-w-xs flex-col sm:gap-y-4">
              <dt className="text-base sm:leading-7 leading-4 text-[#484175]">
                Students Impacted
              </dt>

              <dd className="order-first text-2xl font-semibold sm:tracking-tight tracking-tighter text-[#484175] sm:text-5xl">
                2.5 million
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base sm:leading-7 leading-4 text-[#484175]">
                Educators Certified
              </dt>
              <dd className="order-first text-2xl font-semibold tracking-tight text-[#484175] sm:text-5xl">
                51,000
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base sm:leading-7 leading-4 text-[#484175]">
                Partner Schools
              </dt>
              <dd className="order-first text-2xl font-semibold tracking-tight text-[#484175] sm:text-5xl">
                250+
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base sm:leading-7 leading-4 text-[#484175]">
                University Partners
              </dt>
              <dd className="order-first text-2xl font-semibold tracking-tight text-[#484175] sm:text-5xl">
                50+
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Counter;
