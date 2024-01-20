import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { Icons } from "./icons";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-secondary mt-16 text-secondary-foreground p-4 flex items-center justify-between">
      <Image src="tudsat_logo.svg" alt="logo" width={52} height={52} />
      <div className="flex">
        <Link
          href="/imprint"
          className={cn(
            buttonVariants({ variant: "link" }),
            "text-secondary-foreground",
          )}
        >
          Imprint
        </Link>
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "link" }),
            "text-secondary-foreground",
          )}
        >
          Privacy Policy
        </Link>
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "link" }),
            "text-secondary-foreground",
          )}
        >
          Disclaimer
        </Link>
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "link" }),
            "text-secondary-foreground",
          )}
        >
          Cookie Directive (EU)
        </Link>
      </div>
      <div>
        <Button variant="ghost" size="icon">
          <Icons.instagram />
        </Button>
        <Button variant="ghost" size="icon">
          <Icons.linkedin />
        </Button>
        <Button variant="ghost" size="icon">
          <Icons.youtube />
        </Button>
      </div>
    </div>
  );
}
