import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);


    }
    const navigate = useNavigate()
    const userData = {
        displayName: "Tirtho Raj",
        photoURL: "https://media.licdn.com/dms/image/v2/C5603AQEqd8l_HqM3gg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1644838523545?e=2147483647&v=beta&t=6gWMHXlveI5fty_apBxZ-1LTwHj4DI39vcTw9kTeaic"
    }
    const [user, setUser] = useState(null)

    const handleLogOut = () => {
        setUser(null)
        navigate('/')
    }

    return (

        <div className="navbar bg-[#F5F5DC] shadow-sm px-0">
            <div className="flex-1 ">
                <a className="btn btn-ghost text-xl">JUTE Arts & Crafts</a>
            </div>
            <div className="navbar-end gap-2 md:gap-x-10 ">
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

                <div className="flex gap-2">
                    <div className="dropdown dropdown-end">
                        {
                            user ?
                                <>
                                    < div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar group relative">
                                        <div className="w-10 rounded-full">
                                            <img
                                                alt=""
                                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                        </div>
                                        <p className='hidden group-hover:block bg-orange-200 absolute p-2 right-14 whitespace-nowrap  duration-100 after:bg-orange-200 after:block after:rotate-45 after:w-4 after:h-4 after:absolute after:-right-[3px] after:top-1/2 after:-translate-y-1/2 z-10 after:-z-10' >{user.displayName}</p>
                                    </div>
                                    <ul
                                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                        <li><a>Settings</a></li>
                                        <li><a onClick={handleLogOut}>Logout</a></li>
                                    </ul>
                                </>
                                :
                                <div className="flex space-x-2">
                                    <a className="btn px-3 py-2 bg-secondary hover:bg-secondary hover:bg-opacity-60">Sign Up</a>

                                    <a
                                        onClick={() => {
                                            setUser(userData)
                                        }}
                                        className="btn px-3 py-2 bg-accent hover:bg-accent hover:bg-opacity-60" >Log In</a>
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























        // <div className="bg-[#F5F5DC] shadow-md">
        //     <div className="mx-auto">
        //         <div className="flex justify-between h-16 items-center ">
        //             {/* Logo */}
        //             <Link to="/" className="text-xl font-bold text-[#8b5e3b]">
        //                 {/* <img src="src/assets/logo2.webp" className='w-20' alt="" /> */}
        //                 Jute & Wooden Crafts
        //             </Link>

        //             {/* Desktop Menu */}
        //             <div className="hidden md:flex gap-3 text-[#3A3A3A]">
        //                 <NavLink to="/"  className={({ isActive })=> isActive ? `border-b-2 border-[#6B8E23] font-bold text-[#6B8E23] ` : `hover:text-[#6B8E23] font-bold`}>Home</NavLink>
        //                 <NavLink to="/all-items"  className={({ isActive })=> isActive ? `border-b-2 border-[#6B8E23] font-bold text-[#6B8E23] ` : `hover:text-[#6B8E23] font-bold`}>All Craft Items</NavLink>
        //                 {user && (
        //                     <>
        //                         <NavLink to="/add-item"   className={({ isActive })=> isActive ? `border-b-2 border-[#6B8E23] font-bold text-[#6B8E23] ` : `hover:text-[#6B8E23] font-bold`}>Add Craft Item</NavLink>
        //                         <NavLink to="/my-list"   className={({ isActive })=> isActive ? `border-b-2 border-[#6B8E23] font-bold text-[#6B8E23] ` : `hover:text-[#6B8E23] font-bold`}>My List</NavLink>
        //                     </>
        //                 )}
        //             </div>

        //             {/* Authentication Section */}
        //             <div className="hidden md:flex items-center space-x-4">
        //                 {user ? (
        //                     <div className="relative group">
        //                         <img
        //                             src={user.photoURL}
        //                             alt={user.displayName}
        //                             className="w-10 h-10 rounded-full cursor-pointer border-2 border-[#D2691E]"
        //                         />
        //                         <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 hidden group-hover:block bg-white shadow-lg rounded-lg p-2">
        //                             <p className="text-sm text-gray-700 w-fit">{user.displayName}</p>
        //                             <button
        //                                 className=" mt-2 bg-[#D2691E] text-white px-3 py-1 rounded hover:bg-[#A0522D] transition"
        //                             >
        //                                 Log Out
        //                             </button>
        //                         </div>
        //                     </div>
        //                 ) : (
        //                     <div className='flex gap-3'>
        //                         <Link to="/login" className="bg-[#D2691E] text-white rounded hover:bg-[#A0522D]">Login</Link>
        //                         <Link to="/signup" className="bg-[#8B5E3B] text-white px-4 py-2 rounded hover:bg-[#6B4226]">Sign Up</Link>
        //                     </div>
        //                 )}
        //             </div>

        //             {/* Mobile Menu Button */}
        //             <button className="md:hidden text-[#3A3A3A]" onClick={toggleMenu}>
        //                 {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        //             </button>
        //         </div>
        //     </div>

        // </div>

    );
};

export default Navbar;