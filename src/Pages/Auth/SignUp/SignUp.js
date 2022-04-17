import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GoogleLogo from '../../../Assets/img/Glogo.png';
import auth from '../../../firebase.init'
import useFirebase from '../../hooks/useFirebase';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SignUp = () => {
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [isFieldsEmpty, setIsFieldsEmpty] = useState(true)

    const [userError, setUserError] = useState({
        nameErr: '',
        emailErr: '',
        passwordErr: '',
        confirmPassErr: '',
        others: ''
    })

    const { handleSigninWithGoogle, customGoogleErr } = useFirebase()

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);



    useEffect(() => {
        if (userInfo.name && userInfo.email && userInfo.password && userInfo.confirmPassword) {
            setIsFieldsEmpty(false)
        } else {
            setIsFieldsEmpty(true)
        }
    }, [userInfo.name, userInfo.email, userInfo.password, userInfo.confirmPassword])

    const handleSignupForm = e => {
        e.preventDefault()
        if (userInfo.name && userInfo.email && userInfo.password && userInfo.confirmPassword) {
            createUserWithEmailAndPassword(userInfo.email, userInfo.password)
        } else {
            setUserError({ ...userError, others: 'Fields must not be empty.' })
        }
    }

    const handleNameonChange = e => {
        const userName = e.target.value
        if (userName.length > 3) {
            setUserInfo({ ...userInfo, name: userName })
            setUserError({ ...userError, nameErr: '' })
        } else {
            setUserError({ ...userError, nameErr: 'Name is too short' })
            setUserInfo({ ...userInfo, name: '' })
        }
    }

    const handleEmailonChange = e => {
        const userEmail = e.target.value;
        const emailRegex = /\S+@\S+\.\S+/
        if (emailRegex.test(userEmail)) {
            setUserInfo({ ...userInfo, email: userEmail })
            setUserError({ ...userError, emailErr: '' })
        } else {
            setUserError({ ...userError, emailErr: 'Please provide a valid email address.' })
            setUserInfo({ ...userInfo, email: '' })
        }
    }

    const handlePasswordonChange = e => {
        const userPassword = e.target.value;
        const isContainsUppercase = /(?=.*[A-Z])/
        const isContainsNumber = /^(?=.*[0-9]).*$/
        if (userPassword.length >= 8) {
            if (isContainsUppercase.test(userPassword)) {
                if (isContainsNumber.test(userPassword)) {
                    setUserInfo({ ...userInfo, password: userPassword })
                    setUserError({ ...userError, passwordErr: '' })
                } else {
                    setUserError({ ...userError, passwordErr: 'Password must contain a number' })
                    setUserInfo({ ...userInfo, password: '' })
                }
            } else {
                setUserError({ ...userError, passwordErr: 'Password must contain a uppercase character' })
                setUserInfo({ ...userInfo, password: '' })
            }
        } else {
            setUserError({ ...userError, passwordErr: 'Password is too weak' })
            setUserInfo({ ...userInfo, password: '' })
        }

    }

    const handleConfirmPasswordonChange = e => {
        const confirmPass = e.target.value
        if (userInfo.password === confirmPass) {
            setUserInfo({ ...userInfo, confirmPassword: confirmPass })
            setUserError({ ...userError, confirmPassErr: '' })
        } else {
            setUserError({ ...userError, confirmPassErr: 'Confirm password doesn\'t matched' })
            setUserInfo({ ...userInfo, confirmPassword: '' })
        }

    }

    return (
        <div className='md:w-1/4 sm:w-1/2 w-11/12 mx-auto mt-2 mb-32  min-h-full'>
            <div>
                <h4 className='mt-14 md:mt-5 font-semibold text-2xl'>Create an <span className='text-red-500'>Account.</span></h4>
                <h4>{customGoogleErr && customGoogleErr}</h4>
                <form
                    onSubmit={handleSignupForm}
                    className='shadow-lg px-7 rounded-md pb-6 mt-4'>
                    <p className='text-red-600 text-[12px] mb-2 text-left'></p>
                    <div className="relative z-0 mb-5 w-full group">
                        <input
                            onChange={handleNameonChange}
                            type="text" name="floating_name" className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b appearance-none focus:border-red-400 focus:outline-none focus:ring-0  peer" placeholder=" " required="" />
                        <label htmlFor="floating_email" className="absolute text-sm text-gray-600 duration-300 transform -translate-y-6 scale-75 left-1 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name <span className='text-red-500'>&#42;</span></label>
                        <p className='text-red-600 font-semibold text-[11px] text-left'>{userError?.nameErr}</p>
                    </div>

                    <div className="relative z-0 mb-5 w-full group">
                        <input
                            onChange={handleEmailonChange}
                            type="email" name="floating_email" className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b appearance-none focus:border-red-400 focus:outline-none focus:ring-0 peer" placeholder=" " required="" />
                        <label htmlFor="floating_email" className="absolute text-sm text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 left-1 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Email <span className='text-red-500'>&#42;</span></label>
                        <p className='text-red-600 font-semibold text-[11px] text-left'>{userError?.emailErr}</p>
                    </div>
                    <div className="relative z-0 mb-5 w-full group">
                        <input
                            onChange={handlePasswordonChange}
                            type="password" name="floating_password" id="floating_password" className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-red-400 peer" placeholder=" " required="" />
                        <label htmlFor="floating_password" className="absolute text-sm text-gray-600 dark:text-gray-400 duration-300 transform left-1 -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password<span className='text-red-500'>&#42;</span></label>
                        <p className='text-red-600 font-semibold text-[11px] text-left'>{userError?.passwordErr}</p>
                    </div>
                    <div className="relative z-0 mb-5 w-full group">
                        <input
                            onChange={handleConfirmPasswordonChange}
                            type="password" name="floating_confirm_password" id="floating_confirm_password" className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-red-400 peer" placeholder=" " required="" />
                        <label htmlFor="floating_password" className="absolute text-sm text-gray-600 dark:text-gray-400 duration-300 transform left-1 -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Password<span className='text-red-500'>&#42;</span></label>
                        <p className='text-red-600 font-semibold text-[11px] text-left'>{userError?.confirmPassErr}</p>
                    </div>
                    <div className='w-full'>
                        <button
                            type="submit" className={`${isFieldsEmpty ? 'cursor-not-allowed bg-red-400' : 'cursor-pointer bg-red-600'}  text-white mt-4 cursor-not-allowed  block py-3 rounded-full w-full focus:ring-4 focus:outline-none focus:ring-red-300 font-medium text-sm text-center`}>Sign up</button>
                    </div>

                    <Link to='/login' className='text-sm mt-2 block text-red-500 font-semibold'>Already have an account?</Link>

                    <div className='flex justify-center items-center my-3'>
                        <div className='w-1/3 bg-gray-500 h-[1px] mr-3 mt-1'></div>
                        <div>or</div>
                        <div className='w-1/3 bg-gray-500 h-[1px]  ml-3 mt-1'></div>
                    </div>
                    <button
                        onClick={handleSigninWithGoogle}
                        className='flex py-[2px] justify-evenly items-center mt-2 border hover:shadow border-blue-200 rounded-full w-full'>
                        <img className='w-6 py-1' src={GoogleLogo} alt="" />
                        <span className='font-semibold'>Sing in with Google</span>
                    </button>

                </form>
            </div>

        </div>
    );
};

export default SignUp;