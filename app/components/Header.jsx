import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { assets } from "@/assets/assets";

const Header = () => {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] scroll-mt-24 items-center overflow-hidden px-6 pb-16 pt-28 sm:px-10 lg:px-[12%]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-violet-300/30 blur-3xl dark:bg-violet-700/20" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-20 bottom-10 h-64 w-64 rounded-full bg-sky-300/25 blur-3xl dark:bg-sky-700/15" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="order-2 text-center md:order-1 md:text-left"
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-4 py-2 text-sm font-medium text-violet-700 shadow-sm dark:border-violet-400/20 dark:bg-white/5 dark:text-violet-200">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Frontend Developer · React & JavaScript
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            I build clean, thoughtful{" "}
            <span className="bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
              web experiences.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg md:mx-0">
            I’m Rittika Shaw, a developer focused on React.js and JavaScript. I enjoy turning ideas into responsive interfaces, connecting applications to APIs, and making web experiences easier to use.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <a href="#mywork" className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-violet-700 dark:bg-white dark:text-slate-950 dark:hover:bg-violet-200">
              Explore my work <span aria-hidden="true" className="ml-2">↘</span>
            </a>
            <a href="#contactme" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-violet-400 dark:border-white/20 dark:bg-white/5 dark:text-white">
              Let’s connect
            </a>
            <a href="https://github.com/rittika-04" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full px-4 py-3 text-sm font-semibold text-slate-600 transition hover:text-violet-700 dark:text-slate-300 dark:hover:text-violet-200">
              GitHub ↗
            </a>
          </div>

          <div className="mt-9 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-500 dark:text-slate-400 md:justify-start">
            <span>React.js</span><span>JavaScript</span><span>REST APIs</span><span>Responsive UI</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="order-1 mx-auto w-full max-w-[300px] md:order-2 md:max-w-[360px]"
        >
          <div className="relative rounded-[2rem] border border-white/70 bg-gradient-to-br from-violet-100 via-white to-sky-100 p-3 shadow-2xl shadow-violet-900/10 dark:border-white/10 dark:from-violet-900/30 dark:via-slate-900 dark:to-sky-900/30">
            <div className="absolute -right-4 top-8 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-lg dark:border-white/10 dark:bg-slate-900/90">
              <p className="text-xs text-slate-500 dark:text-slate-400">Currently focused on</p>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">Frontend engineering</p>
            </div>
            <Image
              src={assets.profile_img}
              alt="Portrait of Rittika Shaw"
              width={420}
              height={420}
              priority
              className="aspect-square w-full rounded-[1.5rem] object-cover"
            />
            <div className="absolute -bottom-4 -left-4 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-lg dark:border-white/10 dark:bg-slate-900/90">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">Build · Learn · Improve</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">One project at a time</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
