import React, { useContext, useEffect, useState } from 'react'
import CollectionItem from './Molecules/CollectionItem'
import AppContext from '../Context/GeneralContext';
import axios from 'axios';

const MyCollection = () => {
    const [myCollection, setMyCollection] = useState([]);

    const fetchMyCollection = () => {
        axios.get("https://musica-api.onrender.com/playlist")
        .then(res => {
            console.log(res?.data);
            setMyCollection(res?.data);
        })
        .catch(err => console.log(err));
    };

    useEffect(() => {
        fetchMyCollection();
    }, []);

    return (
        <div className='flex flex-wrap gap-6 w-full sm:flex-row'>
            {/* {collection.length === 0 && <h1 className='font-bold text-xl'>No songs or albums in your collection</h1>} */}
            {}
            {myCollection.map(({title, cover, info, files, id}) => 
                <CollectionItem
                    key={id}
                    collectionImg={cover}
                    info={info}
                    collectionName={title}
                    collectionArtist={title.split(" ")[0]}
                    files={files}
                    id={id}
                />
            )}
        </div>
    )
}

export default MyCollection