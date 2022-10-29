import React, { useState } from 'react'
import SingleTopChart from './Molecules/SingleTopChart'
import react from '../assets/react.svg';
// import '../App.css'

const TopCharts = () => {
    const [isLiked, setIsLiked] = useState(false);

    const handleLiked = () => {
        console.log(this);
        setIsLiked(!isLiked);
    }

    return (
        <div className='mt-12 mb-6'>
            <h3 className='text-lg font-[#EFEEE0] mb-4'>Top Charts</h3>
            <div className='flex flex-1 gap-4 min-w-full overflow-x-scroll charts mb-2'>
                <SingleTopChart
                    albumCover={react}
                    artist="Izziman"
                    albumName='The deep blue sea'
                    time='00:30:27'
                    handleLiked={handleLiked}
                    isLiked={isLiked}
                />
                <SingleTopChart isLiked={isLiked} />
                <SingleTopChart isLiked={isLiked} />
            </div>
        </div>
    )
}

export default TopCharts