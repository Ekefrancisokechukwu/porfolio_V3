"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Nav = () => {
  const [active, setactive] = useState<string>("all");

  return (
    <ul className="flex ms:gap-8 gap-5 items-center">
      {["all", "web app"].map((list, i) => (
        <li
          onClick={() => setactive(list)}
          className="capitalize relative py-1 px-2 cursor-pointer "
          key={i}
        >
          {list}
          {active === list && (
            <motion.span
              layoutId="active"
              transition={{ type: "spring", damping: 20 }}
              className="bg-white/5 absolute inset-0 rounded-md"
            ></motion.span>
          )}
        </li>
      ))}
    </ul>
  );
};
export default Nav;
