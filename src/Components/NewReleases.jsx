import React, { useContext, useEffect, useState } from 'react'
import SingleRelease from './Molecules/SingleRelease';
import '../App.css';
import axios from "axios";
import AppContext from '../Context/GeneralContext';

const NewReleases = () => {
    const [topReleases, setTopReleases] = useState([]);
    const [loading, setLoading] = useState(false);
    const { setNowPlaying, nowPlaying } = useContext(AppContext);

    const fetchTracks = () => {
        axios.get('https://musica-api.onrender.com/new')
            .then(res => {
                // console.log(res);
                setLoading(true);
                setTopReleases(res?.data);
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
        }

    useEffect(() => {
        fetchTracks();
    }, []);

    useEffect(() => {
        if (nowPlaying.length === 1) {
            if (topReleases.length <= 10) {
                topReleases.map((release) => setNowPlaying(nowplaying  => [...nowplaying, release]));
            }
        }
    }, [topReleases]);

    const renderReleases = topReleases && topReleases?.map((top) => <SingleRelease key={top?.id} song={top} />)

    return (
        <div className='md:mt-8 releases'>
            <h3 className='text-lg font-[#EFEEE0] mb-3 font-bold'>New Releases.</h3>
            <div className='flex flex-1 gap-8 min-w-full overflow-x-scroll charts xs:mb-24 mb-36 fancyscroll'>
                {topReleases.length === 0 ? <SingleRelease /> : renderReleases}
            </div>
        </div>
    )
}

export default NewReleases