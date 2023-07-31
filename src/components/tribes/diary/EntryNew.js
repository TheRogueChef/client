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
                navigate('/allEntries')
            })
            .catch((err) => {
                setErrors(err)
            })
    }

    return (
        <div className='EBodyBox'>
            <form  onSubmit={submitHandler}>
                <p className= 'PageTitle'>----- Dear Diary -----</p>
                <div className='ButtonStrip'>
                    <button className='btn' >Post</button>
                    <Link className='btn' to={'/Main'}>Home</Link>
                </div>
                <br /><br />
                <div className= 'BoxLabel'>
                    <label >Post Title: </label>
                    <input type="text" onChange={handleInputChange} value={entry.entryTitle} name='entryTitle' className= 'InputBox' />
                    <br />
                    {
                        errors.entryTitle?
                        <p className='text-danger'>{errors.entryTitle.message}</p>:
                        null
                    }
                    <br />
                    <label >Date: </label>
                    <input type="date" onChange={handleInputChange} value={entry.entryDate} name='entryDate' className= 'InputBox' />
                    <br />
                    {
                        errors.entryDate?
                        <p className='text-danger'>{errors.entryDate.message}</p>:
                        null
                    }
                    <br />
                    <label >Author: </label>
                    <input type="text" onChange={handleInputChange} value={entry.entryAuthor} name='entryAuthor' className= 'InputBox' />
                    <br />
                    {
                        errors.entryAuthor?
                        <p className='text-danger'>{errors.entryAuthor.message}</p>:
                        null
                    }
                    <br />
                    <label >Entry: </label>
                    <br/>
                    <textarea onChange={handleInputChange} value={entry.entry} name='entry' className= 'EntryBox' />
                    {
                        errors.entry?
                        <p className='text-danger'>{errors.entry.message}</p>:
                        null
                    }
                    <br /><br />
                </div>
               
                
            </form>
        </div>
    )
}

export default EntryForm;