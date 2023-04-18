import React, { useContext } from 'react';
import { HiHome } from 'react-icons/hi';
import { BiRadio } from 'react-icons/bi';
import { SiApplemusic } from 'react-icons/si';
import { FaVideo } from 'react-icons/fa';
import AppContext from '../Context/GeneralContext';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
    const LinkInfo = [
        { name: 'Home', link: '/', icon: <HiHome fill='#EFEEE040' size="28px" /> },
        { name: 'Collections', link: '/playlist', icon: <SiApplemusic fill='#EFEEE040' size="28px" /> },
        { name: 'Radio', link: '/radio', icon: <BiRadio fill='#EFEEE040' size="28px" />},
        { name: 'Videos', link: '/videos', icon: <FaVideo fill='#EFEEE040' size="28px" /> }
    ];

    const { navOpen } = useContext(AppContext);

    const renderLinks = LinkInfo.map(({ name, link, icon }, index) => {
        return (
            <NavLink key ={index} className={({ isActive }) => `nav-item flex gap-4 items-center w-full group ${isActive ? 'text-white active font-semibold' : 'text-[#efeee040]'} ease-in-out duration-300 ${name}`} to={link}>
                {icon}
                <span
                    className='text-lg md:hidden'
                >
                    {name}
                </span>
            </NavLink>
        )
    })

    return (
        <nav style={{zIndex: 3}}
            className=
            {`flex flex-col gap-12 bg-[#1D2123] 
            fixed md:static left-0 top-20 
            px-5 h-screen md:pl-4 md:pr-3 py-16 
            ease-in-out duration-700 md:translate-x-0 
            ${navOpen ? "-translate-x-0" : "-translate-x-full"}`}
        >
            {renderLinks}
        </nav>
    )
}

export default Navbar