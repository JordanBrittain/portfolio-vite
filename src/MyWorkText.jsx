import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function MyWorkText() {

    const container = useRef();

    useGSAP(() => {
        gsap.from(".fade-in", { scrollTrigger: {
            trigger: ".fade-in",
            toggleActions: "restart none none restart"
            },
            stagger: .1,
            ease: "power2.out",
            y: 30, 
            opacity: 0, 
            scale: 0.9, 
            duration: 1 });
        
    }, {scope: container});


  return (

    <div ref={container} className="w-full pt-12 pb-24 lg:pt-4 lg:pb-52 2xl:pb-80 flex flex-col items-center">
       
      <div className="w-cs flex flex-col gap-4">
        <h1 className="fade-in font-display text-lg lg:text-xl lg:leading-tight font-semibold w-full text-slate-950">
          Where are the case studies?
        </h1>
        <p className="fade-in text-base lg:text-lg 2xl:text-xl 2xl:leading-relaxed text-slate-700 leading-relaxed">
        Due to the sensitivity of the projects I work on, I am not allowed to show the majority of my work online. However, I’ve presented a few work samples above and can present case studies upon request.
          </p>
      </div>
    </div>
   
  
  );
}

export default MyWorkText;