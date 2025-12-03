import React, { use, useState } from 'react';
import logoImg from '.././assets/logo.png'
import { Link, NavLink } from 'react-router';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import { AuthContext } from '../provider/AuthContext';
import userImg from '.././assets/user.png'
import { ClockLoader } from 'react-spinners';

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
                <img className='h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 2xl:h-20 2xl:w-20' src={logoImg} alt="" />
                <h4 className='font-bold text-primary text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] 2xl:text-[28px]'>GreenNest</h4>
            </Link>

            <div className='nav hidden md:flex justify-center items-center gap-5 text-accent font-semibold navbarClass ml-8'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/plants'> Plants</NavLink>
                <NavLink to='/profile'>My Profile</NavLink>
            </div>

            { loading ? (<div className='hidden md:flex'> <ClockLoader color="#e74c3c" /> </div>) : user ? (<div className="dropdown dropdown-end hidden md:flex">
                {/* Avatar trigger */}
                <div tabIndex={0} role="button" className="btn btn-ghost h-14 w-14 btn-circle avatar">

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
                    <li className="text-center border-b pb-2 mb-2">
                        <Link to='/profile' className="font-semibold text-lg text-primary">
                            {user?.displayName || "User"}
                        </Link>

                    </li>

                    <li>
                        <button
                            onClick={handleLogOut}
                            className="btn btn-primary  w-full"
                        >
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
            ) :

                (<div className='hidden md:flex justify-end login-btn gap-3 items-center'>
                    <Link to='/login' className='btn btn-primary md:px-4 lg:px-6 xl:px-8 2xl:px-10' >Login</Link>
                    <Link to='/register' className='btn btn-primary md:px-4 lg:px-6 xl:px-8 2xl:px-10' >Register</Link>

                </div>)
            }





            {/* For Mobile Screen */}

            <div className='md:hidden flex justify-center items-center z-50'>
                <button onClick={() => setMenuOpen(!menuOpen)} className=' text-3xl text-primary cursor-pointer  '>
                    {menuOpen ? <MdClose /> : <FiMenu />}
                </button>
            </div>


            <div className={`fixed top-0 pt-15 right-0 h-full w-3/4 bg-base-200 shadow-lg transform transition-transform duration-300 ease-in-out md:hidden z-30 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>


                <div className="md:hidden flex flex-col justify-center items-center px-10  bg-base-200 py-4 space-y-3 text-center font-semibold text-accent navbarClass">
                    <NavLink to="/" onClick={() => setMenuOpen(false)} > Home </NavLink>
                    <NavLink to="/plants" onClick={() => setMenuOpen(false)} > Plants </NavLink>
                    <NavLink to="/profile" onClick={() => setMenuOpen(false)} > My Profile </NavLink>

                    {
                        user ? (<div className='space-y-3'>


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

                            <Link to='/profile' onClick={() => setMenuOpen(false)} className="font-semibold text-lg text-primary ">
                                {user?.displayName || "User"}
                            </Link>

                            <button
                                onClick={handleLogOut}
                                className="btn btn-primary  w-full"
                            >
                                Logout
                            </button>

                        </div>



                        )



                            :


                            (
                                <div className='space-y-3'>
                                    <Link to='/login' onClick={() => setMenuOpen(false)} className="btn btn-primary w-10/12">Login</Link>
                                    <Link to='/register' onClick={() => setMenuOpen(false)} className="btn btn-primary w-10/12">Register</Link>
                                </div>
                            )
                    }
                </div>



            </div>







        </div>








    );
};

export default Navbar;