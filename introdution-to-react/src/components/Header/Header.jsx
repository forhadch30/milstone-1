import { NavLink } from "react-router-dom";
import '../Active/Active.css'
function Header() {
    return (
        <div className="space-x-4 bg-teal-900 py-5 text-white">

            <div className="flex justify-between max-w-6xl mx-auto">
                <span>My Website</span>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact Us</NavLink>
            </div>
        </div>
    );
}

export default Header;