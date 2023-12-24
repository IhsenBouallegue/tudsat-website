import Image from "next/image";
import { Icons } from "./icons";

export default function Testimonial() {
  return (
    <section className="relative isolatepx-6 py-24 sm:py-32 lg:px-8">
      <div className="backdrop-blur-sm backdrop-saturate-200 absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] rounded-xl shadow-xl shadow-primary/10 ring-2 ring-secondary/90 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="absolute bg-gradient-to-l from-accent to-transparent to-60% inset-0 -z-10 opacity-20" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <figure className="mt-2">
          <blockquote className="text-center text-lg font-bold tracking-wide leading-8 text-white sm:text-4xl sm:leading-9">
            <p>
              “The Sky&apos;s Not The Limit.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <Image
              width={62}
              height={62}
              className="h-[62px] mx-auto rounded-full shadow-lg object-cover"
              src="/tyler.jpg"
              alt="Avatar image"
            />
            <div className="mt-4 flex items-center justify-center space-x-3">
              <div className="font-semibold ">Tyler</div>
              <svg
                viewBox="0 0 2 2"
                width={3}
                height={3}
                aria-hidden="true"
                className="fill-slate-400"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-accent">TUDSaT Board Member</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section >
  );
}
