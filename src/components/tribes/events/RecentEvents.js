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
        <div className='recentShell'>
            <div className='recentTitleBar'>
                <Link className='rbtn' to={`/allEvents`} >All Events</Link>
                <h4 className='recentTitle'>Our Events</h4>
                <Link className='rbtn' to={`/newEvent`} >New Event</Link>
            </div>
            {events.map((event, index) => (
                <div key={index} className='recentInfo'>
                    <h3>{event.eventTitle}</h3>
                    <h4>{formattedDate} at {event.eventLocation}</h4>
                    <Link className='rbtn' to={`/oneEvent/${event._id}`}>Deets</Link>
                    <br /><br />
                    <p>************************************************************</p>
                </div>
            ))}
        </div>
    );
};

export default RecentEvents;
