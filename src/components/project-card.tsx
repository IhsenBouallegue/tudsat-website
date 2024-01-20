import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  title,
  subTitle,
  description,
  image,
  link,
  color,
}: {
  title: string;
  subTitle: string;
  description: string;
  image: string;
  link: string;
  color: string;
}) {
  return (
    <Link
      href={link}
      className="relative cursor-pointer overflow-hidden flex-col w-72 h-96 rounded-xl shadow-lg shadow-primary/10 group"
    >
      <Image src={image} fill alt={title} className="object-cover" />
      <div
        className={cn(
          "p-3 h-1/4 ease-in transition-all backdrop-blur-md group-hover:backdrop-blur-lg text-white group-hover:bg-white group-hover:text-black group-hover:h-1/2",
          color,
        )}
      >
        <h3 className="transition-[margin] mb-0 group-hover:mb-3 text-6xl font-black text-center  tracking-widest font-mono">
          {title}
        </h3>
        <p className="text-center max-h-0 text-xs transition-all ease-in duration-200 opacity-100 group-hover:opacity-0">
          {subTitle}
        </p>
        <p className="text-center text-sm transition-all ease-in duration-200 opacity-0 group-hover:opacity-100">
          {description}
        </p>
      </div>
    </Link>
  );
}
