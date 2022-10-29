import React from 'react'
import CuratedPlaylist from '../Components/CuratedPlaylist'
import NewReleases from '../Components/NewReleases'
import TopCharts from '../Components/TopCharts'

const Home = () => {
    return (
        <div>
            <CuratedPlaylist />
            <TopCharts />
            <NewReleases />
        </div>
    )
}

export default Home