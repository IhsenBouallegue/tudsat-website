import Bounded from "@/components/bounded";
import { Socials } from "@/components/socials";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction = ({ slice }: CallToActionProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      withExtraPadding
    >
      <Card className="relative isolate overflow-hidden p-4 md:p-16 w-full rounded-3xl">
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 bg-gradient-to-r from-accent to-transparent -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          aria-hidden="true"
        >
          <circle cx={512} cy={512} r={512} fill="url(#gradient)" fillOpacity="1" />
        </svg>
        <div className="flex w-full flex-col lg:flex-row gap-6 items-center justify-center">
          <div className="max-w-md my-8 lg:flex-auto text-left">
            <div className="text-3xl font-bold tracking-tight sm:text-4xl">
              <PrismicRichText field={slice.primary.title} />
            </div>
            <div className="mt-6 text-lg leading-8 text-muted-foreground">
              <PrismicRichText field={slice.primary.body} />
            </div>
            <div className="mt-10 gap-6 flex flex-col md:flex-row items-center justify-between  lg:justify-start">
              <PrismicNextLink
                field={slice.primary.call_to_action_link}
                className={buttonVariants({ variant: "default" })}
              >
                {slice.primary.call_to_action_label}
              </PrismicNextLink>
              <Socials />
            </div>
          </div>
          <div className="w-full m-auto md:p-8">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
              <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <PrismicNextImage
                  field={slice.primary.image_1}
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
              </div>

              <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <PrismicNextImage
                  field={slice.primary.image_2}
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
              </div>

              <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <PrismicNextImage
                  field={slice.primary.image_3}
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
              </div>

              <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <PrismicNextImage
                  field={slice.primary.image_4}
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Bounded>
  );
};

export default CallToAction;
