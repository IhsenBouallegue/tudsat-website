import ProjectCard from "./project-card";

export default function Projects() {
  return (
    <section className="flex flex-col" id="projects">
      <h2 className="mb-32 text-3xl font-bold text-center">Our Teams</h2>
      <div className="flex flex-col md:flex-row gap-16 justify-center items-center">
        <ProjectCard
          title="TRACE"
          subTitle="TRACE"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempora veniam deserunt expedita sunt."
          image="https://plus.unsplash.com/premium_photo-1680391380293-6abb21d52070?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          link="/trace"
        />
        <ProjectCard
          title="RAPID"
          subTitle="Rocketry and Propulsion in Darmstadt"
          description="Pushing the boundaries of rocketry. Together we want to reimage rockets and explore new possibilites."
          image="https://images.unsplash.com/photo-1628126235206-5260b9ea6441?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
          link="/rapid"
        />
      </div>
    </section>
  );
}
