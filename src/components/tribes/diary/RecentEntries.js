import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RecentEntries = () => {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/allEntries')
            .then((res) => {
                setEntries(res.data.reverse().slice(0, 3));
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div style={{ border: '1px black solid', borderRadius: '2%', backgroundColor: 'rgba(0,0,0,.2)' }}>
            <div style={{ display: 'flex', margin: '10px' }}>
                <Link className='btn' to={`/allEntries`}>Our Diary</Link>
                <h4 style={{ textAlign: 'center', fontWeight: 'bold', paddingLeft: '20px', paddingRight: '30px', fontSize: '50px', textShadow: '2px 2px pink' }}>Latest Posts</h4>
                <Link className='btn' to={`/newEntry`}>New Entry</Link>
            </div>
            {entries.map((entry, index) => {
                const formattedDate = new Date(entry.entryDate).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                });

                return (
                    <div key={index} style={{ textAlign: 'center' }}>
                        <h3 style={{ textShadow: '1px 1px pink' }}>{entry.entryTitle}</h3>
                        <h4 style={{ textShadow: '1px 1px pink' }} >{formattedDate} by {entry.entryAuthor}</h4>
                        <Link className='btn' to={`/oneEntry/${entry._id}`}>Deets</Link>
                        <br /><br />
                        <p style={{ textShadow: '1px 1px pink' }}>***************************************************************</p>

                    </div>
                );
            })}
        </div>
    );
};

export default RecentEntries;
