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
        <div className='recentShell'>
            <div className='recentTitleBar'>
                <Link className='rbtn' to={`/allEntries`}>Our Diary</Link>
                <h4 className='recentPostTitle'>Latest Posts</h4>
                <Link className='rbtn' to={`/newEntry`}>New Entry</Link>
            </div>
            {entries.map((entry, index) => {
                const formattedDate = new Date(entry.entryDate).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                });

                return (
                    <div key={index} className='recentInfo'>
                        <h3>{entry.entryTitle}</h3>
                        <h4>{formattedDate} by {entry.entryAuthor}</h4>
                        <Link className='rbtn' to={`/oneEntry/${entry._id}`}>Deets</Link>
                        <br /><br />
                        <p>***************************************************************</p>

                    </div>
                );
            })}
        </div>
    );
};

export default RecentEntries;
