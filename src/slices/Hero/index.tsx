import Bounded from "@/components/bounded";
import { Button } from "@/components/ui/button";
import type { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import type { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <div className="absolute top-0  w-full h-full  overflow-hidden">
        <div className="absolute w-full h-full top-0 left-0 -z-30">
          <PrismicNextImage
            height={100}
            width={100}
            className="absolute transform-gpu origin-top-left animate-fly h-[300px] w-auto object-contain  md:-rotate-[15deg] md:h-[400px]"
            field={slice.primary.background_image_2}
          />
        </div>
        <div className="absolute w-[80vmin] h-[80vmin] -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%] -z-30">
          <div className="w-full h-full animate-spin" style={{ animationDuration: "60s" }}>
            <PrismicNextImage
              height={100}
              width={100}
              className="h-[100px] w-auto object-contain md:h-[150px] -rotate-[30deg]"
              field={slice.primary.background_image_1}
            />
          </div>
        </div>
      </div>
      <div className="relative isolate px-0 lg:px-8 w-full">
        <div className="relative mx-auto max-w-2xl pb-32 sm:py-24 lg:py-36 z-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              {slice.primary.heading}
            </h1>
            <p className="mt-6 text-lg leading-8 max-w-[90%] md:max-w-[60%] m-auto backdrop-blur-sm">
              {slice.primary.body}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <PrismicNextLink field={slice.primary.cta_primary_link}>
                <Button>{slice.primary.cta_primary_text}</Button>
              </PrismicNextLink>
              <PrismicNextLink field={slice.primary.cta_secondary_link}>
                <Button variant="link">{slice.primary.cta_secondary_text}</Button>
              </PrismicNextLink>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#BA45A7]/80 to-[#BA45A7]/40 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-accent to-accent/10 opacity-40 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
