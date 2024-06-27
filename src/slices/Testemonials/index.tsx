"use client";

import Bounded from "@/components/bounded";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Content, ImageFieldImage, KeyTextField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

/**
 * Props for `Testemonials`.
 */
export type TestemonialsProps = SliceComponentProps<Content.TestemonialsSlice>;

/**
 * Component for "Testemonials" Slices.
 */
const Testemonials = ({ slice }: TestemonialsProps): JSX.Element => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setSelectedIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative my-16 sm:my-24 lg:my-28"
    >
      <div className="absolute backdrop-blur-sm backdrop-saturate-200 inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] rounded-xl shadow-xl shadow-primary/10 ring-2 ring-accent/90 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="absolute bg-gradient-to-l from-primary to-transparent to-60% inset-0 -z-10 opacity-60" />
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full h-full"
      >
        <CarouselContent>
          {slice.items.map((testemonial) => (
            <CarouselItem key={testemonial.name}>
              <Testemonial {...testemonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-6 gap-4">
          {slice.items.map((testemonial, index) => (
            // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
            <div
              key={testemonial.name}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "w-4 h-1 rounded-full cursor-pointer bg-white/20 transition-all duration-1000",
                index === selectedIndex && "bg-primary w-8",
              )}
            />
          ))}
        </div>
      </Carousel>
    </Bounded>
  );
};

function Testemonial({
  name,
  position,
  quote,
  image,
}: {
  name: KeyTextField;
  position: KeyTextField;
  quote: KeyTextField;
  image: ImageFieldImage;
}) {
  return (
    <div className="mx-auto py-24">
      <figure className="mt-2">
        <blockquote className="text-center text-lg font-bold tracking-wide leading-8 sm:text-4xl sm:leading-9">
          <p>{quote}</p>
        </blockquote>
        <figcaption className="mt-10">
          <PrismicNextImage
            width={62}
            height={62}
            className="h-[62px] mx-auto rounded-full shadow-lg object-cover"
            field={image}
          />
          <div className="mt-4 flex items-center justify-center space-x-3">
            <div className="font-semibold ">{name}</div>
            <svg
              viewBox="0 0 2 2"
              width={3}
              height={3}
              aria-hidden="true"
              className="fill-slate-400"
            >
              <circle cx={1} cy={1} r={1} />
            </svg>
            <div className="text-accent">{position}</div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

export default Testemonials;
