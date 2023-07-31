import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdateEvent = (props) => {
    const { id } = useParams();
    const [eventTitle, setEventTitle] = useState();
    const [eventDate, setEventDate] = useState();
    const [eventLocation, setEventLocation] = useState();
    const [eventDetails, setEventDetails] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/oneEvent/" + id)
            .then((res) => {
                setEventTitle(res.data.eventTitle);
                setEventDate(res.data.eventDate);
                setEventLocation(res.data.eventLocation);
                setEventDetails(res.data.eventDetails);
            })
            .catch((err) => console.log(err));
    }, [id]);

    const updateEvent = (e) => {
        e.preventDefault();
        axios
            .put("http://localhost:8000/api/updateEvent/" + id, {
                eventTitle,
                eventDate,
                eventLocation,
                eventDetails,
            })
            .then((res) => {
                console.log(res);
                navigate("/allEvents");
            })
            .catch((err) => console.log(err));
    };

    const deleteEvent = () => {
        axios
            .delete(`http://localhost:8000/api/allEvents/${id}`)
            .then((res) => {
                navigate("/allEvents");
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="EBodyBox">
            <form onSubmit={updateEvent}>
                <p className="PageTitle">----- Update Event -----</p>
                <div className="ButtonStrip">
                    <input className="btn" type="submit" />
                    <button onClick={deleteEvent} className="btn">
                        Delete
                    </button>
                    <Link className="btn" to={"/Main"}>
                        Home
                    </Link>
                </div>
                <br />
                <br />
                <div className="BoxLabel">
                    <label>Event Title</label>
                    <input
                    className="InputBox"
                    type="text"
                    name="eventTitle"
                    value={eventTitle}
                    onChange={(e) => {
                        setEventTitle(e.target.value);
                    }}
                    />
                    <br />
                    <br />
                    <label>Event Date</label>
                    <input
                        className="InputBox"
                        type="date"
                        name="eventDate"
                        value={eventDate}
                        onChange={(e) => {
                            setEventDate(e.target.value);
                        }}
                    />
                    <br />
                    <br />
                    <label>Event Location</label>
                    <input
                        className="InputBox"
                        type="text"
                        name="eventLocation"
                        value={eventLocation}
                        onChange={(e) => {
                            setEventLocation(e.target.value);
                        }}
                    />
                    <br />
                    <br />
                    <label>Event Details</label>
                    <br />
                    <textarea
                        className="EntryBox"
                        name="eventDetails"
                        value={eventDetails}
                        onChange={(e) => {setEventDetails(e.target.value);
                        }}
                    />
                    <br />
                    <br />
                </div>
            </form>
        </div>
    );
};

export default UpdateEvent;
