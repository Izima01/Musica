import React, { useRef, useState, useContext, useEffect } from 'react';
import AppContext from '../../Context/GeneralContext';
import '../../App.css';
import Track from "./Track";
import Controls from './Controls';
import VolumeBar from './VolumeBar';
import Seekbar from './Seekbar';

const MusicPlayer = () => {
    const [seekTime, setSeekTime] = useState(0);
    const [appTime, setAppTime] = useState(0);
    const [volume, setVolume] = useState(0.3);
    const [repeat, setRepeat] = useState(false);
    const [shuffle, setShuffle] = useState(false);
    const musicRef = useRef();
    const { currentSong, nowPlaying, isPlaying, playPause, currentSongIndex, setCurrentSongIndex } = useContext(AppContext);

    if (musicRef.current) {
        if (isPlaying) {
            musicRef.current.play();
        } else {
            musicRef.current.pause();
        }
    }

    const handleNext = () => {
        playPause(false);
        if (!shuffle) {
            currentSongIndex === nowPlaying.length-1
            ? setCurrentSongIndex(0)
            : setCurrentSongIndex(currentSongIndex + 1);
            playPause(true);
        } else {
            setCurrentSongIndex(Math.floor(Math.random() * nowPlaying.length));
            playPause(true);
        }
    };

    const handlePrev = () => {
        playPause(false);
        if (!shuffle) {
            currentSongIndex === 0
            ? setCurrentSongIndex(nowPlaying.length -1)
            : setCurrentSongIndex((currentSongIndex) => currentSongIndex -= 1);
            playPause(true);
        } else {
            currentSongIndex === 0
            ? setCurrentSongIndex(nowPlaying.length -1)
            : setCurrentSongIndex(Math.floor(Math.random() * nowPlaying.length));
            playPause(true);
        }
    };

    useEffect(() => {
        musicRef.current.volume = volume;
    }, [volume]);

    useEffect(() => {
        musicRef.current.currentTime = seekTime;
    }, [seekTime]);

    return (
        <footer className={`'lg:h-28 lg:px-8 xs:px-4 px-8 py-1 xs:py-4 player flex flex-1 flex-col xs:flex-row justify-between sm:gap-4 lg:gap-8 gap-2 items-center border-t-2 border-t-[#ffffff57] transition-all duration-500 relative' ${isPlaying ? "translate-y-0" : "translate-y-full" }`}>
            <Track currentSong={currentSong} isPlaying={isPlaying} />
            <div className='flex flex-1 flex-col gap-2 xs:gap-4 justify-center w-full xs:w-auto'>
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