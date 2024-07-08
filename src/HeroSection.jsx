import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Carousel } from "./Carousel";




gsap.registerPlugin(useGSAP, ScrollTrigger);





function HeroSection() {

    const container = useRef();

    useGSAP(() => {
        gsap.from(".fade-in", { scrollTrigger: {
            trigger: ".fade-in",
            toggleActions: "play none none restart"
            },
            stagger: .1,
            ease: "power2.out",
            y: 30, 
            opacity: 0, 
            scale: 0.9, 
            duration: 1 });
        
    }, {scope: container});

  return (
    <div ref={container} className="w-full flex flex-col gap-11 items-center justify-center pb-8 pt-16 lg:pb-32 lg:pt-24 2xl:pb-60 2xl:pt-48">
      <div className="px-0 lg:px-site flex flex-col gap-4 lg:gap-3 2xl:gap-5 w-cs lg:w-4/5 2xl:w-3/4">
        <div className="fade-in flex flex-col items-center w-full gap-2">
          <img
            className="rounded-full w-10 h-10 lg:w-16 lg:h-16 2xl:w-24 2xl:h-24 shadow-lg"
            src="/my-face.png"
          ></img>
          <div className="text-sm lg:text-sm 2xl:text-lg text-slate-700">
            Jordan Brittain
          </div>
        </div>
        <h1 className="fade-in font-display w-full self-center text-slate-950 font-semibold text-2xl text-center lg:text-[54px] lg:leading-tight 2xl:leading-tight 2xl:text-7xl">
          End-to-end product designer specializing in enterprise software.
        </h1>
        <p className="fade-in text-base lg:pt-3 leading-normal lg:leading-normal lg:text-lg text-slate-700 text-center w-full 2xl:text-xl 2xl:pt-2">
          Currently designing software at Siemens Digital Industries. 🌿 💡 🚀
        </p>
      </div>
      <div className="fade-in pt-6 lg:pt-28 2xl:pt-60 w-full">
      <Carousel/>
      </div>
    </div>
  );
}

export default HeroSection;
