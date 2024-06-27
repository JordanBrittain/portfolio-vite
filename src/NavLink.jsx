function NavLink({destination, text}) {
  return (
    <a href={destination}>
    <button className="font-normal text-base text-slate-900 px-5 py-3 hover:bg-slate-100"> 
{text}
    </button>
    </a>
  );
}

export default NavLink;