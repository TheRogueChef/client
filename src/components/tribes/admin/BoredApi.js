import '../style.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const BoredApi = () => {
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
        <div className="oneBodyBox">
            <div>
                <br  />
                <p className= 'BoredBox' name='activity'>
                    So, if you're bored you should {activity.error ? activity.error : activity.activity}
                </p>
            </div>
            <br  />
            <br  />
            <div className= 'ButtonStrip'> 
                <a href='/Main'>
                    <button className='Bbtn'>Home</button>
                </a>
                <button className='Bbtn' onClick={refreshPage}>
                    Try Again
                </button>
            </div>
        </div>
    );
};

export default BoredApi;
