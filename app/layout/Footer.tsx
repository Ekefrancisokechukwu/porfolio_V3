"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <footer className="py-4 max-w-[98%] mt-9 mx-auto">
      <div
        ref={ref}
        className={`h-[1px]  bg-white/50 transition ease-in duration-500 ${
          inView ? "translate-y-0" : "translate-y-4"
        }`}
      ></div>
      <div
        ref={ref}
        className={`mt-3 flex transition duration-700 ease-in  gap-3 items-center justify-center ${
          inView ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Image
          src={"/image/logo.svg"}
          width={10}
          height={10}
          alt={"logo"}
          className="w-5 h-5"
        />
        Specter works
      </div>
    </footer>
  );
};
export default Footer;
