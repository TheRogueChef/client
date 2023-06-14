import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';


const OneEvent = (props) => {
    const navigate = useNavigate();
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
        <div className='oneBodyBox'  style={{ textAlign: "center", alignContent: "center"
        }}>
            <br  /><br  />
            <h2 style={{  textShadow: '2px 2px pink', fontSize: '100px'}}>----- Peep This Event -----</h2>
            <Link className='btn' to={`/Main`}>Home</Link>
            <br  /><br  />
            <div className='oneBox'>
                <h1 style={{ borderStyle: 'double', width: 'auto', color:"darkRed", borderRadius: '5px'}}>{event.eventTitle}</h1>
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