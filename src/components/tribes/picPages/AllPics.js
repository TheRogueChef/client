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
        description: `${pic.picTitle} - ${pic.picLocation} - ${pic.picDate}`,
        originalClass: 'original-image',
        thumbnailClass: 'thumbnail-image',
    }));

    // const images = [  {    original: 'https://picsum.photos/id/1018/1000/600/',    thumbnail: 'https://picsum.photos/id/1018/250/150/',  },  {    original: 'https://picsum.photos/id/1015/1000/600/',    thumbnail: 'https://picsum.photos/id/1015/250/150/',  },  {    original: 'https://picsum.photos/id/1019/1000/600/',    thumbnail: 'https://picsum.photos/id/1019/250/150/',  },];

console.log(images)
    return (
        <div className='PBodyBox'>
            <p className= 'PicTitle'>Tribe Photos</p>
            <div className= 'ButtonStrip'>
                <Link className='btn' to={'/newPic'}>Add a Pic</Link>
                <button className= 'btn' onClick = {() => deletePic()}>Delete</button>
            </div>
            <br />
            <div className= 'Gallery'>    
            <ImageGallery items={images} />
            </div>
        </div>
    );
};

export default DisplayAllPics;









