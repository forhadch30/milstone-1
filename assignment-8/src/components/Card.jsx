import { Link } from "react-router-dom";
const Card = ({ gad }) => {
    const { img, price, product_title, category } = gad || {}
    return (
        <div className="border rounded-2xl lg:h-[330px]">
            <figure className="p-4">
                <img
                    src={img}
                    alt="Shoes"
                    className="rounded-2xl lg:w-[250px] lg:h-[160px]" />
            </figure>
            <div className="ml-5 py-3 space-y-2">
                <h2 className="font-bold">{product_title}</h2>
                <p className="text-gray-500 font-semibold">Price: {price}</p>
                <Link to={`/gadgetsDetails/${category}`}>
                    <button className="py-2 px-5 border font-semibold text-[#8f3bcf] border-[#8f3bcf] hover:bg-[#8f3bcf] duration-1000 hover:text-white rounded-full mt-2">View Details</button>
                </Link>
            </div>
        </div >
    );
};

export default Card;