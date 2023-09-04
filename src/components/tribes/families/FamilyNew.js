import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const FamilyForm = (props) => {
    const [errors, setErrors] = useState({})
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
                setFamily({ ...family, familyTitle: "", familyMembers: "", familyStatement: "" })
                navigate('/Main')
            })
            .catch((err) => {
                setErrors(err)
            })
    }

    return (

        <div className='EBodyBox'>
            <form onSubmit={submitHandler}>
                <p className="PageTitle">--- Add a Family ---</p>
                <div className='ButtonStrip'>
                    <button className='onebtn' >Create</button>
                    <Link className='onebtn' to={'/allFamilies'}>Back</Link>
                </div>
                <br />
                <br />
                <div className='BoxLabel'>
                    <label>Family Title: </label>
                    <input 
                    type="text" 
                    onChange={handleInputChange} 
                    value={family.familyTitle} 
                    name='familyTitle' 
                    className="InputBox" />
                    {
                        errors.familyTitle ?
                            <p className='text-danger'>{errors.familyTitle.message}</p> :
                            null
                    }
                    <br /><br />
                    <label>Family Members: </label>
                    <input 
                    type="text" 
                    onChange={handleInputChange} 
                    value={family.familyMembers} 
                    name='familyMembers' 
                    className="InputBox" />
                    {
                        errors.tribeMembers ?
                            <p className='text-danger'>{errors.tribeMembers.message}</p> :
                            null
                    }
                    <br /><br />
                    <label>Family Statement: </label><br />
                    <textarea 
                    type="text" 
                    onChange={handleInputChange} 
                    value={family.familyStatement} 
                    name='familyStatement' 
                    className="EntryBox" />
                    {
                        errors.familyStatement ?
                            <p className='text-danger'>{errors.familyStatement.message}</p> :
                            null
                    }
                    <br /><br />
                </div>
            </form>
        </div>

    )
}

export default FamilyForm;