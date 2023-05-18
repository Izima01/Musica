import React, { useContext, useEffect } from 'react';
import { RiHeart2Fill } from 'react-icons/ri';
import image from '../../assets/top-chart1.svg';
import AppContext from '../../Context/GeneralContext';
import { useNavigate } from 'react-router-dom';
import { FaPlayCircle } from 'react-icons/fa';

const SingleTopChart = (props) => {
    const { isPlaying, currentSong } = useContext(AppContext);
    const navigate = useNavigate();

    const { song, likedArray, handleLiked, handlePlay } = props;

    const handleClick = (e) => {
        console.log(e);
        e.preventDefault();
        if (e.target.classList.contains('likeBtn') || e.target.classList.contains('likeIcon') || e.target.classList.length==0) {
            handleLiked(song?.title, song?.cover, song?.artist, song?.audio);
        } else {
            handlePlay();
        }
    };

    return (
        <div className={`sm:min-w-[19rem] min-w-[15rem] rounded-3xl relative bg-[#1A1E1F] md:flex cursor-pointer items-center ${song?.id === currentSong?.id ? "border-[#FACD66] border-2 p-3" : 'p-4'}`} onClick={(e) => handleClick(e)}>
            <div className='w-[6.5rem] md:w-16 h-20 md:h-16 rounded-[10px] md:mr-4'>
                <img src={song?.cover || image} className='w-full rounded-[10px] h-full' alt="" />
            </div>
            <div className='md:flex md:flex-col pr-1'>
                <h5 className='albumName mt-4 text-base mb-2 md:my-0'>{song?.title}</h5>
                <p className='artist text-[0.75rem] text-[#ffffff7f] mb-6 md:mb-0'>{song?.artist}</p>
                <p className='time text-sm'>{song?.duration}</p>
            </div>
            <button
                className={`ml-auto border-2 p-2 rounded-full likeBtn
                ${likedArray?.includes(song?.title) ? 'border-[#FACD66]' : 'border-[#ffffff7f]'}`}
            >
                <RiHeart2Fill 
                    size='24px'
                    className='cursor-pointer likeIcon'
                    strokeOpacity='0.5' fill={likedArray?.includes(song?.title)  ? '#FACD66' : '#ffffff7f'}
                    onClick={() => handleLiked(song?.title, song?.cover, song?.artist, song?.audio)}
                />
            </button>
        </div>
    )
}

export default SingleTopChart