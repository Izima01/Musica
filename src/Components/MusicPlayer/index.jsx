import React, { useRef, useState, useContext, useEffect } from 'react';
import AppContext from '../../Context/GeneralContext';
import '../../App.css';
import Track from "./Track";
import Controls from './Controls';
import VolumeBar from './VolumeBar';
import Seekbar from './Seekbar';
import { defaultSong } from '../../Context/GeneralContext';

const MusicPlayer = () => {
    const [seekTime, setSeekTime] = useState(0);
    const [appTime, setAppTime] = useState(0);
    const [volume, setVolume] = useState(0.3);
    const [repeat, setRepeat] = useState(false);
    const [shuffle, setShuffle] = useState(false);
    const musicRef = useRef();
    const { currentSong, nowPlaying, isPlaying, playPause, setCurrentSong, currentSongIndex, setCurrentSongIndex } = useContext(AppContext);

    const handleNext = () => {
        playPause(false);
        if (!shuffle) {
            currentSongIndex === nowPlaying.length-1 ? setCurrentSongIndex(0) : setCurrentSongIndex(currentSongIndex + 1);
        } else {
            setCurrentSongIndex(Math.floor(Math.random() * nowPlaying.length));
        }
        setCurrentSong(nowPlaying[currentSongIndex]);
    };

    const handlePrev = () => {
        playPause(false);
        if (!shuffle) {
            currentSongIndex === 0 ? setCurrentSongIndex(nowPlaying.length -1) : setCurrentSongIndex((currentSongIndex) => currentSongIndex -= 1);
        } else {
            currentSongIndex === 0 ? setCurrentSongIndex(nowPlaying.length -1) : setCurrentSongIndex(Math.floor(Math.random() * nowPlaying.length));
        }
        setCurrentSong(nowPlaying[currentSongIndex]);
    };

    useEffect(() => {
        musicRef.current.volume = volume;
    }, [volume]);

    useEffect(() => {
        musicRef.current.currentTime = seekTime;
    }, [seekTime]);

    useEffect(() => {
        isPlaying ? musicRef.current.play() : musicRef.current.pause();
    }, [isPlaying, currentSong]);

    return (
        <footer className='lg:h-28 lg:px-8 xs:px-4 px-10 py-4 player flex flex-1 flex-col xs:flex-row justify-between sm:gap-4 lg:gap-8 gap-6 items-center border-t-2 border-t-[#ffffff57] relative'>
            <Track currentSong={currentSong} isPlaying={isPlaying} />
            <div className='flex flex-1 flex-col gap-4 justify-center w-full xs:w-auto'>
                <Controls
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                    isPlaying={isPlaying}
                    playPause={playPause}
                    repeat={repeat}
                    setRepeat={setRepeat}
                    shuffle={shuffle}
                    setShuffle={setShuffle}
                />
                <Seekbar
                    min={0}
                    maximum={musicRef?.current?.duration}
                    onChange={(e) => setSeekTime(e.target.value)}
                    value={appTime}
                    duration={musicRef?.current?.duration}
                />
            </div>
            <VolumeBar
                value={volume}
                min={0}
                max={1}
                onChange={(event) => setVolume(event.target.value)}
                setVolume={setVolume}
            />
            <audio
                src={currentSong?.audio}
                ref={musicRef}
                onTimeUpdate={(e) => setAppTime(e.target.currentTime)}
                loop={repeat}
                onEnded={() => repeat ? musicRef.current.play() : handleNext()}
            />
        </footer>
    )
}

export default MusicPlayer