import React, { useContext, useEffect, useState } from 'react';
import SingleTopChart from './Molecules/SingleTopChart';
import AppContext from '../Context/GeneralContext';
import axios from "axios";

const TopCharts = () => {
    const { likedAlbumNames, handleLiked, playPause, setCurrentSongIndex, nowPlaying, setNowPlaying } = useContext(AppContext);
    const [topCharts, setTopCharts] = useState([]);

    const fetchTopCharts = () => {
        axios.get("https://musica-api.onrender.com/popular")
        .then(res => {
            // console.log(res);
            setTopCharts(res?.data);
        })
        .catch(err => console.log(err));
    };

    useEffect(() => {
        fetchTopCharts();
    }, []);

    const handlePlay = (song) => {
        playPause(false);
        setNowPlaying([...topCharts]);
        const thisIndex = nowPlaying.findIndex((aSong) => song?.id === aSong?.id);
        setCurrentSongIndex(thisIndex);
        // topReleases.map((release) => setNowPlaying(nowplaying  => [...nowplaying, release]));
        playPause(true);
    };

    const renderTopCharts = topCharts && topCharts?.map((top) => {
        return (
            <SingleTopChart
                key={top?.id}
                song={top}
                // id={top?.id}
                handleLiked={handleLiked}
                likedArray={likedAlbumNames}
                handlePlay={() => handlePlay(top)}
            />
        )
    });

    return (
        <div className='mt-12 mb-6 md:my-0'>
            <h3 className='text-lg font-[#EFEEE0] mb-4'>Top Charts</h3>
            <div
            className='flex flex-1 gap-2 sm:gap-4 md:flex-col 
            min-w-full md:h-[450px] overflow-x-scroll md:overflow-x-hidden 
            charts mb-2 charts-container fancyscroll'>
                {topCharts.length === 0 ? <SingleTopChart /> : renderTopCharts}
            </div>
        </div>
    )
}

export default TopCharts