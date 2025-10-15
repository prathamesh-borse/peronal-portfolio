"use client";
/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import { Analytics } from "@vercel/analytics/next";

const Navbar = () => {
  const { isClick, toggleNavbar } = useGlobalContext();
  // const [isClick, setIsClick] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    if (savedMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (isClick) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isClick]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape" && isClick) {
        toggleNavbar();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isClick, toggleNavbar]);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
    document.documentElement.classList.toggle("dark", newMode);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-opacity-60 backdrop-blur-md mb-30"
        aria-label="Primary"
      >
        <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="text-white text-2xl font-bold ml-3">
                  {" Prathamesh "}
                </a>
              </div>
            </div>
            <div
              className="hidden md:flex space-x-5 text-1xl uppercase pt-5"
              role="navigation"
              aria-label="Primary links"
            >
              {/* Dark Mode Toggle */}
              <div className="mr-2 mt-2">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="cursor-pointer sr-only peer"
                    checked={darkMode}
                    onChange={toggleDarkMode}
                  />
                  <div className="w-14 h-7 bg-[#00C2CB] rounded-full peer-checked:bg-pink-500 peer transition-all duration-300 cursor-pointer"></div>
                  <span className="absolute left-2 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></span>
                </label>
              </div>
              <a
                href="/"
                className="text-white hover:opacity-70 rounded-lg px-2 py-2 transition-all duration-300"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-white hover:opacity-70 rounded-lg px-2 py-2 transition-all duration-300"
              >
                About Me
              </a>
              <a
                href="#projects"
                className="text-white hover:opacity-70 rounded-lg px-2 py-2 transition-all duration-300"
              >
                Project
              </a>
              <a
                href="#contact"
                className="text-white hover:opacity-70 rounded-lg px-2 py-2 transition-all duration-300"
              >
                Contact
              </a>
              <a
                href="/assets/Prathamesh_Frontend_Developer_Resume.pdf"
                target="_blank"
                className="h-10 w-30 text-white bg-[#00C2CB] hover:bg-[#00C2CB] hover:text-white hover:opacity-70 rounded-full px-6 py-2 transition-all duration-300"
              >
                Resume
              </a>
            </div>
            <div className="md:hidden flex items-center mr-2">
              {/* Dark Mode Toggle */}
              <div className={`mr-2 mt-2 ${isClick ? "hidden" : ""}`}>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="cursor-pointer sr-only peer"
                    checked={darkMode}
                    onChange={toggleDarkMode}
                  />
                  <div className="w-14 h-7 bg-[#00C2CB] rounded-full peer-checked:bg-pink-500 peer transition-all duration-300"></div>
                  <span className="absolute left-2 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></span>
                </label>
              </div>
              <button
                className="menubar rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white"
                onClick={toggleNavbar}
                aria-expanded={isClick}
                aria-controls="mobile-menu"
                aria-label="Toggle navigation"
              >
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isClick && (
          <div
            id="mobile-menu"
            className="fixed top-0 left-0 w-full h-screen z-[999] bg-[#00c2cb] flex flex-col items-center justify-center space-y-6"
            role="dialog"
            aria-modal="true"
          >
            <button
              className="absolute top-4 right-4 text-white"
              onClick={toggleNavbar}
              aria-label="Close navigation"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <a
              href="/"
              onClick={toggleNavbar}
              className="text-black hover:opacity-70 rounded-lg px-3 py-2 transition-all duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={toggleNavbar}
              className="text-black hover:opacity-70 rounded-lg px-3 py-2 transition-all duration-300"
            >
              About Me
            </a>
            <a
              href="#projects"
              onClick={toggleNavbar}
              className="text-black hover:opacity-70 rounded-lg px-3 py-2 transition-all duration-300"
            >
              Project
            </a>
            <a
              href="#contact"
              onClick={toggleNavbar}
              className="text-black hover:opacity-70 rounded-lg px-3 py-2 transition-all duration-300"
            >
              Contact
            </a>
            <a
              href="/assets/Prathamesh_Frontend_Developer_Resume.pdf"
              onClick={toggleNavbar}
              className="h-10 w-30 text-white bg-pink-600 hover:bg-[#B0413E] hover:text-white hover:opacity-70 rounded-full px-7 py-2 transition-all duration-300"
            >
              Resume
            </a>
          </div>
        )}
      </nav>
      <Analytics />
    </>
  );
};

export default Navbar;
