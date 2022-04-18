import React from 'react';
import useFirebase from '../hooks/useFirebase';

const Checkout = () => {
    const { user } = useFirebase()
    console.log(user?.email);
    return (
        <div className='md:w-3/12 mx-auto my-12'>
            <h2 className='text-xl font-semibold'>Make a <span className='text-blue-600'>Checkout</span></h2>
            <form onSubmit={(e) => e.preventDefault()}
                className='shadow-lg px-7 rounded-md pb-6 mt-4'>
                <p className='text-red-600 text-[12px] mb-2 text-left'></p>
                <div className="relative z-0 mb-5 w-full group">
                    <input
                        type="text" name="floating_name" className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b appearance-none focus:border-red-400 focus:outline-none focus:ring-0  peer" placeholder=" " required="" />
                    <label htmlFor="floating_email" className="absolute text-sm text-gray-600 duration-300 transform -translate-y-6 scale-75 left-1 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name <span className='text-red-500'>&#42;</span></label>

                </div>

                <div className="relative z-0 mb-5 w-full group">
                    <input
                        type="email" disabled value={user?.email} name="floating_email" className="block py-2.5 cursor-not-allowed w-full text-sm text-gray-900 bg-transparent border-0 border-b appearance-none focus:border-red-400 focus:outline-none focus:ring-0 peer" placeholder=" " required="" />
                    <label htmlFor="floating_email" className="absolute text-sm text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 left-1 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Email <span className='text-red-500'>&#42;</span></label>

                </div>
                <div className="relative z-0 mb-5 w-full group">
                    <input
                        type="number" name="floating_mobile" className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b appearance-none focus:border-red-400 focus:outline-none focus:ring-0  peer" placeholder=" " required="" />
                    <label htmlFor="floating_email" className="absolute text-sm text-gray-600 duration-300 transform -translate-y-6 scale-75 left-1 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mobile Number <span className='text-red-500'>&#42;</span></label>

                </div>
                <div className="relative z-0 mb-5 w-full group">
                    <input
                        type="number" name="floating_mobile" className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b appearance-none focus:border-red-400 focus:outline-none focus:ring-0  peer" placeholder=" " required="" />
                    <label htmlFor="floating_email" className="absolute text-sm text-gray-600 duration-300 transform -translate-y-6 scale-75 left-1 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Height <span className='text-red-500'>&#42;</span></label>

                </div>
                <div className="relative z-0 mb-5 w-full group">
                    <input
                        type="number" name="floating_mobile" className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b appearance-none focus:border-red-400 focus:outline-none focus:ring-0  peer" placeholder=" " required="" />
                    <label htmlFor="floating_email" className="absolute text-sm text-gray-600 duration-300 transform -translate-y-6 scale-75 left-1 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Weight <span className='text-red-500'>&#42;</span></label>

                </div>
                <div className='w-full'>
                    <button
                        type="submit" className={`  text-white mt-4 bg-blue-500 block py-3 rounded-full w-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm text-center`}>Sign up</button>
                </div>
            </form>
        </div>
    );
};

export default Checkout;