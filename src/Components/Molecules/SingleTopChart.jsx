import React from 'react';
import { RiHeart2Fill } from 'react-icons/ri';
import image from '../../assets/top-chart1.svg';

const SingleTopChart = ({ albumCover=image, albumName="Golden age of 80s", artist="Sean swadder", time="2:34:45", handleLiked, isLiked  }) => {

    return (
        <div className='min-w-[19rem] p-4 border-red-600 border-2 rounded-3xl relative bg-[#1A1E1F]'>
            <div className='w-[6.5rem] h-20 rounded-[10px]'>
                <img src={albumCover} className='w-full rounded-[10px] h-full' alt="" />
            </div>
            <h5 className='albumName mt-4 text-lg mb-2'>{albumName}</h5>
            <p className='artist text-[0.75rem] font-[#ffffff7f] mb-6'>{artist}</p>
            <p className='time text-sm'>{time}</p>
            <button className={`absolute top-4 right-4 border-2 ${isLiked ? 'border-[#FACD66]' : 'border-[#ffffff7f]'} p-2 rounded-full`}>
                <RiHeart2Fill size='24px' className='cursor-pointer' strokeOpacity='0.5' fill={isLiked ? '#FACD66' : '#ffffff7f'} onClick={handleLiked} />
            </button>
        </div>
    )
}

export default SingleTopChart