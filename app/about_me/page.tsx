"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Hero from "./Hero";
import Skills from "../components/Skills";

const AboutMe = () => {
  return (
    <section>
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
          <Link href={"/"} className=" w-full h-full grid place-items-center">
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

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, stiffness: 30 }}
        className="bg-[#050505] py-10 relative overflow-hidden  rounded-s-xl  border-t  border-[#d4e4fe31]"
      >
        <div className="bg-[conic-gradient(from 90deg at 50% 50%, rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 50%), radial-gradient(rgba(200, 200, 200, 0.1) 0%, transparent 80%)] max-[300px] w-full h-[40px]"></div>
        <Hero />
        <Skills />
      </motion.div>
    </section>
  );
};
export default AboutMe;
