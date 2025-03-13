import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';
import { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const { user, setUser, logout } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const handleLogIn = () => {
        navigate('/')
    }
    const handleLogout = () => {
        logout()
            .then(() => {
                setUser(null);
                < Navigate to='/' />
            })
            .catch(error => { })
    }
    return (
        <div className="navbar bg-[#F5F5DC] shadow-sm px-0">
            <div className="flex-1 font-playfair">
                <Link to='/' className="btn btn-ghost text-xl font-bold text-[#ad7140d8] hover:bg-transparent hover:text-[#ad7140fa]">JUTE Arts & Crafts</Link>
            </div>
            <div className="navbar-end gap-2">
                <div className="hidden md:flex gap-3 text-[#3A3A3A] ">
                    <NavLink to="/" className={({ isActive }) => isActive ? `border-b-2 border-[#6B8E23] font-bold text-[#6B8E23] ` : `hover:text-[#6B8E23] font-bold`}>Home</NavLink>
                    <NavLink to="/all-items" className={({ isActive }) => isActive ? `border-b-2 border-[#6B8E23] font-bold text-[#6B8E23] ` : `hover:text-[#6B8E23] font-bold`}>All Craft Items</NavLink>
                    {user && (
                        <>
                            <NavLink to="/add-item" className={({ isActive }) => isActive ? `border-b-2 border-[#6B8E23] font-bold text-[#6B8E23] ` : `hover:text-[#6B8E23] font-bold`}>Add Craft Item</NavLink>
                            <NavLink to="/my-list" className={({ isActive }) => isActive ? `border-b-2 border-[#6B8E23] font-bold text-[#6B8E23] ` : `hover:text-[#6B8E23] font-bold`}>My List</NavLink>
                        </>
                    )}
                </div>

                <div className="flex gap-2  md:ml-10 md:mr-3">
                    <div className="dropdown dropdown-end">
                        {
                            user ?
                                <>
                                    < div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar group relative">
                                        <div className="w-10 rounded-full">
                                            <img
                                                alt=""
                                                src={user.photoURL || `https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp`} />
                                        </div>
                                        <p className='hidden group-hover:block bg-orange-200 absolute p-2 right-14 whitespace-nowrap  duration-100 after:bg-orange-200 after:block after:rotate-45 after:w-4 after:h-4 after:absolute after:-right-[3px] after:top-1/2 after:-translate-y-1/2 z-10 after:-z-10' >{user.email}</p>
                                    </div>
                                    <ul
                                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                        <li><button>Settings</button></li>
                                        <li><button onClick={handleLogout}>Logout</button></li>
                                    </ul>
                                </>
                                :
                                <div className="flex space-x-2">
                                    <Link to='/signup' className="btn px-3 py-2 bg-secondary hover:bg-secondary hover:bg-opacity-60">Sign Up</Link>

                                    <Link to='/login'
                                        onClick={handleLogIn}
                                        className="btn px-3 py-2 bg-accent hover:bg-accent hover:bg-opacity-60" >Log In</Link>
                                </div>
                        }
                    </div>

                </div>
                {/* Mobile Menu  */}
                <div className="relative">
                    <button className="text-[#3A3A3A] md:hidden" onClick={toggleMenu}>
                        {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
                    </button>


                    <div className={`fixed top-0 left-0 w-[80%] h-full bg-white flex flex-col items-center gap-5 pt-16 shadow-lg transition-transform duration-500 ease-in-out 
                             ${isOpen ? "-translate-x-0" : "-translate-x-full"} md:hidden`}>

                        <NavLink to="/" className={({ isActive }) =>
                            isActive ? "border-b-2 border-[#6B8E23] font-bold text-[#6B8E23]"
                                : "hover:text-[#6B8E23] font-bold"} onClick={toggleMenu}>
                            Home
                        </NavLink>

                        <NavLink to="/all-items" className={({ isActive }) =>
                            isActive ? "border-b-2 border-[#6B8E23] font-bold text-[#6B8E23]"
                                : "hover:text-[#6B8E23] font-bold"} onClick={toggleMenu}>
                            All Craft Items
                        </NavLink>

                        {user && (
                            <>
                                <NavLink to="/add-item" className={({ isActive }) =>
                                    isActive ? "border-b-2 border-[#6B8E23] font-bold text-[#6B8E23]"
                                        : "hover:text-[#6B8E23] font-bold"} onClick={toggleMenu}>
                                    Add Craft Item
                                </NavLink>

                                <NavLink to="/my-list" className={({ isActive }) =>
                                    isActive ? "border-b-2 border-[#6B8E23] font-bold text-[#6B8E23]"
                                        : "hover:text-[#6B8E23] font-bold"} onClick={toggleMenu}>
                                    My List
                                </NavLink>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div >
    );


};

export default Navbar;