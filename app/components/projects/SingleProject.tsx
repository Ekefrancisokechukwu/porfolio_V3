"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";

type TProps = {
  project: TProjects;
};

const SingleProject = ({ project }: TProps) => {
  const ref = useRef<HTMLElement>(null);

  return (
    <motion.article
      ref={ref}
      className="group  border p-5 rounded-md border-gray-100/20 grid md:grid-cols-2 grid-cols-1 gap-10 mt-16"
    >
      <div className="md:group-odd:order-2 md:group-even:order-1">
        <h1 className="sm:text-[32px] text-[28px]">{project.title}</h1>

        <p className="mt-8 xl:w-[540px] sm:text-[20px] text-[18px] text-gray-400">
          {project.project_info}
        </p>

        <div className="flex items-center gap-5 mt-5">
          <Link
            title={project.sourceCode}
            href="https://github.com/Ekefrancisokechukwu"
            target="_blank"
          >
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

        <div className="mt-10 flex gap-3">
          {project.stacks.map((stack, i) => {
            return (
              <h5
                key={i}
                className="w-[6rem] grid place-items-center rounded-md capitalize  h-9 cursor-default bg-[#272727c7]"
              >
                {stack}
              </h5>
            );
          })}
        </div>
      </div>

      <div className="md:group-odd:order-1 md:group-even:order-2   overflow-hidden  ">
        <Link href={project.url} target="_blank" className="block">
          <Image
            src={project.image}
            alt={"proj1"}
            width={200}
            height={300}
            className="group-hover:scale-[1.01] w-full h-full object-cover  transition-transform duration-500"
          />
        </Link>
      </div>
    </motion.article>
  );
};
export default SingleProject;
