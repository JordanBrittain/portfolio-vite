import ArrowButton from "./ArrowButton";
import SunIcon from "./SunIcon";

function HeroSection() {
    return (
        <div className="px-site w-full flex items-end justify-between flex-1 pb-16 2xl:pb-28">
            <h1 className="font-display group self-center -translate-y-5 text-zinc-950 font-book text-5xl lg:text-7.5xl 2xl:text-9xl w-full lg:w-10/12">
            I'm Jordan, an end-to-end product designer experienced in leading projects across web and mobile apps.
            
            </h1>


            <div className="hidden lg:block"><ArrowButton/></div>

        </div>
    );
}

export default HeroSection;

