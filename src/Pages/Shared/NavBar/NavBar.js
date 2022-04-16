import React, { useState } from 'react';
import Logo from '../../../Assets/img/logo.png'
import './NavBar.css'
import { NavLink } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <div>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
                <div className="containe pt-1 w-11/12 flex flex-wrap justify-between items-center mx-auto">
                    <NavLink to='/' className="flex items-center">
                        <div className='w-1/3'>
                            <img className='w-11/12' src={Logo} alt="" />
                        </div>
                        <div className='logo-text text-left'>
                            <h4>SMART <span className='text-red-600 font-bold'>GYM</span> TRAINER</h4>
                        </div>
                    </NavLink>
                    <div className="md:hidden flex md:order-2">
                        <button onClick={() => setShowMenu(!showMenu)} data-collapse-toggle="mobile-menu-3" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-3" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className={`${showMenu ? 'block' : 'hidden'} justify-between items-center w-full md:flex md:w-auto md:order-1`} id="mobile-menu-3">
                        <ul className="flex items-center flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <CustomLink to='/'>Home</CustomLink>
                            </li>
                            <li>
                                <CustomLink to='/about'>About Me</CustomLink>
                            </li>
                            <li>
                                <CustomLink to='/blog'>Blog</CustomLink>
                            </li>
                            <li>
                                <NavLink to="#" type='button' className="block bg-red-600 text-white rounded-full px-10 py-2.5 hover:bg-red-700" aria-current="page">Login</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>



        </div>
    );
};

export default NavBar;