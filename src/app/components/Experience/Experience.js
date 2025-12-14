import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Analytics } from "@vercel/analytics/next";

const experienceData = [
  {
    company: "Infosys",
    role: "Associate Consultant",
    period: "Oct 2024 — Present",
    bullets: [
      "Built responsive UI components with React and TailwindCSS",
      "Implemented accessibility and performance best practices",
      "Collaborated with design and backend to ship features",
    ],
  },
  {
    company: "Persistent Systems",
    role: "Software Engineer",
    period: "Jun 2022 — Sep 2024",
    bullets: [
      "As a Software Engineer at Persistent Systems, I got the opportunity to work on the Web application project.",
      "Through my work on this project, I gained valuable experience in software engineering and web application development.",
      "I was able to hone my skills in front-end development, particularly in building reusable and customizable components.",
    ],
  },
  {
    company: "Persistent Systems",
    role: "Software Engineer - Trainee",
    period: "Jan 2022 — July 2022",
    bullets: [
      "Learned technologies like SQL, Java, Spring, Html, Js and many more.",
      "Prepared to POC's for the concepts that I understood in the internship.",
    ],
  },
];

const Experience = () => {
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, {
    margin: "-100px",
    once: false,
  });
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const root = document.documentElement;
      const update = () => setIsDark(root.classList.contains("dark"));
      update();
      const observer = new MutationObserver(update);
      observer.observe(root, { attributes: true, attributeFilter: ["class"] });
      return () => observer.disconnect();
    }
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24"
    >
      <div className="w-full max-w-6xl dark:text-white">
        <motion.h2
          initial={{ opacity: 0, y: -16 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="hero text-3xl sm:text-4xl font-semibold text-white mb-6 dark:text-center"
        >
          Experience
        </motion.h2>

        <div
          className="relative"
          style={{
            "--timeline-color": isDark
              ? "rgba(0, 0, 0, 0.3)"
              : "rgba(255, 255, 255, 0.3)",
          }}
        >
          {/* Timeline line: hidden on mobile, centered on sm+ */}
          <div className="hidden sm:block absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-[var(--timeline-color)] opacity-100 mix-blend-normal pointer-events-none z-[1]" />
          <ul className="space-y-8 sm:space-y-16">
            {experienceData.map((item, idx) => {
              const isLeft = idx % 2 === 0; // alternate sides
              const fromX = isLeft ? -60 : 60; // directional slide

              return (
                <li
                  key={idx}
                  className="relative grid sm:grid-cols-2 gap-4 sm:gap-8 z-[2]"
                >
                  {/* Marker dot aligned to the timeline */}
                  <div className="hidden sm:block absolute left-4 sm:left-1/2 sm:-translate-x-1/2 -translate-y-1/2 top-6 sm:top-1/2 h-3 w-3 rounded-full bg-[#00c2cb] shadow-[0_0_0_4px_rgba(0,194,203,0.2)]" />
                  {/* On mobile, content spans full width below the marker. On sm+, alternate columns. */}
                  {isLeft ? (
                    <>
                      {/* Left content column */}
                      <motion.div
                        initial={{ opacity: 0, x: fromX }}
                        animate={sectionInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        className="sm:pr-8"
                      >
                        <div className="bg-white dark:bg-[rgb(43,43,43)]/90 dark:text-white border border-white/10 rounded-xl p-5 sm:p-6">
                          <p className="text-sm opacity-80 mb-1 dark:!text-white dark:opacity-100">
                            {item.period}
                          </p>
                          <h3 className="text-xl font-semibold">{item.role}</h3>
                          <p className="text-[#00c2cb] mb-3 dark:!text-white">
                            {item.company}
                          </p>
                          <ul className="list-disc ml-5 space-y-1 text-sm dark:text-white dark:marker:text-white">
                            {item.bullets.map((b, i) => (
                              <li key={i}>{b}</li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                      {/* Right spacer column on sm+ */}
                      <div className="hidden sm:block dark:text-white" />
                    </>
                  ) : (
                    <>
                      {/* Left spacer column on sm+ */}
                      <div className="hidden sm:block dark:text-white" />
                      {/* Right content column */}
                      <motion.div
                        initial={{ opacity: 0, x: fromX }}
                        animate={sectionInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        className="sm:pl-8"
                      >
                        <div className="bg-white dark:bg-[rgb(43,43,43)]/90 dark:text-white border border-white/10 rounded-xl p-5 sm:p-6">
                          <p className="text-sm mb-1 dark:!text-white dark:opacity-100">
                            {item.period}
                          </p>
                          <h3 className="text-xl font-semibold dark:text-white">
                            {item.role}
                          </h3>
                          <p className="text-[#00c2cb] mb-3 dark:!text-white">
                            {item.company}
                          </p>
                          <ul className="list-disc ml-5 space-y-1 text-sm dark:text-white dark:marker:text-white">
                            {item.bullets.map((b, i) => (
                              <li key={i}>{b}</li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Analytics />
    </section>
  );
};

export default Experience;
