import ArrowIcon from "./ArrowIcon";

function ArrowButton({destination}) {
  return (
    <a href={destination}>
    <button className="w-24 h-24 2xl:w-36 2xl:h-36 p-0 group relative rounded-full transition-all duration-1000 overflow-hidden bg-slate-600

before:bg-primary-500 before:w-32 before:h-32 2xl:before:w-40 2xl:before:h-40 before:absolute before:rounded-full before:transition-all before:duration-1000 before:top-0 before:left-0 before:-translate-x-full before:-translate-y-full

hover:before:left-1/2 hover:before:top-1/2 hover:before:-translate-x-1/2 hover:before:-translate-y-1/2
"
    >

    
      
        <div className="transition-all fill-white duration-1000 absolute -top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 group-hover:top-1/2"><ArrowIcon/></div>
        <div className="transition-all fill-slate-50 duration-1000 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 group-hover:top-full group-hover:translate-y-0"><ArrowIcon/></div>
      
    </button>
    </a>
  );
}

export default ArrowButton;
