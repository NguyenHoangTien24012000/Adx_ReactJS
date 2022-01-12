import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default function ItemAdxType(props) {
    console.log('type', props);

    const dispatch = useDispatch()

    useEffect(() => {
        // dispatch()
    }, [])
    return (
        <>
            <NavLink to="/admin/adxPC/1" className="list-group-item list-group-item-action border-0 pl-5" >Kingsize - 1160x250px</NavLink>
            <NavLink to="/admin/adxPC/2" className="list-group-item list-group-item-action border-0 pl-5" >Super Leaderboard - 980x90px</NavLink>
            <NavLink to="/admin/adxPC/3" className="list-group-item list-group-item-action border-0 pl-5" >Leaderboard - 728x90px</NavLink>
            <NavLink to="/admin/adxPC/4" className="list-group-item list-group-item-action border-0 pl-5" >Medium Rectangle - 300x250px</NavLink>
            <NavLink to="/admin/adxPC/5" className="list-group-item list-group-item-action border-0 pl-5" >Half page - 300x600px</NavLink>
            <NavLink to="/admin/adxPC/6" className="list-group-item list-group-item-action border-0 pl-5" >Skycrape - 160x600px</NavLink>
            <NavLink to="/admin/adxPC/7" className="list-group-item list-group-item-action border-0 pl-5" >Kingsize Article - 660x300px</NavLink>
        </>
    )
}
