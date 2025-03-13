import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SubCategoryCard = ({ name, image, productCount }) => {
    const topProducts = useLoaderData()
    return (
        <div className={`text-white rounded-2xl border min-w-80 max-w-96 shadow-2xl p-5 flex flex-col items-center justify-center  transition-all cursor-pointer bg-cover min-h-52 hover:scale-110`}
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${image})` }} >
            <div className="">
                <h3 className="text-lg font-bold text-center shadow-xl">{name}</h3>
                <p className=" text-sm mt-4 text-center">Products: {productCount}</p>
            </div>
        </div >

        // <>

        // </>

    );
};

export default SubCategoryCard;