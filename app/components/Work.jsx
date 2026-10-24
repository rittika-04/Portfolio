import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { workData } from "@/assets/assets";

const Work = () => {
  return (
    <section id="mywork" className="scroll-mt-24 px-6 py-24 sm:px-10 lg:px-[12%]">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-violet-600 dark:text-violet-300">Selected projects</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">Things I’ve been building</h2>
          <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
            A selection of web projects where I practise building useful interfaces, working with data, and improving the details that make an app feel complete.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {workData.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-950/10 dark:border-white/10 dark:bg-slate-900/70"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
                <Image
                  src={project.bgImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{project.title}</h3>
                <p className="mt-2 min-h-[3.5rem] text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {project.description || "A web development project built to practise practical frontend skills."}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-700 dark:bg-white dark:text-slate-950 dark:hover:bg-violet-200">
                      Source code ↗
                    </a>
                  )}
                  {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-violet-400 hover:text-violet-700 dark:border-white/20 dark:text-slate-200 dark:hover:text-violet-200">
                      Live demo ↗
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="https://github.com/rittika-04?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-violet-400 hover:text-violet-700 dark:border-white/20 dark:text-white dark:hover:text-violet-200">
            More projects on GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;
