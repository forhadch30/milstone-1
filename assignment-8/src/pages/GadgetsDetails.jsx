import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaRegHeart, FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { addProducts } from "../utils/products";
import { AddMoney } from "../layouts/MainLayout";
const GadgetsDetails = () => {
    const [money, setMoney] = useContext(AddMoney)
    const data = useLoaderData();
    const { category } = useParams()
    const [products, setProducts] = useState({})
    useEffect(() => {
        const filteredByCategory = [...data].find(cage => cage.category === category)
        setProducts(filteredByCategory)
    }, [])
    const handleAdded = id => {
        addProducts(id)
    }
    const { product_title, img, rating, specification, description, id, price } = products
    return (
        <div className="bg-[#9538e2] text-white text-center space-y-3 py-20 lg:mb-[35%]">
            <h2 className="text-4xl font-bold">Product Details</h2>
            <p className="text-sm lg:w-[595px] mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            <div className="absolute lg:right-[20%] bg-white text-black p-6 flex rounded-2xl gap-5">
                <img className="rounded-2xl lg:h-[390px] lg:w-[400px] object-cover" src={img} alt="" />
                <div className="text-start space-y-3">
                    <h2 className="text-xl font-semibold">{product_title}</h2>
                    <p className="text-xl font-semibold text-gray-500">Price: {price}</p>
                    <button className="font-semibold text-[#309c08] border border-[#309c08] py-1.5 px-3 rounded-full">In Stock</button>
                    <p className="text-sm text-gray-500">{description}</p>
                    <p className="flex flex-col">Specification:
                        <ol>
                            {
                                specification && specification.map((specific, index) => <li key={index} className="text-gray-500">{specific}</li>)
                            }
                        </ol>
                    </p>
                    <h2 className="flex items-center gap-2 text-gray-500">Rating <FaRegStar className="text-yellow-500"></FaRegStar></h2>
                    < h2 className="flex items-center gap-2">
                        <FaStar className="text-yellow-400"></FaStar>
                        <FaStar className="text-yellow-400"></FaStar>
                        <FaStar className="text-yellow-400"></FaStar>
                        <FaStar className="text-yellow-400"></FaStar>
                        <FaRegStar className="text-gray-600"></FaRegStar>
                        <p className="bg-gray-200 py-1 px-2 rounded-full">{rating}</p>
                    </h2>
                    <div className="flex items-center gap-2">
                        <button onClick={() => {
                            handleAdded(products)
                            setMoney(money + price)
                        }} className="text-xl font-medium text-white bg-[#8c35d4] py-1.5 rounded-full px-3">Add To Card</button>
                        <div className="bg-white border p-2 rounded-full">
                            <FaRegHeart className="text-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetsDetails;