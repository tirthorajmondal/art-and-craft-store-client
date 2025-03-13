import { GiCrossMark } from 'react-icons/gi';
import { IoShieldCheckmarkSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, state }) => {
    return (
        <div className="flex flex-col md:flex-row gap-5 border border-amber-950 rounded-lg mb-1 min-h-40 p-5 bg-[#d2691e46] shadow-lg">
            <img src={product.image} className='min-h-56 max-h-56 min-w-56 max-w-56 border-[#d2691e71] border p-0.5 rounded-lg' alt="" />
            <div className="relative ">
                <h3 className='font-bold text-2xl'>{product.item_name}</h3>
                <p className="bg-amber-200 w-fit px-2 py-0.5 text-xs font-semibold my-1 rounded-lg">{product.subcategory_name}</p>
                <p className="font-semibold">Rating: <span className='bg-amber-800 text-white rounded-full p-2 py-0.5 font-bold'>{product.rating}</span></p>
                <p className="text-base font-semibold">Coustomization: <span className="font-normal ml-1">{product.customization.toUpperCase()} </span></p>
                <p className="text-xl font-semibold text-amber-800">Price : {product.price}$</p>

                <Link state={state} to={`/item/${product._id}`}>
                    <button className="btn px-3 py-1.5 bg-[d2691ea1] absolute bottom-0">Details</button>
                </Link>
            </div>
        </div >
    );
};

export default ProductCard;