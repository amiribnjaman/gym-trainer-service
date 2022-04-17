import { comment } from 'postcss';
import React, { useEffect, useState } from 'react';
import SingleComment from '../SingleComment/SingleComment';

const Comments = () => {
    const [userComments, SetUserComments] = useState([])

    useEffect(() => {
        fetch('user.json')
            .then(data => data.json())
            .then(res => SetUserComments(res))
    }, [])
    return (
        <div className='w-11/12 mx-auto mt-24'>
            <div className='mb-7'>
                <h2 className='font-bold text-2xl mb-2'>What Clients Says?</h2>
                <hr className='w-20 mx-auto h-[2px] rounded-full bg-red-300' />
                <hr className='w-24 mx-auto h-[2px] rounded-full bg-red-300' />
                <hr className='w-20 mx-auto h-[2px] rounded-full bg-red-300' />
            </div>
            <div className='grid md:grid-cols-2 mt-10 mb-8'>
                <div>
                    {
                        userComments.map(userComment => <SingleComment key={comment.id} userComment={userComment} />)
                    }
                </div>
                <div>
                    comment
                </div>
            </div>
        </div>
    );
};

export default Comments;