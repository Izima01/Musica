import React, { useState, useEffect, useContext } from 'react';
import lead from '../assets/Lead-image.png';
import add from '../assets/music-square-add.svg';
import more from '../assets/more-vertical.svg';
import tuneImg from '../assets/tuneImg.png';
import { FaPlayCircle, FaHeart } from 'react-icons/fa'
import AppContext from '../Context/GeneralContext';

const SingleTune = ({ cover, title, isSingle, time, id, artist }) => {
    const songInfo = { cover, title, time, src: id, artist };

    return (
        <button className='w-full bg-[#33373b5e] rounded-xl flex gap-4 p-2.5 items-center' id={id}>
            <img src={cover || tuneImg} width='40px' className='rounded-md' alt="" />
            <div>
                <p className='text-white text-sm pb-1'>{title + " ~ " + artist || "Let me love you ~ Krisx"}</p>
                <p className='text-xs text-white text-left'>{isSingle ? 'Single' : 'Album'}</p>
            </div>
            <div className='ml-auto text-right'>
                <img src={more} alt="" className='block ml-auto' />
                <p className='text-sm mt-2'>{time || "4:17"}</p>
            </div>
        </button>
    )
};

const ChartDetails = () => {
    const [playlistInfo, setPlaylistInfo] = useState({});

    const renderSongs =
    playlistInfo?.files?.map(song => {
        return (
            <SingleTune
                key={song?.id}
                cover={song?.cover}
                title={song?.title}
                isSingle={true}
                time={song?.duration}
                id={song?.audio}
                artist={song?.artist}
            />
        )
    })

    useEffect(() => {
        setPlaylistInfo(JSON.parse(sessionStorage.getItem('files')));
        renderSongs
    }, []);
    
    return (
        <div className='mb-28'>
            <div className='md:flex gap-7 items-end'>
                <img src={playlistInfo?.cover || lead} className='w-full rounded-3xl md:min-w-[290px]' alt="" />
                <div>
                    <h2 className='text-[#A4C7C6] text-4xl font-bold mt-6'>{playlistInfo?.title || "Tomorrow’s tunes"}</h2>
                    <p className='des text-[#EFEEE0] text-sm mt-2 mb-3'>{playlistInfo?.info || "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"}</p>
                    <p className='text-[#EFEEE0] text-sm'>
                        <span>{playlistInfo?.files?.length || "64"} songs - </span>
                        <span className='pl-1'>{length || " 0"} hrs+</span>
                    </p>
                    <div className='w-full gap-2 grid mt-6 md:mt-12' style={{ gridTemplateColumns: 'auto auto auto' }}>
                        <button className='bg-[#ffffff11] rounded-[2rem] py-3 gap-2 flex justify-center items-center'>
                            <FaPlayCircle fill='#FACD66' size='1rem' />
                            Play all
                        </button>
                        <button className='bg-[#ffffff11] rounded-[2rem] py-3 gap-2 flex justify-center items-center'>
                            <img src={add} alt="" />
                            Add to collection
                        </button>
                        <button className='bg-[#ffffff11] rounded-[2rem] py-3 gap-2 flex justify-center items-center'>
                            <FaHeart fill='#E5524A' size='1rem' />
                            Like
                        </button>
                    </div>
                </div>
            </div>
            <div className='tune w-full mt-6 flex flex-col gap-3.5'>
                {/* <SingleTune /> */}
                {renderSongs}
            </div>
        </div>
    )
}

export default ChartDetails;
