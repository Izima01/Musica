import React from 'react'
import SingleRelease from './Molecules/SingleRelease'

const NewReleases = () => {
    return (
        <div>
            <h3 className='text-lg font-[#EFEEE0] mb-4'>New releases.</h3>
            <div className='flex flex-1 gap-8 min-w-full overflow-x-scroll charts mb-20'>
                <SingleRelease />
                <SingleRelease />
                <SingleRelease />
                <SingleRelease />
            </div>
        </div>
    )
}

export default NewReleases