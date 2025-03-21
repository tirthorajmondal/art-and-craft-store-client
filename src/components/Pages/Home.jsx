import React, { useEffect, useState } from 'react';
import Slider from '../Slider';
import SubCategoryCard from '../SubCategoryCard';
import SubCategroySection from '../SubCategroySection';
import ProductCard from '../ProductCard';
import { FadeLoader } from 'react-spinners';
import { useLocation } from 'react-router-dom';

const Home = () => {
    const location = useLocation()
    const [topProducts, setTopProducts] = useState([])

    useEffect(() => {
        fetch(`https://art-and-craft-server-by-tirtho.vercel.app/top-products/6`)
            .then(res => res.json())
            .then(data => {
                setTopProducts(data);
            })
    }, [])

    return (
        <div className='bg-[#C2AD746A]'>
            <Slider />
            <div className="mx-4 mt-10 md:px-3 pb-12">
                <h3 className='text-4xl text-center font-bold my-5 mb-8  text-amber-900'>Top Items</h3>
                {topProducts.length === 0 && <FadeLoader
                    color="#643e06"
                    height={15}
                    loading
                    margin={0}
                    width={10}
                    className="mx-auto"
                />}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    {
                        topProducts.map(top => <ProductCard product={top} state={location.pathname} />)
                    }
                </div>
            </div>
            <SubCategroySection />
            {/* <div className="flex">
                <span className="bg-[#d2691ea1] p-5">Color</span>
                <span className="bg-[#3A3A3A] p-5">Color</span>
                <span className="bg-[#F5F5DC] p-5">Color</span>
                <span className="bg-[#6B8E23] p-5">Color</span>
                <span className="bg-[#C2A77D] p-5">Color</span>
                <span className="bg-[#D2691E] p-5">Color</span>
            </div> */}
        </div>
    );
};

export default Home;