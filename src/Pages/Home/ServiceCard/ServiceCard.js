import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    console.log(service);
    const { name, desc, img, price } = service
    return (
        <div className='mx-auto'>
            <div class="relative max-w-sm min-h-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className='rounded-md'>
                    <img className='rounded-t-md' src={img} alt="" />
                    <div className='px-4 py-5'>
                        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                        <p class="mb-3 font-normal text-gray-600 dark:text-gray-500 text-[14px]">{desc}</p>
                        <h5 className='text-md text-black font-semibold my-2'>${price}/ <span className='text-sm font-thin'>month</span></h5>
                        <div className='mt-4'>
                            <Link to="#" class="left-1/2 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-0 focus:outline-none">
                                Explore now
                                <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceCard;