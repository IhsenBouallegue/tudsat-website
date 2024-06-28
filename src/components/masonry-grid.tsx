import React from "react";

interface NewType extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode[];
}

export default function MasonryGrid({ children, ...props }: NewType) {
  return (
    <div className="columns-2 gap-8" {...props}>
      {children}
    </div>
  );
}
