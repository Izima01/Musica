import React, { useState } from 'react'
import MyCollection from '../Components/MyCollection'
import MyLikes from '../Components/MyLikes'

const Collections = () => {
    const [likeActive, setLikeActive] = useState(false);

    return (
        <section className='w-full'>
            <div className='flex gap-4 mb-9'>
                <button className={`ease-in-out duration-500 transition-colors w-1/2 rounded-3xl py-2 ${likeActive ? 'text-[#EFEEE0] border-2 border-[#EFEEE0]' : 'text-[#1D2123] bg-[#FACD66]'}`} onClick={() => setLikeActive(false)}>My Collections</button>
                <button className={`ease-in-out duration-500 transition-colors w-1/2 rounded-3xl py-2 ${likeActive ? 'bg-[#FACD66] text-[#1D2123]' : 'bg-transparent border-2 border-[#EFEEE0] text-[#EFEEE0]'}`} onClick={()=> setLikeActive(true)}>My Likes</button>
            </div>
            <div className='w-full mb-20'>
                {likeActive ? <MyLikes /> : <MyCollection />}
            </div>
        </section>
    )
}

export default Collections