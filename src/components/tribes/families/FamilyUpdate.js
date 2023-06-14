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

    return(
        <div className='container6' style={{
            backgroundImage:`transparent`
        }}>
        <div className='details5'>
            <h1 style={{ fontWeight: 'bolder', textDecoration: 'underline'}}>Update Family</h1>
            <form className='w-25' onSubmit={updateFamily}>
                <br  />
                <p>
                    <label>Family Title</label><br />
                    <input type='text'
                    name='familyTitle'
                    value={familyTitle}
                    onChange={(e) => { setFamilyTitle(e.target.value) }} />
                </p>
                <p>
                <label>Family Members</label><br />
                    <input type='text'
                    name='familyMembers'
                    value={familyMembers}
                    onChange={(e) => { setFamilyMembers(e.target.value) }} />
                </p>
                <p>
                <label>Family Statement</label><br />
                    <input type='text'
                    name='familyStatement'
                    value={familyStatement}
                    onChange={(e) => { setFamilyStatement(e.target.value) }} />
                </p>
                <br  /><br  />
                <input className='btn btn-success' type='submit'/>
                <br  /><br  />
                <Link className='btn' to={'/Main'}>Home</Link>
                <br  /><br  />
            </form>
        </div>
        </div>
    )}

export default UpdateFamily;