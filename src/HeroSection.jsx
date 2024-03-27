import ArrowButton from "./ArrowButton";
import SunIcon from "./SunIcon";

function HeroSection() {
    return (
        <div className="px-site w-full flex flex-col items-center justify-center flex-1 pb-16 2xl:pb-28">
            <div className="flex flex-col gap-5 w-min">
            <h1 className="font-display w-max self-center text-zinc-950 font-semibold text-4xl text-center lg:text-8xl 2xl:text-8xl">
            Hey, I'm Jordan
            </h1>
            <p className="text-base lg:text-xl text-zinc-900 text-center w-full">I’m an end-to-end product designer skilled at translating complex workflows into simple, intuitive product experiences.</p>
            </div>


            <div className="hidden lg:block"><ArrowButton destination="#section-header"/></div>

        </div>
    );
}

export default HeroSection;

