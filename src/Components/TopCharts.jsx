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
            // console.log(res?.data);
            setTopCharts(res?.data);
        })
        .catch(err => console.log(err));
    };

    useEffect(() => {
        fetchTopCharts();
    }, []);

    const renderTopCharts =
        topCharts && topCharts?.map((top) => {
            return (
                <SingleTopChart
                    key={top?.id}
                    cover={top?.cover}
                    artist={top?.info.substr(0, 50).concat("...")}
                    title={top?.title}
                    id={top?.audio}
                    handleLiked={handleLiked}
                    likedArray={likedAlbumNames}
                    files={top}
                />
            )
        })

    return (
        <div className='mt-12 mb-6 md:my-0'>
            <h3 className='text-lg font-[#EFEEE0] mb-4'>Top Charts</h3>
            <div
            className='flex flex-1 gap-4 md:flex-col 
            min-w-full md:h-[450px] overflow-x-scroll md:overflow-x-hidden 
            charts mb-2 charts-container fancyscroll'>
                {topCharts.length === 0 ? <SingleTopChart /> : renderTopCharts}
            </div>
        </div>
    )
}

export default TopCharts