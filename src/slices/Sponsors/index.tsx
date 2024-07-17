"use client";

import Bounded from "@/components/bounded";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselApi,
} from "@/components/ui/carousel";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import Autoplay from "embla-carousel-autoplay";
import { ReactNode, useEffect, useState } from "react";
import AutoScroll from "embla-carousel-auto-scroll";
/**
 * Props for `Sponsors`.
 */
export type SponsorsProps = SliceComponentProps<Content.SponsorsSlice>;

/**
 * Component for "Sponsors" Slices.
 */
const Sponsors = async ({ slice }: SponsorsProps) => {
  const client = createClient();
  const sponsors = await client.getSingle("sponsors");
  const categories = [...new Set(sponsors.data.sponsors.map((sponsor) => sponsor.category))];

  return (
    <Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      {slice.variation === "full" ? (
        <div className="flex flex-col gap-16 pt-12">
          {categories.map((category) => (
            <div key={category}>
              <h2 className="text-center text-xl md:text-3xl font-semibold leading-8">
                {category}
              </h2>

              <SponsorGrid>
                {sponsors.data.sponsors
                  .filter((sponsor) => sponsor.category === category)
                  .map((sponsor) =>
                    // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
                    sponsor.highlight ? (
                      <HighlightedSponsor key={sponsor.name} sponsor={sponsor} />
                    ) : (
                      <SponsorCard key={sponsor.name} sponsor={sponsor} />
                    ),
                  )}
              </SponsorGrid>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col">
          <h2 className="text-center mb-12 md:mb-28 text-lg font-semibold leading-8">
            {slice.primary.title}
          </h2>
          <SponsorCarousel sponsors={sponsors.data.sponsors} />
          <div className="flex justify-center mt-12">
            <Button variant="link" asChild>
              <PrismicNextLink field={slice.primary.sponsors_page}>View More</PrismicNextLink>
            </Button>
          </div>
        </div>
      )}
    </Bounded>
  );
};

const SponsorGrid = ({ children }: { children: ReactNode[] }) => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">{children}</div>
    </div>
  );
};

const SponsorCard = ({ sponsor }: { sponsor: Content.SponsorsDocumentDataSponsorsItem }) => {
  return (
    <PrismicNextLink
      field={sponsor.link}
      className="p-4 flex items-center justify-center shadow-md bg-white/10 rounded-lg ring-2 ring-accent/90"
    >
      <PrismicNextImage field={sponsor.logo} className="object-contain h-20 w-auto" />
    </PrismicNextLink>
  );
};

const HighlightedSponsor = ({ sponsor }: { sponsor: Content.SponsorsDocumentDataSponsorsItem }) => {
  return (
    <PrismicNextLink
      field={sponsor.link}
      className="p-4 flex col-span-full justify-center shadow-md bg-white/80 rounded-lg ring-8 ring-secondary/90"
    >
      <PrismicNextImage field={sponsor.logo} className="object-contain h-48 w-auto" />
    </PrismicNextLink>
  );
};

const SponsorCarousel = ({
  sponsors,
}: { sponsors: Content.SponsorsDocumentDataSponsorsItem[] }) => {
  return (
    <Carousel
      plugins={[
        AutoScroll({
          speed: 1,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
        dragFree: true,
      }}
      className="w-full"
      style={{
        maskImage: `linear-gradient(to right, transparent, rgba(0,0,0,1.0) 30px, rgba(0,0,0,0.5) 90%, transparent 100%),
          linear-gradient(to left, transparent, rgba(0,0,0,1.0) 30px, rgba(0,0,0,0.5) 90%, transparent 100%)`,
      }}
    >
      <CarouselContent className="-ml-1">
        {sponsors.map((sponsor) => (
          <CarouselItem
            className="basis-1/2 md:basis-1/4 lg:basis-1/6 flex items-center justify-center"
            style={{ boxSizing: "border-box" }}
            key={sponsor.name}
          >
            <PrismicNextLink field={sponsor.link}>
              <PrismicNextImage
                field={sponsor.logo}
                className="object-contain h-20 w-auto"
                style={{ filter: "drop-shadow(-3px -3px 8px rgba(255,255,255,0.3))" }}
              />
            </PrismicNextLink>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Sponsors;
