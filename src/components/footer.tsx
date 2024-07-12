import { cn } from "@/lib/utils";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Image from "next/image";
import { Icons } from "./icons";
import { buttonVariants } from "./ui/button";
import { Socials } from "./socials";

export default async function Footer() {
  const client = createClient();
  const footer = await client.getSingle("footer");
  const settings = await client.getSingle("settings");
  return (
    <footer className="mt-14 sm:mt-16 md:mt-20 lg:mt-24 p-4 sm:p-6 bg-primary text-secondary-foreground flex items-center justify-between">
      <Image src="tudsat_logo.svg" alt="logo" width={52} height={52} />
      <nav>
        <ul className="flex">
          {footer.data.navigation.map((item) => (
            <li key={item.label}>
              <PrismicNextLink
                field={item.link}
                className={cn(buttonVariants({ variant: "link" }), "text-secondary-foreground")}
              >
                {item.label}
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
      <Socials />
    </footer>
  );
}
