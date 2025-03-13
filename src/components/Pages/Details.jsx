import { GiCrossMark } from "react-icons/gi";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { Link, Navigate, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Details = () => {
    const product = useLoaderData()
    const navigate = useNavigate()
    const location = useLocation()

    const handleteDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://art-and-craft-server-by-tirtho.vercel.app/product/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been deleted.",
                                icon: "success"
                            });
                            navigate(location?.state)
                        }
                    })
            }
        });
    }
    return (
        <div className="px-32  py-20 flex space-x-16 items-center bg-[#C2A77D4A]">
            <div className=" flex justify-center items-center w-1/2 relative">
                <img src={product.image} className=" w-full h-[450px] border border-[#C2A77D] rounded-xl p-px" alt={product.item_name + "'s image"} />
                <p className="absolute right-3 bottom-8 text-xl bg-amber-700 text-white italic px-2 py-0.5 hover:-translate-x-3 duration-[500ms] before:content-[''] before:w-20 before:h-20 before:bg-black">
                    {
                        product.stock_status === 'made_to_order' && 'Made To Order'
                    }
                    {
                        product.stock_status === 'in_stock' && "In Stock"
                    }
                </p>
            </div>
            <div className="w-1/2 ">
                <p className="text-3xl font-black text-amber-900">{product.item_name}</p>
                <p className="bg-amber-200 px-2 py-0.5 mt-2 rounded-lg w-fit text-xs font-semibold" > {product.subcategory_name}</p>
                <p className=" text-base my-3"> {product.short_description}</p>
                <p className="text-base font-semibold py-1">Rating: <span className="font-normal"><span className="bg-amber-800 text-white rounded-full p-2 py-0.5 font-bold">{product.rating}</span> out of 5</span></p>
                <p className="text-base font-semibold">Coustomization: <span className="font-normal">{product.customization.toUpperCase()} {product.customization === 'yes' ? <IoShieldCheckmarkSharp className="inline text-green-700 text-xl" /> : <GiCrossMark className="inline text-red-700 text-xl" />}</span></p>
                <p className="text-base font-semibold py-1">Processing Time: <span className="font-normal">{product.processing_time} days</span> </p>
                <p className="text-3xl font-medium text-amber-800">Price : {product.price}$</p>
                <div className="flex gap-4 mt-3">
                    <Link to={`/update/${product._id}`}>
                        <button className="btn btn-accent">Update</button>
                    </Link>
                    <button
                        onClick={() => handleteDelete(product._id)}
                        className="btn btn-error">Delete</button>
                </div>
            </div>
        </div >
    );
};

export default Details;