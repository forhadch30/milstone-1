import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { createContext, useState } from "react";
export const AddMoney = createContext()
const MainLayout = () => {
    const [money, setMoney] = useState(0)
    return (
        <div>
            <AddMoney.Provider value={[money, setMoney]}>
                <Navbar></Navbar>
                <div>
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </AddMoney.Provider>
        </div>
    );
};

export default MainLayout;