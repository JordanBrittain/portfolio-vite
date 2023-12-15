import ArrowButton from "./ArrowButton";
import SunIcon from "./SunIcon";

function HeroSection() {
    return (
        <div className="px-site w-full flex items-end justify-between flex-1 pb-16 2xl:pb-28">
            <h1 className="font-display group self-center text-zinc-950 font-book text-4xl lg:text-7.5xl 2xl:text-8xl w-full lg:w-10/12">
            I'm Jordan
            <div className="bg-[url('my-face.png')] w-24 bg-cover rounded-full h-16 relative top-2 mx-4 inline-block bg-center transition-all duration-500
            group-hover:w-36"></div> 
            an end-to-end product designer experienced in leading projects 
            <div className="inline-block top-4 relative mx-4"><div className="inline-block w-20 h-20 animate-spin-slow fill-primary-500"><SunIcon/></div></div>
             across web and mobile apps.
            
            </h1>


            <div className="hidden lg:block"><ArrowButton/></div>

        </div>
    );
}

export default HeroSection;

