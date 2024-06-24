export default function ProjectCard({
  name,
  description,
  image,
  link,
  tags,
  ...props
}: { name: string; description: string; image: string; link: string; tags: string[] }) {
  return (
    <div className="flex flex-col">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}
