"use client";

import SingleProjects from "./SingleProjects";
import { SkeltonSingleProject } from "../components/Loaders";
import { projects } from "@/utils/data";

const ProjectsContainer = () => {
  return (
    <section className=" mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  px-5   justify-between  gap-7">
      {projects.map((project, index) => {
        return <SingleProjects key={index} project={project} i={index} />;
      })}
    </section>
  );
};
export default ProjectsContainer;
