import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export default function Example() {
  return (
    <section className="sm:px-6 lg:px-8">
      <div className="relative isolate backdrop-blur-sm backdrop-saturate-200 shadow-xl shadow-primary/10 ring-2 ring-secondary/90 overflow-hidden px-6 pt-16 flex flex-col rounded-3xl sm:px-64 md:pt-64 lg:gap-x-60 lg:px-24 lg:pt-0 lg:flex-row">
        <svg
          viewBox="0 0 1024 1024"
          className="bg-gradient-to-r from-accent to-transparent absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          aria-hidden="true"
        >
          <circle
            cx={512}
            cy={512}
            r={512}
            fill="url(#gradient)"
            fillOpacity="1"
          />
        </svg>
        <div className="max-w-md text-center my-32 lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Put Your Skills to Use.
            <br />
            Join our Team today.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            If you are not sure yet, you can always join our Discord server and get to know us.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <Link
              href="/membership"
              className={cn(buttonVariants({ variant: "default" }))}
            >
              Join now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
