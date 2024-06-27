import ArrowButton from "./ArrowButton";

function Footer() {
    return <footer className="bg-slate-100 pt-10 lg:pt-16 pb-20 2xl:py-24 w-full px-site flex flex-row justify-between items-end 2xl:items-center">
        <div className="flex flex-col gap-4">
    <div className=" text-4xl lg:text-5xl 2xl:text-6xl font-semibold font-display text-slate-950">Get in touch</div>
    <div className="flex flex-col gap-2">
    <a href="mailto:jordan.brittain@gmail.com"><p className="text-base text-primary-500 hover:text-primary-700 transition-all">jordan.brittain@gmail.com</p></a>
    <a href="https://www.linkedin.com/in/jordan-brittain-8070a8a4/" target="_blank"><p className="text-base text-primary-500 hover:text-primary-700 transition-all">LinkedIn</p></a>
    </div>
    </div>

    <div className="rotate-180 hidden lg:flex"><ArrowButton destination="#nav"/></div>

    
    </footer>;
    
    }
    
    export default Footer;