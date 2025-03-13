import { Link } from 'react-router-dom';

const ProductCard = ({ product, state }) => {
    return (
        <div className="flex gap-5 border-2 mb-1 min-h-40 p-3">
            <img src={product.image} className='min-h-56 max-h-56 min-w-56 max-w-56 rounded-lg' alt="" />
            <div className="relative">
                <h3 >Name: {product.item_name}</h3>
                <p className="">Subcategory Name:{product.subcategory_name}</p>
                <p className=" ">Price: {product.price}</p>

                <Link state={state} to={`/item/${product._id}`}>
                    <button className="btn btn-info absolute bottom-0">Details</button>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;