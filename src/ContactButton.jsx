import ArrowIcon from "./ArrowIcon";
import PlaneIcon from "./PlaneIcon";

function ContactButton() {
  return <button className="
  flex flex-row group gap-1 px-6 py-3 bg-transparent border-0 rounded-full relative overflow-hidden transition-all duration-1000
  before:w-full before:h-full before:bg-primary-500 before:absolute before:rounded-full before:top-0 before:left-0 before:-translate-x-full before:transition-all before:duration-1000 before:z-0
  hover:before:left-1/2 hover:before:top-1/2 hover:before:-translate-x-1/2 hover:before:-translate-y-1/2 hover:gap-4
  ">
    <div className='text-primary-500 text-base font-semibold transition-all duration-1000 z-10
    group-hover:text-zinc-50'>Get in touch</div>

    <div className="fill-primary-500 group-hover:fill-zinc-50 transition-all duration-1000 z-10"><PlaneIcon/></div>
    </button>;
}

export default ContactButton;
