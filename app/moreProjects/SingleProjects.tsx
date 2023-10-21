"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

type TProps = {
  project: TProjects;
  i: number;
};

const SingleProjects = ({ project, i }: TProps) => {
  const [isInfoOpen, setIsInfoOpen] = useState<boolean>(false);

  const Variants = {
    from: { opacity: 0, scale: 1.2 },
    to: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: 0.05 * i, duration: 0.8 },
    }),
  };

  return (
    <motion.article
      variants={Variants}
      initial="from"
      whileInView="to"
      custom={i}
      viewport={{ once: true }}
      className=" outline outline-1 outline-neutral-400/70 group project   hover:shadow-xl shadow-slate-100 relative py-2 px-2 rounded-xl bg-white/10"
    >
      <div className="mb-10 relative  h-[23rem]">
        <Image
          src={project.image}
          alt="project"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          priority
          className=" rounded"
        />
      </div>

      <div
        className={`absolute left-0 top-0 w-full p-5  transition-all duration-700 delay-200 ease-in-out  h-full  group-odd:bg-gray-200 group-odd:text-stone-950  group-even:text-gray-100 group-even:bg-stone-950 rounded-xl ${
          isInfoOpen ? "opacity-100 visible " : "opacity-0 invisible"
        }`}
      >
        <h1 className="text-3xl font-bold">{project.title}</h1>

        <p className="mt-8 text-xl">{project.project_info}</p>

        <div className="flex gap-4 mt-6">
          {project.stacks.map((stack, i) => (
            <h2
              key={i}
              className="p-1 bg-slate-500 group-odd:bg-black group-odd:text-white group-even:bg-gray-100 group-even:text-black rounded-md "
            >
              {stack}
            </h2>
          ))}
        </div>

        <div className={`flex  items-center gap-5 mt-8`}>
          <Link title="Code Base" href={project.sourceCode} target="_blank">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
              <path
                fillRule="evenodd"
                d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 012.496-.336 9.554 9.554 0 012.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                clipRule="evenodd"
              />
            </svg>
          </Link>

          <Link href={project.url} target="_blank" title="Visit Site">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              className="w-7 h-7"
            >
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
            </svg>
          </Link>
        </div>
      </div>

      <button
        onClick={() => setIsInfoOpen(!isInfoOpen)}
        className={`absolute transition-all duration-150 z-20 right-3 bottom-2 ${
          isInfoOpen ? "-rotate-45" : "rotate-0"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 text-stone-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </motion.article>
  );
};
export default SingleProjects;
