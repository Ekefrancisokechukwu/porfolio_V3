"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  text: string;
  className: string;
};

const textAnimation = {
  from: { opacity: 0, y: "-30px" },
  to: { opacity: 1, y: 0 },
};

const AnimatedText = ({ text, className }: Props) => {
  const ref = useRef(null);
  const isInview = useInView(ref, { amount: 0.5, once: true });
  return (
    <motion.h2
      initial="from"
      ref={ref}
      animate={isInview ? "to" : "from"}
      transition={{ staggerChildren: 0.1, delayChildren: 0, duration: 0.1 }}
      className={className}
    >
      <span className="sr-only">{text}</span>

      {text.split(" ").map((word, i) => (
        <span className="inline-block" key={i}>
          {word.split("").map((char, i) => (
            <motion.span
              className="inline-block"
              variants={textAnimation}
              key={i}
            >
              {char}
            </motion.span>
          ))}
          <span className="inline-block">&nbsp;</span>
        </span>
      ))}
    </motion.h2>
  );
};
export default AnimatedText;
