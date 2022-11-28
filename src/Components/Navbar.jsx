import React, { useContext } from 'react';
import { HiHome } from 'react-icons/hi';
import { HiOutlineRadio } from 'react-icons/hi2';
import { SiApplemusic } from 'react-icons/si';
import { FaVideo } from 'react-icons/fa';
import AppContext from '../Context/GeneralContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const LinkInfo = [
        { name: 'Home', link: '/', icon: <HiHome fill='#EFEEE040' size="28px" className='group-focus:fill-[#FACD66] ease-in-out duration-300' /> },
        { name: 'Collections', link: '/collections', icon: <SiApplemusic fill='#EFEEE040' size="28px" className='group-focus:fill-[#FACD66] ease-in-out duration-300' /> },
        { name: 'Radio', link: '/radio', icon: <HiOutlineRadio fill='#EFEEE040' size="28px" className='group-focus:fill-[#FACD66] ease-in-out duration-300' />},
        { name: 'Videos', link: '/videos', icon: <FaVideo fill='#EFEEE040' size="28px" className='group-focus:fill-[#FACD66] ease-in-out duration-300' /> }
    ]

    const { navOpen } = useContext(AppContext);

    const renderLinks = LinkInfo.map(({ name, link, icon }, index) => {
        return (
            <Link key ={index} className={`nav-item flex gap-6 items-center w-full group ${name}`} to={link}>
                {icon}
                <span
                    className='text-lg text-[#EFEEE040] group-focus:text-white 
                        ease-in-out duration-300 md:hidden'
                >
                    {name}
                </span>
            </Link>
        )
    })

    return (
        <nav style={{zIndex: 3}}
            className=
            {`flex flex-col gap-12 bg-[#1D2123] 
            fixed md:static left-0 top-17 
            px-5 h-screen md:pl-5 md:pr-2 py-16 
            ease-in-out duration-700 md:translate-x-0 
            ${navOpen ? "-translate-x-0" : "-translate-x-full"}`}
        >
            {renderLinks}
        </nav>
    )
}

export default Navbar