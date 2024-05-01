import Bounded from "@/components/bounded";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";

const sponsors = [
  { image: "/sponsors/1-serco.png", alt: "Serco" },
  { image: "/sponsors/2-ansys.svg", alt: "ansys" },
  { image: "/sponsors/3-servotecnica.png", alt: "servotecnica" },
  { image: "/sponsors/4-nanotec.png", alt: "nanotec" },
  { image: "/sponsors/5-siemens.svg", alt: "siemens" },
  { image: "/sponsors/6-astos.png", alt: "astos" },
  { image: "/sponsors/7-mt-aerospace.png", alt: "mt-aerospace" },
  { image: "/sponsors/9-rtm.png", alt: "rtm" },
  { image: "/sponsors/10-valispace.png", alt: "valispace" },
  { image: "/sponsors/11-igus.png", alt: "igus" },
  { image: "/sponsors/12-dglr.png", alt: "dglr" },
  { image: "/sponsors/13-tu_freunde.png", alt: "tu-freunde" },
  { image: "/sponsors/14-fablab.png", alt: "fablab" },
  { image: "/sponsors/15-fsr.png", alt: "fsr" },
];

/**
 * Props for `Sponsors`.
 */
export type SponsorsProps = SliceComponentProps<Content.SponsorsSlice>;

/**
 * Component for "Sponsors" Slices.
 */
const Sponsors = ({ slice }: SponsorsProps): JSX.Element => {
  return (
    <Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8">{slice.primary.title}</h2>
        <div className="mx-auto mt-12 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {slice.items.map((sponsor) => (
            <PrismicNextImage
              key={sponsor.name}
              field={sponsor.logo}
              width={158}
              height={48}
              className="col-span-2 max-h-12 saturate-0 hover:saturate-100 w-full object-contain lg:col-span-1"
            />
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default Sponsors;
