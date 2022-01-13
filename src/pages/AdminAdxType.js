import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { getADXGroupTypeAction, getItemTypeAdxAction } from '../redux/actions/AdxTypeAction';


export default function AdminAdxType(props) {
    const dispatch = useDispatch();
    const { adxGroupType } = useSelector(state => state.AdxTypeReducer)

    const { ADXType } = props.match.params;

    useEffect(() => {
        dispatch(getADXGroupTypeAction(ADXType));
    }, [])

    const renderAdxType = () => {
        return adxGroupType?.map((item, index) => {
            return <tr key={index}>
                <th scope="row">{item.id_adx}</th>
                <td>{item.name_adx}</td>
                <td>{item.size}</td>
                <td  style={{width :'20%'}}><img src={item.image} style={{width : "30%"}} alt='Adx Demo' /></td>
                <td>{item.type_screen}</td>
                <td>
                    <button type="button" className="btn btn-primary mr-1"><NavLink to={`/admin/edit/${item.id_adx}`} className="text-white">Edit</NavLink></button>
                    <button type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>
        })
    }

    return (
        <div className='container'>
            <h3 className='d-flex justify-content-center text-primary mt-2'>{ADXType}</h3>
            <div><table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NAME ADX</th>
                        <th scope='col'>SIZE</th>
                        <th scope='col'>IMAGE</th>
                        <th scope='col'>TYPE SCREEN</th>
                        <th scope="col">ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {renderAdxType()}
                </tbody>
            </table></div>
        </div>
    )
}

