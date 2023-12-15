import ArrowButton from "./ArrowButton";

function HeroSection() {
    return (
        <div className="px-site w-full flex items-end justify-between flex-1 pb-16 2xl:pb-28">
            <h1 className="font-display self-center text-zinc-950 font-book text-4xl lg:text-7.5xl 2xl:text-8xl w-full lg:w-10/12">
            Hey, I'm <span className="border-b-2 group cursor-pointer border-primary-500 inline-block h-24">Jordan<div className="bg-[url('my-face.png')] transition-all duration-500 scale-0 group-hover:scale-100 w-36 bg-cover rounded-full h-36 relative -top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div></span>, an end-to-end product designer experienced in leading projects across web and mobile apps.
            
            </h1>


            <div className="hidden lg:block"><ArrowButton/></div>

        </div>
    );
}

export default HeroSection;

