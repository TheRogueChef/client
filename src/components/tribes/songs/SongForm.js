import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const SongForm = () => {
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const [song, setSong] = useState({
        songTitle: '',
        songArtist: '',
        audioFile: null,
    });

    const handleInputChange = (e) => {
        if (e.target.name === 'audioFile') {
            setSong({ ...song, [e.target.name]: e.target.files[0] });
        } else {
            setSong({ ...song, [e.target.name]: e.target.value });
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('songTitle', song.songTitle);
        formData.append('songArtist', song.songArtist);
        formData.append('audioFile', song.audioFile);

        axios
            .post('http://localhost:8000/api/newSong', formData)
            .then((res) => {
                console.log(res);
                setSong({ ...song, songTitle: '', songArtist: '', audioFile: null });
                navigate('/allSongs'); // Redirect to the song list page
            })
            .catch((err) => {
                setErrors(err.response.data); // Assuming validation errors are returned from the server
            });
    };

    return (
        <div>
            <h1>Add a New Song</h1>
            <form onSubmit={submitHandler}>
                <label>Song Title:</label>
                <input type="text" onChange={handleInputChange} value={song.songTitle} name="songTitle" />
                {errors.songTitle && <p>{errors.songTitle}</p>}
                <br />

                <label>Artist:</label>
                <input type="text" onChange={handleInputChange} value={song.songArtist} name="songArtist" />
                {errors.songArtist && <p>{errors.songArtist}</p>}
                <br />

                <label>Audio File:</label>
                <input type="file" onChange={handleInputChange} name="audioFile" />
                {errors.audioFile && <p>{errors.audioFile}</p>}
                <br />

                <button type="submit">Submit</button>
            </form>
            <Link to="/allSongs">Back to All Songs</Link>
        </div>
    );
};

export default SongForm;
