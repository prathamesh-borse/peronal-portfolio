"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Badge = ({ children }) => (
  <span className="inline-block px-3 py-1 rounded-full bg-[#00C2CB] text-white border border-[#00c2cb]/30 text-sm">
    {children}
  </span>
);

const Card = ({ title, items, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    className="bg-[rgb(43,43,43)]/90 border border-white/10 rounded-2xl p-6 sm:p-7 shadow-2xl hover:bg-pink-600 hover:-translate-y-1 hover:opacity-100 transition-all duration-300"
  >
    <h4 className="text-xl font-semibold mb-4 text-white">{title}</h4>
    <div className="flex flex-wrap gap-2">
      {items.map((i) => (
        <Badge key={i}>{i}</Badge>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, margin: "-100px" });
  return (
    <section id="skills" className="scroll-mt-24 py-20 px-4 text-white">
      <div className="max-w-7xl mx-auto">
        <h3 className="hero text-center text-[#00c2cb] text-3xl font-semibold mb-6">
          Skills
        </h3>
        <p className="text-center text-base opacity-90 mb-12">
          A quick overview of the tools and technologies I use across the stack.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          <Card
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            title="Frontend"
            items={[
              "React",
              "Next.js",
              "JavaScript",
              "TypeScript",
              "HTML",
              "CSS",
              "Tailwind CSS",
              "Framer Motion",
            ]}
            delay={0}
          />
          <Card
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            title="Backend"
            items={[
              "Java",
              "Spring Boot",
              "Node.js",
              "Express",
              "REST APIs",
              "JWT",
            ]}
            delay={0.05}
          />
          <Card
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            title="Databases"
            items={["MongoDB", "PostgreSQL", "MySQL"]}
            delay={0.1}
          />
          <Card
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            title="Cloud & DevOps"
            items={[
              "Vercel",
              "Netlify",
              "Jenkins",
              "Docker",
              "GitHub Actions",
              "AWS Basics",
            ]}
            delay={0.15}
          />
          <Card
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            title="Testing & Quality"
            items={["Jest", "React Testing Library", "ESLint", "Prettier"]}
            delay={0.2}
          />
          <Card
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            title="Tools"
            items={["Git", "GitHub", "VS Code", "Postman", "Figma"]}
            delay={0.25}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
