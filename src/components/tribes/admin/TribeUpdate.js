import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link,useNavigate, useParams } from 'react-router-dom';

const UpdateTribe = (props) => {
    const { id } = useParams();
    const [tribeTitle, setTribeTitle] = useState();
    const [tribeMembers, setTribeMembers] = useState();
    const [tribeStatement, setTribeStatement] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/oneTribe/'+ id)
            .then(res => {
                setTribeTitle(res.data.tribeTitle);
                setTribeMembers(res.data.tribeMembers);
                setTribeStatement(res.data.tribeStatement);
            })
            .catch(err=> console.log(err))
    }, [id]);

    const updateTribe = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/updateTribe/'+ id, {
            tribeTitle,
            tribeMembers,
            tribeStatement
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
            <h1 style={{ color: 'greenyellow', fontWeight: 'bolder', textDecoration: 'underline'}}>Update Tribe</h1>
            <form className='w-25' onSubmit={updateTribe}>
                <br  />
                <p>
                    <label>Tribe Title</label><br />
                    <input type='text'
                    name='tribeTitle'
                    value={tribeTitle}
                    onChange={(e) => { setTribeTitle(e.target.value) }} />
                </p>
                <p>
                <label>Tribe Count</label><br />
                    <input type='number'
                    name='tribeMembers'
                    value={tribeMembers}
                    onChange={(e) => { setTribeMembers(e.target.value) }} />
                </p>
                <p>
                <label>Tribe Statement</label><br />
                    <input type='text'
                    name='tribeStatement'
                    value={tribeStatement}
                    onChange={(e) => { setTribeStatement(e.target.value) }} />
                </p>
                <br  /><br  />
                <input className='btn btn-success' type='submit'/>
                <br  /><br  />
                <Link className='btn' to={'/'}>Home</Link>
                <br  /><br  />
            </form>
        </div>
        </div>
    )}

export default UpdateTribe;