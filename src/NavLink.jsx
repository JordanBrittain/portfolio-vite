function NavLink({destination, text}) {
  return (
    <a href={destination}>
    <button className="font-normal rounded-full text-base text-slate-700 px-4 py-1 hover:bg-slate-100 transition-all"> 
{text}
    </button>
    </a>
  );
}

export default NavLink;