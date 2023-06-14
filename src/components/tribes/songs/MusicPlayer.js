import React, { useState, useEffect } from 'react';
<script src="https://kit.fontawesome.com/869ab4504e.js" crossorigin="anonymous"></script>

const MusicPlayer = () => {
    const [songs, setSongs] = useState([]);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulating the fetching of songs from the "AllSongs" library
        const fetchSongs = async () => {
            try {
                // Replace this with your actual API call or data retrieval logic
                const response = await fetch('https://example.com/api/all-songs');
                const songsData = await response.json();
                setSongs(songsData);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching songs:', error);
                setIsLoading(false);
            }
        };

        fetchSongs();
    }, []);

    useEffect(() => {
        // Play or pause the audio when the `isPlaying` state changes
        if (isPlaying) {
            audio.play();
        } else {
            audio.pause();
        }
    }, [isPlaying]);

    const audio = new Audio(songs[currentSongIndex]?.url);

    const playSong = () => {
        setIsPlaying(true);
    };

    const pauseSong = () => {
        setIsPlaying(false);
    };

    const nextSong = () => {
        if (currentSongIndex < songs.length - 1) {
            setCurrentSongIndex((prevIndex) => prevIndex + 1);
        }
    };

    const previousSong = () => {
        if (currentSongIndex > 0) {
            setCurrentSongIndex((prevIndex) => prevIndex - 1);
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="musicMain">
            <h1>Queen's Playlist</h1>
            <div className="alert"></div>
            <svg viewBox="0 0 100 100">
                {/* SVG paths and shapes */}
            </svg>
            <div className="info">
                <p className="artist">{songs[currentSongIndex]?.artistName}</p>
                <p className="song">{songs[currentSongIndex]?.songName}</p>
            </div>
            <div className="buttons">
                <button className="previous" onClick={previousSong}>
                    <i className="fas fa-step-backward"></i>
                </button>
                {isPlaying ? (
                    <button className="pause" onClick={pauseSong}>
                        <i className="fas fa-pause"></i>
                    </button>
                ) : (
                    <button className="play" onClick={playSong}>
                        <i className="fas fa-play"></i>
                    </button>
                )}
                <button className="next" onClick={nextSong}>
                    <i className="fas fa-step-forward"></i>
                </button>
            </div>
        </div>
    );
};

export default MusicPlayer;




