import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='flex justify-between text-white bg-slate-500 py-10 px-20'>
            <div className="logo w-1/2 text-5xl flex items-center">
                LOGO
            </div>
            <div className="links flex  w-1/3 justify-between">
                <div className="flex flex-col">
                    <h2 className='font-semibold mb-2'>Follow Us</h2>
                    <Link className='text-sm hover:underline' to='/'>Facebook</Link>
                    <Link className='text-sm hover:underline' to='/'>Twitter</Link>
                </div>
                <div className="flex flex-col text-nowrap">
                    <h2 className='font-semibold mb-2'>Legal</h2>
                    <Link className='text-sm hover:underline' to='/'>Privacy Policy</Link>
                    <Link className='text-sm hover:underline' to='/'>Terms & Conditions</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;