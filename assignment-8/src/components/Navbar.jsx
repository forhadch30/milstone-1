import { TiShoppingCart } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
const Navbar = () => {
    const location = useLocation()
    return (
        <div>
            <div className={`navbar ${location.pathname === '/' ? 'bg-[#9538e2] text-white' :''} lg:px-16`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <NavLink className={({ isActive }) => `text-base ${isActive ? " underline text-2xl text-warning duration-1000 underline-offset-8" : ''}`} to="/">Home</NavLink>
                            <NavLink className={({ isActive }) => `text-base ${isActive ? " underline text-2xl text-warning duration-1000 underline-offset-8" : ''}`} to="/coffees">Statistics</NavLink>
                            <NavLink className={({ isActive }) => `text-base ${isActive ? " underline text-2xl text-warning duration-1000 underline-offset-8" : ''}`} to="/dashboard">Dashboard</NavLink>
                        </ul>
                    </div>
                    <Link to={'/'} className="md:text-xl">
                        Gadget Heaven
                    </Link>
                </div >
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-6">
                        <NavLink className={({ isActive }) => `text-xl ${isActive ? " underline  text-warning duration-900 underline-offset-8" : ''}`} to="/">Home</NavLink>
                        <NavLink className={({ isActive }) => `text-xl ${isActive ? " underline  text-warning duration-900 underline-offset-8" : ''}`} to="/statistics">Statistics</NavLink>
                        <NavLink className={({ isActive }) => `text-xl ${isActive ? " underline  text-warning duration-900 underline-offset-8" : ''}`} to="/dashboard">Dashboard</NavLink>
                    </ul>
                </div>
                <div className="navbar-end space-x-3 text-black">
                    <small className="bg-white p-2 rounded-full">
                        <TiShoppingCart className="text-2xl" />
                    </small>
                    <div className="bg-white p-2 rounded-full">
                        <FaRegHeart className="text-2xl" />
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Navbar;