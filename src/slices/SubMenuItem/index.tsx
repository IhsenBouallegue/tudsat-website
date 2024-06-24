import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SubMenuItem`.
 */
export type SubMenuItemProps = SliceComponentProps<Content.SubMenuItemSlice>;

/**
 * Component for "SubMenuItem" Slices.
 */
const SubMenuItem = ({ slice }: SubMenuItemProps): JSX.Element => {
  return (
    <div data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <PrismicNextLink field={slice.primary.link}>{slice.primary.label}</PrismicNextLink>
    </div>
  );
};

export default SubMenuItem;
