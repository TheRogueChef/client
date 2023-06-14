import '../style.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const BoredApi = () => {
    const navigate = useNavigate();
    const [activity, setActivity] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'http://www.boredapi.com/api/activity/',
            };

            try {
                const response = await axios.request(options);
                console.log(response.data);
                setActivity(response.data);
            } catch (error) {
                console.error(error);
                setActivity({ error: 'Error fetching data' });
            }
        };

        fetchData();
    }, []);

    function refreshPage() {
        window.location.reload(true);
    }

    return (
        <div className="oneBodyBox" style={{ textAlign: "center", alignContent: "center" }}>
            <div>
                <br  />
                <h1 style={{ textShadow: '2px 2px pink', fontSize: '100px', marginTop: '100px' }} name='activity'>
                    So, if you're bored you should {activity.error ? activity.error : activity.activity}
                </h1>
            </div>
            <br  />
            <br  />
            <div style={{ display: 'flex', justifyContent: "space-evenly" }}> 
                <a href='/Main'>
                    <button className='Bbtn'>Home</button>
                </a>
                <br /><br />
                <button className='Bbtn' onClick={refreshPage}>
                    Try Again
                </button>
            </div>
        </div>
    );
};

export default BoredApi;
