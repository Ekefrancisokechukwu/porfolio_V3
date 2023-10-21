import Form from "./Form";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const Contact = () => {
  const { ref } = useSectionInView("contact me", 0.5);

  return (
    <section
      ref={ref}
      id="contact me"
      className="py-12 max-w-[1078px] scroll-mt-24 mx-auto px-3 "
    >
      <motion.div className="">
        <h1 className="primary-heading">Get in touch</h1>
        <p className="text-lg md:w-[591px]  mx-auto text-center">
          Please contact me directly at{" "}
          <Link
            className="underline"
            href={"mailto:okechukwufrancis929@gmail.com"}
          >
            okechukwufrancis929@gmail.com
          </Link>{" "}
          or through this form
        </p>
      </motion.div>

      <div className="mt-14 flex md:flex-row flex-col lg:gap-16 gap-8 items-start justify-between">
        <div className="w-full md:w-auto">
          <article className="flex gap-3  items-center p-3 rounded-lg bg-white">
            <div className="bg-[#000] rounded-md lg:w-[75px] w-[60px] h-[60px] grid place-items-center lg:h-[70px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="lg:w-[36px] lg:h-[36px] w-[20px] h-20px"
                viewBox="0 0 36 36"
                fill="none"
              >
                <path
                  d="M3.375 10.125C3.375 22.551 13.449 32.625 25.875 32.625H29.25C30.1451 32.625 31.0035 32.2694 31.6365 31.6365C32.2694 31.0035 32.625 30.1451 32.625 29.25V27.192C32.625 26.418 32.0985 25.743 31.347 25.5555L24.7125 23.8965C24.0525 23.7315 23.3595 23.979 22.953 24.522L21.498 26.4615C21.075 27.0255 20.3445 27.2745 19.683 27.0315C17.2273 26.1287 14.9972 24.7029 13.1472 22.8528C11.2971 21.0028 9.87131 18.7727 8.9685 16.317C8.7255 15.6555 8.9745 14.925 9.5385 14.502L11.478 13.047C12.0225 12.6405 12.2685 11.946 12.1035 11.2875L10.4445 4.653C10.3532 4.28804 10.1426 3.96405 9.84608 3.73251C9.54958 3.50096 9.1842 3.37512 8.808 3.375H6.75C5.85489 3.375 4.99645 3.73058 4.36351 4.36351C3.73058 4.99645 3.375 5.85489 3.375 6.75V10.125Z"
                  stroke="white"
                  strokeWidth="2.35714"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="">
              <h5 className="text-gray-400">Call Me</h5>
              <h5 className="text-black">+2348106937057</h5>
            </div>
          </article>

          <Link
            href={"mailto:okechukwufrancis929@gmail.com"}
            className="flex gap-3  mt-7 items-center  p-3 rounded-lg bg-white"
          >
            <div className="bg-[#000] flex-shrink-0 rounded-md lg:w-[75px] w-[60px] h-[60px] grid place-items-center lg:h-[70px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="lg:w-[36px] lg:h-[36px] w-[20px] h-20px"
                viewBox="0 0 36 36"
                fill="none"
              >
                <path
                  d="M32.625 10.125V25.875C32.625 26.7701 32.2694 27.6285 31.6365 28.2615C31.0035 28.8944 30.1451 29.25 29.25 29.25H6.75C5.85489 29.25 4.99645 28.8944 4.36351 28.2615C3.73058 27.6285 3.375 26.7701 3.375 25.875V10.125M32.625 10.125C32.625 9.22989 32.2694 8.37145 31.6365 7.73851C31.0035 7.10558 30.1451 6.75 29.25 6.75H6.75C5.85489 6.75 4.99645 7.10558 4.36351 7.73851C3.73058 8.37145 3.375 9.22989 3.375 10.125M32.625 10.125V10.4895C32.6251 11.0657 32.4776 11.6324 32.1966 12.1354C31.9157 12.6385 31.5106 13.0613 31.02 13.3635L19.77 20.286C19.2378 20.6138 18.625 20.7874 18 20.7874C17.375 20.7874 16.7622 20.6138 16.23 20.286L4.98 13.365C4.48938 13.0628 4.0843 12.64 3.80335 12.1369C3.5224 11.6339 3.37494 11.0672 3.375 10.491V10.125"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text-ellipsis overflow-hidden">
              <h5 className="text-gray-400">Email Me</h5>
              <h5 className="text-black   text-over">
                okechukwufrancis929@gmail.com
              </h5>
            </div>
          </Link>

          <article className="flex gap-3 mt-7  items-center p-3 rounded-lg bg-white">
            <div className="bg-[#000] rounded-md lg:w-[75px] w-[60px] h-[60px] grid place-items-center lg:h-[70px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="lg:w-[36px] lg:h-[36px] w-[20px] h-20px"
                viewBox="0 0 36 36"
                fill="none"
              >
                <path
                  d="M22.5 15.75C22.5 16.9435 22.0259 18.0881 21.182 18.932C20.3381 19.7759 19.1935 20.25 18 20.25C16.8065 20.25 15.6619 19.7759 14.818 18.932C13.9741 18.0881 13.5 16.9435 13.5 15.75C13.5 14.5565 13.9741 13.4119 14.818 12.568C15.6619 11.7241 16.8065 11.25 18 11.25C19.1935 11.25 20.3381 11.7241 21.182 12.568C22.0259 13.4119 22.5 14.5565 22.5 15.75V15.75Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M29.25 15.75C29.25 26.463 18 32.625 18 32.625C18 32.625 6.75 26.463 6.75 15.75C6.75 12.7663 7.93526 9.90483 10.045 7.79505C12.1548 5.68526 15.0163 4.5 18 4.5C20.9837 4.5 23.8452 5.68526 25.955 7.79505C28.0647 9.90483 29.25 12.7663 29.25 15.75V15.75Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="">
              <h5 className="text-gray-400">Address</h5>
              <h5 className="text-black">Enugu, Nigeria</h5>
            </div>
          </article>
        </div>

        <Form />
      </div>
    </section>
  );
};
export default Contact;
