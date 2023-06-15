import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const PicForm = (props) => {
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const [pic, setPic] = useState({
        picTitle: '',
        picDate: '',
        picLocation: '',
    });
    const [image, setImage] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'picDate') {
            const dateValue = value ? new Date(value).toISOString().split('T')[0] : '';
            setPic({ ...pic, [name]: dateValue });
        } else {
            setPic({ ...pic, [name]: value });
        }
    };
    

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const submitHandler = (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('image', image);
    
        const updatedPic = { ...pic }; 
        Object.entries(updatedPic).forEach(([key, value]) => {
            formData.append(key, value);
        });
    
        axios
            .post('http://localhost:8000/api/newPic', formData)
            .then((res) => {
                setPic({ picTitle: '', picDate: Date, picLocation: '' });
                setImage(null);
                navigate('/allPics');
            })
            .catch((err) => {
                console.log('Error:', err);
                setErrors(err);
            });
    };
    
    

    return (
        <div className="EBodyBox">
            <form onSubmit={submitHandler}>
                <h1 style={{ textShadow: '2px 2px pink', fontSize: '100px' }}>----- Add a Pic -----</h1>
                <label style={{ textShadow: '2px 2px pink', fontSize: '25px' }}>Pic Title </label>
                <input
                    type="text"
                    onChange={handleInputChange}
                    value={pic.picTitle}
                    name="picTitle"
                    style={{ marginLeft: '5px', borderRadius: '5px', backgroundColor: 'transparent' }}
                />
                {errors.picTitle ? <p className="text-danger">{errors.picTitle.message}</p> : null}
                <br />
                <label style={{ textShadow: '2px 2px pink', fontSize: '25px' }}>Snapped When? </label>
                <input
                    type="date"
                    onChange={handleInputChange}
                    value={pic.picDate}
                    name="picDate"
                    style={{ marginLeft: '5px', borderRadius: '5px', backgroundColor: 'transparent' }}
                />
                {errors.picDate ? <p className="text-danger">{errors.picDate.message}</p> : null}
                <br />
                <label style={{ textShadow: '2px 2px pink', fontSize: '25px' }}>Where is it?</label>
                <input
                    type="text"
                    onChange={handleInputChange}
                    value={pic.picLocation}
                    name="picLocation"
                    style={{ marginLeft: '5px', borderRadius: '5px', backgroundColor: 'transparent' }}
                />
                {errors.picLocation ? <p className="text-danger">{errors.picLocation.message}</p> : null}
                <br />
                <label style={{ textShadow: '2px 2px pink', fontSize: '25px' }}>Add Image:</label>
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}> 
                    <input  type="file" onChange={handleImageChange} accept="image/*" />
                    {image && <p style={{ border: '1px solid black', boxShadow: '2px 2px darkgrey', width: '200px', height: '30px', borderRadius: '5px', backgroundColor: 'transparent' }}>Selected image: {image.name}</p>}
                </div>
                <br /><br  />
                <button style={{ marginRight: '100px' }} className="btn">
                    Post
                </button>
                <Link className="btn" to="/Main">
                    Home
                </Link>
            </form>
        </div>
    );
};

export default PicForm;