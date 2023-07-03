import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link,useNavigate, useParams } from 'react-router-dom';

const UpdateFamily = (props) => {
    const { id } = useParams();
    const [familyTitle, setFamilyTitle] = useState();
    const [familyMembers, setFamilyMembers] = useState();
    const [familyStatement, setFamilyStatement] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/oneFamily/'+ id)
            .then(res => {
                setFamilyTitle(res.data.familyTitle);
                setFamilyMembers(res.data.familyMembers);
                setFamilyStatement(res.data.familyStatement);
            })
            .catch(err=> console.log(err))
    }, [id]);

    const updateFamily = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/updateFamily/'+ id, {
            familyTitle,
            familyMembers,
            familyStatement
        })
            .then(res => {
                console.log(res);
                navigate('/Main');
            })
            .catch(err => console.log(err))
    };


    const deleteFamily = (familyId) => {
        axios.delete('http://localhost:8000/api/allFamilies/' + familyId)
            .then(res => {
                navigate('/Main')
            })
            .catch(err => console.log(err))
    };   

    return(
        <div className=''>
        <div className='EBodyBox'>
            <h1 style={{ textShadow: '5px 5px pink', fontSize: '100px' }}>----- Update Family -----</h1>
            <form onSubmit={updateFamily}>
                <br  />
                <p>
                    <label style={{ textShadow: '2px 2px pink', fontSize: '25px'}}>Family Name</label>
                    <input 
                    style={{ width: '200px', height: '40px', marginLeft: '15px', borderRadius: '5px', backgroundColor: 'transparent', fontSize: '20px'}}
                    type='text'
                    name='familyTitle'
                    value={familyTitle}
                    onChange={(e) => { setFamilyTitle(e.target.value) }} />
                </p>
                <p>
                <label style={{ textShadow: '2px 2px pink', fontSize: '25px'}}>Family Members</label>
                    <input 
                    style={{ width: '400px', height: '40px', marginLeft: '15px', borderRadius: '5px', backgroundColor: 'transparent', fontSize: '20px'}}
                    type='text'
                    name='familyMembers'
                    value={familyMembers}
                    onChange={(e) => { setFamilyMembers(e.target.value) }} />
                </p>
                <p>
                <label style={{ textShadow: '2px 2px pink', fontSize: '25px'}}>Family Statement</label><br/>
                    <textarea style={{ width: '550px', height: '200px',marginLeft: '5px', borderRadius: '5px', backgroundColor: 'transparent',resize: 'none', whiteSpace: 'pre-wrap', overflow: 'auto'}}
                    name='familyStatement'
                    value={familyStatement}
                    onChange={(e) => { setFamilyStatement(e.target.value) }} />
                </p>
                <div style={{ display: 'flex', justifyContent: 'center'}}>
                    <input className='btn' type='submit'/>                   
                    <button style={{ marginLeft: '50px', marginRight: '50px'}} onClick={(e) => { deleteFamily(id) }} className='btn3 btn-danger'>Delete</button>
                    <Link className='btn' to={'/allFamilies'}>Back</Link>                  
                </div>
            </form>
        </div>
        </div>
    )}

export default UpdateFamily;