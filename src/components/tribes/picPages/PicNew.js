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

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log('pic:', pic);
        console.log('image:', image);

        const formData = new FormData();
        console.log('formData:', formData);

        formData.append('image', image);
        const updatedPic = { ...pic };
        Object.entries(updatedPic).forEach(([key, value]) => {
            formData.append(key, value);
        });

        try {
            console.log('Sending POST request...');

            await axios.post('http://localhost:8000/api/newPic', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Form submitted successfully');
            setPic({ picTitle: '', picDate: '', picLocation: '' });
            setImage(null);
            navigate('/Main');
        } catch (error) {
            if (error.response) {
                console.log('Error:', error.message);
                console.log('Error:', error.response.data);
                setErrors(error.response.data.error);
            } else {
                console.log('after the else')
                console.log('Error:', error.message);
                setErrors({ error: 'An error occurred' });
            }
        }
    };

    return (
        <div className="EBodyBox">
            <form onSubmit={submitHandler}>
                <p className="PageTitle">----- Add a Pic -----</p>
                <div className='ButtonStrip'>
                    <button className="btn" type="submit">Post</button>
                    <Link className="btn" to="/Main">Home</Link>
                </div>
                <br /><br />
                <div className='BoxLabel'>
                    <label>Pic Title </label>
                    <input
                        type="text"
                        onChange={handleInputChange}
                        value={pic.picTitle}
                        name="picTitle"
                        className="InputBox"
                    />
                    {errors.picTitle ? <p className="text-danger">{errors.picTitle.message}</p> : null}
                    <br /><br />
                    <label>Snapped When? </label>
                    <input
                        type="date"
                        onChange={handleInputChange}
                        value={pic.picDate}
                        name="picDate"
                        className="InputBox"
                    />
                    {errors.picDate ? <p className="text-danger">{errors.picDate.message}</p> : null}
                    <br /><br />
                    <label>Where was it taken?</label>
                    <input
                        type="text"
                        onChange={handleInputChange}
                        value={pic.picLocation}
                        name="picLocation"
                        className="InputBox"
                    />
                    {errors.picLocation ? <p className="text-danger">{errors.picLocation.message}</p> : null}
                    <br /><br />
                    <label>Add Your Pic:</label>
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <input type="file" onChange={handleImageChange} accept="image/*" />
                        {image && <p className="InputBox">Selected Pic: {image.name}</p>}
                    </div>
                    <br /><br />
                </div>
            </form>
        </div>
    );
};

export default PicForm;