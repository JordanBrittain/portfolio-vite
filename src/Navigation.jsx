import ContactButton from "./ContactButton";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";

function Navigation() {
  return (
    <nav
      id="nav"
      className="w-full py-4 lg:py-4 pl-4 pr-3 lg:px-site flex flex-row justify-between items-center border-b border-slate-200"
    >
      
      <div className="h-min text-sm 2xl:text-base lg:w-1/3 font-medium hidden lg:block text-zinc-950">
      <Link to={"/"}>
          Jordan Brittain
          </Link>
        </div>
       

      <div className="flex flex-row flex-1 lg:w-1/3 lg:justify-center items-center gap-6">
      
        <div className="flex flex-row gap-0 lg:gap-1 items-center">
      <NavLink destination="/" text="My work" />
      <NavLink destination="about" text="About me" />
      </div>
      </div>
        
  
      
      <div className="w-1/3 flex justify-end">
      <ContactButton />
      </div>
    </nav>
  );
}

export default Navigation;
