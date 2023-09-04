import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


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
            <div className='DashLogo'>
                <p>My</p>
                <p style={{ marginTop: '-.4em' }}>Tribe</p>
                <p style={{ marginTop: '-.5em' }}>Tracker</p>
            </div>
            <div className='DashR'>
                <div className='DashTab'>
                    <p>Families</p>
                    <Link className='Dbtn' target='blank' to={'/allFamilies'}></Link>
                </div>
                <br />
                <div className='DashTab'>
                    <p>Bored?</p>
                    <Link className='Dbtn' target='blank' to={'/BoredApi'}></Link>
                </div>
                <br />
                <div className='DashTab' >
                    <p>Settings</p>
                    <Link className='Dbtn' target='blank' to={'/settings'} ></Link>
                </div>
                <br />
                <div className='DashTab'>
                    <p>Logout</p>
                    <button className='Dbtn' onClick={logout} ></button>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;