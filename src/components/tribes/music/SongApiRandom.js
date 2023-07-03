// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const SongApiRandom = (props) => {
//     const [song, setSong] = useState({
//         songTitle: '',
//         songArtist: ''
//     });

//     const navigate = useNavigate();

//     useEffect(() => {
//         axios.get('https://api.spoonacular.com/recipes/random?apiKey=f375f3f672264e72a7c6a445b4839f13') /*change this to the random single song search*/ 
//             .then((res) => {
//                 console.log(res)
//                 setSong({
//                     songTitle: res.data.song.title, /*double check where the info we want is in the object results */
//                     songArtist: res.data.song.artist
//                 });
//             })
//             .catch((err) => { console.log(err) })
//     }, [])

//     const submitHandler = (e) => {
//         e.preventDefault();
//         axios.post('http://localhost:8000/api/newSong', song)
//             .then((res) => {
//                 navigate('/Main')
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     };

//     function refreshPage() {
//         window.location.reload(true);
//     }

//     return (
//         <div className="container5" style={{
//             backgroundImage: `transparent`
//         }}>
//             <form className='details4' onSubmit={submitHandler}>
//                 <h1 value={song.songTitle} name='songTitle' style={{ fontWeight: 'bolder', textDecoration: 'underline'}}>{song.songTitle}</h1>
//                 <br />
//                 <h3 value={song.artist} name='songArtist'>Serves: {song.songArtist}</h3>
//                 <br /><br />
//                 <button className='btn2' type='submit'>Add to library</button>
//             </form>
//             <div className='buttonHolder'>
//                 <a href='/'>
//                 <button className='btn3'>Take me Home</button>
//                 </a>
//                 <br  /><br  />
//                 <button className='btn3' onClick={refreshPage}>Try Again</button>
//             </div>
//         </div>
//     )}
// export default SongApiRandom;