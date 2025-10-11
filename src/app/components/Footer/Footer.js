import Image from "next/image";
import React from "react";
import "../../../app/globals.css";
import { FaGithub } from "react-icons/fa";
import "./styles.css";

const Footer = () => {
  return (
    <>
      <footer className="footer w-full bg-[rgb(43,43,43)] bg-opacity-50 text-white py-6 mt-10">
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4">
          <div className="footerText hover:cursor-pointer text-white text-lg sm:text-xl font-medium text-center md:text-left">
            <a
              href="https://prathameshdev.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white rounded-full transition-all duration-300 hover:opacity-70"
            >
              prathameshdev.vercel.app
            </a>
          </div>
          <div className="flex items-center justify-center space-x-4">
            {/* GitHub */}
            <a
              href="https://github.com/prathamesh-borse"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white rounded-full transition-all duration-300 hover:opacity-70"
            >
              <FaGithub size={28} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/prathameshborse/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white rounded-lg transition-all duration-300 hover:opacity-70"
            >
              <Image
                src="/assets/linkedin.svg"
                alt="Linkedin Icon"
                width={28}
                height={28}
              />
            </a>

            {/* Twitter/X */}
            <a
              href="https://x.com/imprathamesh01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white rounded-full transition-all duration-300 hover:opacity-70"
            >
              <Image
                src="/assets/twitter-icon.webp"
                alt="Linkedin Icon"
                width={28}
                height={28}
              />
            </a>

            {/* Medium */}
            <a
              href="https://medium.com/@prathameshborse"
              target="_blank"
              rel="noopener noreferrer"
              className="mediumIcon text-white p-1 rounded-lg transition-all duration-300 hover:opacity-70 medium-icon"
            >
              <Image
                src="/assets/medium-icon.svg"
                alt="Medium Icon"
                width={28}
                height={28}
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
