import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
// import { Image } from 'react-bootstrap';


const Dashboard = (props) => {
    const navigate = useNavigate()
    const logout = () => {
        axios.post('http://localhost:8000/api/logout', {}, { withCredentials: true })
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div style={{ border: '1px solid black', borderRadius: '2%', backgroundColor: 'rgba(0,0,0,.2' }}>
            <h1 style={{ marginLeft: '20px', textShadow: '2px 2px pink'}}>My Tribe Tracker</h1>
                <div className='Dashboard'>
                <br />
                <Link className='btn' target='blank' to={'/allFamilies'}>Our Families</Link>
                <br /><br />        
                <Link className='btn' target='blank' to={'/allPics'}>Tribe Photos</Link>
                <br /><br/>
                <Link className='btn' target='blank' to={'/TribeLink'}>TribeLink</Link>
                <br /><br/>
                <Link className='btn' target='blank' to={'/BoredApi'}>Bored?</Link>
                <br /><br/>
                <Link className='btn' target='blank' to={'/settings'}>Settings</Link>
                <br /><br/>
                <button className='btn' onClick={logout}>Log out</button>
                </div>
        </div>
    )
}

export default Dashboard;