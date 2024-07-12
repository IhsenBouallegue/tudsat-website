import Bounded from "@/components/bounded";
import { InfoCard } from "@/components/info-card";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `InfoGrid`.
 */
export type InfoGridProps = SliceComponentProps<Content.InfoGridSlice>;

/**
 * Component for "InfoGrid" Slices.
 */
const InfoGrid = ({ slice }: InfoGridProps): JSX.Element => {
  return (
    <Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <h2 className="text-4xl font-bold mb-6">{slice.primary.title}</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {slice.items.map((item) => (
          <InfoCard
            key={item.title}
            icon={item.icon}
            description={item.description}
            title={item.title}
          />
        ))}
      </div>
    </Bounded>
  );
};

export default InfoGrid;
