import React, { useEffect, useState } from 'react'
import SingleRelease from './Molecules/SingleRelease';
import '../App.css';
import axios from "axios";

const NewReleases = () => {
    const [topReleases, setTopReleases] = useState([]);

    const fetchRelaeases = async () => {
        // const options = {
        //     method: 'GET',
        //     headers: {
        //         'X-RapidAPI-Key': '8a692757bcmshd3f5ab308a1a502p11b66ajsn338c941f933b',
        //         'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        //     }
        // };

        // fetch('https://shazam.p.rapidapi.com/charts/track?locale=en-US&listId=genre-global-chart-11&pageSize=30&startFrom=0', options)
        //     .then(response => response.json())
        //     .then(response => console.log(response))
        //     .catch(err => console.error(err));

    
        // const options = {
        //     method: 'GET',
        //     headers: {
        //         'X-RapidAPI-Key': '8a692757bcmshd3f5ab308a1a502p11b66ajsn338c941f933b',
        //         'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        //     }
        // };

        // fetch('https://shazam.p.rapidapi.com/charts/list', options)
        //     .then(response => response.json())
        //     .then(response => console.log(response))
        //     .catch(err => console.error(err));

    }
    

    useEffect(() => {
        fetchRelaeases();
    });
    

    return (
        <div className='md:mt-8 releases'>
            <h3 className='text-lg font-[#EFEEE0] mb-3'>New releases.</h3>
            <div className='flex flex-1 gap-8 min-w-full overflow-x-scroll charts mb-24'>
                <SingleRelease />
                <SingleRelease />
                <SingleRelease />
                <SingleRelease />
                <SingleRelease />
                <SingleRelease />
                <SingleRelease />
                <SingleRelease />
            </div>
        </div>
    )
}

export default NewReleases