const Footer = () => {
    return (
        <div className="bg-[#dfdede] shadow-2xl p-10 space-y-2">
            <div className="border-b py-4 text-center space-y-2">
                <h2 className="text-3xl font-bold">Gadget Heaven</h2>
                <p className="text-gray-500">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className="flex justify-around flex-col lg:flex-row">
                <div className="space-y-2 text-gray-600">
                    <h2 className="text-xl font-semibold">Services</h2>
                    <p>Product Support</p>
                    <p>Order Tracking</p>
                    <p>Shipping & Delivery</p>
                    <p>Returns</p>
                    <p>Services</p>
                </div>
                <div className="space-y-2 text-gray-600">
                    <h2 className="text-xl font-semibold">Contact</h2>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Contact</p>
                </div>
                <div className="space-y-2 text-gray-600">
                    <h2 className="text-xl font-semibold">Legal</h2>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Cookie Policy</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;