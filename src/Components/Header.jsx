import React from 'react';
import logo from "../assets/logo.svg";
import search from "../assets/search.svg";
import Ham from './Ham';
// import AppContext from '../Context/GeneralContext';

const Header = () => {
    return (
        <header className='flex w-full px-[7%] pt-6 md:px-[2%] items-center'>
            <Ham />
            <img src={logo} className='pl-[6%] md:pl-0' alt="" />
            <div className='relative ml-auto flex sm:mr-auto md:ml-7'>
                <button className='absolute right-2 top-1/2 -translate-y-1/2 peer'>
                    <img src={search} className='w-7' alt="" />
                </button>
                <input
                    type="search"
                    placeholder='Search songs'
                    className='ml-auto pl-3 sm:pl-5 pr-6 sm:pr-8 py-2
                    outline-[#ffffff57] rounded-full bg-transparent outline-none 
                    placeholder:text-gray-50 placeholder:text-right sm:placeholder:text-left
                    sm:text-left text-right sm:w-80 w-1/5
                    md:peer-focus:w-80 peer-focus:w-4/5 md:focus:w-80 focus:w-4/5 ease-in-out duration-500'
                />
            </div>
        </header>
    )
}

export default Header