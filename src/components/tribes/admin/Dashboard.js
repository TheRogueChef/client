import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
// import { Image } from 'react-bootstrap';
// import pin from '../components/images/pin.png';


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
        <div className='Dashboard'>
            <div>
                <h1 style={{ marginTop: '-3px', fontSize: '100px', textShadow: '2px 2px pink' }}>My</h1>
                <h1 style={{ marginTop: '-10px', fontSize: '100px', textShadow: '2px 2px pink' }}>Tribe</h1>
                <h1 style={{ marginTop: '-15px', fontSize: '100px', textShadow: '2px 2px pink' }}>Tracker</h1>
            </div>
            <div className='DashR'>
                <br />
                <div style={{ display: "flex", textShadow: '1px 1px pink' }}>
                    <h4 style={{ marginRight: '5px' }}>Our Families</h4>
                    <Link className='Dbtn' target='blank' to={'/allFamilies'}></Link>
                </div>
                <br />
                <div style={{ display: "flex", textShadow: '1px 1px pink' }}>
                    <h4>Tribe Photos</h4>
                    <Link className='Dbtn' target='blank' to={'/allPics'}></Link>
                </div>
                <br />
                <div style={{ display: "flex", textShadow: '1px 1px pink' }}>
                    <h4 style={{ marginRight: '45px' }}>Bored?</h4>
                    <Link className='Dbtn' target='blank' to={'/BoredApi'}></Link>
                </div>
                <br />
                <div style={{ display: "flex", textShadow: '1px 1px pink' }}>
                    <h4 style={{ marginRight: '30px' }}>Settings</h4>
                    <Link className='Dbtn' target='blank' to={'/settings'}></Link>
                </div>
                <br />
                <div style={{ display: "flex", textShadow: '1px 1px pink' }}>
                    <h4 style={{ marginRight: '42px' }}>Logout</h4>
                    <button className='Dbtn' onClick={logout}></button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;