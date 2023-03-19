import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Fiverr-Logo.png";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  function toggleRotation() {
      setIsRotated(!isRotated);
      setIsDropdownVisible(!isDropdownVisible);
    }

    function hideDropdown() {
      setIsDropdownVisible(false);
      setIsRotated(false)
    }

  let activeStyle = {
    color: "#1DBF73",
    fontWeight: "600",
  };

  const menuItem = (
    <>
      <li>
        <NavLink
          to="/"
          className="hover:bg-[#F7F7F7F7] hover:text-black px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className="hover:bg-[#F7F7F7F7] hover:text-black px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={toggleRotation}
          to="/"
          className="hover:bg-[#F7F7F7F7] hover:text-black px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm flex justify-between items-center relative"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <span className="">My Business </span>
          <span>
            <RiArrowDropDownLine
              className={`w-6 h-6 ${isRotated ? "rotate-180" : ""}`}
            />
          </span>
        </NavLink>
        {isDropdownVisible && (
          <div className="absolute top-full left-0 right-0 bg-white shadow">
            <ul>
              <li>
                <NavLink
                  onClick={hideDropdown}
                  to="/"
                  className="hover:bg-[#F7F7F7F7] hover:text-black px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={hideDropdown}
                  to="/"
                  className="hover:bg-[#F7F7F7F7] hover:text-black px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Home
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </li>
      <li>
        <NavLink
          to="/analytics"
          className="hover:bg-[#F7F7F7F7] hover:text-black px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Analytics
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Contact"
          className="hover:bg-[#F7F7F7F7] hover:text-black px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-[#FFFFFF]">
      <div class="py-3 max-w-screen-xl w-11/12 mx-auto">
        <div class="relative flex items-center justify-between">
          <NavLink to="/">
            <img className="w-24" src={Logo} alt="" />
          </NavLink>
          <ul class="flex items-center hidden space-x-8 lg:flex">{menuItem}</ul>
          <ul class="flex items-center hidden space-x-8 lg:flex">
            <li>
              <button className="hover:bg-[#1DBF73] border border-[#1DBF73] px-3 py-2 hover:font-[500] text-[#1DBF73] hover:text-[#FFFFFF] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-sm">
                Get Started
              </button>
            </li>
          </ul>
          <div class="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div class="absolute top-0 left-0 w-full">
                <div class="p-5 bg-white border rounded shadow-sm">
                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <NavLink to="/">
                        <img className="w-24" src={Logo} alt="" />
                      </NavLink>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class="space-y-4">
                      {menuItem}
                      <li>
                        <button className="hover:bg-[#1DBF73] border border-[#1DBF73] px-3 py-2 hover:font-[500] text-[#1DBF73] hover:text-[#FFFFFF] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-sm">
                          Get Started
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
