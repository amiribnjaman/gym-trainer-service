import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GoogleLogo from '../../../Assets/img/Glogo.png';
import useFirebase from '../../hooks/useFirebase';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const { handleSigninWithGoogle, user } = useFirebase()
    const [isFieldsEmpty, setIsFieldsEmpty] = useState(true)
    const [customError, setCustomError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const [sendPasswordResetEmail, sending, passResetError] = useSendPasswordResetEmail(auth);

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        err: ''
    })

    //React fireabase hooks- Email & password signin function 
    const [
        signInWithEmailAndPassword,
        ,
        ,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // If a user exists, then redirects to the previes page where he wanted to access. 
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }

    // Handle Log in using email and password through React firebase hooks
    const handleLoginForm = e => {
        e.preventDefault()
        if (userInfo.email && userInfo.password) {
            signInWithEmailAndPassword(userInfo.email, userInfo.password)
            setUserInfo({ ...userInfo, err: '' })
        } else {
            setUserInfo({ ...userInfo, err: 'Provide your valid email & password to login.' })
            setCustomError('')
        }
    }

    // Validation email field
    const handleEmailonChange = e => {
        const userEmail = e.target.value
        const emailRegex = /\S+@\S+\.\S+/
        if (emailRegex.test(userEmail)) {
            setUserInfo({ ...userInfo, email: userEmail })
        } else {
            setUserInfo({ ...userInfo, email: '' })
        }
    }

    // Validation password field
    const handlePasswordonChange = e => {
        const userPassword = e.target.value
        if (userPassword.length >= 8) {
            setUserInfo({ ...userInfo, password: userPassword })
        } else {
            setUserInfo({ ...userInfo, password: '' })
        }
    }

    // Custom errors, when something happen into server.
    useEffect(() => {
        if (error) {
            switch (error?.code) {
                case 'auth/invalid-password':
                    setCustomError('Email or password Invalid.')
                    break;
                default:
                    setCustomError('Email or password Invalid.')
            }
        }
    }, [error])

    // Submit button visibibity handle
    useEffect(() => {
        if (userInfo.email && userInfo.password) {
            setIsFieldsEmpty(false)
        }
    }, [userInfo.email, userInfo.password])


    // Handle password reset
    const handlePasswordReset = async () => {
        if (userInfo.email) {
            await sendPasswordResetEmail(userInfo.email)
            toast.info('Password reset link sent to your email.', {
                position: toast.POSITION.TOP_CENTER
            })
        } else {
            toast.warn('Please porvide a valid email.', {
                position: toast.POSITION.TOP_CENTER
            })
        }

    }


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
                        <label htmlFor="floating_email" className="absolute text-sm text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 left-1 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Email <span className='text-red-500'>&#42;</span></label>
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input
                            onChange={handlePasswordonChange}
                            type="password" name="floating_password" id="floating_password" className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-red-400 peer" placeholder=" " required="" />
                        <label htmlFor="floating_password" className="absolute text-sm text-gray-600 dark:text-gray-400 duration-300 transform left-1 -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password <span className='text-red-500'>&#42;</span></label>
                    </div>
                    <p className=' mt-2 text-red-500 text-left text-[14px] ml-2 font-semibold'>{userInfo?.err} </p>
                    <div className='w-full'>
                        <button type="submit" className={`${isFieldsEmpty ? 'cursor-not-allowed bg-red-400' : 'cursor-pointer bg-red-600'}  text-white mt-4 cursor-not-allowed  block py-3 rounded-full w-full focus:ring-4 focus:outline-none focus:ring-red-300 font-medium text-sm text-center`}>Login</button>
                    </div>
                    <Link to='/signup' className='text-sm mt-3 block text-red-600 font-semibold'>Haven't Account? Signup first.</Link>
                    <buttton
                        onClick={handlePasswordReset}
                        className='text-sm my-1 hover:underline cursor-pointer block text-red-500 font-semibold'>Forgot Password.</buttton>

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
                    <ToastContainer />
                </form >

            </div >

        </div >
    );
};

export default Login;