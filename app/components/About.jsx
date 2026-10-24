import React from "react";
import { motion } from "motion/react";

const skills = ["React.js", "JavaScript", "HTML5", "CSS3", "REST APIs", "Node.js", "SQL / MySQL", "Git & GitHub", "Postman"];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-24 sm:px-10 lg:px-[12%]">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-violet-600 dark:text-violet-300">A little about me</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">From ideas to usable interfaces</h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="mx-auto max-w-4xl">
          <p className="text-base leading-8 text-slate-600 dark:text-slate-300">
            I’m Rittika Shaw, a developer building my career in frontend and software development. I completed my B.Tech in Electronics & Communication Engineering in 2025 and am pursuing an M.Tech in the same field. My QA internship has helped me pay close attention to accuracy, edge cases, and details that affect the user experience. I’m applying that mindset to responsive web applications built with React and JavaScript.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
            I like learning by building: exploring APIs, improving component structure, fixing bugs, and making interfaces work across screen sizes. I continue to strengthen my fundamentals through hands-on projects and regular practice.
          </p>
          <h3 className="mt-8 text-sm font-semibold text-slate-800 dark:text-slate-100">Tools and technologies</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {skills.map((skill) => <span key={skill} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600 dark:border-white/15 dark:bg-white/5 dark:text-slate-300">{skill}</span>)}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
