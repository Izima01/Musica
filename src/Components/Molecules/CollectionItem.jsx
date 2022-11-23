import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import collection1 from '../../assets/limits.png';

const CollectionItem = (props) => {
    const {
        collectionImg=collection1,
        collectionName='Limits',
        collectionArtist='John Watts',
        collectionLikes='2.3m likes'
    } = props;
    return (
        <div className='rounded-2xl w-full h-60 relative overflow-y-hidden group'>
            <img src={collectionImg} className='w-full h-full' alt="" />
            <div className='absolute bottom-0 left-5 right-5 translate-y-16 group-hover:translate-y-0 ease-in-out duration-500 transition-all'>
                <h3 className='text-2xl text-[#EFEEE0]'>{collectionName}</h3>
                <p className='text-[0.75rem] text-[#EFEEE0]'>{collectionArtist}</p>
                <div className='flex items-center justify-between'>
                    <h5 className='mt-8 mb-6 text-base text-white'>{collectionLikes}</h5>
                    <button>
                        <FaPlayCircle fill='#FACD66' size='2.5rem' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CollectionItem