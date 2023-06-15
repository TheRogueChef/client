import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';

const DisplayAllPics = (props) => {
    const { id } = useParams();
    const [pics, setPics] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/allPics')
            .then((res) => {
                setPics(res.data.reverse());
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    
    const deletePic = () => {
        axios.delete(`http://localhost:8000/api/allPics/${id}`)
            .then(res => {
                navigate('/allPics')
            })
            .catch(err => console.log(err))
    };


    return (
        <div className='bodyBox'>
            <br />
            <h1 style={{ fontSize: '100px', textShadow: '5px 5px pink' }}>----- Tribe Photos -----</h1>
            <br />
            <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', paddingLeft: "200px" }}>
                <Link className='btn' to={'/Main'}>Home</Link>
                <br /><br />
                <Link className='btn' to={'/newPic'}>Add a Pic</Link>
                <br /><br />
            </div>
            {pics.map((pic, index) => {
                const eventDate = new Date(pic.picDate);
                const formattedDate = eventDate.toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                });

                return (
                    <div className='allBox' key={index}>
                        <h1 style={{ textShadow: '1px 1px pink' }}>{pic.picTitle}</h1>
                        <h4 style={{ textShadow: '1px 1px pink' }}>{formattedDate} at {pic.picLocation}</h4>
                        <Link className='btn' to={`/onePic/${pic._id}`}>Deets</Link>
                        <button style={{ marginLeft: '50px', marginRight: '50px'}} onClick={() => deletePic(pic._id)} className='btn-danger'>Delete</button>
                        <br /><br />
                    </div>
                );
            })}

        </div>
    );
};

export default DisplayAllPics;
