import ArrowButton from "./ArrowButton";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";




gsap.registerPlugin(useGSAP, ScrollTrigger);

function Footer() {

    const container = useRef();

    useGSAP(() => {
        gsap.from(".fade-in", { scrollTrigger: {
            trigger: ".fade-in",
            toggleActions: "restart none none restart"
            },
            stagger: .25,
            ease: "power2.out",
            y: 30, 
            opacity: 0, 
            scale: 0.9, 
            duration: 1 });
    }, {scope: container});

    return <footer ref={container} className="bg-slate-900 pt-10 lg:pt-16 pb-20 2xl:py-24 w-full px-site flex flex-row justify-between items-end 2xl:items-center">
        <div className="flex flex-col gap-4">
    <div className="fade-in text-4xl lg:text-5xl 2xl:text-6xl font-semibold font-display text-slate-50">Get in touch</div>
    <div className="fade-in flex flex-col gap-2">
    <a href="mailto:jordan.brittain@gmail.com"><p className="text-base text-slate-100 hover:text-blue-400 transition-all">jordan.brittain@gmail.com</p></a>
    <a href="https://www.linkedin.com/in/jordan-brittain-8070a8a4/" target="_blank"><p className="text-base text-slate-100 hover:text-blue-400 transition-all">LinkedIn</p></a>
    </div>
    </div>

    <div className="fade-in rotate-180 hidden lg:flex"><ArrowButton destination="#nav"/></div>

    
    </footer>;
    
    }
    
    export default Footer;