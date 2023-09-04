import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

const UpdateFamily = (props) => {
    const { id } = useParams();
    const [familyTitle, setFamilyTitle] = useState();
    const [familyMembers, setFamilyMembers] = useState();
    const [familyStatement, setFamilyStatement] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/oneFamily/' + id)
            .then(res => {
                setFamilyTitle(res.data.familyTitle);
                setFamilyMembers(res.data.familyMembers);
                setFamilyStatement(res.data.familyStatement);
            })
            .catch(err => console.log(err))
    }, [id]);

    const updateFamily = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/updateFamily/' + id, {
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

    return (
        <div className='EBodyBox'>
            <form onSubmit={updateFamily}>
                <p className='PageTitle'>----- Update Family -----</p>
                <div className='ButtonStrip'>
                    <input className='onebtn' type='submit' />
                    <button onClick={(e) => { deleteFamily(id) }} className='onebtn'>Delete</button>
                    <Link className='onebtn' to={'/allFamilies'}>Back</Link>
                </div>
                <br /><br />
                <div className='BoxLabel'>
                    <label>Family Name</label>
                    <input
                        className="InputBox"
                        type='text'
                        name='familyTitle'
                        value={familyTitle}
                        onChange={(e) => { setFamilyTitle(e.target.value) }} />
                    <br /><br />
                    <label >Family Members</label>
                    <input
                        className="InputBox"
                        type='text'
                        name='familyMembers'
                        value={familyMembers}
                        onChange={(e) => { setFamilyMembers(e.target.value) }} />
                    <br /><br />
                    <label>Family Statement</label><br />
                    <textarea
                        className="EntryBox"
                        name='familyStatement'
                        value={familyStatement}
                        onChange={(e) => { setFamilyStatement(e.target.value) }} />
                    <br /><br />
                </div>
            </form>
        </div>
    )
}

export default UpdateFamily;