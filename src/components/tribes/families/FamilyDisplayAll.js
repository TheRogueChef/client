import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'

const DisplayAllFamilies = (props) => {

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
        <div className='oneBodyBox'>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}> 
                <Link className='btn' to={'/newFamily'} style={{ margin:'25px'}}>Add a Family</Link>
                <h1 style={{ fontSize: '80px',  textShadow: '5px 5px pink'}} >---- The Tribe Families ----</h1> 
                <Link className='btn' to={'/Main'} style={{ margin:'25px'}}>Home</Link>
            </div>
            {familyList.map((family, index) => {
                return (
                    <div className='allBox' key={index} style={{ display: 'flex'}}>
                        <h1 style={{ fontStyle: 'italic', paddingLeft: '5px', paddingRight: '5px',textShadow: '1px 1px pink'  }}>{family.familyTitle}</h1>
                        <hr/>
                        <h3 style={{ paddingTop: '4px',  textShadow: '1px 1px pink'}}>{family.familyMembers}</h3>
                        <hr/>
                        <h4 style={{ fontStyle: 'italic', paddingTop: '17px', textShadow: '1px 1px pink'}}>"{family.familyStatement}"</h4>
                        <br />
                        <Link className='btn' to={`/updateFamily/${family._id}`} style={{ marginLeft: '20px', marginTop: '20px'}}>Edit page</Link>
                        <br /><br />
                        <Link className='btn' to={`/oneFamily/${family._id}`} style={{ marginLeft: '20px', marginTop: '20px', marginRight: '5px'}}>Fam Deets</Link>
                        <br /><br />
                    </div>
                )
            })}
        </div>
    );
}

export default DisplayAllFamilies;