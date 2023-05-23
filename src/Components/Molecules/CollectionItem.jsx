import React, { useContext, useEffect } from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import collection1 from '../../assets/limits.png';
import AppContext from '../../Context/GeneralContext';
import { useNavigate } from 'react-router-dom';

let playing = false;
const CollectionItem = (props) => {
    const { playPause, setNowPlaying, nowPlaying, setSelected, setCurrentSongIndex } = useContext(AppContext);
    const navigate = useNavigate();

    const {
        collectionImg=collection1,
        collectionName='Limits',
        collectionArtist='John Watts',
        files, id, info
    } = props;

    const handlePlayAll = () => {
        playPause(false);
        setNowPlaying([]);
        playing = true;
    };

    useEffect(() => {
        setCurrentSongIndex(0);
        if (nowPlaying.length===0) {
            setNowPlaying(files);
        };
        playing && playPause(true);
        // playPause(true);
    }, [nowPlaying]);

    const openDetails = (e) => {
        if (e.target.classList.contains("play-all") || e.target.classList.length==0) {
            console.log("all");
            handlePlayAll();
            return;
        }
        const obj = {
            title: collectionName,
            cover: collectionImg,
            id, files, info
        }
        setSelected(obj);
        navigate(`/album-details/${id}`);
        // setSelected({cover});
    }

    return (
        <button onClick={openDetails} className='rounded-2xl h-60 relative overflow-y-hidden group min-w-[14rem]'>
            <img src={collectionImg} className='w-full h-full' alt="" />
            <div className='absolute bottom-1 left-5 right-5 translate-y-20 group-hover:translate-y-0 ease-in-out duration-500 transition-all text-left'>
                <h3 className='text-2xl text-black font-bold mb-1'>{collectionName}</h3>
                <p className='text-base text-black font-semibold'>{collectionArtist}</p>
                <div className='flex items-center justify-between'>
                    <h5 className='mt-6 mb-2 text-base font-medium text-black'>{(Math.random() * 5).toFixed(1)}m likes</h5>
                    {/* <button onClick={handlePlayAll}> */}
                    <FaPlayCircle fill='#FACD66' size='2.5rem' className='play-all' onClick={handlePlayAll} />
                    {/* </button> */}
                </div>
            </div>
        </button>
    )
}

export default CollectionItem