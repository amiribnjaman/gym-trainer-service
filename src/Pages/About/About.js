import React from 'react';
import AboutImg from '../../Assets/img/about.png';

const About = () => {
    return (
        <div className='flex w-3/5 mx-auto my-20'>
            <div className=''>
                <img className='' src={AboutImg} alt="" />
            </div>
            <div className='ml-3'>
                <div class="relative border-l border-gray-200 dark:border-gray-700">
                    <div class="mb-10 ml-4 text-left">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">AMIR HOSEN</h3>
                        <h4 class="text-MD font-semibold text-gray-800 dark:text-white">Front-end Developer</h4>
                        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 w-11/12">
                            Hello Buddy,
                            Thanks for reading About me. I am almost 80% of the Front-end web Developer. I'm on my stack or on the way to becoming an Experienced Front-end Developer. This journey is running and will be...
                            It's my goal and dream also. I have set my goal at the beginning of this year. And I'm struggling to conquer my goal.
                            Thanks again.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;