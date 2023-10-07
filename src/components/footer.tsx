import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { Icons } from "./icons";

export default function Footer() {
  return (
    <div className="bg-primary mt-16 text-primary-foreground p-6 flex items-center justify-between">
      <Icons.logo />
      <div className="flex">
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "link" }),
            "text-primary-foreground",
          )}
        >
          Imprint
        </Link>
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "link" }),
            "text-primary-foreground",
          )}
        >
          Privacy Policy
        </Link>
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "link" }),
            "text-primary-foreground",
          )}
        >
          Disclaimer
        </Link>
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "link" }),
            "text-primary-foreground",
          )}
        >
          Cookie Directive (EU)
        </Link>
      </div>
      <div>
        <Button variant="ghost" size="icon">
          <Icons.twitter />
        </Button>
        <Button variant="ghost" size="icon">
          <Icons.settings />
        </Button>
        <Button variant="ghost" size="icon">
          <Icons.pizza />
        </Button>
      </div>
    </div>
  );
}
