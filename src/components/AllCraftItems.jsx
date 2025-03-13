import { Link, useLoaderData, } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

const AllCraftItems = () => {
    const [products, setProducts] = useState([])


    useEffect(() => {
        fetch('https://art-and-craft-server-by-tirtho.vercel.app/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    return (
        <div className='bg-[#C2A77D4A] pt-10'>
            <h2 className="text-center text-4xl mb-10 font-bold text-amber-950">All Items</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 md:px-16 pb-16">
                {
                    products.map(product => <ProductCard product={product} state={location.pathname} />)
                }
            </div>
        </div>
    );
};

export default AllCraftItems;