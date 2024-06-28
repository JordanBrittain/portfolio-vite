import ContactButton from "./ContactButton";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";

function Navigation() {
  return (
    <nav
      id="nav"
      className="w-full py-4 lg:py-6 px-site flex flex-row justify-between items-center border-b border-zinc-100"
    >
      
      <div className="flex flex-row items-center gap-6">
      <Link to={"/"}>
      <div className="h-min text-base font-medium hidden lg:block text-zinc-950">
          Jordan Brittain
        </div>
        </Link>
        <div className="flex flex-row gap-1 items-center">
      <NavLink destination="/" text="My work" />
      <NavLink destination="about" text="About me" />
      </div>
      </div>
        
        <div className="lg:hidden text-base font-normal text-zinc-950">JB</div>
      
      
      <ContactButton />
    </nav>
  );
}

export default Navigation;
