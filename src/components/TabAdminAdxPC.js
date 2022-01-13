import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getADXGroupTypeAction } from '../redux/actions/AdxTypeAction';
import ItemAdxType from './ItemAdxType'

export default function TabAdminAdxPC() {

    const { allTypeAdx } = useSelector(state => state.AdxTypeReducer);

    const dispatch = useDispatch();

    const { adxGroupType } = useSelector(state => state.AdxTypeReducer)

    const renderAdxType = () => {
        return allTypeAdx?.map((item, index) => {
            const nameAdx = item.type_adx.replace(/\s/g, '');
            return <div key={index}>
                <button onClick={() => {
                    dispatch(getADXGroupTypeAction(item.type_adx))
                }} className="list-group-item list-group-item-action bg-dark text-white border-0 d-flex justify-content-between align-items-center" data-toggle="collapse" data-target={`#${nameAdx}`}>
                    <div>
                        <span className="bi bi-cart-dash"></span>
                        <span className="ml-2">{item.type_adx}</span>
                    </div>
                    <span className="bi bi-chevron-down small"></span>
                </button>
                <div className="collapse" id={nameAdx} data-parent="#sidebar">
                    <div className="list-group">
                        <ItemAdxType adxGroupType={adxGroupType} />
                    </div>
                </div>
            </div>
        })
    }


    return (
        <div>
            {renderAdxType()}
        </div>
    )
}
