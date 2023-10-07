import Image from "next/image";
import ProjectCard from "./project-card";

export default function Projects() {
  return (
    <section className="flex flex-col" id="projects">
      <h2 className="mb-32 text-3xl font-bold text-center">Our Projects</h2>
      <div className="flex flex-col md:flex-row gap-16 justify-center items-center">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}
