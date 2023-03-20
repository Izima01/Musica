import React from 'react'
import CollectionItem from './Molecules/CollectionItem'

const MyCollection = () => {
    return (
        <>
            My Collections
            <div className='flex flex-wrap gap-6 w-full sm:flex-row'>
                <CollectionItem />
                <CollectionItem />
                <CollectionItem />
                <CollectionItem />
            </div>
        </>
    )
}

export default MyCollection