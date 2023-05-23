import React, { useContext } from 'react';
import release1 from '../../assets/release1.png';
import AppContext from '../../Context/GeneralContext';
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';

const SingleRelease = ({ song, handlePlay }) => {
    const { nowPlaying, playPause, isPlaying, currentSong, setCurrentSongIndex } = useContext(AppContext);

    return (
        <div className='bg-[#1A1E1F] group' data-src={song?.audio}>
            <div className='h-[9.5rem] w-[9.5rem] rounded-3xl relative'>
                <img src={song?.cover || release1} className='w-full h-full rounded-3xl' alt="" />
                <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-40 transition duration-300 group-hover:flex ${song?.id === currentSong?.id ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
                    {
                        (isPlaying && song?.id === currentSong?.id)
                        ? <FaPauseCircle fill='#FACD66' onClick={() => playPause(false)} size={32} />
                        : <FaPlayCircle fill='#FACD66' onClick={handlePlay} size={32} />
                    }
                </div>
            </div>
            <p className='text-[0.75rem] mt-2 px-2'>{song?.title || "Life in a bubble"}</p>
            <p className='text-[0.75rem] px-2 font-[rgba(255, 255, 255, 0.5)] mt-1 mb-3'>{song?.artist || "The Van"}</p>
            
        </div>
    )
}

export default SingleRelease