import React, { use, useState } from 'react';
import { AuthContext } from '../provider/AuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {

    const [error, setError] = useState('');
    const [googleError, setGoogleError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { createUser, setUser, signInGoogleUser } = use(AuthContext);
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        //reset status =>error/success
        setGoogleError('')

        signInGoogleUser()
            .then((result) => {
                const user = result.user;
                setUser(user);
                toast.success('Login Successfully');
                navigate("/");
            })
            .catch(error => {
                setGoogleError(error.message)
            })
    }

    const handlePasswordShow = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }

    const handleRegister = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;
        const photoUrl = event.target.photoUrl.value;
        const terms = event.target.terms.checked;

        const hasUppercase = /[A-Z]/;
        const hasLowercase = /[a-z]/;
        const hasMinLength = /^.{6,}$/;

        //reset status =>error/success
        setError('')



        if (!hasUppercase.test(password)) {
            setError("Password must contain at least one uppercase letter")
            return
        }

        if (!hasLowercase.test(password)) {
            setError("Password must contain at least one lowercase letter")
            return
        }


        if (!hasMinLength.test(password)) {
            setError("Password must be at least 6 characters long.")
            return
        }

        if (!terms) {
            setError('Please accept our terms and conditions')
            return
        }

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                event.target.reset();

                //update profile
                const profile = {
                    displayName: name,
                    photoURL: photoUrl
                }

                updateProfile(user, profile)
                    .then(() => { })
                    .catch(error => {
                        setError(error.message)
                        return
                    })

                toast.success("You are successfully registered")
                navigate("/")
            })

            .catch(error => {
                if (error.message === "Firebase: Error (auth/email-already-in-use).") {
                    toast.error('You have already register')
                } else { setError(error.message) }

            })

    }

    return (
        <div className='w-11/12 mx-auto my-4 sm:my-6 md:my-10 lg:my-14 xl:my-16 2xl:my-20 flex flex-col justify-center items-center '>
            <div className="card bg-base-100 flex w-full max-w-sm shrink-0 shadow-2xl p-5">
                <h2 className='font-semibold text-2xl text-center py-10 border-b-2 border-base-200'>Register your account</h2>
                <div className="card-body">
                    <form onSubmit={handleRegister}>
                        <fieldset className="fieldset">

                            {/* name */}
                            <label className="label text-[#131313] text-[16px] font-semibold mb-1"> Your Name </label>
                            <input name='name' type="text" className="input mb-2 bg-base-200 h-12" placeholder="Enter your name" required />

                            {/* photo url */}
                            <label className="label text-[#131313] text-[16px] font-semibold mb-1"> Photo URL </label>
                            <input name='photoUrl' type="text" className="input mb-2 bg-base-200 h-12" placeholder="Enter your Photo URL" required />

                            {/* email */}
                            <label className="label text-[#131313] text-[16px] font-semibold mb-1">Email</label>
                            <input name='email' type="email" className="input mb-2 bg-base-200 h-12" placeholder="Enter your email address" />

                            {/* password */}

                            <div className='relative'>
                                <label className="label text-[#131313] text-[16px] font-semibold mb-1">Password</label>
                                <input name='password' type={showPassword ? 'text' : 'password'} className="input bg-base-200 h-12" placeholder="Enter your password" required />
                                <span onClick={handlePasswordShow} className='absolute top-10.5 right-6 z-20 cursor-pointer'>{showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}</span>
                            </div>


                            <label className="label">
                                <input name='terms' type="checkbox" className="checkbox" /> Accept Term & Conditions
                            </label>
                            <button className="btn btn-primary btn-outline mt-4">Register</button>

                            {/* error message */}
                            {error && <p className='text-red-500'>{error}</p>}

                        </fieldset>
                    </form>

                    <button onClick={handleGoogleSignIn} className='btn btn-outline btn-primary w-full'> <FcGoogle size={24} /> Signup with Google</button>

                    {/* error message */}
                    {googleError && <p className='text-red-500'>{googleError}</p>}

                    <p className='font-semibold text-center mt-5'>Already Have An Account ? <Link className=' text-secondary' to='/login'>Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Register;