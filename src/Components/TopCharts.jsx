import React, { useContext, useEffect, useState } from 'react'
import SingleTopChart from './Molecules/SingleTopChart'
import react from '../assets/react.svg';
import AppContext from '../Context/GeneralContext';
import axios from "axios";

const TopCharts = () => {
    const { likedAlbumNames, handleLiked } = useContext(AppContext);
    const [topCharts, setTopCharts] = useState([]);
    const [selectedChart, setSelected] = useState({});

    const fetchTopCharts = () => {
        axios.get("https://musica-api.onrender.com/playlist")
        .then(res => {
            console.log(res?.data);
            setTopCharts(res?.data);
        })
        .catch(err => console.log(err));
    };

    useEffect(() => {
        fetchTopCharts();
    }, []);

    return (
        <div className='mt-12 mb-6 md:my-0'>
            <h3 className='text-lg font-[#EFEEE0] mb-4'>Top Charts</h3>
            <div 
            className='flex flex-1 gap-4 md:flex-col 
            min-w-full md:h-[450px] overflow-x-scroll md:overflow-x-hidden 
            charts mb-2 charts-container'>
                {topCharts && topCharts?.map((top) => {
                    return (
                        <SingleTopChart
                            key={top?.id}
                            albumCover={top?.cover}
                            artist={top?.info.substr(0, 50).concat("...")}
                            albumName={top?.title}
                            id={top?.audio}
                            handleLiked={handleLiked}
                            likedArray={likedAlbumNames}
                            files={top}
                        />
                    )
                })}
                {/* <SingleTopChart
                    albumCover={react}
                    artist="Izziman"
                    albumName='The deep blue sea'
                    time='00:30:27'
                    handleLiked={handleLiked}
                    likedArray={likedAlbumNames}
                />
                <SingleTopChart
                    albumCover={react}
                    artist="Izim"
                    albumName='The deep blue'
                    time='00:30:27'
                    handleLiked={handleLiked}
                    likedArray={likedAlbumNames}
                />
                <SingleTopChart
                    albumCover={react}
                    artist="Izian"
                    albumName='The blue sea'
                    time='00:20:27'
                    handleLiked={handleLiked}
                    likedArray={likedAlbumNames}
                /> */}
            </div>
        </div>
    )
}

export default TopCharts