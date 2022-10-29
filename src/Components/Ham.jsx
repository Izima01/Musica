import React, { useContext } from 'react'
import AppContext from '../Context/GeneralContext'

const Ham = () => {
    const { navOpen, toggleHam } = useContext(AppContext);

    return (
        <button className="ham flex flex-col gap-[16px] p-1" onClick={toggleHam}>
            <div className={`${navOpen ? "-rotate-45 " : " "}origin-right topham h-1 bg-white border-0  w-7 rounded-full ease-in-out duration-500`}></div>
            <div className={`${navOpen ? "rotate-45 " : " "}origin-right bottomham h-1 bg-white border-0  w-7 rounded-full ease-in-out duration-500`}></div>
        </button>
    )
}

export default Ham