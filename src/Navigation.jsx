import ContactButton from "./ContactButton";
import { Link } from "react-router-dom";

function Navigation() {
return <nav className="w-full py-4 lg:py-8 px-site flex flex-row justify-between items-center">
<Link to={'/'}><div className="h-min text-base font-medium text-zinc-950">Jordan Brittain</div></Link>
<ContactButton/>

</nav>;

}

export default Navigation;