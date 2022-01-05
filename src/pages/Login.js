import React, {useState} from 'react'
export default function Login(props) {
    // console.log('alo12')
    const [user, setUser] = useState({user : '', password: ''});

    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setUser({...user,  [name] : value});
        // console.log(user);
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
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" name="password" placeholder="password" value={user.password} onChange={handleChange} />
                            </div>
                            <div className="text-center"><button type="submit" className="btn btn-color px-5 mb-5 w-100">Login</button></div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}
