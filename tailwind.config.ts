import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: { mainColor: "#171515" },
      screens: { ms: "355px" },
      backgroundImage: {
        pattern: "url('/images/bg-pattern2.png')",
      },
    },
  },
  plugins: [],
};
export default config;
