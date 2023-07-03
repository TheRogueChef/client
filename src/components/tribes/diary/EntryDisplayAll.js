import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';

const DisplayAllEntries = (props) => {
    const [entries, setEntries] = useState([]);
    const initialLikes = {};

    const handleLike = (entryId, entryIndex) => {
        const audio = new Audio('/audio/Untitled.mp3');
        audio.play();

        axios
            .post(`http://localhost:8000/api/likeEntry`, { entryId })
            .then(() => {
                setEntries((prevEntries) => {
                    const updatedEntries = [...prevEntries];
                    const updatedEntry = { ...updatedEntries[entryIndex] };
                    updatedEntry.likes += 1;
                    updatedEntries[entryIndex] = updatedEntry;
                    return updatedEntries;
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };


    useEffect(() => {
        axios
            .get('http://localhost:8000/api/allEntries')
            .then((res) => {
                const initialEntries = res.data.map((entry) => {
                    const likes = initialLikes[entry._id] || entry.likes || 0;
                    return {
                        ...entry,
                        likes: likes,
                    };
                });
                setEntries(initialEntries.reverse());
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className='bodyBox'>
            <br />
            <h1 style={{ fontSize: '100px', textShadow: '5px 5px pink' }}>----- Our Tribes Diary -----</h1>
            <br />
            <Link className='btn' target='blank' to={'/Main'}>
                Home
            </Link>
            <br /><br />
            <Link className='btn' to={`/newEntry`}>
                New Entry
            </Link>
            <br /><br />
            {entries.map((entry, index) => {
                let formattedDate = 'Invalid Date';

                if (entry.entryDate) {
                    const entryDate = new Date(entry.entryDate);

                    if (!isNaN(entryDate)) {
                        formattedDate = entryDate.toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                        });
                    }
                }
                return (
                    <div className='allBox' key={index}>
                        <h1 style={{ textShadow: '1px 1px pink' }}>{entry.entryTitle}</h1>
                        <h4 style={{ textShadow: '1px 1px pink' }}>
                            {formattedDate} by {entry.entryAuthor}
                        </h4>
                        <h2 style={{ fontStyle: 'italic', textShadow: '1px 1px pink' }}>"{entry.entry}"</h2>
                        <br /><br />
                        <Link className='btn' to={`/oneEntry/${entry._id}`}>
                            Deets
                        </Link>
                        <br /><br />
                        <div style={{ fontSize: '25px', display: 'flex', marginLeft: '20px', justifyContent: 'space-evenly', textShadow: '1px 1px pink' }}>
                            Likes: {entry.likes}
                            <br />
                            <button className='btn' onClick={() => handleLike(entry._id, index)}>
                                You Like That?
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default DisplayAllEntries;


