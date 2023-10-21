import { sendEmail } from "@/actions/sendEmail";
import { motion } from "framer-motion";
import { toast } from "sonner";

import SubmitBtn from "./SubmitBtn";

const Form = () => {
  const variants = {
    from: { y: 40, opacity: 0 },
    to: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        stiffiness: 20,
        staggerChildren: 0.4,
        delayChildren: 0.1,
        type: "spring",
        ease: "easeIn",
      },
    },
  };
  return (
    <div>
      <motion.form
        variants={variants}
        initial="from"
        whileInView="to"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          toast("Message sent");
        }}
        className="flex flex-wrap gap-5 "
      >
        <motion.div
          variants={variants}
          className="flex gap-4 lg:flex-nowrap flex-wrap  w-full"
        >
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              full name
            </label>
            <input
              type="name"
              name="name"
              id="name"
              className="form-input"
              placeholder="Full name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="number" className="form-label">
              number
              <span className="text-xs ms-2 text-white/25">optional</span>
            </label>
            <input
              type="tel"
              id="number"
              className="form-input"
              name="number"
              placeholder="Phone number"
            />
          </div>
        </motion.div>
        <motion.div variants={variants} className="form-group">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            placeholder="Email"
            required
          />
        </motion.div>

        <motion.div variants={variants} className="form-group">
          <label htmlFor="message" className="form-label">
            message
          </label>
          <textarea
            required
            name="message"
            id="message"
            className="form-input resize-none h-28"
            placeholder="Leave a message"
          ></textarea>
        </motion.div>

        <SubmitBtn />
      </motion.form>
    </div>
  );
};
export default Form;
