import Bounded from "@/components/bounded";
import { Carousel as CarouselEmbla, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Carousel`.
 */
export type CarouselProps = SliceComponentProps<Content.CarouselSlice>;

/**
 * Component for "Carousel" Slices.
 */
const Carousel = ({ slice }: CarouselProps): JSX.Element => {
  return (
    <Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <CarouselEmbla
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full h-full"
      >
        <CarouselContent>
          {slice.primary.images.map((item) => (
            <CarouselItem
              key={item.image.alt}
              className="rounnded-lg overflow-hidden w-full h-full"
            >
              <PrismicNextImage field={item.image} className="w-full h-full object-contain" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </CarouselEmbla>
    </Bounded>
  );
};

export default Carousel;
