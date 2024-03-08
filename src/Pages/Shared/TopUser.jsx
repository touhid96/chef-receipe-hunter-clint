/* eslint-disable no-unused-vars */
import React from 'react';
import user1 from '../../image/user1.jpeg'
import user2 from '../../image/user2.jpeg'
import user3 from '../../image/user3.jpeg'
import user4 from '../../image/user4.jpeg'
import user5 from '../../image/user5.jpeg'
const TopUser = () => {
    return (
        <div className='mt-16'>
            <h1  className='text-center text-4xl font-bold '>Today Our Top Five User</h1>
            <div className='grid grid-cols-1 sm:grid-cols-5 gap-3 mt-8 ml-4 mr-4 border-solid border-2 border-gray-600 p-6 rounded-lg'>
            <div >
                <img className='w-28 h-28 rounded-full' src={user1} alt="" />
                <p className='ms-6 mt-4 font-bold'>Jennifer</p>
            </div>
            <div>
                <img className='w-28 h-28 rounded-full' src={user2} alt="" />
                <p className='ms-6 mt-4 font-bold'>Taylor</p>
            </div>
            <div>
                <img className='w-28 h-28 rounded-full' src={user3} alt="" />
                <p className='ms-6 mt-4 font-bold'>Jhon</p>
            </div>
            <div>
                <img className='w-28 h-28 rounded-full' src={user4} alt="" />
                <p className='ms-6 mt-4 font-bold'>Alexis</p>
            </div>
            <div>
                <img className='w-28 h-28 rounded-full' src={user5} alt="" />
                <p className='ms-8 mt-4 font-bold'>Donald</p>
            </div>
        </div>
        </div>
    );
};

export default TopUser;