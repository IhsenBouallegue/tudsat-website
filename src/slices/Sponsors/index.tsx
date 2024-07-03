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
  // get categories
  const categories = [...new Set(sponsors.data.sponsors.map((sponsor) => sponsor.category))];
  return (
    <Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      {slice.variation === "full" ? (
        <div>
          {categories.map((category) => (
            <div key={category}>
              <h2 className="text-center text-lg font-semibold leading-8">{category}</h2>

              <SponsorGrid>
                {sponsors.data.sponsors
                  .filter((sponsor) => sponsor.category === category)
                  .map((sponsor) => (
                    <div key={sponsor.name}>
                      {sponsor.highlight ? (
                        <HighlightedSponsor sponsor={sponsor} />
                      ) : (
                        <SponsorCard sponsor={sponsor} />
                      )}
                    </div>
                  ))}
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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {children}
      </div>
    </div>
  );
};

const SponsorCard = ({ sponsor }: { sponsor: Content.SponsorsDocumentDataSponsorsItem }) => {
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

const HighlightedSponsor = ({ sponsor }: { sponsor: Content.SponsorsDocumentDataSponsorsItem }) => {
  return (
    <div className="p-4 flex items-center justify-center shadow-md bg-white/10 rounded-lg ring-2 ring-secondary/90">
      <PrismicNextImage
        key={sponsor.name}
        field={sponsor.logo}
        width={258}
        height={28}
        className="object-contain h-36 "
      />
    </div>
  );
};

const isHighlighSponsor = (sponsor: Content.SponsorsDocumentDataSponsorsItem) => {
  return sponsor.highlight;
};

export default Sponsors;
