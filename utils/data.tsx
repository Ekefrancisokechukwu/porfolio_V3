import html from "../public/image/html.svg";
import css from "../public/image/css.svg";
import javascript from "../public/image/javascript.svg";
import react from "../public/image/react.svg";
import next from "../public/next.svg";
import typescript from "../public/image/typescript.svg";
import tailwind from "../public/image/tailwind-css.svg";
import github from "../public/image/github.svg";
import sass from "../public/image/sass.svg";

// project images;
import x3code from "@/public/image/x3code.png";
import admin from "@/public/image/admin.png";
import getLinked from "@/public/image/GetLinked.png";
import yummi from "@/public/image/yummi.png";
import pexels from "@/public/image/pexels.png";
import don from "@/public/image/don.png";
import house from "@/public/image/house.png";

export const navlinks = [
  {
    path: "home",
    hash: "#home",
  },
  {
    path: "my services",
    hash: "#my services",
  },
  {
    path: "my projects",
    hash: "#my projects",
  },
  {
    path: "about me",
    hash: "/about_me/",
  },
  {
    path: "contact me",
    hash: "#contact me",
  },
] as const;

export const tools = [
  {
    icon: html,
  },
  {
    icon: css,
  },
  {
    icon: javascript,
  },
  {
    icon: react,
  },
  {
    icon: next,
  },
  {
    icon: typescript,
  },
  {
    icon: tailwind,
  },
  {
    icon: github,
  },
  {
    icon: sass,
  },
];
export const services = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="max-w-8 max-h-8"
        viewBox="0 0 73 73"
        fill="none"
      >
        <path
          d="M50.6436 14.5696H49.792C49.4878 12.1667 48.6057 10.2505 47.2066 8.82087C45.3815 6.99587 42.7353 6.08337 39.3286 6.08337H22.3561C15.5124 6.08337 11.7407 9.85504 11.7407 16.6988C11.7407 20.1055 12.6532 22.7517 14.4782 24.5767C16.3032 26.4017 18.9495 27.3142 22.3561 27.3142H39.3286C45.412 27.3142 49.062 24.303 49.792 18.828H50.6436C57.0007 18.828 57.0007 19.6796 57.0007 25.185V30.8425C57.0007 36.348 57.0007 37.1996 50.6436 37.1996H39.3286C30.2341 37.1996 28.9261 41.5188 28.7436 45.7163C26.0061 45.8988 23.0557 47.1763 23.0557 52.043V60.5292C23.0557 65.7913 26.5232 66.8863 29.4128 66.8863H32.2416C35.1311 66.8863 38.5986 65.7913 38.5986 60.5292V52.043C38.5986 47.2371 35.7091 45.8988 32.9716 45.7163C33.1236 42.6442 34.0057 41.4275 39.2982 41.4275H50.6132C60.4986 41.4275 61.2286 37.4125 61.2286 30.8121V25.185C61.259 18.5846 60.529 14.5696 50.6436 14.5696Z"
          fill="white"
        />
      </svg>
    ),
    head: "Website development",
    text: "I build the visual elements of websites and web applications, including layout, navigation, forms, and interactive features. I use HTML, CSS, and JavaScript to bring the design concepts to life.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="max-w-8 max-h-8"
        viewBox="0 0 73 73"
        fill="none"
      >
        <path
          d="M58.9169 14.8741L41.0927 6.93536C38.4769 5.77952 34.5227 5.77952 31.9069 6.93536L14.0827 14.8741C9.58103 16.8816 8.91187 19.6191 8.91187 21.0791C8.91187 22.5391 9.58103 25.2766 14.0827 27.2841L31.9069 35.2229C33.2148 35.8008 34.8573 36.105 36.4998 36.105C38.1423 36.105 39.7848 35.8008 41.0927 35.2229L58.9169 27.2841C63.4185 25.2766 64.0877 22.5391 64.0877 21.0791C64.0877 19.6191 63.449 16.8816 58.9169 14.8741Z"
          fill="white"
        />
        <path
          d="M36.5002 51.83C35.3444 51.83 34.1886 51.5867 33.124 51.1304L12.6231 42.0055C9.49022 40.6063 7.05688 36.865 7.05688 33.428C7.05688 32.1809 8.06063 31.1771 9.30772 31.1771C10.5548 31.1771 11.5586 32.1809 11.5586 33.428C11.5586 35.0705 12.9273 37.1996 14.4481 37.8688L34.949 46.9938C35.9223 47.4196 37.0477 47.4196 38.0211 46.9938L58.5219 37.8688C60.0427 37.1996 61.4115 35.1009 61.4115 33.428C61.4115 32.1809 62.4152 31.1771 63.6623 31.1771C64.9094 31.1771 65.9131 32.1809 65.9131 33.428C65.9131 36.8346 63.4798 40.6063 60.3469 42.0055L39.8461 51.1304C38.8119 51.5867 37.6561 51.83 36.5002 51.83Z"
          fill="white"
        />
        <path
          d="M36.5002 66.9166C35.3444 66.9166 34.1886 66.6733 33.124 66.217L12.6231 57.092C9.24689 55.6016 7.05688 52.2253 7.05688 48.5145C7.05688 47.2674 8.06063 46.2637 9.30772 46.2637C10.5548 46.2637 11.5586 47.2674 11.5586 48.5145C11.5586 50.4308 12.684 52.1645 14.4481 52.9553L34.949 62.0803C35.9223 62.5062 37.0477 62.5062 38.0211 62.0803L58.5219 52.9553C60.2556 52.1949 61.4115 50.4308 61.4115 48.5145C61.4115 47.2674 62.4152 46.2637 63.6623 46.2637C64.9094 46.2637 65.9131 47.2674 65.9131 48.5145C65.9131 52.2253 63.7231 55.5712 60.3469 57.092L39.8461 66.217C38.8119 66.6733 37.6561 66.9166 36.5002 66.9166Z"
          fill="white"
        />
      </svg>
    ),
    head: "Responsive Web Design:",
    text: "I design and code websites to be responsive, meaning they adapt and look good on various screen sizes and devices, including desktops, tablets, and smartphones.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="max-w-8 max-h-8"
        viewBox="0 0 73 73"
        fill="none"
      >
        <path
          d="M42.5225 23.5729H30.4471C26.645 23.5729 23.5425 26.645 23.5425 30.4775V42.5529C23.5425 46.3549 26.6146 49.4575 30.4471 49.4575H42.5225C46.3246 49.4575 49.4271 46.3854 49.4271 42.5529V30.4775C49.4271 26.645 46.355 23.5729 42.5225 23.5729ZM41.0625 39.4808L38.3554 44.1954C37.96 44.895 37.23 45.26 36.5 45.26C36.135 45.26 35.7396 45.1687 35.4354 44.9862C34.4012 44.4083 34.0362 43.1004 34.6446 42.0662L36.5912 38.69H34.8879C33.5191 38.69 32.3937 38.0816 31.7854 37.0475C31.1771 36.0133 31.2379 34.7358 31.9375 33.5495L34.6446 28.835C35.2529 27.8008 36.5608 27.4662 37.5646 28.0441C38.5987 28.622 38.9637 29.93 38.3554 30.9641L36.4087 34.3404H38.1121C39.4808 34.3404 40.6062 34.9487 41.2146 35.9829C41.8229 37.017 41.7621 38.2945 41.0625 39.4808Z"
          fill="white"
        />
        <path
          d="M64.6355 38.7813C65.913 38.7813 66.9168 37.7471 66.9168 36.5C66.9168 35.2225 65.913 34.2188 64.6355 34.2188H60.8335V27.5271H64.6355C65.913 27.5271 66.9168 26.5234 66.9168 25.2459C66.9168 23.9988 65.913 22.9646 64.6355 22.9646H60.1339C58.6739 18.1284 54.8718 14.3263 50.0356 12.8663V8.36462C50.0356 7.11754 49.0014 6.08337 47.7543 6.08337C46.5072 6.08337 45.4731 7.11754 45.4731 8.36462V12.1667H38.7814V8.36462C38.7814 7.11754 37.7472 6.08337 36.5001 6.08337C35.2531 6.08337 34.2189 7.11754 34.2189 8.36462V12.1667H27.5577V8.36462C27.5577 7.11754 26.5235 6.08337 25.2764 6.08337C23.9989 6.08337 22.9952 7.11754 22.9952 8.36462V12.8663C18.1285 14.3263 14.3264 18.1284 12.8664 22.9646H8.36474C7.11766 22.9646 6.0835 23.9988 6.0835 25.2459C6.0835 26.5234 7.11766 27.5271 8.36474 27.5271H12.1668V34.2188H8.36474C7.11766 34.2188 6.0835 35.2225 6.0835 36.5C6.0835 37.7471 7.11766 38.7813 8.36474 38.7813H12.1668V45.4729H8.36474C7.11766 45.4729 6.0835 46.4767 6.0835 47.7542C6.0835 49.0013 7.11766 50.0354 8.36474 50.0354H12.8664C14.296 54.8717 18.1285 58.6738 22.9952 60.1338V64.6354C22.9952 65.8825 23.9989 66.9167 25.2764 66.9167C26.5235 66.9167 27.5577 65.8825 27.5577 64.6354V60.8333H34.2493V64.6354C34.2493 65.8825 35.2531 66.9167 36.5306 66.9167C37.7776 66.9167 38.8118 65.8825 38.8118 64.6354V60.8333H45.4731V64.6354C45.4731 65.8825 46.5072 66.9167 47.7543 66.9167C49.0014 66.9167 50.0356 65.8825 50.0356 64.6354V60.1338C54.8718 58.6738 58.6739 54.8717 60.1339 50.0354H64.6355C65.913 50.0354 66.9168 49.0013 66.9168 47.7542C66.9168 46.4767 65.913 45.4729 64.6355 45.4729H60.8335V38.7813H64.6355ZM52.4993 43.3742C52.4993 48.3929 48.3931 52.4992 43.3743 52.4992H29.626C24.6072 52.4992 20.501 48.3929 20.501 43.3742V29.6259C20.501 24.6071 24.6072 20.5009 29.626 20.5009H43.3743C48.3931 20.5009 52.4993 24.6071 52.4993 29.6259V43.3742Z"
          fill="white"
        />
      </svg>
    ),
    head: "Frontend Framework Integration",
    text: "I integrate frontend frameworks and libraries such as React or Next.j to streamline the development process and create dynamic and interactive user interfaces.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="max-w-8 max-h-8"
        viewBox="0 0 73 73"
        fill="none"
      >
        <path
          d="M48.6666 24.3334H24.3333V48.6667H48.6666V24.3334Z"
          fill="white"
        />
        <path
          d="M6.08325 57.7916C6.08325 62.8104 10.1895 66.9166 15.2083 66.9166C20.227 66.9166 24.3333 62.8104 24.3333 57.7916V48.6666H15.2083C10.1895 48.6666 6.08325 52.7729 6.08325 57.7916Z"
          fill="white"
        />
        <path
          d="M15.2083 6.08337C10.1895 6.08337 6.08325 10.1896 6.08325 15.2084C6.08325 20.2271 10.1895 24.3334 15.2083 24.3334H24.3333V15.2084C24.3333 10.1896 20.227 6.08337 15.2083 6.08337Z"
          fill="white"
        />
        <path
          d="M66.9167 15.2084C66.9167 10.1896 62.8105 6.08337 57.7917 6.08337C52.773 6.08337 48.6667 10.1896 48.6667 15.2084V24.3334H57.7917C62.8105 24.3334 66.9167 20.2271 66.9167 15.2084Z"
          fill="white"
        />
        <path
          d="M57.7917 48.6666H48.6667V57.7916C48.6667 62.8104 52.773 66.9166 57.7917 66.9166C62.8105 66.9166 66.9167 62.8104 66.9167 57.7916C66.9167 52.7729 62.8105 48.6666 57.7917 48.6666Z"
          fill="white"
        />
      </svg>
    ),
    head: "Mobile development",
    text: "Lorem ipsum dolor sit amet consectetur. In erat leo nisi nulla. Ac  sit tempus porta tempor eleifend facilisi accumsan tempor eleifend  facilisi accumsan.",
  },
];

export const skills = [
  "html/css",
  "javascript",
  "Responsive Web Design",
  "Version Control/Git",
  "Web Performance Optimization",
  "debugging and testing ",
  "React/next.js",
  "CSS Grid and Flexbox",
  "Continuous Learning",
  "Cross-Functional Collaboration",
];

export const projects = [
  {
    image: don,
    title: "Donmaneul porfolio",
    stacks: ["html", "sass/css", "next.js"],
    project_info:
      "A UI/UX designer portfolio with great optimization and loading",
    url: "https://donmauel-portfolio.vercel.app/",
    sourceCode: "https://github.com/Ekefrancisokechukwu/donmanuel_portfolio",
  },
  {
    image: x3code,
    title: "X3-Codes",
    stacks: ["html", "sass/css", "react.js"],
    project_info:
      "x3-code is a platform  for tech skill registration, i showcased my skill of crafting beautiful responsive interface",
    url: "https://x3-code.netlify.app/",
    sourceCode: "https://github.com/Ekefrancisokechukwu/x3-codes",
  },
  {
    image: yummi,
    title: "Yummi foods",
    stacks: ["html", "Tailwind.css", "react.js"],
    project_info:
      "E-commerce website , you can Filter the products, search for a products also has an add to cart and wishList functionality",
    url: "https://yummi-spok-food.netlify.app/",
    sourceCode: "https://github.com/Ekefrancisokechukwu/yummi-food",
  },
  {
    image: admin,
    title: "job tracting and ecommerce admine dashboard",
    stacks: ["html", "Tailwind.css", "react.js"],
    project_info:
      "An admin job and ecommerce tracking dashboard for updating and tracking jobs and sales",
    url: "https://tracting-dashboard.netlify.app/landing",
    sourceCode:
      "https://github.com/Ekefrancisokechukwu/admin_tracting_dash_Board",
  },
  {
    image: getLinked,
    title: "getlinked.ai",
    stacks: ["html", "Tailwind.css", "react.js"],
    project_info: "Getlinkend hackton challenge website for registration",
    url: "https://getlinked-challenge-omega.vercel.app/",
    sourceCode: "https://github.com/Ekefrancisokechukwu/getlinkedChallenge",
  },
  {
    image: pexels,
    title: "pexels clone",
    stacks: ["html", "Tailwind.css", "react.js"],
    project_info:
      "I recreated pexels website  using their Api with the search functionality",
    url: "https://specter-pexels-clone.netlify.app/",
    sourceCode: "https://github.com/Ekefrancisokechukwu/pexles_clone",
  },
  {
    image: house,
    title: "House of Jewellery",
    stacks: ["html", "css", "javascript"],
    project_info: "houseod of jewellerys is an ecommerce website  ",
    url: "https://household-of-jewellery.netlify.app/",
    sourceCode: "https://github.com/Ekefrancisokechukwu/HOUSEHOLD",
  },
];
