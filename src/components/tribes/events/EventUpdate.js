import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link,useNavigate, useParams } from 'react-router-dom';

const UpdateEvent = (props) => {
    const { id } = useParams();
    const [eventTitle, setEventTitle] = useState();
    const [eventDate, setEventDate] = useState();
    const [eventLocation, setEventLocation] = useState();
    const [eventDetails, setEventDetails] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/oneEvent/'+ id)
            .then(res => {
                setEventTitle(res.data.eventTitle);
                setEventDate(res.data.eventDate);
                setEventLocation(res.data.eventLocation);
                setEventDetails(res.data.eventDetails);
            })
            .catch(err=> console.log(err))
    }, [id]);

    const updateEvent = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/updateEvent/'+ id, {
            eventTitle,
            eventDate,
            eventLocation,
            eventDetails
        })
            .then(res => {
                console.log(res);
                navigate('/Main');
            })
            .catch(err => console.log(err))
    };

    const deleteEvent = () => {
        axios.delete(`http://localhost:8000/api/allEvents/${id}`)
            .then(res => {
                navigate('/allEvents')
            })
            .catch(err => console.log(err))
    };

    return(

        <div className='EBodyBox'>
            <h1 style={{ textShadow: '5px 5px pink', fontSize: '100px'}}>----- Update Event -----</h1>
            <form onSubmit={updateEvent}>
                <p>
                    <label style={{ textShadow: '2px 2px pink', fontSize: '25px'}} >Event Title</label>
                    <input
                    style={{ width: '400px', height: '40px',marginLeft: '15px', borderRadius: '5px', backgroundColor: 'transparent', fontSize: '20px'}}
                    type='text'
                    name='eventTitle'
                    value={eventTitle}
                    onChange={(e) => { setEventTitle(e.target.value) }} />
                </p>
                <p>
                <label style={{ textShadow: '2px 2px pink', fontSize: '25px'}}>Event Date</label>
                    <input 
                    style={{ width: '200px',marginLeft: '15px', borderRadius: '5px', backgroundColor: 'transparent'}}
                    type='date'
                    name='eventDate'
                    value={eventDate}
                    onChange={(e) => { setEventDate(e.target.value) }} />
                </p>
                <p>
                <label style={{ textShadow: '2px 2px pink', fontSize: '25px'}}>Event Location</label>
                    <input 
                    style={{ width: '400px', height: '40px',marginLeft: '15px', borderRadius: '5px', backgroundColor: 'transparent', fontSize: '20px'}}
                    type='text'
                    name='eventLocation'
                    value={eventLocation}
                    onChange={(e) => { setEventLocation(e.target.value) }} />
                </p>
                <p>
                <label style={{ textShadow: '2px 2px pink', fontSize: '25px'}}>Event Details</label><br />
                    <textarea style={{ width: '550px', height: '200px',marginLeft: '5px', borderRadius: '5px', backgroundColor: 'transparent',resize: 'none', whiteSpace: 'pre-wrap', overflow: 'auto'}}
                    name='eventDetails'
                    value={eventDetails}
                    onChange={(e) => { setEventDetails(e.target.value) }} />
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', marginLeft: "",}}>
                    <input className='btn' type='submit'/>
                    <button style={{ marginLeft: '50px', marginRight: '50px'}} onClick={deleteEvent} className='btn-danger'>Delete</button>
                    <Link className='btn' to={'/Main'}>Home</Link>
                </div>
            </form>
        </div>
    )}

export default UpdateEvent;