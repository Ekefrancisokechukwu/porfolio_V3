"use client";
import { useActiveContext } from "@/context/active_section";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import OpenForWork from "./OpenForWork";
import AnimatedText from "./AnimatedText";

const Intro = () => {
  const { ref } = useSectionInView("home");

  const variant = {
    from: { opacity: 0, y: 40 },
    to: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section ref={ref} id="home" className="intro relative xl:px-0 px-4  py-10">
      <OpenForWork />
      <div className="absolute  z-10   outline  outline-1 outline-offset-1 outline-neutral-600  lg:flex  flex-col  hidden  gap-5  py-3 px-2 left-16 top-28   bg-white/5 rounded-lg">
        <Link
          href={"https://api.whatsapp.com/message/UT7SN2373O3NL1"}
          target="_blank"
          className="hover:bg-white/10 rounded inline-block p-2 transition duration-200"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            viewBox="0 0 20 20"
            fill="none"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              d="M17.05 2.91006C16.1332 1.98399 15.0412 1.24973 13.8376 0.750111C12.6341 0.250494 11.3431 -0.00448012 10.04 5.95696e-05C4.58 5.95696e-05 0.130003 4.45006 0.130003 9.91006C0.130003 11.6601 0.590003 13.3601 1.45 14.8601L0.0500031 20.0001L5.3 18.6201C6.75 19.4101 8.38 19.8301 10.04 19.8301C15.5 19.8301 19.95 15.3801 19.95 9.92006C19.95 7.27006 18.92 4.78006 17.05 2.91006ZM10.04 18.1501C8.56 18.1501 7.11 17.7501 5.84 17.0001L5.54 16.8201L2.42 17.6401L3.25 14.6001L3.05 14.2901C2.22775 12.977 1.79114 11.4593 1.79 9.91006C1.79 5.37006 5.49 1.67006 10.03 1.67006C12.23 1.67006 14.3 2.53006 15.85 4.09006C16.6175 4.85402 17.2257 5.76272 17.6394 6.76348C18.0531 7.76425 18.264 8.83717 18.26 9.92006C18.28 14.4601 14.58 18.1501 10.04 18.1501ZM14.56 11.9901C14.31 11.8701 13.09 11.2701 12.87 11.1801C12.64 11.1001 12.48 11.0601 12.31 11.3001C12.14 11.5501 11.67 12.1101 11.53 12.2701C11.39 12.4401 11.24 12.4601 10.99 12.3301C10.74 12.2101 9.94 11.9401 9 11.1001C8.26 10.4401 7.77 9.63006 7.62 9.38006C7.48 9.13006 7.6 9.00006 7.73 8.87006C7.84 8.76006 7.98 8.58006 8.1 8.44006C8.22 8.30006 8.27 8.19006 8.35 8.03006C8.43 7.86006 8.39 7.72006 8.33 7.60006C8.27 7.48006 7.77 6.26006 7.57 5.76006C7.37 5.28006 7.16 5.34006 7.01 5.33006H6.53C6.36 5.33006 6.1 5.39006 5.87 5.64006C5.65 5.89006 5.01 6.49006 5.01 7.71006C5.01 8.93006 5.9 10.1101 6.02 10.2701C6.14 10.4401 7.77 12.9401 10.25 14.0101C10.84 14.2701 11.3 14.4201 11.66 14.5301C12.25 14.7201 12.79 14.6901 13.22 14.6301C13.7 14.5601 14.69 14.0301 14.89 13.4501C15.1 12.8701 15.1 12.3801 15.03 12.2701C14.96 12.1601 14.81 12.1101 14.56 11.9901Z"
              fill="#fff"
              strokeWidth={4}
              strokeDasharray="0 1"
            />
          </motion.svg>
        </Link>

        <Link
          href={"https://twitter.com/Francis64995273"}
          target="_blank"
          className="hover:bg-white/10 rounded inline-block p-2 transition duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18.901 1.15308H22.581L14.541 10.3431L24 22.8461H16.594L10.794 15.2621L4.156 22.8461H0.474L9.074 13.0161L0 1.15408H7.594L12.837 8.08608L18.901 1.15308ZM17.61 20.6441H19.649L6.486 3.24008H4.298L17.61 20.6441Z"
              fill="white"
            />
          </svg>
        </Link>

        <Link
          target="_blank"
          href={"https://github.com/Ekefrancisokechukwu/"}
          className="hover:bg-white/10 inline-block rounded p-2 transition duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="47"
            height="46"
            className="w-7 h-7"
            viewBox="0 0 47 46"
            fill="none"
          >
            <g clipPath="url(#clip0_164_1972)">
              <path
                d="M46.5 23.5751C46.5 28.7133 45.0372 33.334 42.1116 37.4372C39.1883 41.5404 35.4094 44.3786 30.7772 45.9541C30.239 46.0576 29.8434 45.9863 29.595 45.7402C29.4724 45.621 29.3759 45.4777 29.3114 45.3194C29.2468 45.1611 29.2158 44.9911 29.2201 44.8202V38.3411C29.2201 36.3562 28.7003 34.9026 27.663 33.9826C28.6993 33.8786 29.7259 33.694 30.7335 33.4306C31.6397 33.1845 32.5781 32.7866 33.5464 32.2346C34.4773 31.7137 35.3008 31.0206 35.9729 30.1922C36.6215 29.3826 37.1505 28.3085 37.5599 26.9676C37.9693 25.6267 38.174 24.088 38.174 22.3492C38.174 19.8721 37.3851 17.763 35.8096 16.0242C36.5456 14.1612 36.4674 12.0751 35.5681 9.76128C35.0092 9.57728 34.2019 9.69228 33.1439 10.0994C32.1842 10.4599 31.2615 10.912 30.3885 11.4495L29.25 12.1855C27.38 11.6524 25.4445 11.3845 23.5 11.3897C21.5554 11.3852 19.6199 11.6539 17.75 12.1878C17.334 11.8997 16.9099 11.6236 16.4781 11.3598C15.9491 11.0309 15.1142 10.6376 13.9757 10.1776C12.8395 9.71758 11.9793 9.57958 11.3997 9.76358C10.5234 12.0751 10.4521 14.1612 11.1927 16.0242C9.6149 17.763 8.8237 19.8721 8.8237 22.3492C8.8237 24.088 9.0307 25.6221 9.4401 26.9538C9.8495 28.2832 10.3739 29.3573 11.011 30.1761C11.6716 31.0131 12.4907 31.7118 13.4214 32.2323C14.3897 32.7843 15.3304 33.1845 16.2366 33.4283C17.1451 33.6767 18.1686 33.8607 19.3071 33.9826C18.509 34.7186 18.0191 35.7743 17.8397 37.1451C17.4109 37.3528 16.9583 37.5073 16.4919 37.6051C15.9299 37.7154 15.358 37.767 14.7853 37.7592C14.1252 37.7592 13.4743 37.5384 12.8234 37.0991C12.1748 36.6575 11.6205 36.0181 11.1605 35.1809C10.8012 34.5477 10.3054 34.0025 9.7092 33.5847C9.1204 33.1753 8.6259 32.9292 8.2257 32.8487L7.6277 32.7567C7.2091 32.7567 6.9193 32.8027 6.7583 32.8947C6.5973 32.9867 6.5513 33.1017 6.6088 33.2466C6.67645 33.4026 6.76716 33.5476 6.8779 33.6767C6.99279 33.8148 7.1241 33.9384 7.2689 34.0447L7.4759 34.1965C7.9175 34.4035 8.3499 34.7922 8.78 35.3649C9.2101 35.9376 9.5252 36.4597 9.723 36.9289L10.022 37.635C10.2819 38.4124 10.7212 39.0426 11.3422 39.5233C11.9609 40.0063 12.6302 40.3122 13.3478 40.4433C14.0654 40.5767 14.76 40.6503 15.4293 40.6595C16.0963 40.6687 16.6529 40.6342 17.0922 40.5514L17.7799 40.4295C17.7799 41.2069 17.7845 42.1177 17.796 43.1619L17.8098 44.8179C17.8098 45.1859 17.681 45.4941 17.4188 45.7379C17.1612 45.9863 16.761 46.0576 16.2228 45.9541C11.5906 44.3786 7.8117 41.5381 4.8884 37.4372C1.9628 33.334 0.5 28.7133 0.5 23.5751C0.5 19.2971 1.5281 15.3549 3.5843 11.7416C5.57491 8.19764 8.46202 5.23914 11.9563 3.16258C15.4396 1.0657 19.4343 -0.0286792 23.5 8.05025e-05C27.5665 -0.0291034 31.562 1.06529 35.046 3.16258C38.5394 5.23946 41.4257 8.19793 43.4157 11.7416C45.4719 15.3526 46.5 19.2994 46.5 23.5751Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_164_1972">
                <rect
                  width="46"
                  height="46"
                  fill="white"
                  transform="translate(0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </Link>
        <Link
          target="_blank"
          href={"https://read.cv/specter"}
          className="hover:bg-white/10 inline-block rounded p-2 transition duration-200"
        >
          <Image
            src={"/image/cv.svg"}
            width={7}
            height={7}
            alt={"cv"}
            className="w-7 h-7"
          />
        </Link>
      </div>

      {/* <motion.div
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="w-[10rem] h-[10rem] bg-gray-50/10 left-5 absolute rounded-full blur-2xl"
      > </motion.div> */}

      <div className="text-center sm:mt-0 mt-7">
        <AnimatedText
          className="md:text-[70px] sm:text-[43px] text-[35px] md:w-[697px] sm:-[w-620px] mx-auto sm:leading-[72.45px] leading-[50px]"
          text="Coding your vision to reality"
        />
        <h4 className="md:w-[647px] relative mx-auto mt-[40px] sm:text-[20px] text-[18px]">
          <span className="text-[#4e4747] font-extrabold info-intro">
            Hello ,I'm Francis{" "}
          </span>
          you can also call me{" "}
          <span className="text-[#4e4747] info-intro font-extrabold">
            Specter
          </span>
          , I'm a{" "}
          <span className="text-[#4e4747] info-intro font-extrabold">
            frontend developer. {""}
          </span>
          I enjoy building user friendly sites {/*  and <span>apps</span> */},
          My focus is{" "}
          <span className="text-[#4e4747] info-intro font-extrabold">
            React(Next.js).
          </span>
        </h4>

        <motion.div
          initial={{ y: 15, opacity: 0 }}
          transition={{ delay: 1 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Link href="#contact me" className="mt-12 main-btn mx-auto">
            Let’s talk
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
export default Intro;
