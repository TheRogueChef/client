import React, { useState } from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';


const Login = (props) => {
    const navigate = useNavigate()
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    })

    const changeHandler = (e) => {
        setUserLogin({ ...userLogin, [e.target.name]: e.target.value })
    }

    const loginHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/login', userLogin, { withCredentials: true })
            .then((res) => {
                console.log(res);
                navigate('/Main')
            })
            .catch((err) => {
                console.log(err.response.data.message);
            })
    }


    return (
        <div>
            <div className='logBox'>
                <h2> Login</h2>
                <br />
                <form onSubmit={loginHandler}>
                    <label>Email: </label>
                    <br />
                    <input  type='text' name='email' value={userLogin.email} onChange={changeHandler} style={{ backgroundColor: 'transparent'}} />
                    <br /><br />
                    <label>Password: </label>
                    <br />
                    <input type='password' name='password' value={userLogin.password} onChange={changeHandler} style={{ backgroundColor: 'transparent'}} />
                    <br /><br /><br /><br />
                    <button className='Bbtn'>Login</button>
                    <br /> <br />
                </form>
            </div>
        </div>
    )
}

export default Login;