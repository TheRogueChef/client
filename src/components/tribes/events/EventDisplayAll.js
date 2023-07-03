import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DisplayAllEvents = (props) => {
    const [events, setEvents] = useState([]);
    const eventDate = new Date();

    const formattedDate = eventDate.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });


    useEffect(() => {
        axios
            .get('http://localhost:8000/api/allEvents')
            .then((res) => {
                setEvents(res.data.reverse());
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className= 'bodyBox'>
            <br  />
            <h1 style={{ fontSize: '100px',  textShadow: '5px 5px pink'}}>----- All Events -----</h1>
            <br/>
            <Link className='btn' to={'/Main'}>Home</Link>
            <br  /><br  />
            <Link className='btn' to={`/newEvent`}>
                    New Event
                </Link>
                <br /><br />   
            {events.map((event, index) => (
                <div className='allBox' key={index}>
                    <h1 style={{ textShadow: '1px 1px pink' }}>{event.eventTitle}</h1>
                    <h4 style={{ textShadow: '1px 1px pink' }}>{formattedDate} at {event.eventLocation}</h4>
                    <h2 style={{ fontStyle: 'italic', textShadow: '1px 1px pink'}}>"{event.eventDetails}"</h2>
                    <Link className='btn' to={`/oneEvent/${event._id}`}>Deets</Link>

                    
                    <br /><br />
                </div>
            ))}
        </div>
    );
};

export default DisplayAllEvents;
