import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    const date = new Date()
    const currentYear = date.getFullYear()
    return (
        <div>
            <footer className="p-4 bg-gray-200 shadow md:px-6 py-8 dark:bg-gray-800">
                <div className=' w-11/12 mx-auto'>
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <NavLink to='/' className="md:flex block text-center items-center">
                            <div className='font-semibold mb-1 md:mb-0'>
                                <h4>SMART <span className='text-red-600 font-bold'>GYM</span> TRAINER</h4>
                            </div>
                        </NavLink>
                        <ul className="flex justify-center flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <Link to="/about" className="mr-4 hover:underline md:mr-6 ">About Me</Link>
                            </li>
                            <li>
                                <Link to="/" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="/blogs" className="mr-4 hover:underline md:mr-6">Blogs</Link>
                            </li>
                        </ul>
                    </div>
                    <hr className="md:my-6 mb-2 border-gray-400 sm:mx-auto lg:my-8" />
                    <span className="sm:flex justify-center text-sm text-gray-500 sm:text-center dark:text-gray-400"><span>&copy; {currentYear}</span> <Link to="/" className="hover:underline"><h4 className='ml-1'> SMART <span className='text-red-500 font-bold '>GYM</span> TRAINER. </h4></Link> <span className='ml-[3px]'> All Rights Reserved.</span>
                    </span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;