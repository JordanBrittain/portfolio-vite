import ArrowButton from "./ArrowButton";

function HeroSection() {
    return (
        <div className="px-site w-full flex items-end justify-between flex-1 pb-16 2xl:pb-28">
            <h1 className="font-display text-zinc-950 font-regular text-4xl lg:text-5xl 2xl:text-8xl w-full lg:w-8/12">
            <span>Hey, I'm Jordan, an end-to-end product designer experienced in leading projects across web and mobile apps.</span>
            
            </h1>


            <div className="hidden lg:block"><ArrowButton/></div>

        </div>
    );
}

export default HeroSection;

