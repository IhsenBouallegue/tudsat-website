import Bounded from "@/components/bounded";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Article`.
 */
export type ArticleProps = SliceComponentProps<Content.ArticleSlice>;

/**
 * Component for "Article" Slices.
 */
const Article = ({ slice }: ArticleProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`${slice.variation === "withoutPadding" && "py-0 lg:py-0 md:py-0 p-0"}`}
    >
      <article
        className={`prose lg:prose-xl dark:prose-invert ${
          slice.variation === "withoutPadding" && "py-0"
        }`}
      >
        <PrismicRichText field={slice.primary.content} />
      </article>
    </Bounded>
  );
};

export default Article;
