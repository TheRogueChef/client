// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const DisplayAllSongs = () => {
//     const [songs, setSongs] = useState([]);

//     useEffect(() => {
//         axios
//             .get('http://localhost:8000/api/allSongs')
//             .then((res) => {
//                 setSongs(res.data);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }, []);

//     return (
//         <div>
//             <h1>All Songs</h1>
//             <ul>
//                 {songs.map((song) => (
//                     <li key={song.id}>
//                         <h3>{song.songTitle}</h3>
//                         <p>{song.songArtist}</p>
//                         <audio controls>
//                             <source src={`http://localhost:8000/${song.audioFile}`} type="audio/mpeg" />
//                         </audio>
//                     </li>
//                 ))}
//             </ul>
//             <Link to="/addSong">Add a New Song</Link>
//         </div>
//     );
// };

// export default DisplayAllSongs;

