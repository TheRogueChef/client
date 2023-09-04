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
                <div className='LRLogoBox'>
                    <Image className='pinpic' src={pin} alt="..." />
                    <div className='LogRegLogo'>
                        <p>My</p>
                        <p style={{marginTop: '-3rem'}}>Tribe</p> 
                        <p style={{marginTop: '-4rem'}}>Tracker</p>
                    </div>
                </div>
                <div className='LRNoun'>
                    <p>Tribe</p>
                    <br /><br />
                    <p>/noun/</p>
                    <p>
                    'a social division in a traditional society consisting of families or communities linked by social,
                    economic, religious, or blood ties, with a common culture and dialect.'</p>
                </div>
            </div>
            <br /><br />
        <div className='body'>
            <p>Sign in or Sign up, your friends are waiting...</p>
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