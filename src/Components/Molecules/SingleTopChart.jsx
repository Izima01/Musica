import React, { useContext, useEffect } from 'react';
import { RiHeart2Fill } from 'react-icons/ri';
import image from '../../assets/top-chart1.svg';
import AppContext from '../../Context/GeneralContext';
import { useNavigate } from 'react-router-dom';

const SingleTopChart = (props) => {
    const navigate = useNavigate();
    const { 
        albumCover=image,
        artist='',
        albumName='Golden age of 80s',
        time='',
        id, files,
        likedArray, handleLiked
    } = props;

    const handleClick = () => {
        // console.log();
        sessionStorage.setItem('files', JSON.stringify(files));
        navigate('album-details');
    };

    return (
        <article className='min-w-[19rem] p-4 rounded-3xl relative bg-[#1A1E1F] md:flex cursor-pointer' id={id} onClick={() => handleClick(id)}>
            <div className='w-[6.5rem] md:w-16 h-20 md:h-16 rounded-[10px] md:mr-4'>
                <img src={albumCover} className='w-full rounded-[10px] h-full' alt="" />
            </div>
            <div className='md:flex md:flex-col'>
                <h5 className='albumName mt-4 text-base mb-2 md:my-0'>{albumName}</h5>
                <p className='artist text-[0.75rem] text-[#ffffff7f] mb-6 md:mb-0'>{artist}</p>
                <p className='time text-sm'>{time}</p>
            </div>
            <button
                className={`absolute top-4 right-4 md:top-1/2 
                md:-translate-y-1/2 border-2 p-2 rounded-full
                ${likedArray.includes(albumName) ? 'border-[#FACD66]' : 'border-[#ffffff7f]'}`}
            >
                <RiHeart2Fill 
                    size='24px'
                    className='cursor-pointer'
                    strokeOpacity='0.5' fill={likedArray.includes(albumName)  ? '#FACD66' : '#ffffff7f'}
                    onClick={() => handleLiked(albumName, albumCover, artist, time)}
                />
            </button>
        </article>
    )
}

export default SingleTopChart