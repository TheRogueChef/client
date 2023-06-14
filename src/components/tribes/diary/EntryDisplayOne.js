import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';


const OneEntry = (props) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [entry, setEntry] = useState({})

    useEffect(() => {
        axios.get("http://localhost:8000/api/oneEntry/" + id)
            .then((res) => {
                setEntry(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id]);



    const formatDate = (dateString) => {
        const entryDate = new Date(dateString);
        if (!isNaN(entryDate)) {
            return entryDate.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
            });
        }
        return 'Invalid Date';
    };


    return (
        <div className='oneBodyBox' style={{
            textAlign: "center", alignContent: "center"
        }}>
            <br  /><br  />
            <h2 style={{  textShadow: '2px 2px pink', fontSize: '100px'}}>----- Say What? -----</h2>
            <Link className='btn' to={`/Main`}>Home</Link>
            <br  /><br  />
            <div className='oneBox'>
                <h1 style={{ borderStyle: 'double', width: 'auto', color:"darkRed", borderRadius: '5px'}}>{entry.entryTitle}</h1>
                <br />
                <h3 >{formatDate(entry.entryDate)} by {entry.entryAuthor}</h3>
                <br  />
                <h2 style={{ fontStyle: 'italic'}}>"{entry.entry}"</h2>
                <br />

            </div>
        </div>
    )
}

export default OneEntry;