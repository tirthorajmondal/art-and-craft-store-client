import { useLoaderData, useLocation } from "react-router-dom";
import ProductCard from "../ProductCard";
import { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";
import { FadeLoader } from "react-spinners";

const MyList = () => {
    const { user, } = useAuth();
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
        <div className="bg-[#C2AD746A] min-h-[calc(100vh-62px)] ">
            <h1 className="text-center text-4xl font-bold py-6 text-amber-950">MY PRODUCTS</h1>

            {
                myProducts.length !== 0 ? <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-2 md:mx-16 py-4 md:py-10">
                    {
                        myProducts.map((product) => <ProductCard product={product} state={location.pathname} />)
                    }
                </div> : <FadeLoader
                    color="#643e06"
                    height={15}
                    loading
                    margin={0}
                    width={10}
                    className="mx-auto"
                />
            }
        </div>
    );
};

export default MyList;