import clsx from "clsx";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  withExtraPadding?: boolean;
  children: React.ReactNode;
};

export default function Bounded({
  as: Comp = "section",
  className,
  withExtraPadding = false,
  children,
  ...restProps
}: BoundedProps) {
  const basePadding = withExtraPadding ? "px-4 py-8" : "px-6 py-4";
  const mdPadding = withExtraPadding ? "md:px-10 md:py-10" : "md:px-6 md:py-6";
  const lgPadding = withExtraPadding ? "lg:px-12 lg:py-12" : "lg:px-8 lg:py-8";

  const firstTypeBase = withExtraPadding ? "first-of-type:pt-18" : "first-of-type:pt-10";
  const firstTypeMd = withExtraPadding ? "md:first-of-type:pt-22" : "md:first-of-type:pt-14";
  const firstTypeLg = withExtraPadding ? "lg:first-of-type:pt-24" : "lg:first-of-type:pt-16";

  return (
    <Comp
      className={clsx(
        "w-full",
        basePadding,
        mdPadding,
        lgPadding,
        firstTypeBase,
        firstTypeMd,
        firstTypeLg,
        className,
      )}
      {...restProps}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center">{children}</div>
    </Comp>
  );
}
