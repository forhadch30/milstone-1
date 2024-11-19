
import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { AddMoney } from "../layouts/MainLayout";
const DashboardCard = ({ dashCard, handleRemove, }) => {
    const { pathname } = useLocation()
    const [money, setMoney] = useContext(AddMoney)
    const { img, product_title, price, description, id } = dashCard;
    return (
        <div className="lg:w-4/5 mx-auto">
            <div className="border p-6 rounded-2xl flex gap-5  justify-between">
                <div className="text-gray-500 space-y-2 flex items-center gap-4">
                    <img className="rounded-2xl lg:w-52 lg:h-36" src={img} alt="" />
                    <div className="space-y-2">
                        <h2>{product_title}</h2>
                        <p>Description: {description}</p>
                        <p>Price: ${price}</p>
                    </div>
                </div>
                <div onClick={() => {
                    handleRemove(id)
                    setMoney(money - price)
                }}>
                    {
                        pathname === '/dashboard' && <IoClose className="text-2xl text-red-500 border border-red-500 rounded-full"></IoClose>
                    }
                </div>
            </div>
        </div >
    );
};

export default DashboardCard;