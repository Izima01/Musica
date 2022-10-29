import React, { useState } from 'react'
import bg from '../assets/currated-bg.svg'
import artists from '../assets/currated-artists.png'
import { RiHeart2Fill } from 'react-icons/ri'

const CuratedPlaylist = () => {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <div className='bg-[#609EAF] w-full h-[500px] rounded-3xl p-6 relative flex flex-col'>
            <p className='text-[0.75rem]'>CuratedPlaylist</p>
            <img src={bg} alt="" className='absolute top-0 right-0' />
            <h2 className='mt-auto text-[2.25rem] '>R & B Hits</h2>
            <p className='mt-1 text-sm pr-12'>All mine, Lie again, Petty call me everyday, Out of time, No love, Bad habit, and so much more</p>
            <div className='flex gap-4 mt-12 items-center'>
                <img src={artists} alt="" />
                <RiHeart2Fill size='22px' className='cursor-pointer' fill={isLiked ? '#FACD66' : '#ffffff'} onClick={()=> setIsLiked(!isLiked)} />
                <h3 className='text-xl'>33k Likes</h3>
            </div>
        </div>
    )
}

export default CuratedPlaylist