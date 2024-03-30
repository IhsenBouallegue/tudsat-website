import Image from "next/image";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="relative isolate px-6 lg:px-8">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#BA45A7]/80 to-[#BA45A7]/40 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="absolute left-[10%] top-[30%] transition-all duration-1000">
        <Image
          className="animate-float"
          src="/frodo.png"
          alt="Frodo"
          width={300}
          height={400}
        />
      </div>

      <div className="absolute right-[10%] top-[50%] transition-all duration-1000">
        <Image
          className="animate-float"
          src="/trace.png"
          alt="Trace"
          width={200}
          height={400}
        />
      </div>
      <div className="mx-auto max-w-2xl pb-32 py-16 sm:py-24 lg:py-36">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            TU Darmstadt Space Technology e.V.
          </h1>
          <p className="mt-6 text-lg leading-8 ">
            We are dedicated to the development of space technology and the
            promotion of space-related research and education. The members of
            the association work on various projects related to space
            technology, including the development of satellites, rockets, and
            other space-related technologies.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button>Join Now</Button>
            <Button variant="link">Learn more</Button>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-accent to-accent/10 opacity-40 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
