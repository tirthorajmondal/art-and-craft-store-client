import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <h2>LOGO</h2>
            <div className="flex gap-3">
                <ul>
                    <Link to='/'>Home</Link>
                    <Link>All Crafts</Link>
                </ul>
                <Link to="/login">Login</Link>
                <Link to='/signup'>Sign Up</Link>
            </div>
        </div>
    );
};

export default Navbar;