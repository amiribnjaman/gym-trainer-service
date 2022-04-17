import React from 'react';
import NotFoundImg from '../../../Assets/img/404.jpg'

const NotFound = () => {
    return (
        <div className='w-1/3 mx-auto h-screen flex items-center'>
            <img className='mx-auto' src={NotFoundImg} alt="" />
        </div>
    );
};

export default NotFound;