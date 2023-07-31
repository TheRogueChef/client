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
            <h1 className='PageTitle'>----- All Events -----</h1>
            <br/>
            <div className='ButtonStrip'>
                <Link className='btn' to={'/Main'}>Home</Link>
                <Link className='btn' to={`/newEvent`}>New Event</Link>
            </div>  
            {events.map((event, index) => (
                <div className='allBox' key={index}>
                    <h1>{event.eventTitle}</h1>
                    <h4>{formattedDate} at {event.eventLocation}</h4>
                    <h2 style={{ fontStyle: 'italic'}}>"{event.eventDetails}"</h2>
                    <Link className='btn' to={`/oneEvent/${event._id}`}>Deets</Link>
                    <br /><br />
                </div>
            ))}
        </div>
    );
};

export default DisplayAllEvents;
