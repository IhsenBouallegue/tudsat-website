import Bounded from "@/components/bounded";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Projects`.
 */
export type ProjectsProps = SliceComponentProps<Content.ProjectsSlice>;

/**
 * Component for "Projects" Slices.
 */
const Projects = ({ slice }: ProjectsProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      withExtraPadding
    >
      <h2 className="text-4xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {slice.items.map((item) => (
          <div
            key={item.name}
            className="group flex flex-col aspect-[16/9] w-64 bg-slate-200 rounded-md relative overflow-hidden hover:shadow-lg hover:shadow-white/10 transition-shadow duration-300 cursor-pointer"
          >
            <PrismicNextLink
              field={item.link}
              className="absolute z-10 p-4 h-full flex flex-col justify-end"
            >
              <h3 className="text-3xl font-medium">{item.name}</h3>
            </PrismicNextLink>
            <PrismicNextImage
              className="absolute inset-0 w-full h-full object-cover"
              field={item.image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black from-20% to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300 h-full" />
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default Projects;
