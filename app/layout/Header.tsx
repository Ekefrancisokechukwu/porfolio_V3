"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useActiveContext } from "@/context/active_section";
import { motion } from "framer-motion";

const Header = () => {
  const ref = useRef<HTMLElement>(null);
  const [isHeader, setIsHeader] = useState<boolean>(false);
  const { setIsMenuOpen } = useActiveContext();

  useEffect(() => {
    let height = ref.current?.getBoundingClientRect().height || 579;

    const handleHeader = () => {
      if (document.documentElement.scrollTop > height) {
        setIsHeader(true);
      } else {
        setIsHeader(false);
      }
    };

    window.addEventListener("scroll", handleHeader);
  }, []);

  return (
    <>
      <header className="bg-[#050505] py-8 px-3 w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/image/logo.svg"
            alt={"logo"}
            width="30"
            height="29"
            className=" sm:w-[30px]  sm:h-[29px] w-[19px] h-[18.263px]"
          />
          <h2 className="sm:text-[25px] text-[19px]">Specter</h2>
        </div>

        <Navbar />

        <Link
          href="/resume"
          className="group lg:flex hidden items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-9 h-9 group-hover:scale-105"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>View Resume</span>
        </Link>

        <button onClick={() => setIsMenuOpen(true)} className="lg:hidden block">
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </header>

      <header
        ref={ref}
        className={`bg-[#070707b3] border-b border-[#d4e4fe31] py-8 px-3 w-full top-0 left-0 fixed  backdrop-blur-2xl transition-transform duration-500 z-20
         flex items-center justify-between  ${
           isHeader ? "translate-y-0" : "-translate-y-28"
         }`}
      >
        <div className="flex items-center gap-2">
          <Image
            src="/image/logo.svg"
            alt={"logo"}
            width="30"
            height="29"
            className=" sm:w-[30px]  sm:h-[29px] w-[19px] h-[18.263px]"
          />
          <h2 className="sm:text-[25px] text-[19px]">Specter</h2>
        </div>

        <Navbar />
        <Link
          href="/resume"
          className="group lg:flex hidden items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-9 h-9 group-hover:scale-105"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>View Resume</span>
        </Link>

        <button onClick={() => setIsMenuOpen(true)} className="lg:hidden block">
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </header>
    </>
  );
};
export default Header;
