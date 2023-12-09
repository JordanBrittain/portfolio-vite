import ArrowIcon from "./ArrowIcon";

function ArrowButton() {
  return (
    <button
      className="w-24 h-24 p-0 group relative border border-zinc-950 rounded-full transition-all duration-1000 overflow-hidden

before:bg-primary-500 before:w-32 before:h-32 before:absolute before:rounded-full before:transition-all before:duration-1000 before:top-0 before:left-0 before:-translate-x-full before:-translate-y-full

hover:before:left-1/2 hover:before:top-1/2 hover:before:-translate-x-1/2 hover:before:-translate-y-1/2
"
    >
      
        <div className="transition-all fill-white duration-1000 absolute -top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 group-hover:top-1/2"><ArrowIcon/></div>
        <div className="transition-all fill-zinc-950 duration-1000 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 group-hover:top-full group-hover:translate-y-0"><ArrowIcon/></div>
      
    </button>
  );
}

export default ArrowButton;
