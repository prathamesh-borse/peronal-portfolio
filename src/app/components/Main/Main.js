import { FaGithub } from "react-icons/fa";
import { Github } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { useGlobalContext } from "../../context/GlobalContext";
import {
  LazyMotion,
  domAnimation,
  m,
  delay,
  motion,
  useInView,
} from "framer-motion";
import { Analytics } from "@vercel/analytics/next";
import "../../globals.css";

const Main = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, margin: "-100px" });
  const { isClick } = useGlobalContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Function to scroll to the bottom smoothly
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        ref={ref}
        className="flex items-center justify-center text-white mt-70 sm:mt-40 md:mt-70 lg:mt-56 xl:mt-64 transition-opacity duration-300"
      >
        <div className="flex flex-col items-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Start hidden and move up
            animate={isInView ? { opacity: 1, y: 0 } : {}} // Fade in and move to original position
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center space-x-1 text-white text-2xl">
              <span className="hero">Hello</span>
              <Image
                src="/assets/Hello.avif"
                alt="Waving Hand"
                width={50}
                height={70}
                loading="eager"
                sizes="80px"
                priority={false}
                className="waving-hand"
              />
              ,<span className="hero px-2">I&apos;m</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }} // Start hidden and move up
            animate={isInView ? { opacity: 1, y: 0 } : {}} // Fade in and move to original position
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="hero items-center space-x-1 text-white text-4xl font-semibold mb-2">
              Prathamesh Borse
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Start hidden and move up
            animate={isInView ? { opacity: 1, y: 0 } : {}} // Fade in and move to original position
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <div className="items-center text-[#00c2cb] font-medium mb-2">
              {mounted ? (
                <TypeAnimation
                  cursor={false}
                  sequence={[
                    "Full Stack Developer",
                    1000,
                    "Backend Developer",
                    1000,
                    "Wordpress Developer",
                    1000,
                    "Frontend Developer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={40}
                  style={{
                    fontSize: "1.5em",
                    display: "inline-block",
                    textTransform: "uppercase",
                  }}
                  repeat={Infinity}
                />
              ) : (
                <span
                  style={{
                    fontSize: "1.5em",
                    display: "inline-block",
                    textTransform: "uppercase",
                  }}
                >
                  Full Stack Developer
                </span>
              )}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Start hidden and move up
            animate={isInView ? { opacity: 1, y: 0 } : {}} // Fade in and move to original position
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <div className="items-center space-x-1 text-white font-medium text-xl font-medium">
              <span className="hero">3+ Years of Experience</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Start hidden and move up
            animate={isInView ? { opacity: 1, y: 0 } : {}} // Fade in and move to original position
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          >
            <div className="flex items-center space-x-2 mt-2">
              {/* GitHub */}
              <a
                href="https://github.com/prathamesh-borse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white p-1 rounded-full transition-all duration-300 hover:opacity-70"
              >
                <Github size={38} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/prathameshborse/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white p-1 rounded-lg transition-all duration-300 hover:opacity-70"
              >
                <Image
                  src="/assets/linkedin.svg"
                  alt="Linkedin Icon"
                  width={50}
                  height={30}
                />
              </a>

              {/* Twitter/X */}
              <a
                href="https://x.com/imprathamesh01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white p-1 rounded-full transition-all duration-300 hover:opacity-70"
              >
                <Image
                  src="/assets/twitter-icon.webp"
                  alt="Linkedin Icon"
                  width={45}
                  height={30}
                />
              </a>
              {/* Medium */}
              {!isClick && (
                <a
                  href="https://medium.com/@prathameshborse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mediumIcon text-white p-1 rounded-lg transition-all duration-300 hover:opacity-70 medium-icon"
                >
                  <Image
                    src="/assets/medium-icon.svg"
                    alt="Medium Icon"
                    width={45}
                    height={30}
                  />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }} // Start hidden and move up
        animate={isInView ? { opacity: 1, y: 0 } : {}} // Fade in and move to original position
        transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
      >
        {!isClick && (
          <div
            onClick={scrollToBottom}
            className="xs:mt-80 sm:mt-83 md:mt-50 mt-30 text-white text-lg font-medium cursor-pointer animate-bounce flex flex-row items-center justify-center gap-1 hover:text-[#00C2CB]"
          >
            <Image
              src="/assets/mouse-icon.png"
              alt="Mouse Icon"
              width={30}
              height={100}
              className="mouseIcon"
            />
            <span className="hero">Scroll Down</span>
          </div>
        )}
      </motion.div>
      <Analytics />
    </>
  );
};

export default Main;
