import ArrowButton from "./ArrowButton";

function HeroSection() {
    return (
        <div className="px-site w-screen flex items-end justify-between flex-1 pb-16">
            <h1 className="font-display font-regular text-5xl w-8/12">
            <span>I’m Jordan, a product designer who enjoys dynamic environments and wearing a lot of hats.</span>
            <span className="block pt-8">I most recently worked at FloSports, where I led design projects on consumer and business facing apps across web and native platforms.</span>
            </h1>


        <ArrowButton/>
        </div>
    );
}

export default HeroSection;