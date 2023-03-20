import React from 'react'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import { Outlet } from "react-router-dom";
import MusicPlayer from '../Components/MusicPlayer';

const PageLayout = () => {
    return (
        <>
            <Header />
            <div className='md:flex pt-2'>
                <Navbar />
                <div className='p-4 sm:p-6 overflow-x-hidden w-full'>
                    <Outlet />
                </div>
            </div>
            <div className='fixed bottom-0 left-0 right-0 w-full' style={{ zIndex: 10 }}>
                <MusicPlayer />
            </div>
        </>
    )
}

export default PageLayout