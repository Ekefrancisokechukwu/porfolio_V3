import Image from "next/image";
import profile from "../../public/image/profile.svg";
import Link from "next/link";

const Hero = () => {
  const calculateYears = () => {
    const currentYear = new Date();
    const myYear = new Date(2022, 7, 24);
    let age = currentYear.getFullYear() - myYear.getFullYear();

    return age;
  };

  return (
    <div className="max-w-[1080px] relative mx-auto grid lg:grid-cols-2 grid-cols-1 gap-5 justify-items-center  xl:px-0 px-5">
      <div className="bg-gradient-to-br from-white/20 to-slate-500/10 top-[5rem] w-44 h-44 absolute blur-2xl"></div>
      <div className="">
        <h1 className="primary-heading text-left">Who is specter?</h1>
        <p className="sm:text-[20px] text-[17px]">
          My name is Eke francis okechukwu,I'm a frontend developer based in
          Nigeria with a strong foundation in web technologies and a passion for
          creating engaging and intuitive user interfaces. Over the years, I
          have honed my skills in HTML, CSS, and JavaScript, allowing me to
          craft visually appealing and responsive websites.
        </p>

        <div className="mt-7 ms:flex-nowrap flex-wrap flex gap-7">
          <article className="sm:w-[104px]  lg:grid place-items-center p-2 rounded-lg border border-white/25">
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
                d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
              />
            </svg>
            <h4 className="">Experience</h4>
            <h5 className="font-extralight">{calculateYears()}yr+</h5>
          </article>
          <article className="sm:w-[104px]  lg:grid place-items-center p-2 rounded-lg border border-white/25">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
            >
              <path
                d="M21.8027 7.38082L23.8002 11.3758C24.0694 11.9283 24.7919 12.4525 25.401 12.5658L29.0135 13.1608C31.3227 13.5433 31.861 15.215 30.2035 16.8867L27.3844 19.7058C26.9169 20.1733 26.6477 21.0942 26.8035 21.76L27.611 25.245C28.2485 27.9933 26.7752 29.07 24.3527 27.625L20.9669 25.6133C20.3577 25.245 19.3377 25.245 18.7285 25.6133L15.3427 27.625C12.9202 29.0558 11.4469 27.9933 12.0844 25.245L12.8919 21.76C13.0194 21.08 12.7502 20.1592 12.2827 19.6917L9.46354 16.8725C7.80604 15.215 8.34437 13.5433 10.6535 13.1467L14.266 12.5517C14.8752 12.4525 15.5977 11.9142 15.8669 11.3617L17.8644 7.36665C18.9552 5.21332 20.7119 5.21332 21.8027 7.38082Z"
                fill="white"
              />
              <path
                d="M11.333 8.14581H2.83301C2.25217 8.14581 1.77051 7.66415 1.77051 7.08331C1.77051 6.50248 2.25217 6.02081 2.83301 6.02081H11.333C11.9138 6.02081 12.3955 6.50248 12.3955 7.08331C12.3955 7.66415 11.9138 8.14581 11.333 8.14581Z"
                fill="white"
              />
              <path
                d="M7.08301 27.9792H2.83301C2.25217 27.9792 1.77051 27.4975 1.77051 26.9167C1.77051 26.3359 2.25217 25.8542 2.83301 25.8542H7.08301C7.66384 25.8542 8.14551 26.3359 8.14551 26.9167C8.14551 27.4975 7.66384 27.9792 7.08301 27.9792Z"
                fill="white"
              />
              <path
                d="M4.24967 18.0625H2.83301C2.25217 18.0625 1.77051 17.5808 1.77051 17C1.77051 16.4192 2.25217 15.9375 2.83301 15.9375H4.24967C4.83051 15.9375 5.31217 16.4192 5.31217 17C5.31217 17.5808 4.83051 18.0625 4.24967 18.0625Z"
                fill="white"
              />
            </svg>
            <h4 className="">Completed</h4>
            <h5 className="font-extralight">10+ project</h5>
          </article>

          <article className="sm:w-[104px]  lg:grid place-items-center p-2 rounded-lg border border-white/25">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
            >
              <path
                d="M16.5 0C7.4019 0 0 7.20032 0 16.0506V22.7004C0 24.344 1.48005 25.681 3.3 25.681H4.95C5.38761 25.681 5.80729 25.5119 6.11673 25.2109C6.42616 24.9099 6.6 24.5016 6.6 24.076V15.8211C6.6 15.3954 6.42616 14.9872 6.11673 14.6862C5.80729 14.3852 5.38761 14.2161 4.95 14.2161H3.4518C4.3692 8.00445 9.8637 3.21013 16.5 3.21013C23.1363 3.21013 28.6308 8.00445 29.5482 14.2161H28.05C27.6124 14.2161 27.1927 14.3852 26.8833 14.6862C26.5738 14.9872 26.4 15.3954 26.4 15.8211V25.681C26.4 27.4514 24.92 28.8911 23.1 28.8911H19.8V27.2861H13.2V32.1013H23.1C26.7399 32.1013 29.7 29.2218 29.7 25.681C31.5199 25.681 33 24.344 33 22.7004V16.0506C33 7.20032 25.5981 0 16.5 0Z"
                fill="white"
              />
            </svg>
            <h4 className="">Support</h4>
            <h5 className="font-extralight">Online 24/7</h5>
          </article>
        </div>

        <Link
          href={"https://api.whatsapp.com/message/UT7SN2373O3NL1"}
          target="_blank"
          className="main-btn flex items-center gap-2 justify-center mt-7"
        >
          <h4>Hire Me</h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <path
              d="M8.09695 4.1483L8.09726 4.14846L15.5873 7.89346C17.1948 8.69721 17.8309 9.6708 17.8309 10.5C17.8309 11.3292 17.1948 12.3028 15.5873 13.1065L8.09726 16.8515C6.86746 17.4664 5.8559 17.7824 5.07777 17.8566C4.2975 17.931 3.82094 17.7588 3.55153 17.489C3.28207 17.2192 3.1105 16.7423 3.18549 15.9623C3.26026 15.1846 3.57675 14.1742 4.19152 12.9467C4.19157 12.9466 4.19162 12.9465 4.19168 12.9464L4.95257 11.4334L4.95259 11.4334L4.95483 11.4288C5.24163 10.8437 5.24163 10.165 4.95483 9.57992L4.95484 9.57991L4.95308 9.57639L4.19183 8.05389L4.19168 8.05358C3.57686 6.82608 3.26091 5.81569 3.18676 5.03806C3.11241 4.25834 3.28451 3.78128 3.55458 3.51121C3.82465 3.24114 4.30172 3.06904 5.08144 3.14338C5.85907 3.21753 6.86945 3.53348 8.09695 4.1483ZM8.25962 11.6562H12.9846C13.6195 11.6562 14.1409 11.1349 14.1409 10.5C14.1409 9.8651 13.6195 9.34375 12.9846 9.34375H8.25962C7.62473 9.34375 7.10337 9.8651 7.10337 10.5C7.10337 11.1349 7.62473 11.6562 8.25962 11.6562Z"
              stroke="black"
            />
          </svg>
        </Link>
      </div>

      <div className="sm:w-[20rem]">
        <Image
          src={profile}
          alt={"profile picture"}
          width={200}
          height={200}
          quality={1000}
          className="w-full h-auto grayscale hover:grayscale-0 transition duration-500"
        />
      </div>
      <h5 className="absolute xl:-right-9 lg:right-1 top-10 hidden lg:block -rotate-90">
        About Me
      </h5>
    </div>
  );
};
export default Hero;
