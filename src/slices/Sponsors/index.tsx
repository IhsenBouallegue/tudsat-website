import Bounded from "@/components/bounded";
import { Button } from "@/components/ui/button";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { ReactNode } from "react";

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
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8">{slice.primary.title}</h2>
          <SponsorGrid>
            {sponsors.data.sponsors.slice(0, 5).map((sponsor) => (
              <SponsorCard key={sponsor.name} sponsor={sponsor} />
            ))}
          </SponsorGrid>
          <div className="flex justify-center">
            <PrismicNextLink field={slice.primary.sponsors_page}>
              <Button variant="outline">View More</Button>
            </PrismicNextLink>
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
    <div className="p-4 flex items-center justify-center shadow-md bg-white/10 rounded-lg ring-2 ring-accent/90">
      <PrismicNextImage field={sponsor.logo} className="object-contain h-20 w-auto" />
    </div>
  );
};

const HighlightedSponsor = ({ sponsor }: { sponsor: Content.SponsorsDocumentDataSponsorsItem }) => {
  return (
    <div className="p-4 flex col-span-full justify-center shadow-md bg-white/10 rounded-lg ring-2 ring-secondary/90">
      <PrismicNextImage field={sponsor.logo} className="object-contain h-48 w-auto" />
    </div>
  );
};

export default Sponsors;
