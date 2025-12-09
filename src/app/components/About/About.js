import Image from "next/image";
import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useGlobalContext } from "../../context/GlobalContext";
import { Analytics } from "@vercel/analytics/next";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, margin: "-100px" });
  const { isClick } = useGlobalContext();

  return (
    <>
      <div
        id="about"
        className="h-screen flex items-center justify-center text-white mt-50"
      >
        <div
          ref={ref}
          className="flex flex-col md:flex-row items-center justify-content min-h-screen text-white"
        >
          <div className="flex w-full md:w-1/2 p-10 items-center">
            <div className="flex flex-col ml-10">
              <motion.div
                initial={{ opacity: 0, x: -50 }} // Start hidden and 50px to the left
                animate={isInView ? { opacity: 1, x: 0 } : {}} // Move to normal position
                transition={{ duration: 0.8 }}
              >
                <span className="text-[#00c2cb] text-3xl font-semibold">
                  About Me
                </span>
              </motion.div>
              {!isClick && (
                <motion.div
                  initial={{ opacity: 0, x: -50 }} // Start hidden and 50px to the left
                  animate={isInView ? { opacity: 1, x: 0 } : {}} // Move to normal position
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  <p className="tex-white text-lg pb-3 mt-5">
                    Hi there! I&apos;m Prathamesh, a website developer with a
                    passion for creating custom online experiences. With a skill
                    set including HTML, CSS, JavaScript, and React, I have the
                    tools to bring any website vision to life.
                  </p>
                </motion.div>
              )}
              {!isClick && (
                <motion.div
                  initial={{ opacity: 0, x: -50 }} // Start hidden and 50px to the left
                  animate={isInView ? { opacity: 1, x: 0 } : {}} // Move to normal position
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <p className="tex-white text-lg pb-3">
                    But my services go beyond just custom development - I&apos;m
                    also proficient in using CMS systems like WordPress, making
                    it easy for my clients to take control of their own websites
                    and keep them up to date.
                  </p>
                </motion.div>
              )}
              {!isClick && (
                <motion.div
                  initial={{ opacity: 0, x: -50 }} // Start hidden and 50px to the left
                  animate={isInView ? { opacity: 1, x: 0 } : {}} // Move to normal position
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <p className="tex-white text-lg pb-3">
                    So if you&apos;re in need of a new website or just looking
                    to revamp your current online presence, I&apos;d love to
                    chat and see how I can help. Let&apos;s bring your website
                    dreams to reality together!
                  </p>
                </motion.div>
              )}
              {/* Skills moved to a dedicated section */}
            </div>
          </div>
          {!isClick && (
            <motion.div
              initial={{ opacity: 0, x: 50 }} // Start hidden and 50px to the right
              animate={isInView ? { opacity: 1, x: 0 } : {}} // Move to normal position
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Main image container */}
              <div className="relative ml-30">
                {/* Decorative border */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#00c2cb] to-purple-500 rounded-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Image wrapper with glassmorphism effect */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/10">
                  <Image
                    src="/assets/developer.png"
                    alt="Developer Image"
                    width={350}
                    height={350}
                    className="rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />

                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00c2cb]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Floating accent elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#00c2cb] rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
      <Analytics />
    </>
  );
};

export default About;
