import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'

const DisplayAllFamilies = (props) => {
    const { id } = useParams();
    const [familyList, setFamilyList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/allFamilies')
            .then((res) => {
                setFamilyList(res.data.reverse());
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className='container' style={{ backgroundImage: 'transparent' }}>
            <div style={{ display: 'flex'}}>
                <Link className='btn' to={'/newFamily'} style={{ margin:'25px'}}>Add a Family</Link>
                <h1>The Onion Tribe Families</h1> 
                <Link className='btn' to={'/Main'} style={{ margin:'25px'}}>Home</Link>
            </div>
            {familyList.map((family, index) => {
                return (
                    <div className='details' key={index} style={{ display: 'flex'}}>
                        <h2 style={{ fontStyle: 'italic', paddingLeft: '5px', paddingRight: '5px' }}>{family.familyTitle}</h2>
                        <h4 style={{ paddingTop: '17px', paddingLeft: '20px'}}>{family.familyMembers}</h4>
                        <h4 style={{ paddingTop: '17px', paddingLeft: '20px'}}>{family.familyStatement}</h4>
                        <br />
                        <Link className='btn' to={`/updateFamily/${family._id}`} style={{}}>Edit page</Link>
                        <br /><br />
                        <Link className='btn2' to={`/oneFamily/${family._id}`} style={{}}>Show me this Family</Link>
                        <br /><br />
                        
                        
                        
                    </div>
                )
            })}
        </div>
    );
}

export default DisplayAllFamilies;