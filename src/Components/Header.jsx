import React from 'react';
import logo from "../assets/logo.svg";
import search from "../assets/search.svg";
import Ham from './Ham';
// import AppContext from '../Context/GeneralContext';

const Header = () => {
    return (
        <header className='flex w-full px-[7%] pt-6 items-center'>
            <Ham />
            <img src={logo} className='pl-[6%]' alt="" />
            <div className='relative ml-auto flex'>
                <button className='absolute right-2 top-1/2 -translate-y-1/2 peer'>
                    <img src={search} className='w-7' alt="" />
                </button>
                <input type="search" className='ml-auto bg-transparent border-2 border-red-500 outline-none pl-3 pr-6 py-2 rounded-full placeholder:text-gray-50 placeholder:text-right text-right w-1/5 peer-focus:w-4/5 focus:w-4/5 ease-in-out duration-500' placeholder='Search songs' />
            </div>
        </header>
    )
}

export default Header