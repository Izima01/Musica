import React, { useContext } from 'react';
import { HiHome } from 'react-icons/hi';
import { SiApplemusic } from 'react-icons/si';
import { HiRadio } from 'react-icons/hi2';
import { FaVideo } from 'react-icons/fa';
import AppContext from '../Context/GeneralContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const LinkInfo = [
        { name: 'Home', link: '/', icon: <HiHome fill='#EFEEE040' size="28px" className='group-focus:fill-[#FACD66] ease-in-out duration-300' /> },
        { name: 'Collections', link: '/collections', icon: <SiApplemusic fill='#EFEEE040' size="28px" className='group-focus:fill-[#FACD66] ease-in-out duration-300' /> },
        { name: 'Radio', link: '/radio', icon: <HiRadio fill='#EFEEE040' size="28px" className='group-focus:fill-[#FACD66] ease-in-out duration-300' />},
        { name: 'Videos', link: '/videos', icon: <FaVideo fill='#EFEEE040' size="28px" className='group-focus:fill-[#FACD66] ease-in-out duration-300' /> }
    ]

    const { navOpen } = useContext(AppContext);

    const renderLinks = LinkInfo.map(({ name, link, icon }, index) => {
        return (
            <Link key ={index} className='nav-item flex gap-6 items-center w-full group' to={link}>
                {icon}
                <span className='text-lg text-[#EFEEE040] group-focus:text-white ease-in-out duration-300'>{name}</span>
            </Link>
        )
    })

    return (
        <nav
            className={`flex flex-col gap-12 fixed left-0 h-screen top-17 px-5 py-20 ease-in-out duration-700 ${navOpen ? "-translate-x-0" : "-translate-x-full"} bg-[#1D2123]`}
            style={{zIndex:10}}
            >
                {renderLinks}
        </nav>
    )
}

export default Navbar