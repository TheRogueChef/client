import React from 'react';
import '../components/tribes/style.css';
import Login from '../components/users/Login';
import Register from '../components/users/Register';
import { Image } from 'react-bootstrap';
import pin from '../components/images/pin.png';



const LogReg = (props) => {

    return (
        <div>
            <br />
            <div className='LRLeft'>
                <div className='logo'>
                    <Image className='pinpic' src={pin} alt="..." />
                    <h1 style={{ fontSize: '70px', textShadow: '2px 2px black'}}>My Tribe Tracker</h1>
                </div>
                <h2 style={{ marginTop: '60px',marginLeft: '50px', fontSize: '60px', textShadow: '2px 2px pink'}}>Tribe</h2>
                <br /><br />
                <h3 style={{ marginTop: '68px', marginLeft: '15px', fontSize: "50px", textShadow: '2px 2px pink'}}>/noun/</h3>
                <h4 style={{ marginTop: "74px", marginLeft: "15px", fontSize: '40px', textDecoration: 'italic', textShadow: '2px 2px pink'}}>
                'a social division in a traditional society consisting of families or communities linked by social,
                economic, religious, or blood ties, with a common culture and dialect.'</h4>
            </div>
            <br /><br />
        <div className='body'>
        <h1 style={{ fontSize: '55px', marginTop: '20px', textShadow: '2px 2px pink'}}>Sign in or up,</h1>
        <h1 style={{ fontSize: '55px', marginTop: '100px', textShadow: '2px 2px pink'}}> your friends are waiting...</h1>
            <br />
            <Login />
            <br />
            <Register />
            <br />
        </div>
        </div>
    )
}
export default LogReg;