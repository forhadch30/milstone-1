import { Link, NavLink, useLoaderData } from "react-router-dom";
const Gadgets = () => {
    const gadgets = useLoaderData()
    return (
        <div className="my-5">
            <div>
                <div className="border p-3 lg:w-[220px] lg:h-[410px] mx-28 rounded-xl flex flex-col gap-5">
                    <Link to='/' className="py-1.5 px-4 rounded-full border">All Products</Link>
                    {
                        gadgets.map((gadget) => <NavLink key={gadget.id} to={`/gadgets/${gadget.category}`} className={({ isActive }) => `text-base border rounded-full px-6 text-gray-500 duration-500 py-1 ${isActive ? "text-xl " : ''}`}>{gadget.category}</NavLink>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Gadgets;