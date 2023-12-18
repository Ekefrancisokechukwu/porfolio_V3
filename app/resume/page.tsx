"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div>
      <div className="">
        <nav className="py-2 px-3 pl-8">
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
        </nav>

        <h1 className="primary-heading">My resume</h1>
      </div>

      <div className="max-w-[1083px] mt-10 px-3 mx-auto">
        <object
          data="/image/resume.pdf"
          type="application/pdf"
          width="900"
          height="600"
          className="w-full h-[60rem]"
        >
          <p>
            PDF viewer not available. You can{" "}
            <Link
              download={true}
              className="border p-1"
              href="https://docs.google.com/document/d/1ToGtfZuUtWig5ViSMCxjsDi86tdfLxJzGx24gcH3o4s/edit?usp=sharing"
            >
              download the PDF
            </Link>{" "}
            instead.
          </p>
        </object>
      </div>
    </div>
  );
};
export default page;
