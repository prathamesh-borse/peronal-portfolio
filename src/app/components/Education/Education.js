import Image from "next/image";
import React from "react";

const Education = () => {
  return (
    <>
      <div id="projects" className="min-h-screen text-white py-5">
        <h3 className="text-center text-[#00c2cb] text-3xl font-semibold mb-8">
          Education
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10 text-white">
          <div className="p-10 rounded-lg flex items-center justify-center shadow-2xl">
            Project 1
          </div>
          <div className="p-10 rounded-lg flex items-center justify-center shadow-2xl">
            Project 2
          </div>
          <div className="p-10 rounded-lg flex items-center justify-center shadow-2xl">
            Project 3
          </div>
          <div className="p-10 rounded-lg flex items-center justify-center shadow-2xl">
            Project 4
          </div>
          <div className="p-10 rounded-lg flex items-center justify-center shadow-2xl">
            Project 5
          </div>
          <div className="p-10 rounded-lg flex items-center justify-center shadow-2xl">
            Project 6
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
