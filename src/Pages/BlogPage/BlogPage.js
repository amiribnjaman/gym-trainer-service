import React from 'react';

const BlogPage = () => {
    return (
        <div className='md:w-2/3 md:mx-auto mx-5 text-left my-10'>
            <div className='my-12'>
                <h2 className='md:text-2xl text-xl font-bold'>What are Differences between authorization and authentication?</h2>
                <div>
                    <h5 className='text-sm text-slate-500'>Post by Admin</h5>
                    <h6 className='text-sm text-gray-500'>18, April 2022</h6>
                </div>
                <div className='mt-1 mb-4 md:w-10/12 text-slate-800'>
                    <p>
                        <strong>Authentication: </strong> Authentication is the process to check a user or user information is valid or not. Authentication is the system to validating user credentials such as Username and password to verify a user identity. Generally, for authentication used username and password, although there are other various ways to be authenticated.
                    </p>
                    <p>
                        <strong>Authorization: </strong> When authentication checked and response is positive then user got accesed by the system, simply this is the authorization. As MDN documentation Authorization occurs after your identity is successfully authenticated by the system, which therefore gives you full access to resources such as information, files, databases, funds etc.
                    </p>
                </div>
            </div>
            <div className='my-12'>
                <h2 className='md:text-2xl text-xl font-bold'>Why are you using firebase? What other options do you have to implement authentication?</h2>
                <div>
                    <h5 className='text-sm text-slate-500'>Post by Admin</h5>
                    <h6 className='text-sm text-gray-500'>18, April 2022</h6>
                </div>
                <div className='mt-1 mb-4 md:w-10/12 text-slate-800'>
                    <p>
                        1. Firebase is backend application development tool used for develope Web application, Android App and iOS app by tech gaint Google. That provide many of tools to implement in application. One of the most import and popular features that firebase provide is, User Authentication. That used by many of individual developer and larges companies. I'm also used this awesome tool to uer authentication.
                    </p>
                    <p>
                        2. So many Resources we have to implement user authentication. One is google firebase. And so many alter resources we have. some of mention below: <br />
                        <ol>
                            <li className='text-sm font-semibold'>1. Auth0</li>
                            <li className='text-sm font-semibold'>2. Okta</li>
                            <li className='text-sm font-semibold'>3. Amazon cognito</li>
                            <li className='text-sm font-semibold'>4. Back4App etc.</li>
                        </ol>
                    </p>
                </div>
            </div>
            <div className='my-12'>
                <h2 className='md:text-2xl text-xl font-bold'>What other services does firebase provide other than authentication?</h2>
                <div>
                    <h5 className='text-sm text-slate-500'>Post by Admin</h5>
                    <h6 className='text-sm text-gray-500'>18, April 2022</h6>
                </div>
                <div className='mt-1 mb-4 md:w-10/12 text-slate-800'>
                    <p>
                        We know that Firebase is backend application development tool. Its provide many of tools to implement in application. One of Authentication. Except Authentication its provide many others thing those are: <br />
                        <ol>
                            <li className='text-sm font-semibold'>1. Hosting</li>
                            <li className='text-sm font-semibold'>2. Cloud storage</li>
                            <li className='text-sm font-semibold'>3. Google analytics</li>
                            <li className='text-sm font-semibold'>3. Cloud Storage </li>
                            <li className='text-sm font-semibold'>3. Remote config etc</li>
                        </ol>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default BlogPage;