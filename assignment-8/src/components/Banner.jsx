import banner from '../assets/banner.jpg'
const Banner = () => {
    return (
        <div>
            <div
                className="min-h-[500px] bg-[#9538e2]"
                style={{
                }}>
                <div className="flex flex-col text-center justify-center items-center p-2 pt-16">
                    <div className="max-w-4xl text-white">
                        <h1 className="mb-5 lg:text-5xl text-2xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                        <p className="mb-5 md:w-[700px] mx-auto">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <button className="py-2.5 px-7 rounded-full text-[#9036db] font-bold bg-white">Shop Now</button>
                    </div>
                </div>
            </div>
            <div className='lg:w-[900px] md:w-[650px] md:h-[534px] w-[290px]  mx-auto border-2 bg-white/25 border-white rounded-xl p-4 md:-mt-48 -mt-24'>
                <img className='rounded-xl lg:h-[500px] md:w-full' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;