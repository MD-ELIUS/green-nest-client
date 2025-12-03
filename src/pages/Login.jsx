import React, { use, useRef, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../provider/AuthContext';
import { toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router';

import { FcGoogle } from 'react-icons/fc';

const Login = () => {

     const [error, setError] = useState('');
     const [googleError, setGoogleError] = useState('');
     const [showPassword, setShowPassword] = useState(false);
     const {signInUser, setUser, signInGoogleUser} = use(AuthContext) ;
     const emailRef = useRef() ;
     const navigate = useNavigate() ;
     const location = useLocation() ;
    //  console.log(location) 

        const handleForgotPassword = () => {
    const emailValue = emailRef.current.value;
    navigate("/forgot-password", { state: { email: emailValue } });
        //  const email = emailRef.current.value ;
        //  sendPasswordResetEmail(auth, email)
        //  .then(() => {
        //     toast('password reset link send to your email')
        //    window.open("https://mail.google.com/mail/u/0/", "_blank");
        //  })
        //  .catch(() => {
        //     toast('There is no account created by this email')
        //  })


    }

    const handleGoogleSignIn = () => {
         //reset status =>error/success
        setGoogleError('')

          signInGoogleUser()
          .then((result) => {
              const user = result.user;
              setUser(user) ;
               toast.success('Login Successfully');
              navigate(`${location.state ? location.state : "/"}`) ;
          })
          .catch(error => {
            setGoogleError(error.message)
          })
    }

    
    const handlePasswordShow = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }

    const handleSubmit = (event) => {
            event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        //reset status =>error/success
        setError('')

        signInUser(email, password)
        .then((result) => {
            const user = result.user ;

            setUser(user) ;
            toast.success('Login Successfully');
             navigate(`${location.state ? location.state : "/"}`)
        })

        .catch(error => {
            setError(error.message)
        })
    }

    return (
       <div className='w-11/12 mx-auto my-4 sm:my-6 md:my-10 lg:my-14 xl:my-16 2xl:my-20 flex flex-col justify-center items-center '>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
                <h2 className='font-semibold text-2xl text-center py-10 border-b-2 border-base-200'>Login your account</h2>
                <div className="card-body">
                    <form onSubmit={handleSubmit} >
                        <fieldset className="fieldset">
                            {/* email */}
                            <label className="label text-[#131313] text-[16px] font-semibold mb-1">Email address</label>
                            <input ref={emailRef} name='email' type="email" className="input mb-2 bg-base-200 h-12" placeholder="Enter your email address" />
                            {/* password */}
                            <div className='relative'>
                                <label className="label text-[#131313] text-[16px] font-semibold mb-1">Password</label>
                                <input name='password' type={showPassword ? 'text' : 'password'} className="input bg-base-200 h-12" placeholder="Enter your password" />
                                <span onClick={handlePasswordShow} className='absolute top-10.5 right-6 z-20 cursor-pointer'>{showPassword ? <FaEyeSlash size={20}/>  : <FaEye size={20}/> }</span>
                            </div>

                            <div onClick={handleForgotPassword} ><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-primary btn-outline mt-4">Login</button>

                             
                            {/* error message */}
                            {error && <p className='text-red-500'>{error}</p>}

                        </fieldset>
                    </form>

                      <button onClick={handleGoogleSignIn}  className='btn btn-outline btn-primary w-full'> <FcGoogle size={24} /> Login with Google</button>

                    {/* error message */}
                    {googleError && <p className='text-red-500'>{googleError}</p>}

                    <p className='font-semibold text-center mt-5'>Dont’t Have An Account ? <Link className=' text-secondary' to='/register'>Register</Link> </p>
                </div>
            </div>
            
        </div>
    );
};

export default Login;