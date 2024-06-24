import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Heading`.
 */
export type HeadingProps = SliceComponentProps<Content.HeadingSlice>;

/**
 * Component for "Heading" Slices.
 */
const Heading = ({ slice }: HeadingProps): JSX.Element => {
  return (
    <div data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <PrismicRichText field={slice.primary.heading} />
    </div>
  );
};

export default Heading;
