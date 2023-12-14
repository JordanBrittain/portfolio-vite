import planeIcon from './assets/plane.svg'

function ContactButton() {
  return <button className="
  flex flex-row group gap-1 px-5 py-3 bg-transparent border-0 bg-zinc-200 rounded-full relative overflow-hidden transition-all duration-1000
  before:w-full before:h-full before:bg-primary-500 before:absolute before:rounded-full before:top-0 before:left-0 before:-translate-x-full before:transition-all before:duration-1000 before:z-0
  hover:before:left-1/2 hover:before:top-1/2 hover:before:-translate-x-1/2 hover:before:-translate-y-1/2
  ">
    <div className='text-zinc-950 text-base font-medium transition-all duration-1000 z-10
    group-hover:text-zinc-50'>Get in touch</div>
    <img src={planeIcon}></img>
    </button>;
}

export default ContactButton;
