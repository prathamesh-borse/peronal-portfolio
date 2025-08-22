import Image from "next/image";
import React from "react";
import "../../../app/globals.css";
import { FaGithub } from "react-icons/fa";
import "./styles.css";

const Footer = () => {
  return (
    <>
      <footer className="footer w-full bg-[rgb(43,43,43)] bg-opacity-50 text-white min-h-[80px] flex items-center justify-center mt-17">
        <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center">
          <div className="footerText text-white text-2xl font-medium">
            www.prathameshborse.com
          </div>
          <div className="flex items-center space-x-1 mt-2 mb-3">
            {/* GitHub */}
            <a
              href="https://github.com/prathamesh-borse"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white rounded-full transition-all duration-300 hover:opacity-70"
            >
              <FaGithub size={30} />
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
                width={35}
                height={30}
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
                width={31}
                height={30}
              />
            </a>

            {/* Medium */}
            <a
              href="https://medium.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="mediumIcon text-white p-1 rounded-lg transition-all duration-300 hover:opacity-70 medium-icon"
            >
              <Image
                src="/assets/medium-icon.svg"
                alt="Medium Icon"
                width={33}
                height={30}
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
