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
        <div className=''>
        <div className='EBodyBox'>
            <form  onSubmit={submitHandler}>
                <h1 style={{textShadow: '2px 2px pink', fontSize: '100px'}}>--- Add a Family ---</h1>

                <label style={{ textShadow: '2px 2px pink', fontSize: '25px'}}>Family Title: </label>
                <input type="text" onChange={handleInputChange} value={family.familyTitle} name='familyTitle' style={{ marginLeft: '5px', borderRadius: '5px', backgroundColor: 'transparent'}} />
                {
                    errors.familyTitle?
                    <p className='text-danger'>{errors.familyTitle.message}</p>:
                    null
                }
                <br />
                <label style={{ textShadow: '2px 2px pink', fontSize: '25px'}}>Family Members: </label>
                <input type="text" onChange={handleInputChange} value={family.familyMembers} name='familyMembers' style={{ marginLeft: '5px', borderRadius: '5px', backgroundColor: 'transparent'}} />
                {
                    errors.tribeMembers?
                    <p className='text-danger'>{errors.tribeMembers.message}</p>:
                    null
                }
                <br />
                <label style={{ textShadow: '2px 2px pink', fontSize: '25px'}}>Family Statement: </label><br/>
                <textarea type="text" onChange={handleInputChange} value={family.familyStatement} name='familyStatement' style={{ width: '550px', height: '300px',marginLeft: '5px', borderRadius: '5px', backgroundColor: 'transparent', whiteSpace: 'pre-wrap', overflow: 'auto'}} />
                {
                    errors.familyStatement?
                    <p className='text-danger'>{errors.familyStatement.message}</p>:
                    null
                }
                <br /><br  />
                <button style={{marginRight: '100px'}} className='btn' >Create</button>
                <Link className='btn' to={'/allFamilies'}>Back</Link>
            </form>
        </div>
        </div>
    )
}

export default FamilyForm;