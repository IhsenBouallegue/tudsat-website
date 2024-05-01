"use client";

import { useRouter } from "next/navigation";
import * as React from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Content, LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import Image from "next/image";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import * as prismic from "@prismicio/client";
import Link from "next/link";

export function MobileNav({ items }: { items: Content.HeaderDocumentDataNavigationItem[] }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
          <svg
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
            {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
            <path
              d="M3 5H11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
            <path
              d="M3 12H16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
            <path
              d="M3 19H21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image className="mr-2 h-4 w-4" src="tudsat_logo.svg" alt="logo" width={24} height={24} />
          <span className="font-bold">{siteConfig.name}</span>
        </Link>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            {items?.map(
              (item) =>
                // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
                item.link && (
                  <MobileLink key={item.label} link={item.link} onOpenChange={setOpen}>
                    {item.label}
                  </MobileLink>
                ),
            )}
          </div>
          {/* Nested Links
          <div className="flex flex-col space-y-2">
            {items.map((item) => (
              <div key={item.label} className="flex flex-col space-y-3 pt-6">
                <h4 className="font-medium">{item.label}</h4>
                {item?.items?.length &&
                  item.items.map((item) => (
                    <React.Fragment key={item.href}>
                      {!item.disabled &&
                        (item.href ? (
                          <MobileLink
                            link={item.href}
                            onOpenChange={setOpen}
                            className="text-muted-foreground"
                          >
                            {item.title}
                            {item.label && (
                              <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                                {item.label}
                              </span>
                            )}
                          </MobileLink>
                        ) : (
                          item.title
                        ))}
                    </React.Fragment>
                  ))}
              </div>
            ))}
          </div> */}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps {
  link: LinkField;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({ link, onOpenChange, className, children, ...props }: MobileLinkProps) {
  const router = useRouter();
  return (
    <PrismicNextLink
      field={link}
      onClick={() => {
        router.push(prismic.asLink(link) || "");
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </PrismicNextLink>
  );
}
