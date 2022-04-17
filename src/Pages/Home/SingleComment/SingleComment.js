import React from 'react';
import './SingleComment.css';

const SingleComment = ({ userComment }) => {
    const { name, comment, image, date } = userComment
    return (
        <div className='flex mb-4'>
            <div className='comment-img mr-2'>
                <img className='' src={image} alt="" />
            </div>
            <div className="relative border-l text-left border-gray-200">
                <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{name}</h3>
                    <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{date}</time>
                    <p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">{comment}</p>
                   
                </div>
            </div>
        </div>
    );
};

export default SingleComment;