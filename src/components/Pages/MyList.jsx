import { useLoaderData, useLocation } from "react-router-dom";
import ProductCard from "../ProductCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MyList = () => {
    const { user } = useContext(AuthContext);
    const [myProducts, setMyProducts] = useState([])
    const location = useLocation()

    useEffect(() => {
        fetch(`https://art-and-craft-server-by-tirtho.vercel.app/my-products/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyProducts(data)
            })
    }, [user])
    return (
        <div className="">
            <h1 className="text-center text-4xl font-bold my-6">MY PRODUCTS</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-4 my-4">
                {
                    myProducts.map((product) => <ProductCard product={product} state={location.pathname} />)
                }
            </div>
        </div>
    );
};

export default MyList;