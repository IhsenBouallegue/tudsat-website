import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import { buttonVariants } from "./ui/button";
import { Icons } from "./icons";

export async function Socials() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <div className="flex gap-1">
      {settings.data.socials.map((social) => (
        <PrismicNextLink
          field={social.link}
          key={social.social_platform}
          className={buttonVariants({ variant: "ghost", size: "icon" })}
        >
          {social.social_platform === "instagram" && <Icons.instagram />}
          {social.social_platform === "linkedin" && <Icons.linkedin />}
          {social.social_platform === "youtube" && <Icons.youtube />}
          {social.social_platform === "discord" && <Icons.discord />}
          {social.social_platform === "mail" && <Icons.mail />}
        </PrismicNextLink>
      ))}
    </div>
  );
}
