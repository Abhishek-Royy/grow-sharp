import React from "react";

function JoinUs() {
  return (
    <>
      <div className="join-main w-full md:px-5 lg:px-[120px]  flex flex-col items-center justify-center py-20 pt-36  sm:px-[120px] bg-gradient-to-r from-[#7CADF0] to-[#6E96F8]">
        {/* <div className="container my-10 mx-auto md:px-6"> */}
        <section
          className="text-center py-10 md:w-[100%] lg:w-[60%] sm:w-[60%] w-[95%] sm:px-16 px-5 rounded-[10px] bg-white"
          style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
        >
          <div className="mx-auto  max-w-[700px] md:px-3">
            <h2 className="mb-12 text-4xl flex items-center justify-center font-bold">
              Join Us to{"  "}
              <lord-icon
                src="https://cdn.lordicon.com/kiynvdns.json"
                trigger="hover"
              ></lord-icon>{" "}
              Partner
            </h2>
            <form>
              <div className=" mb-6">
                <input
                  type="text"
                  className="peer block min-h-[auto]  w-full rounded border-2 border-zinc-400 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none "
                  id="exampleInput90"
                  placeholder="Institution Name"
                />
              </div>
              <div className=" mb-6">
                <input
                  type="email"
                  className="peer block min-h-[auto]  w-full rounded border-2 border-zinc-400 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none "
                  id="exampleInput91"
                  placeholder="Institution Type"
                />
              </div>
              <div className=" mb-6">
                <input
                  type="email"
                  className="peer block min-h-[auto]  w-full rounded border-2 border-zinc-400 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none "
                  id="exampleInput91"
                  placeholder="Mobile Number"
                />
              </div>
              <div className=" mb-6">
                <input
                  type="email"
                  className="peer block min-h-[auto]  w-full rounded border-2 border-zinc-400 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none "
                  id="exampleInput91"
                  placeholder="Email id"
                />
              </div>

              <div className=" mb-6">
                <input
                  type="email"
                  className="peer block min-h-[auto]  w-full rounded border-2 border-zinc-400 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none "
                  id="exampleInput91"
                  placeholder="City"
                />
              </div>

              <div className=" mb-6">
                <input
                  type="email"
                  className="peer block min-h-[auto]  w-full rounded border-2 border-zinc-400 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none "
                  id="exampleInput91"
                  placeholder="District"
                />
              </div>

              <div className=" mb-6">
                <input
                  type="email"
                  className="peer block min-h-[auto]  w-full rounded border-2 border-zinc-400 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none "
                  id="exampleInput91"
                  placeholder="State"
                />
              </div>

              <button
                type="submit"
                className="mb-6 inline-block bg-[#FFAD17] w-full rounded bg-primary px-6 py-4 text-xs uppercase leading-normal text-white font-semibold "
              >
                Submit
              </button>
            </form>
          </div>
        </section>
        {/* </div> */}
      </div>
    </>
  );
}

export default JoinUs;
