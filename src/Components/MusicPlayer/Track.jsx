import React from 'react';

const Track = ({ currentSong, isPlaying }) => {
    return (
        <div className="flex items-center xs:w-[180px] md:w-fit w-full justify-center xs:justify-start gap-4 xs:gap-0">
            <div className={`rounded-full mr-3 w-[3.5rem] h-[3.5rem] ${isPlaying ? 'rotate' : ''}`}>
                <img src={currentSong?.cover} className='rounded-full w-full h-full' alt="" />
            </div>
            <div>
                <p className='text-base font-bold'>{currentSong?.title}</p>
                <p className='text-[0.75rem] text-[#ffffff70] font-bold'>{currentSong?.artist}</p>
            </div>
        </div>
    )
};

export default Track;
