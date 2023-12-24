import ArrowButton from "./ArrowButton";

function Footer() {
    return <footer className="bg-slate-100 pt-10 lg:pt-16 pb-20 2xl:pb-24 w-full px-site flex flex-row justify-between items-end">
        <div className="flex flex-col gap-2">
    <div className=" text-4xl lg:text-6xl font-regular font-display text-slate-950">Get in touch</div>
    <div className="flex flex-col gap-1">
    <p className="text-base text-slate-950">jordan.brittain@gmail.com</p>
    <p className="text-base text-slate-950">LinkedIn</p>
    </div>
    </div>

    <div className="rotate-180 hidden lg:flex"><ArrowButton/></div>

    
    </footer>;
    
    }
    
    export default Footer;