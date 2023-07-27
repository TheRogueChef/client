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
            <div className='LRTop'>
                <div className='logo'>
                    <Image className='pinpic' src={pin} alt="..." />
                    <h1 style={{ fontSize: '10rem', textShadow: '.25rem .25rem black'}}>My Tribe Tracker</h1>
                </div>
                <h2 style={{ marginTop: '6rem', fontSize: '6rem'}}>Tribe</h2>
                <br /><br />
                <h3 style={{ marginTop: '6.75rem', fontSize: '5rem'}}>/noun/</h3>
                <h4 style={{ marginTop: '7.5rem', marginRight: '.5rem', fontSize: '4rem'}}>
                'a social division in a traditional society consisting of families or communities linked by social,
                economic, religious, or blood ties, with a common culture and dialect.'</h4>
            </div>
            <br /><br />
        <div className='body'>
            <h1 >Sign in or Sign up,</h1>
            <h1 > your friends are waiting...</h1>
        </div>
        <div className='LRBoxes'>
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