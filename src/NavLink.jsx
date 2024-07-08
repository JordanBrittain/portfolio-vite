function NavLink({destination, text}) {
  return (
    <a href={destination}>
    <button className="font-normal rounded-full text-sm 2xl:text-base text-slate-700 px-4 py-2 hover:bg-slate-200 transition-all"> 
{text}
    </button>
    </a>
  );
}

export default NavLink;