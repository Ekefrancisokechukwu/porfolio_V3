"use client";

import { motion } from "framer-motion";

const OpenForWork = () => {
  return (
    <motion.div
      initial={{ visibility: "hidden", opacity: 0 }}
      animate={{ visibility: "visible", opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="group hover:bg-green-400/20 transition-all duration-200 absolute py-3 px-3 rounded-lg right-7 top-3 cursor-pointer bg-green-400/10"
    >
      <h1 className="flex  items-center gap-2 text-green-500 font-bold">
        <span className="w-2 h-2 rounded-full block bg-green-400"></span>
        Open for work
      </h1>
    </motion.div>
  );
};
export default OpenForWork;
