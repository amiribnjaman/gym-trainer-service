import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GoogleLogo from '../../../Assets/img/Glogo.png';
import useFirebase from '../../hooks/useFirebase';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    })
    const { handleSigninWithGoogle, user } = useFirebase()
    const location = useLocation()

    const [isFieldsEmpty, setIsFieldsEmpty] = useState(true)
    const navigate = useNavigate()

    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }

    const [customError, setCustomError] = useState('')

    const [
        signInWithEmailAndPassword,
        ,
        ,
        error,
    ] = useSignInWithEmailAndPassword(auth);



    const handleLoginForm = e => {
        e.preventDefault()
        if (userInfo.email && userInfo.password) {
            signInWithEmailAndPassword(userInfo.email, userInfo.password)
        }
    }

    useEffect(() => {
        if (userInfo.email && userInfo.password) {
            setIsFieldsEmpty(false)
        }
    }, [userInfo.email, userInfo.password])

    const handleEmailonChange = e => {
        const userEmail = e.target.value;
        const emailRegex = /\S+@\S+\.\S+/
        if (emailRegex.test(userEmail)) {
            setUserInfo({ ...userInfo, email: userEmail })
        } else {
            setUserInfo({ ...userInfo, email: '' })
        }
    }

    const handlePasswordonChange = e => {
        const userPassword = e.target.value
        if (userPassword.length >= 8) {
            setUserInfo({ ...userInfo, password: userPassword })
        } else {
            setUserInfo({ ...userInfo, password: '' })
        }
    }

    useEffect(() => {
        if (error) {
            switch (error?.code) {
                case 'auth/invalid-password':
                    setCustomError('Email or password Invalid.')
                    break;
                case 'auth/invalid-email':
                    setCustomError('Email or password Invalid.')
                    break;
                default:
                    setCustomError('Something went wrong. Please try again.')
            }
        }
    }, [error])

    return (
        <div className='md:w-1/4 sm:w-1/2 w-11/12 mx-auto mt-5 mb-32  min-h-full'>
            <div>
                <h4 className='mt-20 md:mt-12 font-semibold text-[1.4rem]'>Welcome Back! <span className='text-red-500'>Login</span></h4>
                <p className=' mt-2 text-red-500 text-center text-[14px] ml-2 font-semibold'>{customError && customError}</p>
                <form
                    onSubmit={handleLoginForm}
                    className='shadow-lg px-7 rounded-md pb-8 pt-4'>
                    <div className="relative z-0 mb-6 w-full group">
                        <input
                            onChange={handleEmailonChange}
                            type="email" name="floating_email" className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b appearance-none focus:border-red-400 focus:outline-none focus:ring-0 peer" placeholder=" " required="" />
                        <label for="floating_email" className="absolute text-sm text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 left-1 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Email <span className='text-red-500'>&#42;</span></label>
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input
                            onChange={handlePasswordonChange}
                            type="password" name="floating_password" id="floating_password" className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-red-400 peer" placeholder=" " required="" />
                        <label for="floating_password" className="absolute text-sm text-gray-600 dark:text-gray-400 duration-300 transform left-1 -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password <span className='text-red-500'>&#42;</span></label>
                    </div>

                    <div className='w-full'>
                        <button type="submit" className={`${isFieldsEmpty ? 'cursor-not-allowed bg-red-400' : 'cursor-pointer bg-red-600'}  text-white mt-4 cursor-not-allowed  block py-3 rounded-full w-full focus:ring-4 focus:outline-none focus:ring-red-300 font-medium text-sm text-center`}>Login</button>
                    </div>
                    <Link to='/signup' className='text-sm my-3 block text-red-500 font-semibold'>Haven't Account? Create One.</Link>

                    <div className='flex justify-center items-center my-3'>
                        <div className='w-1/3 bg-gray-500 h-[1px] mr-3 mt-1'></div>
                        <div>or</div>
                        <div className='w-1/3 bg-gray-500 h-[1px]  ml-3 mt-1'></div>
                    </div>
                    <button
                        onClick={handleSigninWithGoogle}
                        className='flex py-[2px] justify-evenly items-center mt-2 border hover:shadow border-blue-200  rounded-full w-full'>
                        <img className='w-6 py-1' src={GoogleLogo} alt="" />
                        <span className='font-semibold'>Sing in with Google</span>
                    </button>
                </form>

            </div>

        </div>
    );
};

export default Login;