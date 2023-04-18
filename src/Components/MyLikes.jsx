import React, { useContext } from 'react'
import CollectionItem from './Molecules/CollectionItem'
import AppContext from '../Context/GeneralContext';

const MyLikes = () => {
    const { liked } = useContext(AppContext);

    return (
        <div className='flex gap-6 w-full flex-wrap sm:flex-row'>
            {liked.length === 0 && <h1 className='font-bold text-xl'>No liked songs or albums</h1>}
            {liked.map(({albumName, albumCover, artist, files}, index) =>
                <CollectionItem
                    key={index}
                    collectionImg={albumCover}
                    collectionName={albumName}
                    collectionArtist={artist}
                    files={files}
                />
            )}
        </div>
    )
}

export default MyLikes