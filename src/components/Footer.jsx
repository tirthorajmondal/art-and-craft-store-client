import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='flex justify-between gap-x-20 text-white bg-slate-800 py-10 px-8 md:px-20'>
            {/* logo */}
            <div className="w-1/3 md:w-1/2 text-5xl flex items-center font-playfair">
                <Link to='/' className="btn btn-ghost md:text-xl font-bold text-[#F5F5DC] hover:bg-transparent hover:text-[#ad7140fa]">JUTE Arts & Crafts</Link>
            </div>
            {/* links */}
            <div className=" flex w-2/3  md:w-1/3 justify-between">
                <div className="flex flex-col">
                    <h2 className='font-semibold text-sm md:text-base mb-2'>Follow Us</h2>
                    <Link className='text-xs md:text-sm hover:underline' to='/'>Facebook</Link>
                    <Link className='text-xs md:text-sm hover:underline' to='/'>Twitter</Link>
                </div>
                <div className="flex flex-col text-nowrap">
                    <h2 className='font-semibold text-sm md:text-base mb-2'>Legal</h2>
                    <Link className='text-xs md:text-sm hover:underline' to='/'>Privacy Policy</Link>
                    <Link className='text-xs md:text-sm hover:underline' to='/'>Terms & Conditions</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;