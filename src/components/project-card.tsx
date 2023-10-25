import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  title,
  subTitle,
  description,
  image,
  link,
}: {
  title: string;
  subTitle: string;
  description: string;
  image: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      className="relative cursor-pointer overflow-hidden flex-col w-72 h-96 rounded-xl bg-white shadow-lg shadow-primary/10 group"
    >
      <Image src={image} fill alt={title} />
      <div className="p-5 h-1/5 ease-in transition-all backdrop-blur-md bg-primary/[.3] text-white group-hover:backdrop-blur-lg group-hover:bg-white group-hover:text-black group-hover:h-1/2">
        <h3 className="transition-[margin] mb-0 group-hover:mb-3 text-2xl font-bold text-center">
          {title}
        </h3>
        <p className="text-center max-h-0 text-xs transition-all ease-in duration-200 opacity-100 group-hover:opacity-0">
          {subTitle}
        </p>
        <p className="text-center transition-all ease-in duration-200 opacity-0 group-hover:opacity-100">
          {description}
        </p>
      </div>
    </Link>
  );
}
