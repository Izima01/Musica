import React, { useEffect, useState } from 'react'
import SingleRelease from './Molecules/SingleRelease';
import '../App.css';
import axios from "axios";

const NewReleases = () => {
    const [topReleases, setTopReleases] = useState([]);

    { /* const fetchTracks = () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '8a692757bcmshd3f5ab308a1a502p11b66ajsn338c941f933b',
                'X-RapidAPI-Host': 'spotify-scraper.p.rapidapi.com'
            }
        };
        fetch('https://spotify-scraper.p.rapidapi.com/v1/chart/tracks/viral?region=ISO%203166%20alpha-2%20NG', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    } */}

    const fetchTracks = () => {
        const options = {
            method: 'GET',
            url: 'https://deezerdevs-deezer.p.rapidapi.com/infos',
            headers: {
                'X-RapidAPI-Key': '8a692757bcmshd3f5ab308a1a502p11b66ajsn338c941f933b',
                'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    } 

    useEffect(() => {
        // fetchTracks();
    });

    return (
        <div className='md:mt-8 releases'>
            <h3 className='text-lg font-[#EFEEE0] mb-3'>Viral Tracks.</h3>
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