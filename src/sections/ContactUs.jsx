import React from "react";

function ContactUs() {
  return (
    <>
      <div
        className="contact-main sm:w-full m-auto w-[95%] xl:h-max sm:h-[40vh] md:h-max lg:h-[40vh] sm:mb-20 mb-16 sm:flex rounded-[10px] bg-gradient-to-b from-[#c9fffa] to-[#fff] "
        style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
      >
        <div className="cm-l  sm:w-[40%] w-full  sm:h-full h-max px-10 ">
          <div className="email leading-5 sm:py-3 py-2">
            <div className="sec-1 flex items-center justify-start gap-2">
              <lord-icon
                src="https://cdn.lordicon.com/tmqaflqo.json"
                trigger="hover"
                colors="primary:#4bb3fd,secondary:#e88c30,tertiary:#e83a30"
              ></lord-icon>
              <p className="font-semibold text-lg sm:text-base">Email</p>
            </div>
            <p className="sm:text-[15px] text-[19px]">Send Us an Email</p>
            <p className="sm:text-[14px] text-[18px]">hello@growsharp.com</p>
          </div>

          <div className="phone leading-5 sm:py-3 py-2">
            <div className="sec-1 flex items-center justify-start gap-2">
              <lord-icon
                src="https://cdn.lordicon.com/aecbaxnc.json"
                trigger="hover"
                colors="primary:#f9c9c0,secondary:#e88c30"
              ></lord-icon>
              <p className="font-semibold text-lg sm:text-base">Phone</p>
            </div>
            <p className="sm:text-[15px] text-[19px]">Call us for assistance</p>
            <p className="sm:text-[14px] text-[18px]">+1 (555) 123-4567</p>
          </div>

          <div className="location leading-5 sm:py-3 py-2">
            <div className="sec-1 flex items-center justify-start gap-2">
              <lord-icon
                src="https://cdn.lordicon.com/iikoxwld.json"
                trigger="hover"
                colors="primary:#e88c30"
              ></lord-icon>
              <p className="font-semibold text-lg sm:text-base">Location</p>
            </div>
            <p className="sm:text-[15px] text-[19px]">Come to our Office</p>
            <p className="sm:text-[14px] text-[18px]">123 Main St. Sydney, USA</p>
          </div>
        </div>
        <div className="cm-r sm:w-[60%]">
          <iframe
            className="w-full rounded-bl-[10px] sm:rounded-tr-[10px] rounded-br-[10px] sm:rounded-bl-none sm:h-full h-[40vh]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981211.49472401!2d72.69159981249996!3d12.978129099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae161b5bb8ab2b%3A0xd9ce8443dbf706ee!2sKSR%20Bengaluru%20City%20Junction%20(Bangalore)!5e0!3m2!1sen!2sin!4v1714661170589!5m2!1sen!2sin"
            width="400"
            height="300"
            // style={{ border: "0", borderRadius: "0 10px 10px 0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </>
  );
}

export default ContactUs;
