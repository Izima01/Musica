import React from 'react';
import release1 from '../../assets/release1.png';

const SingleRelease = () => {
    return (
        <div className='relative bg-[#1A1E1F]'>
            <div className='h-[9.5rem] w-[9.5rem] rounded-3xl'>
                <img src={release1} className='w-full h-full rounded-3xl' alt="" />
            </div>
            <p className='text-[0.75rem] mt-1'>Life in a bubble</p>
            <p className='text-[0.75rem] font-[rgba(255, 255, 255, 0.5)] mt-1 mb-3'>The Van</p>
        </div>
    )
}

export default SingleRelease