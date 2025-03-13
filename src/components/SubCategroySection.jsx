import React from 'react';
import SubCategoryCard from './SubCategoryCard';

const SubCategroySection = () => {
    const subcategories = [
        {
            name: "Wooden Home Decor",
            products: 120,
            image: "https://i.ibb.co.com/99hGcKph/home-decor.webp"
        },
        {
            name: "Jute and Wooden Jewellery",
            products: 80,
            image: "https://i.ibb.co.com/6R5GRvPx/jewellery.webp"
        },
        {
            name: "Jute Kitchenware & Utensils",
            products: 95,
            image: "https://i.ibb.co.com/xSCdWZNr/jute-kitchenware-and-utensils.webp"
        },
        {
            name: "Wooden Kitchenware",
            products: 70,
            image: "https://i.ibb.co.com/b5kWsYvG/spoon.jpg"
        },
        {
            name: "Wooden Furniture & Sculptures",
            products: 60,
            image: "https://i.ibb.co.com/vC9bFTpm/furniture.jpg"
        },
    ];

    return (
        <div className=" mx-3 pb-12">
            <h3 className='text-4xl text-center font-bold my-5 mb-8  text-amber-900'>All Categories</h3>
            <div className="flex gap-6 flex-wrap justify-center items-center">
                {
                    subcategories.map(sub => <SubCategoryCard name={sub.name} image={sub.image} productCount={sub.products} />)
                }
            </div>
        </div>
    );
};

export default SubCategroySection;