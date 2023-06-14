import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'

const DisplayAllTribes = (props) => {
    const { id } = useParams();
    const [tribeList, setTribeList] = useState([]);
    const [familyList, setFamilyList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/allTribes')
            .then((res) => {
                setTribeList(res.data.reverse());
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className='container' style={{ backgroundImage: 'transparent' }}>
            {tribeList.map((tribe, index) => {
                return (
                    <div className='details' key={index}>
                        <h3 style={{ color: 'yellow', fontStyle: 'italic', paddingLeft: '5px', paddingRight: '5px' }}>{tribe.tribeTitle}</h3>
                        <p>How many Tribe Members: {tribe.tribeMembers}</p>
                        <p>Which families are in your Tribe?</p>
                        {familyList.map((family, index) => {
                            return (
                                <div key={index}>
                                    <Link to={`/oneFamily/${family.id}`}>Family Page</Link>
                                </div>
                            );
                        })}
                        <p>Tribe statement: {tribe.tribeStatement}</p>
                        <br />
                        <Link className='btn2' to={`/updateTribe/${tribe._id}`}>Edit page</Link>
                        <br /><br />
                        <Link className='btn2' to={`/oneTribe/${tribe._id}`}>Show me this Tribe</Link>
                    </div>
                )
            })}
        </div>
    );
}

export default DisplayAllTribes;