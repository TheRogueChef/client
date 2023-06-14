import React, { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const EntryForm = (props) => {
    const [errors, setErrors] = useState ({})
    const navigate = useNavigate()
    const [entry, setEntry] = useState({
        entryTitle: '',
        entryDate: '',
        entryAuthor: '',
        entry: ''
    });

    const handleInputChange = (e) => {
        setEntry({ ...entry, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const formattedDate = new Date(entry.entryDate);
        entry.entryDate = formattedDate;
        axios.post('http://localhost:8000/api/newEntry', entry)
            .then((res) => {
                setEntry({entryTitle:"", entryDate: "", entryAuthor: "", entry: ""})
                navigate('/Main')
            })
            .catch((err) => {
                setErrors(err)
            })
    }

    return (
        <div className='EBodyBox'>
            <form  onSubmit={submitHandler}>
                <h1 style={{ fontWeight: 'bolder', textShadow: '2px 2px pink', fontSize: '100px'}}>----- Dear Diary -----</h1>
                <label style={{ textShadow: '2px 2px pink', fontSize: '25px'}}>Post Title: </label>
                <input type="text" onChange={handleInputChange} value={entry.entryTitle} name='entryTitle' style={{ marginLeft: '5px', borderRadius: '5px', backgroundColor: 'transparent'}}/>
                <br />
                {
                    errors.entryTitle?
                    <p className='text-danger'>{errors.entryTitle.message}</p>:
                    null
                }
                <br />
                <label style={{ textShadow: '2px 2px pink', fontSize: '25px'}}>Date: </label>
                <input type="date" onChange={handleInputChange} value={entry.entryDate} name='entryDate' style={{ marginLeft: '5px', borderRadius: '5px', backgroundColor: 'transparent'}} />
                <br />
                {
                    errors.entryDate?
                    <p className='text-danger'>{errors.entryDate.message}</p>:
                    null
                }
                <br />
                <label style={{ textShadow: '2px 2px pink', fontSize: '25px'}}>Author: </label>
                <input type="text" onChange={handleInputChange} value={entry.entryAuthor} name='entryAuthor' style={{ marginLeft: '5px', borderRadius: '5px', backgroundColor: 'transparent'}} />
                <br />
                {
                    errors.entryAuthor?
                    <p className='text-danger'>{errors.entryAuthor.message}</p>:
                    null
                }
                <br />
                <label style={{ textShadow: '2px 2px pink', fontSize: '25px'}}>Entry: </label>
                <br/>
                <textarea onChange={handleInputChange} value={entry.entry} name='entry' style={{ width: '550px', height: '300px',marginLeft: '5px', borderRadius: '5px', backgroundColor: 'transparent', whiteSpace: 'pre-wrap', overflow: 'auto'}} />
                {
                    errors.entry?
                    <p className='text-danger'>{errors.entry.message}</p>:
                    null
                }
                <br />
                <button style={{marginRight: '100px'}} className='btn' >Post</button>
                <Link className='btn' to={'/Main'}>Home</Link>
            </form>
        </div>
    )
}

export default EntryForm;