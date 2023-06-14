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
                navigate('/')
            })
            .catch((err) => {
                setErrors(err)
            })
    }

    return (
        <div className="EBodyBox">
            <form onSubmit={submitHandler}>
                <h1 style={{  textShadow: '2px 2px pink', fontSize: '100px'}}>----- New Event -----</h1>
                <label style={{ textShadow: '2px 2px pink', fontSize: '25px'}}>What's it called? </label>
                <input type="text" onChange={handleInputChange} value={event.eventTitle} name='eventTitle' style={{ marginLeft: '5px', borderRadius: '5px', backgroundColor: 'transparent'}}/>
                {
                    errors.eventTitle?
                    <p className='text-danger'>{errors.eventTitle.message}</p>:
                    null
                }
                <br />
                <label style={{ textShadow: '2px 2px pink', fontSize: '25px'}}>When is it? </label>
                <input type="date" onChange={handleInputChange} value={event.eventDate} name='eventDate' style={{ marginLeft: '5px', borderRadius: '5px', backgroundColor: 'transparent'}}/>
                {
                    errors.eventDate?
                    <p className='text-danger'>{errors.eventDate.message}</p>:
                    null
                }
                <br />
                <label style={{ textShadow: '2px 2px pink', fontSize: '25px'}}>Where is it?</label>
                <input type="text" onChange={handleInputChange} value={event.eventLocation} name='eventLocation' style={{ marginLeft: '5px', borderRadius: '5px', backgroundColor: 'transparent'}}/>
                {
                    errors.eventLocation?
                    <p className='text-danger'>{errors.eventLocation.message}</p>:
                    null
                }
                <br />
                <label style={{ textShadow: '2px 2px pink', fontSize: '25px'}}>Details:</label>
                <br  />
                <textarea type="text" onChange={handleInputChange} value={event.eventDetails} name='eventDetails' style={{ width: '550px', height: '300px',marginLeft: '5px', borderRadius: '5px', backgroundColor: 'transparent', whiteSpace: 'pre-wrap', overflow: 'auto'}} />
                {
                    errors.eventDetails?
                    <p className='text-danger'>{errors.eventDetails.message}</p>:
                    null
                }
                <br />
                <button style={{marginRight: '100px'}} className='btn' >Post</button>
                <Link className='btn' to={'/Main'}>Home</Link>
            </form>      
        </div>
    )
}

export default EventForm;