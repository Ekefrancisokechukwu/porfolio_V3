import SingleProject from "./SingleProject";
import { SkeletonLoader } from "../Loaders";
import { projects } from "@/utils/data";

const ProjectsList = () => {
  return (
    <div className="mt-16">
      {projects.slice(0, 4).map((project: TProjects, i) => {
        return <SingleProject key={i} project={project} />;
      })}
    </div>
  );
};

export default ProjectsList;
