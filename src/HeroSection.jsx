import ArrowButton from "./ArrowButton";
import Button from "./Button";

function HeroSection() {
    return (
        <div className="px-site w-full flex flex-col gap-11 items-center justify-center pb-32 pt-20 lg:pb-52 lg:pt-28 2xl:pb-72 2xl:pt-48">
            <div className="flex flex-col gap-4 lg:gap-4 2xl:gap-5 w-3/5">
                <div className="flex flex-col items-center w-full gap-2">
                    <img className="rounded-full w-16 h-16 2xl:w-24 2xl:h-24 shadow-lg" src="/my-face.png"></img>
                    <div className="text-lg text-zinc-700">Jordan Brittain</div>
                </div>
            <h1 className="font-display w-full self-center text-zinc-950 font-semibold text-5xl text-center lg:text-7.5xl 2xl:text-7.5xl">
            End to end product designer experienced in B2B software.
            </h1>
            <p className="text-base leading-normal lg:leading-normal lg:text-xl text-zinc-700 text-center w-full 2xl:pt-2">Currently designing software from 0 to 1 at Siemens Digital.</p>
            </div>


            

        </div>
    );
}

export default HeroSection;

