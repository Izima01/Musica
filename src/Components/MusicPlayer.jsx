import React, { useRef, useState } from 'react';
import james from '../assets/james.png';
import next from '../assets/next.svg';
import '../App.css';
import { FaPlayCircle } from 'react-icons/fa'
import { FaPauseCircle } from 'react-icons/fa'
import peru from '../assets/Peru - Fireboy Dml  Ed Sheeran (128).mp3';
// import { HiPlayPause } from 'react-icons/hi2';

const MusicPlayer = () => {
    const [isPlaying, setisPlaying] = useState(false);
    const musicRef = useRef();
    const progressRef = useRef();

    const playPause = () => {
        setisPlaying(!isPlaying);
        // console.log(musicRef);
        isPlaying ? musicRef.current.pause() : musicRef.current.play();
    }

    const handleNext = () => {
        alert("Next");
    }

    // progressScan.addEventListener('click', () => {
    //     alert("progressing");
    // });

    const handleTimeUpdate = () => {
        const percentPlayed = (musicRef.current.currentTime/ musicRef.current.duration) * 100;
        // console.log(percentPlayed);
        progressRef.current.style.width = `${percentPlayed}%`;
    }

    const handleProgress = (e) => {
        // console.log(e);
        const totalWidth = e.view.innerWidth;
        let newWidth = e.clientX;
        console.log(newWidth, totalWidth);
        musicRef.current.currentTime = (newWidth / totalWidth) * musicRef.current.duration;
    }

    return (
        <footer className='h-28 p-8 player flex items-center border-t-2 border-t-[#ffffff57] relative'>
            <div className={`rounded-full mr-3 w-[3.5rem] h-[3.5rem] ${isPlaying ? 'rotate' : ''}`}>
                <img src={james} className='rounded-full w-full h-full' alt="" />
            </div>
            <div>
                <p className='text-base font-bold'>Seasons In</p>
                <p className='text-[0.75rem] text-[#ffffff70] font-bold'>James</p>
            </div>
            <div className='ml-auto flex items-center gap-6'>
                <button onClick={playPause}>
                    {isPlaying ? <FaPauseCircle fill='#FACD66' size='2rem' /> : <FaPlayCircle fill='#FACD66' size='2rem' />}
                </button>
                <button onClick={handleNext}>
                    <img src={next} alt="" />
                </button>
            </div>
            <audio src={peru} ref={musicRef} onTimeUpdate={handleTimeUpdate}></audio>
            <div className='progress-container absolute -top-[3px] left-0 right-0 h-[1.5px] bg-[#ffffff57] w-full' onClick={handleProgress}>
                <div className='progress absolute top-0 rounded left-0 right-0 bg-red-500 h-[3px] w-0 transition-all duration-200 ease-in-out ease-linear' ref={progressRef}></div>
            </div>
        </footer>
    )
}

export default MusicPlayer