"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "./ui/carousel";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const testimonials = [
  { name: "Tyler", position: "TUDSaT Board Member", image: "/tyler.jpg", quote: "“The Sky is Not The Limit.”" },
  { name: "Sebastian", position: "TUDSaT Board Member", image: "/sebastian.jpg", quote: "“The Sky is Not The Limit.”" },
  { name: "Ihsen", position: "TUDSaT Board Member", image: "/ihsen.jpg", quote: "“The Sky is Not The Limit.”" },
]

export default function Testimonials() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [api, setApi] = useState<CarouselApi>()

  useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      setSelectedIndex(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section className="relative isolatepx-6 py-24 sm:py-32 lg:px-8">
      <div className="backdrop-blur-sm backdrop-saturate-200 absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] rounded-xl shadow-xl shadow-primary/10 ring-2 ring-secondary/90 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="absolute bg-gradient-to-l from-accent to-transparent to-60% inset-0 -z-10 opacity-20" />
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}>
        <CarouselContent>
          {testimonials.map((testemonial) => (
            <CarouselItem key={testemonial.name}>
              <Testemonial {...testemonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-6 gap-4">
          {testimonials.map((_, index) => (
            <div
              key={index}
              onClick={() => api.scrollTo(index)}
              className={cn("w-4 h-1 rounded-full cursor-pointer bg-primary/20 transition-all duration-1000", index === selectedIndex && "bg-primary w-8")}
            />
          ))}
        </div>
      </Carousel>
    </section >
  );
}
function Testemonial({ name, position, quote, image }: { name: string, position: string, quote: string, image: string }) {
  return <div className="mx-auto max-w-2xl lg:max-w-4xl">
    <figure className="mt-2">
      <blockquote className="text-center text-lg font-bold tracking-wide leading-8 sm:text-4xl sm:leading-9">
        <p>
          {quote}
        </p>
      </blockquote>
      <figcaption className="mt-10">
        <Image
          width={62}
          height={62}
          className="h-[62px] mx-auto rounded-full shadow-lg object-cover"
          src={image}
          alt="Avatar image" />
        <div className="mt-4 flex items-center justify-center space-x-3">
          <div className="font-semibold ">{name}</div>
          <svg
            viewBox="0 0 2 2"
            width={3}
            height={3}
            aria-hidden="true"
            className="fill-slate-400"
          >
            <circle cx={1} cy={1} r={1} />
          </svg>
          <div className="text-accent">{position}</div>
        </div>
      </figcaption>
    </figure>
  </div>;
}

