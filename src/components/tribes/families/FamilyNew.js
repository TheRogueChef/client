import React, { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const FamilyForm = (props) => {
    const [errors, setErrors] = useState ({})
    const navigate = useNavigate()
    const [family, setFamily] = useState({
        familyTitle: '',
        familyMembers: '',
        familyStatement: '',
    });

    const handleInputChange = (e) => {
        setFamily({ ...family, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/newFamily', family)
            .then((res) => {
                setFamily({...family, familyTitle:"", familyMembers: "", familyStatement: ""})
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
                <h1 style={{ fontWeight: 'bolder', textDecoration: 'underline'}}>Create a New Family</h1>

                <label className='form-label'>Family Title: </label>
                <input className='form-control' type="text" onChange={handleInputChange} value={family.familyTitle} name='familyTitle' />
                {
                    errors.familyTitle?
                    <p className='text-danger'>{errors.familyTitle.message}</p>:
                    null
                }
                <br />
                <label className='form-label'>Family Members: </label>
                <input className='form-control' type="text" onChange={handleInputChange} value={family.familyMembers} name='familyMembers' />
                {
                    errors.tribeMembers?
                    <p className='text-danger'>{errors.tribeMembers.message}</p>:
                    null
                }
                <br />
                <label className='form-label'>Family Statement: </label>
                <input className='form-control' type="text" onChange={handleInputChange} value={family.familyStatement} name='familyStatement' />
                {
                    errors.familyStatement?
                    <p className='text-danger'>{errors.familyStatement.message}</p>:
                    null
                }
                <br />
                <button className='btn btn-success' >Create</button>
            </form>
            <br  /><br  />
                <Link className='btn' to={'/Main'}>Home</Link>
        </div>
        </div>
    )
}

export default FamilyForm;