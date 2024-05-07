import React from 'react'
import "../stylesheets/dropdown.css"

function Dropdown() {
  return (
    <>
      <nav className="flex justify-between items-center py-4">
      <ul className="flex">
        <li className="mr-6">
          <a
            className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
            href="#"
          >
            Competitive Exams
          </a>
          <ul className="hidden absolute top-full left-0 w-48 bg-white shadow-md py-2">
            <li>
              <a className="block px-4 py-2 text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out" href="#">
                IIT JEE
              </a>
            </li>
            <li>
              <a className="block px-4 py-2 text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out" href="#">
                NEET
              </a>
            </li>
            <li>
              <a className="block px-4 py-2 text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out" href="#">
                ESE
              </a>
            </li>
            {/* <!-- Add more list items here --> */}
          </ul>
        </li>
        <li className="mr-6">
          <a
            className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
            href="#"
          >
            Govt Exam
          </a>
          <ul className="hidden absolute top-full left-0 w-48 bg-white shadow-md py-2">
            <li>
              <a className="block px-4 py-2 text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out" href="#">
                Judiciary
              </a>
            </li>
            <li>
              <a className="block px-4 py-2 text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out" href="#">
                SSC
              </a>
            </li>
            {/* <!-- Add more list items here --> */}
          </ul>
        </li>
        {/* <!-- Add more nav items here --> */}
      </ul>
    </nav>
    </>
  )
}

export default Dropdown
