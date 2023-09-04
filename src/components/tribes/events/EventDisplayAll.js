import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../style.css';

const DisplayAllEvents = (props) => {
    const [events, setEvents] = useState([]);
    const eventDate = new Date();
    const initialLikes = {};

    const formattedDate = eventDate.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });

    const handleLike = (eventId, eventIndex) => {
        const audio = new Audio('/audio/Untitled.mp3');
        audio.play();

        axios
            .post(`http://localhost:8000/api/likeEvent`, { eventId })
            .then(() => {
                setEvents((prevEvents) => {
                    const updatedEvents = [...prevEvents];
                    const updatedEvent = { ...updatedEvents[eventIndex] };
                    updatedEvent.likes += 1;
                    updatedEvents[eventIndex] = updatedEvent;
                    return updatedEvents;
                }); 
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/allEvents')
            .then((res) => {
                const initialEvents = res.data.map((event) => {
                    const likes = initialLikes[event._id] || event.likes || 0;
                    return {
                        ...event,
                        likes: likes,
                    };
                });
                setEvents(initialEvents.reverse());
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
                <Link className='allbtn' to={'/Main'}>Home</Link>
                <Link className='allbtn' to={`/newEvent`}>New Event</Link>
            </div>  
            {events.map((event, index) => (
                <div className='allBox' key={index}>
                    <h1>{event.eventTitle}</h1>
                    <h4>{formattedDate} at {event.eventLocation}</h4>
                    <h2 style={{ fontStyle: 'italic'}}>"{event.eventDetails}"</h2>
                    <br />
                    <Link className='allbtn' to={`/oneEvent/${event._id}`}>Deets</Link>
                    <br /><br />
                    <div className='LikeStrip'>
                        <div className='likeWords'>
                            Likes: {event.likes}
                        </div>
                            <br />
                        <div>
                            <button className='allbtn' onClick={() => handleLike(event._id, index)}>
                                You Like That?
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DisplayAllEvents;
