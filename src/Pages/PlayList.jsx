import React from 'react'
import { Outlet, NavLink } from 'react-router-dom';

const Collections = () => (
    <section className='w-full'>
        <div className='flex gap-4 mb-9 w-full'>
            <NavLink
                to='/playlist/collections'
                className={({ isActive }) => `ease-in-out duration-500 transition-colors w-1/2 rounded-3xl text-center p-2 ${isActive ? 'bg-[#FACD66] text-[#1D2123]' : 'bg-transparent border-2 border-[#EFEEE0] text-[#EFEEE0]'}`}
            >
                My Collections
            </NavLink>

            <NavLink
                to='/playlist/likes'
                className={({ isActive }) => `ease-in-out duration-500 transition-colors w-1/2 rounded-3xl text-center p-2 ${isActive ? 'bg-[#FACD66] text-[#1D2123]' : 'bg-transparent border-2 border-[#EFEEE0] text-[#EFEEE0]'}`}
            >
                My Likes
            </NavLink>
        </div>
        <div className='w-full mb-20'>
            <Outlet />
        </div>
    </section>
)

export default Collections