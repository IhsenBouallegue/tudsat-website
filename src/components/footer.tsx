import { cn } from "@/lib/utils";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Image from "next/image";
import { Icons } from "./icons";
import { buttonVariants } from "./ui/button";

export default async function Footer() {
  const client = createClient();
  const footer = await client.getSingle("footer");

  return (
    <footer className="mt-14 sm:mt-16 md:mt-20 lg:mt-24 p-4 sm:p-6 md:p-8 lg:p-10 bg-primary text-secondary-foreground flex items-center justify-between">
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
      <div>
        {footer.data.socials.map((social) => (
          <PrismicNextLink
            field={social.link}
            key={social.social_platform}
            className={buttonVariants({ variant: "ghost", size: "icon" })}
          >
            {social.social_platform === "instagram" && <Icons.instagram />}
            {social.social_platform === "linkedin" && <Icons.linkedin />}
            {social.social_platform === "youtube" && <Icons.youtube />}
          </PrismicNextLink>
        ))}
      </div>
    </footer>
  );
}
