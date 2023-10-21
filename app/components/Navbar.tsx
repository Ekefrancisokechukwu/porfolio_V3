import Link from "next/link";
import { motion } from "framer-motion";
import { navlinks } from "@/utils/data";
import { useActiveContext } from "@/context/active_section";

const Navbar = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveContext();

  return (
    <nav className="lg:block hidden">
      <ul className="flex gap-11 items-center">
        {navlinks.map((link) => {
          const isActive = activeSection === link.path;

          return (
            <motion.li
              key={link.path}
              className="capitalize relative hover:text-gray-300 py-1 px-2 transition-colors 
              "
            >
              <Link
                onClick={() => {
                  setActiveSection(link.path);
                  setTimeOfLastClick(Date.now());
                }}
                href={link.hash}
              >
                {link.path}
              </Link>
              {isActive && (
                <motion.span
                  layoutId="activeSection"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  className="bg-[#ffffff0f] p-3 outline outline-1 outline-neutral-500 absolute inset-0   rounded-md"
                ></motion.span>
              )}
            </motion.li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navbar;
