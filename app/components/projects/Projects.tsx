import { useSectionInView } from "@/lib/hooks";
import Nav from "./Nav";
import Link from "next/link";
import { motion } from "framer-motion";
import ProjectsList from "./ProjectsList";

const Projects = () => {
  const { ref } = useSectionInView("my projects", 0.2);

  return (
    <section
      ref={ref}
      id="my projects"
      className="bg-[#050505] overflow-hidden border-t border-[#d4e4fe31]  relative py-12 scroll-mt-36 xl:px-0 px-4 rounded-2xl"
    >
      <div className="shine max-w-[300px] h-[15rem] top-[-10rem] absolute w-full"></div>
      <div className="max-w-[1080px] mx-auto">
        <h1 className="primary-heading">My Projects</h1>
        <nav className="mt-5 flex justify-between items-center pb-7 borderStyle border-b">
          <Nav />

          <button className="main-btn sm:block hidden">let’s talk</button>
        </nav>

        <ProjectsList />

        <motion.button
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileTap={{ scale: 1.1 }}
          whileHover={{ scale: 1.04 }}
          viewport={{ once: true }}
          className="main-btn mx-auto mt-8"
        >
          <Link href={"/moreProjects"}>More Projects</Link>
        </motion.button>
      </div>
    </section>
  );
};
export default Projects;
