import Image from "next/image";
import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useGlobalContext } from "../../context/GlobalContext";

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
              <motion.div
                initial={{ opacity: 0, x: -50 }} // Start hidden and 50px to the left
                animate={isInView ? { opacity: 1, x: 0 } : {}} // Move to normal position
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="text-[#00c2cb] text-xl font-semibold pb-3">
                  Here are my main skills:
                </span>
              </motion.div>

              <div className="flex flex-wrap gap-2 flex-row items-center space-x-3 mt-3">
                {!isClick && (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }} // Start hidden and move up
                    animate={isInView ? { opacity: 1, y: 0 } : {}} // Fade in and move to original position
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      delay: 0.1,
                    }}
                  >
                    <Image
                      src="/assets/wordpress.svg"
                      alt="Waving Hand"
                      width={30}
                      height={100}
                    />
                  </motion.div>
                )}
                {!isClick && (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }} // Start hidden and move up
                    animate={isInView ? { opacity: 1, y: 0 } : {}} // Fade in and move to original position
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      delay: 0.12,
                    }}
                  >
                    <Image
                      src="/assets/react-icon.svg"
                      alt="Waving Hand"
                      width={30}
                      height={100}
                    />
                  </motion.div>
                )}
                {!isClick && (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }} // Start hidden and move up
                    animate={isInView ? { opacity: 1, y: 0 } : {}} // Fade in and move to original position
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      delay: 0.13,
                    }}
                  >
                    <Image
                      src="/assets/typescript-icon.svg"
                      alt="Waving Hand"
                      width={30}
                      height={100}
                    />
                  </motion.div>
                )}
                {!isClick && (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }} // Start hidden and move up
                    animate={isInView ? { opacity: 1, y: 0 } : {}} // Fade in and move to original position
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      delay: 0.14,
                    }}
                  >
                    <Image
                      src="/assets/node-icon.svg"
                      alt="Waving Hand"
                      width={30}
                      height={100}
                    />
                  </motion.div>
                )}
                {!isClick && (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }} // Start hidden and move up
                    animate={isInView ? { opacity: 1, y: 0 } : {}} // Fade in and move to original position
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      delay: 0.15,
                    }}
                  >
                    <Image
                      src="/assets/html-icon.svg"
                      alt="Waving Hand"
                      width={30}
                      height={100}
                    />
                  </motion.div>
                )}
                {!isClick && (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }} // Start hidden and move up
                    animate={isInView ? { opacity: 1, y: 0 } : {}} // Fade in and move to original position
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      delay: 0.16,
                    }}
                  >
                    <Image
                      src="/assets/css-icon.svg"
                      alt="Waving Hand"
                      width={30}
                      height={100}
                    />
                  </motion.div>
                )}
                {!isClick && (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }} // Start hidden and move up
                    animate={isInView ? { opacity: 1, y: 0 } : {}} // Fade in and move to original position
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      delay: 0.17,
                    }}
                  >
                    <Image
                      src="/assets/bootstrap-icon.svg"
                      alt="Waving Hand"
                      width={30}
                      height={100}
                    />
                  </motion.div>
                )}
                {!isClick && (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }} // Start hidden and move up
                    animate={isInView ? { opacity: 1, y: 0 } : {}} // Fade in and move to original position
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      delay: 0.18,
                    }}
                  >
                    <Image
                      src="/assets/js-icon.svg"
                      alt="Waving Hand"
                      width={30}
                      height={100}
                    />
                  </motion.div>
                )}
              </div>
            </div>
          </div>
          {!isClick && (
            <motion.div
              initial={{ opacity: 0, x: 50 }} // Start hidden and 50px to the right
              animate={isInView ? { opacity: 1, x: 0 } : {}} // Move to normal position
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex w-full md:w-1/2 p-10 text-[#00c2cb] items-center">
                <span className="hero text-white mb-12">Developer Image</span>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default About;
