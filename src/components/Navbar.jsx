import React, { use, useState } from 'react';
import logoImg from '.././assets/logo.png'
import { Link, NavLink } from 'react-router';
import { MdClose, MdOutlineLogin, MdOutlineLogout } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import { AuthContext } from '../provider/AuthContext';
import userImg from '.././assets/user.png'
import { ClockLoader } from 'react-spinners';
import { Button } from '@chakra-ui/react';
import { RiMailLine } from "react-icons/ri"
import { FaUserPlus } from 'react-icons/fa';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const { user, signOutUser, loading } = use(AuthContext);
    // console.log(user); 

    const handleLogOut = () => {
        signOutUser()
            .then(() => {
                setMenuOpen(false)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className='flex justify-between items-center w-11/12 mx-auto py-1 sm:py-2 md:py-3 ' >

            <Link to='/' className='flex gap-2 items-center'>
                <img className='h-10 w-10 ' src={logoImg} alt="" />
                <h4 className='font-bold text-primary text-[24px]'>GreenNest</h4>
            </Link>

            <div className='nav hidden md:flex justify-center items-center gap-5 text-accent font-semibold navbarClass ml-8'>
                <NavLink
                    to='/'
                    className={({ isActive }) =>
                        `relative  transition-all duration-300 hover:text-primary
     after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0
     after:bg-primary after:transition-all after:duration-300
     hover:after:w-full
     ${isActive
                            ? "text-primary after:w-full"
                            : "text-black"}`
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to='/plants'
                    className={({ isActive }) =>
                        `relative  transition-all duration-300 hover:text-primary
     after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0
     after:bg-primary after:transition-all after:duration-300
     hover:after:w-full
     ${isActive
                            ? "text-primary after:w-full"
                            : "text-black"}`
                    }
                >
                    Plants
                </NavLink>
       { user && <>
                           <NavLink
                    to='/profile'
                    className={({ isActive }) =>
                        `relative  transition-all duration-300 hover:text-primary
     after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0
     after:bg-primary after:transition-all after:duration-300
     hover:after:w-full
     ${isActive
                            ? "text-primary after:w-full"
                            : "text-black"}`
                    }
                >
                    My Profile
                </NavLink>
       </>}
                <NavLink
                    to='/about'
                    className={({ isActive }) =>
                        `relative  transition-all duration-300 hover:text-primary
     after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0
     after:bg-primary after:transition-all after:duration-300
     hover:after:w-full
     ${isActive
                            ? "text-primary after:w-full"
                            : "text-black"}`
                    }
                >
                    About Us
                </NavLink>
                <NavLink
                    to='/contact'
                    className={({ isActive }) =>
                        `relative  transition-all duration-300 hover:text-primary
     after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0
     after:bg-primary after:transition-all after:duration-300
     hover:after:w-full
     ${isActive
                            ? "text-primary after:w-full"
                            : "text-black"}`
                    }
                >
                    Contact
                </NavLink>


            </div>

            {loading ? (<div className='hidden md:flex'> <ClockLoader size={40} color="#e74c3c" /> </div>) : user ? (<div className="dropdown dropdown-end hidden md:flex">
                {/* Avatar trigger */}
                <div tabIndex={0} role="button" className="btn btn-ghost h-10 w-10 btn-circle avatar">

                    <img
                        src={user?.photoURL ? user.photoURL : userImg}
                        alt="User Avatar"
                        className="object-cover w-full h-full rounded-full"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = userImg;
                        }}
                    />

                </div>

                {/* Dropdown content */}
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-18 z-[10] p-4 shadow-lg bg-base-100 rounded-xl w-56 border border-bas>e-200"
                >
                    <li className="block w-full text-center font-semibold text-lg text-primary">
                        
                            {user?.displayName || "User"}
                        
                    </li>

                    <li className="border-b pb-2 mb-2 block w-full text-center text-primary">
  
  
  
    {user?.email || "User"}
  
</li>



                    <li>
                        <button
                            onClick={handleLogOut}
                            className="btn btn-primary btn-soft  w-full"
                        >
                            <MdOutlineLogout size={20} />   Logout
                        </button>
                    </li>
                </ul>
            </div>
            ) :

                (<div className='hidden md:flex justify-end login-btn gap-3 items-center'>
                    <Link to='/login' className='btn btn-soft btn-primary ' >  <MdOutlineLogin size={20} /> Login</Link>
                    <Link to='/register' className='btn btn-primary btn-soft' >  <FaUserPlus size={20} /> Register</Link>
                    {/* <button className="btn btn-soft btn-primary">
                        <MdOutlineLogin size={20} /> Primary</button> */}

                </div>)
            }





            {/* For Mobile Screen */}

            <div className='md:hidden flex justify-center items-center z-50'>
                <button onClick={() => setMenuOpen(!menuOpen)} className=' text-3xl text-primary cursor-pointer  '>
                    {menuOpen ? <MdClose /> : <FiMenu />}
                </button>
            </div>


            <div
                className={`fixed top-0 right-0 w-full  bg-white shadow-lg rounded-b-2xl transform transition-transform duration-300 ease-in-out md:hidden z-30 ${menuOpen ? "translate-y-0 top-12 sm:top-13 md:top-14" : "-translate-y-full"
                    }`}
            >



                <div className="md:hidden w-11/12 mx-auto   rounded-b-xl flex flex-col justify-center items-center activeClass   py-4 space-y-3 text-center font-semibold text-accent ">
                    <NavLink to="/" onClick={() => setMenuOpen(false)} className="btn btn-secondary btn-outline w-full hover:btn-primary " > Home </NavLink>
                    <NavLink to="/plants" onClick={() => setMenuOpen(false)} className="btn btn-secondary btn-outline w-full hover:btn-primary " > Plants </NavLink>
                    <NavLink to="/profile" onClick={() => setMenuOpen(false)} className="btn btn-secondary btn-outline w-full hover:btn-primary " > My Profile </NavLink>

                    {
                        user ? (<div className='space-y-3'>

                           <div>

                              <div className='flex justify-center '>
                                <img
                                    src={user?.photoURL ? user.photoURL : userImg}
                                    alt="User Avatar"
                                    className="object-cover w-14 h-14 rounded-full"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = userImg;
                                    }}
                                />
                            </div>

                            <p   className="font-semibold text-lg text-primary ">
                                {user?.displayName || "User"}
                            </p>
                            <p   className=" text-primary text-sm ">
                                {user?.email || "User"}
                            </p>

                           </div>

                          

                            <button
                                onClick={handleLogOut}
                                className="btn btn-primary btn-soft  w-full"
                            >
                              <MdOutlineLogout size={20} />   Logout
                            </button>

                        </div>



                        )



                            :


                            (
                                <div className=' flex gap-3 '>
                                    <Link to='/login' onClick={() => setMenuOpen(false)} className="btn btn-primary btn-soft ">  <MdOutlineLogin size={20} /> Login</Link>
                                    <Link to='/register' onClick={() => setMenuOpen(false)} className="btn btn-primary btn-soft "> <FaUserPlus size={20} /> Register</Link>
                                </div>
                            )
                    }
                </div>



            </div>







        </div>








    );
};

export default Navbar;