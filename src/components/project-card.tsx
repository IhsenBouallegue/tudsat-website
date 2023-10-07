import Image from "next/image";

export default function ProjectCard() {
  return (
    <div className="flex-col w-72 h-96 rounded-lg overflow-hidden bg-white shadow-md shadow-primary/10">
      <div className="h-1/2 overflow-hidden">
        <Image
          src={
            "https://images.unsplash.com/photo-1628126235206-5260b9ea6441?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
          }
          width={288}
          height={192}
          alt="rocket"
        />
      </div>
      <div className="p-5">
        <h3 className="mb-3 text-2xl font-bold text-center">Project X</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempora
          veniam deserunt expedita sunt.
        </p>
      </div>
    </div>
  );
}
