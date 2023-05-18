import React from 'react';
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';
import { BsShuffle, BsArrowRepeat } from 'react-icons/bs';
import { GiNextButton, GiPreviousButton } from 'react-icons/gi';

const Controls = ({ handleNext, handlePrev, isPlaying, playPause, repeat, setRepeat, shuffle, setShuffle }) => (
    <div className='flex items-center justify-between sm:justify-center sm:gap-8 gap-3'>
        <BsShuffle className='cursor-pointer' size={24} fill={shuffle ? '#FACD66' : 'white'} onClick={() => setShuffle(!shuffle)} />

        <GiPreviousButton className='cursor-pointer' size={24} onClick={() => handlePrev()} />

        {isPlaying
            ? <FaPauseCircle fill='#FACD66' onClick={() => playPause(false)} className='cursor-pointer' size={36} />
            : <FaPlayCircle fill='#FACD66' onClick={() => playPause(true)} className='cursor-pointer' size={36} />
        }

        <GiNextButton className='cursor-pointer' size={24} onClick={handleNext} />

        <BsArrowRepeat className='cursor-pointer' size={24} fill={repeat ? '#FACD66' : 'white'} onClick={() => setRepeat(!repeat)} />
    </div>
)

export default Controls;
