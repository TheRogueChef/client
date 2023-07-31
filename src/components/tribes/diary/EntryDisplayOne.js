import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


const OneEntry = (props) => {

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
        <div className='oneBodyBox' >
            <br  /><br  />
            <p className='PageTitle'>----- Say What? -----</p>
            <div className='ButtonStrip'>
                <Link className='btn' to={`/Main`}>Home</Link>
                <Link className='btn' to={`/allEntries`}>Back</Link>
            </div>
            <div className='oneBox'>
                <p className='TitleBox'>{entry.entryTitle}</p>
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