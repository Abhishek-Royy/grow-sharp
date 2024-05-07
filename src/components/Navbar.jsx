// *********  MAIN CODE ****************************************

// import React, { useState } from "react";
// import "../stylesheets/navbar.css";
// import { NavLink } from "react-router-dom";

// // import { FaAngleDown } from "react-icons/fa";

// const Navbar = () => {
//   const [dropdownVisible, setDropdownVisible] = useState(false);

//   return (
//     <>
//       <nav className="flex items-center justify-between px-[120px]">
//         <img
//           src="https://growsharpadmin.fintaxzone.com/images/logo.png"
//           alt="logo"
//           width="105px"
//         />
//         <ul className="flex list-none gap-10 text-lg font-semibold ml-[240px] text-[#000]">
//           <li>
//             <NavLink className="flex items-center justify-center gap-1" to="/">
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               className="flex items-center justify-center gap-1"
//               to="/about"
//             >
//               AboutUs
//             </NavLink>
//           </li>

//           <li
//             className="relative"
//             onMouseEnter={() => setDropdownVisible(true)}
//             onMouseLeave={() => setDropdownVisible(false)}
//           >
//             <NavLink
//               className="flex items-center justify-center gap-1"
//             >
//               Our Products
//               <lord-icon
//                 src="https://cdn.lordicon.com/xcrjfuzb.json"
//                 trigger="hover"
//                 style={{ width: "20px", height: "20px" }}
//               ></lord-icon>
//             </NavLink>
//             {dropdownVisible && (
//               <ul className="absolute top-full h-[50vh] w-[18vw] left-0  bg-white border border-gray-300 rounded-md shadow-lg py-2 mt-0">
//                 <li>
//                   <NavLink
//                     className="block px-4 py-3 text-base  text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                     to="/ourproduct/career360"
//                   >
//                     Career 360* Program
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink
//                     className="block px-4 py-3 text-base  text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                     to="/product/product1"
//                   >
//                     Growsharp student Profile scholarship exam
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink
//                     className="block px-4 py-3 text-base  text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                     to="/product/product1"
//                   >
//                     National Talent Hunt scholarship exam
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink
//                     className="block px-4 py-3 text-base  text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                     to="/product/product1"
//                   >
//                     Career webinar
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink
//                     className="block px-4 py-3 text-base  text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                     to="/product/product1"
//                   >
//                     Group Counselling
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink
//                     className="block px-4 py-3 text-base  text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                     to="/product/product1"
//                   >
//                     One to One Counselling
//                   </NavLink>
//                 </li>
//               </ul>
//             )}
//           </li>

//           <li>
//             <NavLink
//               className="flex items-center justify-center gap-1"
//               to="/blog"
//             >
//               Blog
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               className="flex items-center justify-center gap-1"
//               to="/contact"
//             >
//               Contact Us
//             </NavLink>
//           </li>
//         </ul>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

// ***************************************************************************

import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "../stylesheets/navbar.css";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

function Navbar() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    const handleMediaQueryChange = (mediaQuery) => {
      setIsSmallScreen(mediaQuery.matches);
    };
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <img
        src="https://growsharpadmin.fintaxzone.com/images/logo.png"
        className="Logo"
        alt="Company Logo"
      />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav md:gap-1 ">
          <button onClick={toggleNav}>
            <NavLink className="flex items-center justify-center gap-1" to="/">
              Home
            </NavLink>
          </button>
          <button onClick={toggleNav}>
            {" "}
            <NavLink
              className="flex items-center justify-center gap-1"
              to="/about"
            >
              AboutUs
            </NavLink>
          </button>
          <button
            onClick={toggleNav}
            className="relative"
            onMouseEnter={() => setDropdownVisible(true)}
            onMouseLeave={() => setDropdownVisible(false)}
          >
            <NavLink className="flex items-center justify-center gap-1">
              Our Products
              <lord-icon
                src="https://cdn.lordicon.com/xcrjfuzb.json"
                trigger="hover"
                style={{ width: "20px", height: "20px" }}
              ></lord-icon>
            </NavLink>
            {dropdownVisible && (
              <ul className="absolute top-full h-[50vh] w-[18vw] left-0  bg-white border border-gray-300 rounded-md shadow-lg py-2 mt-0">
                <li>
                  <NavLink
                    className="block px-4 py-3 text-base  text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    to="/ourproduct/career360"
                  >
                    Career 360* Program
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="block px-4 py-3 text-base  text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    to="/product/product1"
                  >
                    Growsharp student Profile scholarship exam
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="block px-4 py-3 text-base  text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    to="/product/product1"
                  >
                    National Talent Hunt scholarship exam
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="block px-4 py-3 text-base  text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    to="/product/product1"
                  >
                    Career webinar
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="block px-4 py-3 text-base  text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    to="/product/product1"
                  >
                    Group Counselling
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="block px-4 py-3 text-base  text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    to="/product/product1"
                  >
                    One to One Counselling
                  </NavLink>
                </li>
              </ul>
            )}
          </button>
          <button onClick={toggleNav}>
            <NavLink
              className="flex items-center justify-center gap-1"
              to="/blog"
            >
              Blog
            </NavLink>
          </button>
          <button onClick={toggleNav}>
            <NavLink
              className="flex items-center justify-center gap-1"
              to="/contact"
            >
              Contact Us
            </NavLink>
          </button>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        <IoMenu />
      </button>
    </header>
  );
}

export default Navbar;
