import React from 'react'
import CollectionItem from './Molecules/CollectionItem'

const MyCollection = () => {
    return (
        <div className='flex flex-col gap-5 w-full'>
            <CollectionItem />
            <CollectionItem />
            <CollectionItem />
        </div>
    )
}

export default MyCollection