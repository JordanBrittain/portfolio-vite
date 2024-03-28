import ArrowButton from "./ArrowButton";
import Button from "./Button";

function HeroSection() {
    return (
        <div className="px-site w-full flex flex-col gap-11 items-center justify-center pb-32 pt-20 lg:pb-52 lg:pt-28 2xl:pb-80 2xl:pt-56">
            <div className="flex flex-col gap-4 lg:gap-4 2xl:gap-5 w-min">
            <h1 className="font-display w-max self-center text-zinc-950 font-semibold text-5xl text-center lg:text-7.5xl 2xl:text-8xl">
            Hey, I'm Jordan
            </h1>
            <p className="text-base leading-normal lg:leading-normal lg:text-xl text-zinc-900 text-center w-full">I’m an end-to-end product designer skilled at translating complex workflows into simple product experiences.</p>
            </div>


            

        </div>
    );
}

export default HeroSection;

