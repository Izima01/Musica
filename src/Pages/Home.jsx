import React from 'react'
import CuratedPlaylist from '../Components/CuratedPlaylist'
import NewReleases from '../Components/NewReleases'
import TopCharts from '../Components/TopCharts'
import './Home.css'

const Home = () => {
    return (
        <div className='homePage overflow-hidden'>
            <div className='top'>
                <CuratedPlaylist />
                <TopCharts />
            </div>
            <NewReleases />
        </div>
    )
}

export default Home