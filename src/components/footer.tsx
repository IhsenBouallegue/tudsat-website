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
    <footer className="bg-primary mt-16 text-secondary-foreground p-4 flex items-center justify-between">
      <Image src="tudsat_logo.svg" alt="logo" width={52} height={52} />
      <nav className="flex">
        <ul>
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
