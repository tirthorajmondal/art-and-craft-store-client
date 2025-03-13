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
        <div className=''>
            <h2 className="text-center text-4xl my-10 underline">Total {products.length} Items</h2>
            <div className="grid grid-cols-2 gap-8 px-16">
                {
                    products.map(product => <ProductCard product={product} state={location.pathname} />)
                }
            </div>
        </div>
    );
};

export default AllCraftItems;