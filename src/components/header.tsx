import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { marketingConfig } from "@/config/marketingConfig";
import { MainNav } from "./header-links";
import { createClient } from "@/prismicio";

export default async function Header() {
  const client = createClient();
  const header = await client.getSingle("header");

  return (
    <header className="container z-40 relative">
      <div className="flex h-20 items-center justify-between py-6">
        <MainNav items={header.data.navigation} />
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
