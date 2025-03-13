import { GiCrossMark } from 'react-icons/gi';
import { IoShieldCheckmarkSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, state }) => {
    return (
        <div className="flex md:flex-row gap-5 border  border-amber-950 rounded-lg  min-h-56 p-3 md:p-5 bg-[#d2691e46] shadow-lg">
            <img src={product.image} className='min-h-40 max-h-40 my-auto min-w-40 max-w-40 md:min-h-56 md:max-h-56 md:min-w-56 md:max-w-56 border-[#d2691e71] border p-0.5 rounded-lg' alt={product.item_name} />
            <div className="h-fit my-auto">
                <h3 className='font-extrabold text-base  md:text-2xl'>{product.item_name}</h3>
                <p className="bg-amber-200 border-[0.5px] border-amber-600 w-fit px-2 py-0.5 text-xs font-semibold my-1 rounded-lg">{product.subcategory_name}</p>
                <p className="font-semibold text-sm md:text-base">Rating: <span className='bg-amber-800 text-white text-xs md:text-base rounded-full p-1 py-0 md:p-2 py- md:py-0.5 font-bold'>{product.rating}</span></p>
                <p className=" font-semibold text-sm md:text-base">Coustomization: <span className="font-normal ml-1">{product.customization.toUpperCase()} </span></p>
                <p className="text-base md:text-xl font-semibold text-amber-800 md:mb-3">Price : {product.price}$</p>

                <Link state={state} to={`/item/${product._id}`}>
                    <button className="btn btn-sm md:btn-md px-3 py-1.5 bg-[#d2691ef3]  hover:bg-[#d2691ea1] text-amber-950 border-0 hover:border-[0.5px] hover:border-amber-950">Details</button>
                </Link>
            </div>
        </div >
    );
};

export default ProductCard;