import React from 'react';
import BannerImg from '../../../Assets/img/banner.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-section'>
            <img className="w-full h-screen" src={BannerImg} alt="" />
            <div className='banner-text md:top-1/2 lg:top-1/3 top-1/2 md:left-1/2 left-3.5 sm:left-36 md:w-2/6 '>
                <h2 className='text-white text-2xl md:text-5xl font-bold font-sans'>KEEP YOUR BODY FIT & <span className='text-red-600'>STRONG</span></h2>
                <p className='text-slate-200 mt-2 text-sm'>with SMART <span className='text-red-500'>GYM</span> TRAINER</p>
                <div className='md:mt-5 mt-1'>
                    <button className="block mx-auto bg-red-500 text-white font-semibold rounded-lg px-14 py-2.5 hover:bg-red-600">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;