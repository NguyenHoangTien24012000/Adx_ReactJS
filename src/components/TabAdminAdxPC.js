import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getAllTypeAdxAction } from '../redux/actions/AdxTypeAction'
import ItemAdxType from './ItemAdxType'

export default function TabAdminAdxPC() {
    const dispatch = useDispatch()
    const { allTypeAdx } = useSelector(state => state.AdxTypeReducer);
    // console.log('a',allTypeAdx);

    const renderAdxType = () => {
        return allTypeAdx.map((item, index) => {
            const nameAdx = item.type_adx.replace(/\s/g, '');
            return <div key={index}>
                <button className="list-group-item list-group-item-action border-0 d-flex justify-content-between align-items-center" data-toggle="collapse" data-target={`#${nameAdx}`}>
                    <div>
                        <span className="bi bi-cart-dash"></span>
                        <span className="ml-2">{item.type_adx}</span>
                    </div>
                    <span className="bi bi-chevron-down small"></span>
                </button>
                <div className="collapse" id={nameAdx} data-parent="#sidebar">
                    <div className="list-group">
                        <ItemAdxType typeAdx = {item.type_adx} />
                        {/* <NavLink to="/admin/adxPC/1" className="list-group-item list-group-item-action border-0 pl-5" >Kingsize - 1160x250px</NavLink>
                        <NavLink to="/admin/adxPC/2" className="list-group-item list-group-item-action border-0 pl-5" >Super Leaderboard - 980x90px</NavLink>
                        <NavLink to="/admin/adxPC/3" className="list-group-item list-group-item-action border-0 pl-5" >Leaderboard - 728x90px</NavLink>
                        <NavLink to="/admin/adxPC/4" className="list-group-item list-group-item-action border-0 pl-5" >Medium Rectangle - 300x250px</NavLink>
                        <NavLink to="/admin/adxPC/5" className="list-group-item list-group-item-action border-0 pl-5" >Half page - 300x600px</NavLink>
                        <NavLink to="/admin/adxPC/6" className="list-group-item list-group-item-action border-0 pl-5" >Skycrape - 160x600px</NavLink>
                        <NavLink to="/admin/adxPC/7" className="list-group-item list-group-item-action border-0 pl-5" >Kingsize Article - 660x300px</NavLink> */}
                    </div>
                </div>
            </div>
        })
    }

    useEffect(() => {
        dispatch(getAllTypeAdxAction());
    }, [])
    return (
        <div>
            {renderAdxType()}
        </div>
    )
}
