import React, { useContext } from 'react'
import CollectionItem from './Molecules/CollectionItem'
import AppContext from '../Context/GeneralContext';

const MyCollection = () => {
    const { collection } = useContext(AppContext);

    return (
        <div className='flex flex-wrap gap-6 w-full sm:flex-row'>
            {collection.length === 0 && <h1 className='font-bold text-xl'>No songs or albums in your collection</h1>}
            {collection.map(({albumName, albumCover, artist, files}, index) => 
                <CollectionItem
                    key={index}
                    collectionImg={albumCover}
                    collectionName={albumName}
                    collectionArtist={artist}
                    files={files}
                />
            )}
            {/* <CollectionItem /> */}
        </div>
    )
}

export default MyCollection