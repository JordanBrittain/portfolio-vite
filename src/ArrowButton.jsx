import arrowIcon from "./assets/arrow-down.svg";

function ArrowButton() {
  return (
    <button
      className="w-24 h-24 p-0 group relative border border-zinc-950 rounded-full transition-all overflow-hidden

before:bg-blue-500 before:w-32 before:h-32 before:absolute before:rounded-full before:-left-28 before:-top-28 before:transition-all before:duration-700

hover:before:-left-4 hover:before:-top-4
"
    >
      
        <img className="transition-all duration-500 absolute -top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 group-hover:top-1/2" src={arrowIcon}></img>
        <img className="transition-all duration-500 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 group-hover:top-full group-hover:translate-y-0" src={arrowIcon}></img>
      
    </button>
  );
}

export default ArrowButton;
