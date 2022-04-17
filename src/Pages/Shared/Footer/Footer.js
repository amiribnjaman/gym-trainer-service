import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../../Assets/img/logo.png';

const Footer = () => {
    const date = new Date()
    const currentYear = date.getFullYear()
    return (
        <div>
            <footer className="p-4 bg-gray-200 rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800">
                <div className=' w-11/12 mx-auto'>
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <NavLink to='/' className="md:flex block text-center items-center">
                            {/* <div className='w-1/2'>
                                <img className='w-full' src={Logo} alt="" />
                            </div> */}
                            <div className='font-semibold'>
                                <h4>SMART <span className='text-red-600 font-bold'>GYM</span> TRAINER</h4>
                            </div>
                        </NavLink>
                        <ul className="flex justify-center flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                            </li>
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-400 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="flex justify-center text-sm text-gray-500 sm:text-center dark:text-gray-400">&copy; {currentYear} <a href="https://flowbite.com" className="hover:underline"><h4 className='ml-1'> SMART <span className='text-red-600 font-bold'>GYM</span> TRAINER</h4></a>. All Rights Reserved.
                    </span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;