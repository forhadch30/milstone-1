import React, { useEffect } from 'react';
import Banner from '../components/Banner';
import Gadgets from '../components/Gadgets';
import { Outlet } from "react-router-dom";
const Home = () => {
    useEffect(() => {
        document.title = "Home" || "Page"
    }, [])
    return (
        <div>
            <Banner></Banner>
            <div className='flex'>
                <Gadgets></Gadgets>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;