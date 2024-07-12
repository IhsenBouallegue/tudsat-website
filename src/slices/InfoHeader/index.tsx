import { InfoCard } from "@/components/info-card";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `InfoHeader`.
 */
export type InfoHeaderProps = SliceComponentProps<Content.InfoHeaderSlice>;

/**
 * Component for "InfoHeader" Slices.
 */
const InfoHeader = ({ slice }: InfoHeaderProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col gap-4 py-10 md:gap-12 md:py-16"
    >
      <div className="flex flex-col p-4 md:p-0 md:flex-row prose lg:prose-xl prose-h2:text-sm dark:prose-invert md:items-center md:gap-12">
        <div className="md:flex-1">
          <h2>{slice.primary.subtext}</h2>
          <h1>{slice.primary.title}</h1>
        </div>
        <div className="md:w-72">
          <PrismicNextImage
            field={slice.primary.logo}
            style={{ filter: "drop-shadow(-4px -4px 10px rgba(255,255,255,0.4))" }}
          />
        </div>
      </div>
      <div className="flex flex-col p-4 md:p-0 md:flex-row gap-4 ">
        <InfoCard icon="userRound" description={slice.primary.lead} title="Lead" isTransparent />
        <InfoCard
          icon="calendar"
          description={slice.primary.meeting}
          title="Meeting"
          isTransparent
        />
        <InfoCard icon="mail" description={slice.primary.email} title="Email" isTransparent />
      </div>
    </section>
  );
};

export default InfoHeader;
