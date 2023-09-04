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
        <div className='famBodyBox'>
            <br />
            <div className='famTitleBar'> 
                <Link className='allbtn' to={'/newFamily'} style={{ margin:'25px'}}>Add a Family</Link>
                <h1 className='PageTitle' >---- The Tribe Families ----</h1> 
                <Link className='allbtn' to={'/Main'} style={{ margin:'25px'}}>Home</Link>
            </div>
            {familyList.map((family, index) => {
                return (
                    <div className='famAllBox' key={index}>
                        <div>
                            <p className='famInfo' style={{fontSize: '3.5rem'}}>{family.familyTitle}</p>
                            <br />
                            <h3>{family.familyMembers}</h3>
                        </div>
                        <h2 className='famInfo' style={{ marginTop: '3%', marginLeft: '10%'}}>"{family.familyStatement}"</h2>
                        <br />
                        <div className='famButtons'>
                            <br /><br />
                            <Link className='fambtn' to={`/updateFamily/${family._id}`} style={{ marginLeft: '20px', marginTop: '20px'}}>Edit page</Link>
                            <br /><br />
                            <Link className='fambtn' to={`/oneFamily/${family._id}`} style={{ marginLeft: '20px', marginTop: '20px', marginRight: '5px'}}>Fam Deets</Link>
                            <br /><br />
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default DisplayAllFamilies;