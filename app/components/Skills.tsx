"use client";

import { skills } from "@/utils/data";
import { motion } from "framer-motion";

const Skills = () => {
  const Variants = {
    from: { opacity: 0, scale: 1.2 },
    to: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: 0.05 * i },
    }),
  };
  return (
    <section className="max-w-[1080px] mx-auto  mt-20   xl:px-0 px-5">
      <h1 className="primary-heading">Skills</h1>

      <div className="mt-10">
        <motion.ul className="flex gap-4 justify-center flex-wrap">
          {skills.map((skill, i) => (
            <motion.li
              whileHover={{ scale: 1.1 }}
              transition={{ stiffness: 40, damping: 10 }}
              className="capitalize text-lg cursor-default py-2 px-2 bg-white/10 rounded-xl"
              key={i}
              variants={Variants}
              initial="from"
              whileInView="to"
              custom={i}
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};
export default Skills;
