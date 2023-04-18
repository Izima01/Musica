import React, { useEffect, useContext } from 'react';
import lead from '../assets/Lead-image.png';
import add from '../assets/music-square-add.svg';
import more from '../assets/more-vertical.svg';
import tuneImg from '../assets/tuneImg.png';
import { FaPlayCircle, FaHeart } from 'react-icons/fa'
import AppContext from '../Context/GeneralContext';
import { useNavigate } from 'react-router-dom';

const SingleTune = ({ song, isSingle }) => {
    // const songInfo = { cover, title, time, src: id, artist };
    
    useEffect(() => {
        // console.log(song);
    }, []);

    return (
        <button className='w-full bg-[#33373b5e] rounded-xl flex gap-4 p-2.5 items-center'>
            <img src={song?.cover || tuneImg} width='40px' className='rounded-md' alt="" />
            <div>
                <p className='text-white text-sm pb-1'>{song?.title + " ~ " + song?.artist || "Let me love you ~ Krisx"}</p>
                <p className='text-xs text-white text-left'>{isSingle ? 'Single' : 'Album'}</p>
            </div>
            <div className='ml-auto text-right'>
                <img src={more} alt="" className='block ml-auto' />
                <p className='text-sm mt-2'>{song?.duration || "4:17"}</p>
            </div>
        </button>
    )
};

const ChartDetails = () => {
    const navigate = useNavigate();
    const { selectedChart, setNowPlaying, setCurrentSongIndex, nowPlaying, playPause, handleLiked, addToCollection, likedAlbumNames, collectionNames, collection } = useContext(AppContext);

    useEffect(() => {
        if (!selectedChart) {
            navigate('/');
        }
    }, []);

    const handlePlayAll = () => {
        playPause(false);
        setNowPlaying([]);
    };

    useEffect(() => {
        setCurrentSongIndex(0);
        playPause(true);
        if (nowPlaying.length===0) {
            setNowPlaying(selectedChart?.files);
        };
    }, [nowPlaying]);
    

    const likeAlbum = () => {
        const {title, cover} = selectedChart;
        let artist = title.split(" ");
        artist = artist.slice(0, -1).join(" ");
        // console.log(title);
        handleLiked(title, cover, artist, selectedChart?.files);
    };

    const handleAdd = () => {
        const {title, cover} = selectedChart;
        let artist = title?.split(" ");
        artist = artist?.slice(0, -1).join(" ");
        addToCollection(title, cover, artist, selectedChart?.files);
    };

    useEffect(() => {
        console.log(collectionNames);
    }, [collectionNames]);

    const renderSongs = selectedChart && selectedChart?.files?.map((song) => (
        <SingleTune
            key={song?.id}
            isSingle={true}
            song={song}
        />)
    )

    return (
        <div className='mb-28'>
            <div className='md:flex gap-7 items-end'>
                <img src={selectedChart?.cover || lead} className='w-full rounded-3xl md:min-w-[290px]' alt="" />
                <div>
                    <h2 className='text-[#A4C7C6] text-4xl font-bold mt-6'>{selectedChart?.title || "Tomorrow’s tunes"}</h2>
                    <p className='des text-[#EFEEE0] text-sm mt-2 mb-3'>{selectedChart?.info || "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"}</p>
                    <p className='text-[#EFEEE0] text-sm'>
                        <span>{selectedChart?.files?.length || "64"} songs - </span>
                        <span className='pl-1'>{length || " 0"} hrs+</span>
                    </p>
                    <div className='w-full gap-2 grid mt-6 md:mt-12' style={{ gridTemplateColumns: 'auto auto auto' }}>
                        <button className='bg-[#ffffff11] rounded-[2rem] py-3 gap-2 flex justify-center items-center' onClick={handlePlayAll}>
                            <FaPlayCircle fill='#FACD66' size='1rem' />
                            Play all
                        </button>
                        <button className='rounded-[2rem] py-3 gap-2 flex justify-center items-center bg-[#ffffff11]' onClick={handleAdd}>
                            <img src={add} alt="" />
                            <p className={collectionNames?.includes(selectedChart?.title) ? 'text-[#FACD66]' : ''}>Add to collection</p>
                        </button>
                        <button className='bg-[#ffffff11] rounded-[2rem] py-3 gap-2 flex justify-center items-center' onClick={likeAlbum}>
                            <FaHeart fill={likedAlbumNames?.includes(selectedChart?.title) ? '#E5524A' : ''} size='1rem' />
                            <p className={likedAlbumNames?.includes(selectedChart?.title) ? 'text-[#FACD66]' : ''}>Like</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className='tune w-full mt-6 flex flex-col gap-3.5'>
                {renderSongs}
            </div>
        </div>
    )
}

export default ChartDetails;
