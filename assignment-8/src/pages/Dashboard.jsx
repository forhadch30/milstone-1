import React, { useContext, useEffect, useState } from 'react';
import { allProductsClear, getProductsAdded, removeProducts } from '../utils/products';
import DashboardCard from './DashboardCard';
import { AddMoney } from '../layouts/MainLayout';
import { Link } from 'react-router-dom';
import group from '../assets/Group.png'
const Dashboard = () => {
    const [products, setProducts] = useState([]);
    const [money, setMoney] = useContext(AddMoney);
    useEffect(() => {
        document.title = "Dashboard" || "Page";
        const getProducts = getProductsAdded();
        setProducts(getProducts)
    }, [])
    const handleSorted = () => {
        const sorted = [...products].sort((a, b) => b.price - a.price)
        setProducts(sorted)
    }
    const handleRemove = (id) => {
        removeProducts(id);
        const getProducts = getProductsAdded();
        setProducts(getProducts)
    }
    return (
        <div>
            <div className="bg-[#9538e2] text-white text-center space-y-3 py-16">
                <h2 className="text-4xl font-bold">Dashboard</h2>
                <p className="text-sm lg:w-[595px] mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <button onClick={() => handleCong('price')} className='border-2 py-1.5 px-5 rounded-full mr-2 '>Cart</button>
                <button className='border-2 py-1.5 px-4 rounded-full'>Wishlist</button>
            </div>
            <div className='flex justify-between w-4/5 py-5 mx-auto'>
                <h2 className="text-xl font-semibold">Cart</h2>
                <div className='flex items-center'>
                    <p className='mr-5 text-xl font-semibold'>Total Price: ${money}</p>
                    <button onClick={handleSorted} className='text-xl font-semibold mr-2 bg-[#a13ee6] text-white  py-1.5 px-4 rounded-full border border-[#a13ee6]'>Sort by Price</button>
                    <button
                        onClick={() => {
                            document.getElementById('my_modal_5').showModal()
                            setMoney(money + price)
                        }}
                        className='text-xl font-semibold text-[#a13ee6] border border-[#a13ee6] py-1.5 px-4 rounded-full'>Purchase</button>
                    {/* modal  */}
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle lg:w-[35%] mx-auto">
                        <div className="modal-box text-center">
                            <img className='mx-auto' src={group} alt="" />
                            <p className="py-4 text-2xl font-bold">Payment Successfully</p>
                            <hr />
                            <p className="py-4 font-bold text-gray-500">Thanks for purchasing.</p>
                            <p className='text-gray-500 text-xl'>Price:{money}</p>
                            <div className="modal-action">
                                <form method="dialog" className='text-start w-full'>
                                    {/* if there is a button in form, it will close the modal */}
                                    <Link to={'/'}>
                                        <button onClick={() => {
                                            setMoney(0)
                                            allProductsClear()
                                            setProducts([])
                                        }} className="py-1.5 px-4 rounded-full hover:bg-teal-800 hover:text-white duration-1000 text-2xl font-semibold w-full border">Close</button>
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </dialog>
                    {/* modal  */}

                </div>
            </div>
            <div className='flex flex-col gap-5 my-10'>
                {
                    products.map((item, index) =>
                        <DashboardCard key={index}
                            handleRemove={handleRemove}
                            // money={money}
                            // handleAddMoney={handleAddMoney}
                            // setMoney={setMoney}
                            dashCard={item}>
                        </DashboardCard>)
                }
            </div>
        </div>
    );
};

export default Dashboard;