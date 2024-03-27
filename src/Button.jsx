import ArrowIcon from "./ArrowIcon";

function Button({text}) {
  return <a href="mailto:jordan.brittain@gmail.com">
    <button className="
  flex flex-row items-center group gap-2 px-6 py-3 bg-primary-100 border-0 rounded-full relative overflow-hidden transition-all duration-1000
  before:w-full before:h-full before:bg-primary-500 before:absolute before:rounded-full before:top-0 before:left-0 before:-translate-x-[110%] before:transition-all before:duration-1000 before:z-0
  hover:before:left-1/2 hover:before:top-1/2 hover:before:-translate-x-1/2 hover:before:-translate-y-1/2 hover:gap-4
  ">
    <div className='text-primary-500 text-base font-normal transition-all duration-1000 z-10
    group-hover:text-zinc-50'>{text}</div>

    <div className="fill-primary-500 group-hover:fill-zinc-50 transition-all duration-1000 z-10 w-5 h-5 -rotate-90"><ArrowIcon/></div>
    </button>
    </a>;
}

export default Button;
