// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';


// const SongDetails = ({ song, addToLibrary }) => {
//     const [songDetails, setSongDetails] = useState(null);

//     useEffect(() => {
//         axios
//             .get(
//                 `https://api.spoonacular.com/recipes/${song.id}/information?apiKey=f375f3f672264e72a7c6a445b4839f13` /*change this to the 5 by title or artist song search*/ 
//             )
//             .then((res) => {
//                 setSongDetails(res.data);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }, [song.id]);

//     return (
//         <ul className='details6' key={song.id}>
//             {songDetails ? (
//                 <>
//                     <h1 style={{ color: 'greenyellow', textDecoration: 'underline', fontWeight: 'bold' }}>{song.songTitle}</h1>
//                     <p>Song Artist: {song.songArtist}</p>
//                 </>
//             ) : (
//                 <p>Loading...</p>
//             )}
//             <button className='btn2' onClick={() => addToLibrary(song)}>
//                 Add to library
//             </button>
//         </ul>
//     );
// };

// const SongApiSearch = (props) => {
//     const [songStats, setSongStats] = useState('');
//     const [searchQuery, setSearchQuery] = useState('');
//     const [searchResults, setSearchResults] = useState([]);

//     const navigate = useNavigate();

//     useEffect(() => {
//         if (songStats) {
//             axios
//                 .get(
//                     `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${songStats}&apiKey=f375f3f672264e72a7c6a445b4839f13&number=5`
//                 )
//                 .then((res) => {
//                     setSearchResults(res.data);
//                 })
//                 .catch((err) => {
//                     console.log(err);
//                 });
//         }
//     }, [songStats]);

//     const submitHandler = (e) => {
//         e.preventDefault();
//         setSongStats(searchQuery);
//     };

//     const addToLibrary = (song) => {
//         axios
//             .post('http://localhost:8000/api/newSong', {
//                 title: song.songTitle,
//                 artist: song.songArtist
//             })
//             .then((res) => {
//                 navigate('/Main');
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     };

//     return (
//         <div className='container7'>
//             <form className='details4' onSubmit={submitHandler}>

//                 <h2 style={{ textDecoration: 'underline' }}>What song are you looking for?</h2>
//                 <br  />
//                 <input
//                     type='text'
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     placeholder='Song Choices (comma-separated)'
//                 />
//                 <button type='submit'>Search</button>
//             </form>
//             <br /><br />
//                 <div className='buttonHolder'>
//                     <a href='/'>
//                         <button className='btn3'>Home</button>
//                     </a>
//                 </div>
//             {searchResults && searchResults.length > 0 ? (
//                 <ul style={{}}>
//                     {searchResults.map((song) => (
//                         <SongDetails key={song.id} song={song} addToLibrary={addToLibrary} />
//                     ))}
//                 </ul>
//             ) : null}

//         </div>
//     );
// };

// export default SongApiSearch;
