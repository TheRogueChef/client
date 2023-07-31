import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


const OneEvent = (props) => {
    const { id } = useParams();
    const [event, setEvent] = useState({});

    useEffect(() => {
        let isMounted = true;

        axios.get("http://localhost:8000/api/oneEvent/" + id)
            .then((res) => {
                if (isMounted) {
                setEvent(res.data);
            }
            })
            .catch((err) => {
                console.log(err);
            });
        return ()=> {
            isMounted = false;
        };
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
        <div className='oneBodyBox'>
            <br  /><br  />
            <p className='PageTitle'>----- Peep This Event -----</p>
        <div className='ButtonStrip'>
            <Link className='btn' to={`/updateEvent/${event._id}`}>Edit</Link>
            <Link className='btn' to={`/Main`}>Home</Link>
            <Link className='btn' to={`/allEvents`}>All Events</Link>
        </div>
            <div className='oneBox'>
                <br />
                <p className= 'TitleBox'>{event.eventTitle}</p>
                <br />
                <h3>{formatDate(event.eventDate)} at {event.eventLocation}</h3>
                <br  />
                <h2 style={{ fontStyle: 'italic'}}>"{event.eventDetails}"</h2>
                <br /><br />
            </div>
        </div>
    )
}

export default OneEvent;