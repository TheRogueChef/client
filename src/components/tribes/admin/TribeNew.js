import React, { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const TribeForm = (props) => {
    const [errors, setErrors] = useState ({})
    const navigate = useNavigate()
    const [tribe, setTribe] = useState({
        tribeTitle: '',
        tribeMembers: Number(0),
        tribeStatement: '',
    });

    const handleInputChange = (e) => {
        setTribe({ ...tribe, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/newTribe', tribe)
            .then((res) => {
                setTribe({...tribe, tribeTitle:"", tribeMembers:0, tribeStatement: ""})
                navigate('/Main')
            })
            .catch((err) => {
                setErrors(err)
            })
    }

    return (
        <div className='container2'  style={{
            backgroundImage: `transparent`} }>
        <div className='details3'>
            <form className='w-25' onSubmit={submitHandler}>
                <h1 style={{ color: 'greenyellow', fontWeight: 'bolder', textDecoration: 'underline'}}>Create a New Tribe</h1>

                <label className='form-label'>Tribe Title: </label>
                <input className='form-control' type="text" onChange={handleInputChange} value={tribe.tribeTitle} name='tribeTitle' />
                {
                    errors.tribeTitle?
                    <p className='text-danger'>{errors.tribeTitle.message}</p>:
                    null
                }
                <br />
                <label className='form-label'>Tribe Members: </label>
                <input className='form-control' type="number" onChange={handleInputChange} value={tribe.tribeMembers} name='tribeMembers' />
                {
                    errors.tribeMembers?
                    <p className='text-danger'>{errors.tribeMembers.message}</p>:
                    null
                }
                <br />
                <label className='form-label'>Tribe Statement</label>
                <input className='form-control' type="text" onChange={handleInputChange} value={tribe.tribeStatement} name='tribeStatement' />
                {
                    errors.tribeStatement?
                    <p className='text-danger'>{errors.tribeStatement.message}</p>:
                    null
                }
                <br />
                <button className='btn btn-success' >Create</button>
            </form>
            <br  /><br  />
                <Link className='btn' to={'/'}>Home</Link>
        </div>
        </div>
    )
}

export default TribeForm;