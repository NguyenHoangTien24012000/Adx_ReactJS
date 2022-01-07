import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux';
import { NavLink } from 'react-router-dom';
import { dangNhapAction } from '../redux/actions/UserAction';
export default function Login(props) {
    const [user, setUser] = useState({user : '', password : ''});
    const [error, setError] = useState({user : '', password : ''});
    
    const dispatch = useDispatch();
    
    
    // console.log(props);
    const history = props.history;

    const handleChange = (e) =>{
        const {name, value} = e.target;

        if(!value){
            setError({...error, [name] : `${name} invalid!!!`})
        }else{
            setError({...error, [name] : ''});
        }
        setUser({...user,  [name] : value});
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!error.user && !error.password ){
            dispatch(dangNhapAction(user, history));

        }
    }
    return (
        <div className="container">
            
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card my-5">
                        <form onSubmit={handleSubmit} className="card-body cardbody-color p-lg-5">
                            <div className='text-center mb-3'>
                                <h3>Login Admin</h3>
                            </div>
                            <div className="mb-3" >
                                <input type="text" className="form-control" 
                                    placeholder="User Name" name="user" value={user.user} onChange={handleChange}/>
                                    <div><p className='text-danger'>{error.user}</p></div>
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" name="password" placeholder="password" value={user.password} onChange={handleChange} />
                                <div><p className='text-danger'>{error.password}</p></div>
                            </div>
                            <div className="text-center"><button type="submit" className="btn btn-color px-5 mb-5 w-100">Login</button></div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}
