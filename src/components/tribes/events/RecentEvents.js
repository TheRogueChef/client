import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RecentEvents = () => {
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
                setEvents(res.data.reverse().slice(0, 3));
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div style={{ border: '1px solid black', borderRadius: '2%', backgroundColor: 'rgba(0,0,0,.2)' }}>
            <div style={{ display:'flex', margin: "10px"}}>
                <Link className='btn' to={`/allEvents`} >All Events</Link>
                <h4 style={{ textAlign: 'center', fontWeight: 'bold', paddingLeft: '20px', paddingRight: '30px', fontSize: '50px', textShadow: '2px 2px pink' }}>Our Events</h4>
                <Link className='btn' to={`/newEvent`} >New Event</Link>
            </div>
            {events.map((event, index) => (
                <div key={index} style={{ textAlign: 'center' }}>
                    <h3 style={{ textShadow: '1px 1px pink' }}>{event.eventTitle}</h3>
                    <h4 style={{ textShadow: '1px 1px pink' }}>{formattedDate} at {event.eventLocation}</h4>
                    <Link className='btn' to={`/oneEvent/${event._id}`}>Deets</Link>
                    <br /><br />
                    <Link className='btn' to={`/updateEvent/${event._id}`}>Edit</Link>
                    <br /><br />
                    <p>************************************************************</p>
                </div>
            ))}
        </div>
    );
};

export default RecentEvents;
