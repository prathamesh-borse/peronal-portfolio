import Image from "next/image";
import React, { useRef } from "react";
import "./styles.css";
import { motion, useInView } from "framer-motion";

const MyProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, margin: "-100px" });

  return (
    <>
      <div ref={ref} id="projects" className="text-white min-h-screen">
        <h3 className="text-center text-[#00c2cb] text-3xl font-semibold mt-12 mb-8">
          My Projects
        </h3>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10 text-white mr-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="hover:-translate-y-1 hover:bg-pink-600 hover:opacity-100 transition-all duration-300  bg-[rgb(43,43,43)] rounded-lg p-5 flex items-center justify-center">
              <div className="flex flex-col text-left">
                <div className="flex flex-row items-center justify-between mb-5">
                  <div id="logos" className="flex items-center justify-between">
                    <svg
                      width="40"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00c2cb"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <title>Folder</title>{" "}
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
                    </svg>
                  </div>
                  <div className="flex items-center">
                    <a
                      href="https://github.com/prathamesh-borse/Library-Management-System"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" cursor-pointer text-white p-1 rounded-full transition-all duration-300 hover:opacity-70"
                    >
                      <Image
                        src="/assets/github-icon.svg"
                        alt="Github Icon"
                        width={50}
                        height={30}
                        className="filter-sky transition-all duration-300 hover:filter-none"
                      />
                    </a>
                  </div>
                </div>
                <span className="text-white text-xl font-semibold mb-8">
                  Library Management System
                </span>
                <span className="text-white text-base font-medium mb-8">
                  Developed a Library Management System using Java, MySQL
                  Database, JFrame, enabling users/librarian to store the
                  information about the books, and check the inventory of all
                  books, remove book, check all staff records.
                </span>

                <div className="opacity-40 font-medium flex tex-white mt-8">
                  <span className="mr-5">Java</span>
                  <span className="mr-5">MySQL Database</span>
                  <span className="mr-5">JFrame</span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="hover:-translate-y-1 hover:bg-pink-600 hover:opacity-100 transition-all duration-300  bg-[rgb(43,43,43)] rounded-lg p-5 flex items-center justify-center">
              <div className="flex flex-col text-left">
                <div className="flex flex-row items-center justify-between mb-5">
                  <div id="logos" className="flex items-center justify-between">
                    <svg
                      width="40"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00c2cb"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <title>Folder</title>{" "}
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
                    </svg>
                  </div>
                  <div className="flex items-center space-x-1 ">
                    <a
                      href="https://prathamesh-borse.github.io/Bootstrap_4_Responsive_Website/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer text-white p-1 rounded-full transition-all duration-300 hover:opacity-70 mb-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-12 h-12 fill-[#00C2CB]"
                      >
                        <path d="M14 3h7v7h-2V5.41l-9.29 9.3l-1.42-1.42l9.3-9.29H14V3M5 5h7v2H5v12h12v-7h2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
                      </svg>
                    </a>
                    <a
                      href="https://github.com/prathamesh-borse/Bootstrap_4_Responsive_Website"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer text-white p-1 rounded-full transition-all duration-300 hover:opacity-70"
                    >
                      <Image
                        src="/assets/github-icon.svg"
                        alt="Github Icon"
                        width={50}
                        height={30}
                        className="filter-sky transition-all duration-300 hover:filter-none"
                      />
                    </a>
                  </div>
                </div>
                <span className="text-white text-xl font-semibold mb-8">
                  Responsive Travel Website
                </span>
                <span className="text-white text-base font-medium mb-8">
                  Developed a Responsive Travel Website using HTML, CSS,
                  JavaScript and Bootstrap. Used Media Queries for
                  responsiveness for the website and added beautiful animations
                  in the website which enhances the website look.
                </span>

                <div className="opacity-40 font-medium flex tex-white mt-8">
                  <span className="mr-5">HTML</span>
                  <span className="mr-5">CSS</span>
                  <span className="mr-5">Bootstrap</span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="hover:-translate-y-1 hover:bg-pink-600 hover:opacity-100 transition-all duration-300  bg-[rgb(43,43,43)] rounded-lg p-5 flex items-center justify-center">
              <div className="flex flex-col text-left">
                <div className="flex flex-row items-center justify-between mb-5">
                  <div id="logos" className="flex items-center justify-between">
                    <svg
                      width="40"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00c2cb"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <title>Folder</title>{" "}
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
                    </svg>
                  </div>
                  <div className="flex items-center space-x-1 ">
                    <a
                      href="https://prathamesh-borse.github.io/Portfolio/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer text-white p-1 rounded-full transition-all duration-300 hover:opacity-70 mb-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-12 h-12 fill-[#00C2CB]"
                      >
                        <path d="M14 3h7v7h-2V5.41l-9.29 9.3l-1.42-1.42l9.3-9.29H14V3M5 5h7v2H5v12h12v-7h2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
                      </svg>
                    </a>
                    <a
                      href="https://github.com/prathamesh-borse/Portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer text-white p-1 rounded-full transition-all duration-300 hover:opacity-70"
                    >
                      <Image
                        src="/assets/github-icon.svg"
                        alt="Github Icon"
                        width={50}
                        height={30}
                        className="filter-sky transition-all duration-300 hover:filter-none"
                      />
                    </a>
                  </div>
                </div>
                <span className="text-white text-xl font-semibold mb-8">
                  Simple Portfolio Website
                </span>
                <span className="text-white text-base font-medium mb-8">
                  Developed a simple Portfolio website using HTML, CSS Only.
                  Which basically shows the information about the developer and
                  also helps users to connect with the develop by navigating the
                  social platform mentioned in the website.
                </span>

                <div className="opacity-40 font-medium flex tex-white mt-8">
                  <span className="mr-5">HTML</span>
                  <span className="mr-5">CSS</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default MyProjects;
