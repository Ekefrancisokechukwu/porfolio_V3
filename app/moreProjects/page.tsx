"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Nav from "../components/projects/Nav";
import SingleProjects from "./SingleProjects";
import ProjectsContainer from "./ProjectsContainer";

const MoreProjects = () => {
  return (
    <>
      <motion.nav
        initial={{ y: "-20rem" }}
        animate={{ y: 0 }}
        transition={{ delay: 1 }}
        className="py-4 px-3 sm:pl-8"
      >
        <motion.div
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 2px 2px #ffffff28",
          }}
          transition={{ stiffness: 40 }}
          className=" w-10 h-10 bg-white/10 rounded-full"
        >
          <Link
            href={"/#my projects"}
            className=" w-full h-full grid place-items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </Link>
        </motion.div>
      </motion.nav>
      <section className="bg-[#060505] overflow-hidden border-t relative border-[#d4e4fe31] py-10 rounded-2xl">
        <div className="shine-border "></div>
        <div className="shine max-w-[400px]  w-full  absolute -top-32 right-6 h-[200px]"></div>

        <main className="mt-2 max-w-[1100px] mx-auto">
          <div className="sm:px-2 px-3 borderStyle border-b py-4">
            <Nav />
          </div>

          <ProjectsContainer />
        </main>
      </section>
    </>
  );
};
export default MoreProjects;
