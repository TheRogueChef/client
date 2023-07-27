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
        const songData = new FormData();
        console.log(song.songTitle);
        console.log(song.songArtist);
        console.log(song.audioFile);

        songData.append('songTitle', song.songTitle);
        songData.append('songArtist', song.songArtist);
        songData.append('audioFile', song.audioFile);
        console.log(songData);

        axios
            .post('http://localhost:8000/api/newSong', songData)
            .then((res) => {
                console.log(songData);
                setSong({ ...song, songTitle: '', songArtist: '', audioFile: null })
                console.log(songData);
                navigate('/Main');
            })
            .catch((err) => {
                setErrors(err.response.data);
            });
    };

    return (
        <div className='EBodyBox'>
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
