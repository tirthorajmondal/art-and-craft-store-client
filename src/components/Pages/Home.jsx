import React, { useEffect, useState } from 'react';
import Slider from '../Slider';
import SubCategoryCard from '../SubCategoryCard';
import SubCategroySection from '../SubCategroySection';
import ProductCard from '../ProductCard';

const Home = () => {

    const [topProducts, setTopProducts] = useState([])

    useEffect(() => {
        fetch(`https://art-and-craft-server-by-tirtho.vercel.app/top-products/6`)
            .then(res => res.json())
            .then(data => {
                setTopProducts(data);
            })
    }, [])

    return (
        <div className='[bg-[#C2AD746A]]'>
            <Slider />
            <div className="mx-6 mt-12 bg-white px-3 pb-12">
                <h3 className='text-4xl text-center font-bold my-6'>Top Items</h3>
                <div className='grid grid-cols-2 gap-5'>
                    {
                        topProducts.map(top => <ProductCard product={top} />)
                    }
                </div>
            </div>
            <SubCategroySection />
            <div className="flex">
                <span className="bg-[#D2691E] p-5">Color</span>
                <span className="bg-[#3A3A3A] p-5">Color</span>
                <span className="bg-[#F5F5DC] p-5">Color</span>
                <span className="bg-[#6B8E23] p-5">Color</span>
                <span className="bg-[#C2A77D] p-5">Color</span>
                <span className="bg-[#D2691E] p-5">Color</span>
            </div>
        </div>
    );
};

export default Home;