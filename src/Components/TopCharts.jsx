import React, { useContext, useEffect, useState } from 'react'
import SingleTopChart from './Molecules/SingleTopChart'
import react from '../assets/react.svg';
import AppContext from '../Context/GeneralContext';
// import '../App.css'

const TopCharts = () => {
    const { likedAlbumNames, handleLiked } = useContext(AppContext);

    return (
        <div className='mt-12 mb-6 md:my-0'>
            <h3 className='text-lg font-[#EFEEE0] mb-4'>Top Charts</h3>
            <div 
            className='flex flex-1 gap-4 md:flex-col 
            min-w-full md:h-[450px] overflow-x-scroll md:overflow-x-hidden 
            charts mb-2 charts-container'>
                <SingleTopChart
                    albumCover={react}
                    artist="Izziman"
                    albumName='The deep blue sea'
                    time='00:30:27'
                    handleLiked={handleLiked}
                    likedArray={likedAlbumNames}
                />
                <SingleTopChart likedArray={likedAlbumNames} handleLiked={handleLiked} />
                <SingleTopChart
                    albumCover={react}
                    artist="Izim"
                    albumName='The deep blue'
                    time='00:30:27'
                    handleLiked={handleLiked}
                    likedArray={likedAlbumNames}
                />
                <SingleTopChart
                    albumCover={react}
                    artist="Izian"
                    albumName='The blue sea'
                    time='00:20:27'
                    handleLiked={handleLiked}
                    likedArray={likedAlbumNames}
                />
            </div>
        </div>
    )
}

export default TopCharts