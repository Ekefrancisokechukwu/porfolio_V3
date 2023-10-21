"use client";

import { motion } from "framer-motion";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <motion.button
      disabled={pending}
      whileTap={{ scale: 1.1 }}
      className="main-btn ms-auto disabled:opacity-90 disabled:cursor-not-allowed disabled:scale-100"
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-stone-950"></div>
      ) : (
        "Submit"
      )}
    </motion.button>
  );
};
export default SubmitBtn;
