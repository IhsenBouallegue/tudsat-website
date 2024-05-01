import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { marketingConfig } from "@/config/marketingConfig";
import { MainNav } from "./header-links";

export default function Header() {
  return (
    <header className="container z-40 relative">
      <div className="flex h-20 items-center justify-between py-6">
        <MainNav items={marketingConfig.mainNav} />
        <nav>
          <Link
            href="/membership"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }), "px-4")}
          >
            Membership
          </Link>
        </nav>
      </div>
    </header>
  );
}
