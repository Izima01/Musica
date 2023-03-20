import React from 'react'
import CollectionItem from './Molecules/CollectionItem'

const MyLikes = () => {
    return (
        <>
            My Likes
            <div className='flex gap-6 w-full flex-wrap sm:flex-row'>
                <CollectionItem />
                <CollectionItem />
                <CollectionItem />
            </div>
        </>
    )
}

export default MyLikes