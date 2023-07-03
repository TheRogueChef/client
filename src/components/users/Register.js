import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = (props) => {
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()
    const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const changeHandler = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/register', user, {withCredentials:true})
            .then((res) => {
                console.log(res);
                navigate('/Main')
            })
            .catch((err) => {
                setErrors(err.response.data.error.errors)
                console.log(err.response.data.error);
            })}
    
    return (
        <div className='container3' style={{
            backgroundImage:`transparent`
        }}>
            <div className='regBox'>
            <form onSubmit={submitHandler}>
                <h2>Register</h2>
                <br  />
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={changeHandler} value={user.firstName} name='firstName' style={{ marginLeft: '5px', borderRadius: '5px', backgroundColor: 'transparent'}} />
                    {
                    errors.firstName?
                    <p className='text-danger'>{errors.firstName.message}</p>:
                    null
                    }
                </div>
                <br  />
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={changeHandler} value={user.lastName} name='lastName' style={{ marginLeft: '5px', borderRadius: '5px', backgroundColor: 'transparent'}}/>
                    {
                    errors.lastName?
                    <p className='text-danger'>{errors.lastName.message}</p>:
                    null
                    }
                </div>
                <br  />
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={changeHandler} value={user.email} name='email' style={{ marginLeft: '5px', borderRadius: '5px', backgroundColor: 'transparent'}}/>
                    {
                    errors.email?
                    <p className='text-danger'>{errors.email.message}</p>:
                    null
                    }
                </div>
                <br  />
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={changeHandler} value={user.password} name='password' style={{ marginLeft: '5px', borderRadius: '5px', backgroundColor: 'transparent'}}/>
                    {
                    errors.password?
                    <p className='text-danger'>{errors.password.message}</p>:
                    null
                    }
                </div>
                <br  />
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={changeHandler} value={user.confirmPassword} name='confirmPassword' style={{ marginLeft: '5px', borderRadius: '5px', backgroundColor: 'transparent'}}/>
                </div>
                <br  /> <br  />
                <button className='Bbtn'>Register</button>
                <br  />
            </form>
            <br  /> <br  />
        </div>
        </div>
    )}

export default Register;