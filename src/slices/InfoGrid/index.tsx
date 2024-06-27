import Bounded from "@/components/bounded";
import { RenderIcon } from "@/components/icons";
import { Card } from "@/components/ui/card";
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
          <Card key={item.title} className="flex items-center p-4">
            <RenderIcon name="arrowRight" className="w-6 h-6 mr-4" />
            <div>
              <p className="text-sm font-medium">{item.title}</p>
              <p className="text-lg">{item.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </Bounded>
  );
};

export default InfoGrid;
