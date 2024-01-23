import ProjectCard from "./project-card";

export default function Projects() {
  return (
    <section className="flex flex-col" id="projects">
      <h2 className="mb-32 text-3xl font-bold text-center">Our Teams</h2>
      <div className="flex flex-col md:flex-row gap-16 justify-center items-center">
        <ProjectCard
          title="TRACE"
          subTitle="TU Darmstadt Research Cubesat for Education"
          description="CubeSat Development for Space Safety Research."
          image="/trace-bg.png"
          link="/trace"
          color="bg-[#327227]"
        />
        <ProjectCard
          title="RAPID"
          subTitle="Rocketry and Propulsion in Darmstadt"
          description="Pushing the boundaries of rocketry. Together we want to reimage rockets and explore new possibilites."
          image="/frodo-bg.png"
          link="/rapid"
          color="bg-[#930D16]"
        />
      </div>
    </section>
  );
}
