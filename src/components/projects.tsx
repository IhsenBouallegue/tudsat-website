import Image from "next/image";
import ProjectCard from "./project-card";

export default function Projects() {
  return (
    <div className="flex-col gap-6 w-full">
      <h2 className="mb-32 text-3xl font-bold text-center">Our Projects</h2>
      <div className="flex gap-16 justify-center">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
