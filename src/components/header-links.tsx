"use client";

import * as React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { MobileNav } from "@/components/mobile-nav";
import Image from "next/image";
import { Content } from "@prismicio/client";
import * as prismic from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";

export function MainNav({ items }: { items: Content.HeaderDocumentDataNavigationItem[] }) {
  const segment = useSelectedLayoutSegment();

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <Image src="tudsat_logo.svg" alt="logo" width={52} height={52} />
        <span className="hidden font-bold sm:inline-block sm:text-2xl">{siteConfig.name}</span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map((item) => (
            <PrismicNextLink
              key={item.label}
              field={item.link}
              className={cn(
                "flex items-center text-lg font-medium transition-colors hover:text-accent sm:text-sm",
                prismic.asLink(item.link)?.startsWith(`/${segment}`)
                  ? "text-foreground"
                  : "text-foreground/80",
              )}
            >
              {item.label}
            </PrismicNextLink>
          ))}
        </nav>
      ) : null}

      {items && (
        <div className="md:hidden">
          <MobileNav items={items} />
        </div>
      )}
    </div>
  );
}
