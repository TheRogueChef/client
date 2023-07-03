import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';


const DisplayAllPics = (props) => {
    const [pics, setPics] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/allPics')
            .then((res) => {
                console.log("this is on AllPics in the use effect",res.data);
                setPics(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const deletePic = (id) => {
        axios
            .delete(`http://localhost:8000/api/allPics/${id}`)
            .then((res) => {
                navigate('/allPics');
            })
            .catch((err) => console.log(err));
    };

    const images = pics.map((pic) => ({
        original: pic.image? `http://localhost:8000/api/allPics/${pic._id}/image`: 'No Image Available' ,
        thumbnail: pic.image? `http://localhost:8000/api/allPics/${pic._id}/image` : 'No Image Available',
        description: `${pic.picTitle} - ${pic.picLocation} - ${pic.picDate} - ${pic.image}`,
        originalClass: 'original-image',
        thumbnailClass: 'thumbnail-image',
    }));

    return (
        <div className='bodyBox'>
            <br />
            <h1 style={{ fontSize: '100px', textShadow: '5px 5px pink' }}>----- Tribe Photos -----</h1>
            <br />
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                }}
            >
                <Link className='btn' to={'/Main'}>
                    Home
                </Link>
                <br />
                <br />
                <Link className='btn' to={'/newPic'}>
                    Add a Pic
                </Link>
                <br />
                <br />
                <button style={{ marginLeft: '50px', marginRight: '50px'}} onClick = {() => deletePic()} className='btn-danger'>Delete</button>
            </div>
            <div style={{ marginTop: '20px'}}>    
            <ImageGallery items={images} />
            </div>
        </div>
    );
};

export default DisplayAllPics;









