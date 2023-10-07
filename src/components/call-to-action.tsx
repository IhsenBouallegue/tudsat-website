import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export default function Example() {
  return (
    <section className="sm:px-6 lg:px-8">
      <div className="relative isolate overflow-hidden bg-primary px-6 pt-16 shadow-2xl flex flex-col rounded-3xl sm:px-64 md:pt-64 lg:gap-x-60 lg:px-24 lg:pt-0 lg:flex-row lg:justify-center">
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
        <div className="mx-auto max-w-md text-center my-32 lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Put Your Skills to Use.
            <br />
            Join our Team today.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <Link
              href="#"
              className={cn(buttonVariants({ variant: "secondary" }))}
            >
              Join now
            </Link>
          </div>
        </div>
        <div className="relative self-center mx-20">
          <Image
            className="rounded-lg"
            src="/team-pic-1.jpeg"
            alt="Team pic"
            width={1024 / 2}
            height={768 / 2}
          />

          <Image
            className="rounded-lg absolute top-0 left-0 mt-64 ml-64"
            src="/team-pic-2.jpeg"
            alt="Team pic"
            width={1024 / 2}
            height={768 / 2}
          />
        </div>
      </div>
    </section>
  );
}
