import React, { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const EventForm = (props) => {
    const [errors, setErrors] = useState ({})
    const navigate = useNavigate()
    const [event, setEvent] = useState({
        eventTitle: '',
        eventDate: Date,
        eventLocation: '',
    });

    const handleInputChange = (e) => {
        setEvent({ ...event, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/newEvent', event)
            .then((res) => {
                setEvent({...event, eventTitle:"", eventDate: Date, eventLocation: ""})
                navigate('/Main')
            })
            .catch((err) => {
                setErrors(err)
            })
    }

    return (
        <div className="EBodyBox">
            <form onSubmit={submitHandler}>
                <p className= 'PageTitle'>----- New Event -----</p>
                <div className= 'ButtonStrip'>
                    <button className='onebtn' >Post</button>
                    <Link className='onebtn' to={`/allEvents`}>All Events</Link> 
                    <Link className='onebtn' to={'/Main'}>Home</Link>
                </div>
                <br /><br />
                <div className= 'BoxLabel'>
                    <label>What's it called? </label>
                    <input 
                    type="text"
                    onChange={handleInputChange} 
                    value={event.eventTitle} name='eventTitle' 
                    className= 'InputBox'/>
                    <br />
                    {
                        errors.eventTitle?
                        <p className='text-danger'>{errors.eventTitle.message}</p>:
                        null
                    }
                    <br />
                    <label>When is it? </label>
                    <input 
                    type="date" 
                    onChange={handleInputChange} 
                    value={event.eventDate} 
                    name='eventDate' 
                    className= 'InputBox'/>
                    <br />
                    {
                        errors.eventDate?
                        <p className='text-danger'>{errors.eventDate.message}</p>:
                        null
                    }
                    <br />
                    <label>Where is it?</label>
                    <input 
                    type="text" 
                    onChange={handleInputChange} 
                    value={event.eventLocation} 
                    name='eventLocation' 
                    className= 'InputBox'/>
                    <br />
                    {
                        errors.eventLocation?
                        <p className='text-danger'>{errors.eventLocation.message}</p>:
                        null
                    }
                    <br />
                    <label>Details:</label>
                    <br  />
                    <textarea 
                    type="text" 
                    onChange={handleInputChange} 
                    value={event.eventDetails} 
                    name='eventDetails' 
                    className= 'EntryBox' />
                    {
                        errors.eventDetails?
                        <p className='text-danger'>{errors.eventDetails.message}</p>:
                        null
                    }
                    <br />
                </div>
            </form>      
        </div>
    )
}

export default EventForm;