import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getItemTypeAdxAction } from '../redux/actions/AdxTypeAction';


export default function AdminAdxPC(props) {
    
    const dispatch = useDispatch();
    const {id} = props.match.params;
    useEffect(() => {
        // dispatch(getItemTypeAdxAction(id));
    }, [])
    return (
        <div>
            <h1>{props.match.params.id}</h1>
        </div>
    )
}

