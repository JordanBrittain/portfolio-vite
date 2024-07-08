import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";
import ArrowIcon from "./ArrowIcon";

export const Carousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
      AutoScroll({ startDelay: 0, speed: 1 }),
    ]);
    const [isPlaying, setIsPlaying] = useState(false);
  
    const onButtonAutoplayClick = useCallback(
      (callback) => {
        const autoScroll = emblaApi?.plugins()?.autoScroll;
        if (!autoScroll) return;
  
        const resetOrStop =
          autoScroll.options.stopOnInteraction === false
            ? autoScroll.reset
            : autoScroll.stop;
  
        resetOrStop();
        callback();
      },
      [emblaApi]
    );
  
    const scrollPrev = useCallback(() => {
      onButtonAutoplayClick(() => {
        if (emblaApi) emblaApi.scrollPrev();
      });
    }, [emblaApi, onButtonAutoplayClick]);
  
    const scrollNext = useCallback(() => {
      onButtonAutoplayClick(() => {
        if (emblaApi) emblaApi.scrollNext();
      });
    }, [emblaApi, onButtonAutoplayClick]);
  
    useEffect(() => {
      const autoScroll = emblaApi?.plugins()?.autoScroll;
      if (!autoScroll) return;
  
      setIsPlaying(autoScroll.isPlaying());
      emblaApi
        .on("autoScroll:play", () => setIsPlaying(true))
        .on("autoScroll:stop", () => setIsPlaying(false))
        .on("reInit", () => setIsPlaying(autoScroll.isPlaying()));
    }, [emblaApi]);
  
    return (
      <div className="embla lg:pb-0">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide overflow-hidden rounded lg:rounded-lg shadow lg:shadow-2xl">
              <img className="rounded-lg" src="/ia-thumb.png"></img>
            </div>
            <div className="embla__slide overflow-hidden rounded lg:rounded-lg shadow lg:shadow-2xl">
              <img className="rounded-lg" src="/ds-thumb.png"></img>
            </div>
            <div className="embla__slide overflow-hidden rounded lg:rounded-lg shadow lg:shadow-2xl">
              <img className="rounded-lg" src="/mc-thumb.png"></img>
            </div>
          </div>
        </div>
        <div className="w-full hidden lg:flex justify-center gap-5 pt-12">
          <button
            className="bg-slate-900 rounded-full py-2 px-2 hover:bg-slate-700 transition-all"
            onClick={scrollPrev}
          >
            <div className="w-6 h-6 fill-slate-50 rotate-90">
              <ArrowIcon />
            </div>
          </button>
          <button
            className="bg-slate-900 rounded-full py-2 px-2 hover:bg-slate-700 transition-all"
            onClick={scrollNext}
          >
            <div className="w-6 h-6 fill-slate-50 -rotate-90">
              <ArrowIcon />
            </div>
          </button>
        </div>
      </div>
    );
  };
