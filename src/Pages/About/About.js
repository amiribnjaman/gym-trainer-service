import React from 'react';
import AboutImg from '../../Assets/img/about.png';

const About = () => {
    return (
        <div className='md:flex md:w-4/6 mx-auto my-10 md:my-20'>
            <div className='md:w-1/3 w-2/3 mx-auto'>
                <img className='mx-auto mb-5 md:mb-0' src={AboutImg} alt="" />
            </div>
            <div className='ml-2'>
                <div className="relative md:border-l border-gray-200 ">
                    <div className="mb-10 ml-4 text-left">
                        <div className="absolute md:w-3 md:h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <h3 className="text-lg font-semibold text-gray-900 ">AMIR HOSEN</h3>
                        <h4 className="text-MD font-semibold text-gray-800 ">Front-end Developer</h4>
                        <p className="mb-4 text-sm font-normal text-slate-500 w-11/12">
                            Hello Buddy, <br />
                            Thanks for reading About me. I am almost 80% of the Front-end web Developer. I'm on my stack or on the way to becoming an Experienced Front-end Developer. This journey is running and will be...
                            <br />
                            It's my prime goal nowdays and dream also. I have set my goal at the beginning of this year. And I'm struggling to conquer my goal.
                            Thanks again.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;