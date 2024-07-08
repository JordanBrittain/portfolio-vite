import Navigation from "./Navigation";
import PageContainer from "./PageContainer";
import ScrollToTop from "./ScrollToTop";
import Footer from "./Footer";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function About() {

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
    
    <PageContainer>
      <ScrollToTop />
      <Navigation />
    <div id="about" ref={container} className="w-full pt-16 pb-6 lg:pt-32 lg:pb-32 flex flex-col items-center">
       
      <div className="w-cs flex flex-col gap-4">
        <h1 className="fade-in font-display text-4xl pb-3 lg:text-3xl lg:leading-tight font-semibold w-full text-slate-950">
          Howdy <span className="wiggle"> 👋</span> 
        </h1>
        <p className="fade-in font-normal text-lg text-slate-700 leading-relaxed">
          I’m Jordan, a senior product designer with over 6 years of experience
          designing B2B products & features from 0 to 1. I typically work with lean teams, wearing many hats ranging from researcher to UI/UX designer, and even writing code occasionally.
          </p>
          
    
          
          <p className="fade-in font-normal text-lg text-slate-700 leading-relaxed">
          When I’m not working, I enjoy spending time outdoors, staying
          active, and hanging out with friends. You'll often find me running,
          hiking, or traveling. Some recent adventures of mine include a
          bike-packing trip in Italy and running my first marathon.
        </p>

        
      </div>
      <img src="/bike-pack.png" className="fade-in rounded mb-4 mt-10 lg:mt-32 w-4/5 2xl:w-3/5"></img>
    </div>
    <Footer />
    </PageContainer>
  );
}

export default About;
