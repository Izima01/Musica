import React from 'react'

const Seekbar = ({ min, maximum, onChange, value, duration }) => {
    const getTime = (time) => `${Math.floor(time/60)}:${(`0${Math.floor(time%60)}`).slice(-2)}`;

    return (
    <div className="flex flex-1 items-center w-100 justify-between sm:gap-6 gap-3">
        <p className="text-white">{value ? getTime(value) : '0:00'}</p>
        <input
            type="range"
            step="any"
            value={value}
            min={min}
            max={parseInt(Math.round(parseInt(maximum)))}
            onChange={onChange}
            className="md:block h-1 mx-3 2xl:mx-6 rounded-lg w-full"
        />
        <p className="text-white">{duration ? getTime(duration) : '0:00'}</p>
    </div>
    )
}

export default Seekbar