import Bounded from "@/components/bounded";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Showcase`.
 */
export type ShowcaseProps = SliceComponentProps<Content.ShowcaseSlice>;

/**
 * Component for "Showcase" Slices.
 */
const Showcase = ({ slice }: ShowcaseProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      withExtraPadding
    >
      <h2 className="mb-32 text-3xl font-bold text-center">{slice.primary.title}</h2>
      <div className="flex flex-col md:flex-row gap-16 justify-center items-center">
        {slice.items.map((item) => (
          <PrismicNextLink
            key={item.title}
            field={item.link}
            className="relative cursor-pointer overflow-hidden flex-col w-72 h-96 rounded-xl shadow-lg shadow-primary/10 group"
          >
            <PrismicNextImage field={item.background_image} className="object-cover" fill />
            <div
              className={
                "p-3 h-1/4 ease-in transition-all backdrop-blur-md group-hover:backdrop-blur-lg text-white group-hover:bg-white group-hover:h-1/3 overflow-hidden"
              }
              style={{ backgroundColor: item.color || "#000000", opacity: 0.8 }}
            >
              <h3 className="transition-[margin] mb-0 group-hover:mb-3 text-6xl font-black text-center  tracking-widest font-mono">
                {item.title}
              </h3>
              <p className="text-center max-h-0 text-xs transition-all ease-in duration-200 opacity-100 group-hover:opacity-0">
                {item.subtitle}
              </p>
              <p className="text-center text-sm transition-all ease-in duration-200 opacity-0 group-hover:opacity-100">
                {item.description}
              </p>
            </div>
          </PrismicNextLink>
        ))}
      </div>
    </Bounded>
  );
};

export default Showcase;
