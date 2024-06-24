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
        <SponsorGrid sponsors={slice.items} />
      </div>
    </Bounded>
  );
};

const SponsorGrid = ({ sponsors }: { sponsors: Content.SponsorsSliceDefaultItem[] }) => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {sponsors.map((sponsor) => (
          <SponsorCard key={sponsor.name} sponsor={sponsor} />
        ))}
      </div>
    </div>
  );
};

const SponsorCard = ({ sponsor }: { sponsor: Content.SponsorsSliceDefaultItem }) => {
  return (
    <div className="p-4 flex items-center justify-center shadow-md bg-white/10 rounded-lg ring-2 ring-accent/90">
      <PrismicNextImage
        key={sponsor.name}
        field={sponsor.logo}
        width={258}
        height={28}
        className="saturate-0 hover:saturate-100 object-contain h-12 w-32"
      />
    </div>
  );
};

export default Sponsors;
