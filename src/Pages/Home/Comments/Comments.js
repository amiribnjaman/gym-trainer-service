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
        <div className='w-11/12 mx-auto mt-28'>
            <div className='mb-7'>
                <h2 className='font-bold text-2xl mb-2'>What Clients Says?</h2>
                <hr className='w-20 mx-auto h-[2px] rounded-full bg-red-300' />
                <hr className='w-24 mx-auto h-[2px] rounded-full bg-red-300' />
                <hr className='w-20 mx-auto h-[2px] rounded-full bg-red-300' />
            </div>
            <div className='grid md:grid-cols-2 gap-5 mt-10 mb-10'>
                <div>
                    {
                        userComments.map(userComment => <SingleComment key={comment.id} userComment={userComment} />)
                    }
                </div>
                <div className='relative md:border-l text-left border-gray-200'>
                    <div className="">
                        <div class="mb-6 md:ml-4">
                            <label for="message" class="block mb-2 mt-2 text-md font-medium text-gray-900 ">Your message</label>
                            <p className='text-sm text-slate-500 mb-2'>Share your feelings or experience about your mentor SMART GYM TRAINER</p>
                            <textarea id="message" rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-400 focus:border-blue-400 " placeholder="Leave your comment..."></textarea>
                            <button className="block mx-auto md:mx-0 mt-4 bg-blue-500 text-white font-semibold rounded-full px-14 py-2.5 hover:bg-blue-600">Place Comment</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comments;