import React, { useContext, useEffect } from 'react';
import { RiHeart2Fill } from 'react-icons/ri';
import image from '../../assets/top-chart1.svg';
import AppContext from '../../Context/GeneralContext';
import { useNavigate } from 'react-router-dom';

const SingleTopChart = (props) => {
    const { setSelected } = useContext(AppContext);
    const navigate = useNavigate();
    const { 
        cover,
        artist='',
        title='Golden age of 80s',
        time='',
        id, files,
        likedArray, handleLiked
    } = props;

    const handleClick = (e) => {
        e.preventDefault();
        if (e.target.classList.contains('likeBtn') || e.target.classList.contains('likeIcon')) {
            handleLiked(title, cover, artist, files);
        } else {
            setSelected(files);
            navigate(`album-details/${id}`);
        }
    };

    return (
        <article className='min-w-[19rem] p-4 rounded-3xl relative bg-[#1A1E1F] md:flex cursor-pointer items-center' id={id} onClick={(e) => handleClick(e)}>
            <div className='w-[6.5rem] md:w-16 h-20 md:h-16 rounded-[10px] md:mr-4'>
                <img src={cover || image} className='w-full rounded-[10px] h-full' alt="" />
            </div>
            <div className='md:flex md:flex-col pr-1'>
                <h5 className='albumName mt-4 text-base mb-2 md:my-0'>{title}</h5>
                <p className='artist text-[0.75rem] text-[#ffffff7f] mb-6 md:mb-0'>{artist}</p>
                <p className='time text-sm'>{time}</p>
            </div>
            <button
                className={`ml-auto border-2 p-2 rounded-full likeBtn
                ${likedArray?.includes(title) ? 'border-[#FACD66]' : 'border-[#ffffff7f]'}`}
            >
                <RiHeart2Fill 
                    size='24px'
                    className='cursor-pointer likeIcon'
                    strokeOpacity='0.5' fill={likedArray?.includes(title)  ? '#FACD66' : '#ffffff7f'}
                    onClick={() => handleLiked(title, cover, artist, files)}
                />
            </button>
        </article>
    )
}

export default SingleTopChart