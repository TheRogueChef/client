import './components/tribes/style.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import LogReg from './views/LogReg';
import Register from './components/users/Register';
import Login from './components/users/Login';
import Dashboard from './components/tribes/admin/Dashboard';
import TribeDisplayAll from './components/tribes/admin/TribeDisplayAll';
import TribeDisplayOne from './components/tribes/admin/TribeDisplayOne';
import TribeNew from './components/tribes/admin/TribeNew';
import TribeUpdate from './components/tribes/admin/TribeUpdate';
import BoredApi from './components/tribes/admin/BoredApi';
import ChatBox from './components/tribes/chat/ChatBox';
import EntryDisplayAll from './components/tribes/diary/EntryDisplayAll';
import EntryDisplayOne from './components/tribes/diary/EntryDisplayOne';
import EntryNew from './components/tribes/diary/EntryNew';
import EventDisplayAll from './components/tribes/events/EventDisplayAll';
import EventDisplayOne from './components/tribes/events/EventDisplayOne';
import EventNew from './components/tribes/events/EventNew';
import EventUpdate from './components/tribes/events/EventUpdate';
import FamilyDisplayAll from './components/tribes/families/FamilyDisplayAll';
import FamilyDisplayOne from './components/tribes/families/FamilyDisplayOne';
import FamilyNew from './components/tribes/families/FamilyNew';
import FamilyUpdate from './components/tribes/families/FamilyUpdate';
import CollageDisplayAll from './components/tribes/picPages/CollageDisplayAll';
import CollageNew from './components/tribes/picPages/CollageNew';
import CollageUpdate from './components/tribes/picPages/CollageUpdate';
import AllPics from './components/tribes/picPages/AllPics';
import PicNew from './components/tribes/picPages/PicNew';
import SongApiRandom from './components/tribes/songs/SongApiRandom';
import SongApiSearch from './components/tribes/songs/SongApiSearch';
import SongForm from './components/tribes/songs/SongForm';
import DisplayAllSongs from './components/tribes/songs/DisplayAllSongs';
import MusicPlayer from './components/tribes/songs/MusicPlayer';
import DisplayAllEntries from './components/tribes/diary/EntryDisplayAll';


function App() {



  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LogReg />} default/> 
        <Route path="/Main" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/allTribes" element={<TribeDisplayAll />} />
        <Route path="/oneTribe/:id" element={<TribeDisplayOne />} />
        <Route path="/newTribe" element={<TribeNew />} />
        <Route path="/updateTribe/:id" element={<TribeUpdate />} />
        <Route path="/BoredApi" element={<BoredApi />} />
        <Route path="/chat" element={<ChatBox />} />
        <Route path="/allEntries" element={<EntryDisplayAll />} />
        <Route path="/oneEntry/:id" element={<EntryDisplayOne />} />
        <Route path="/newEntry" element={<EntryNew />} />
        <Route path="/allEvents" element={<EventDisplayAll />} />
        <Route path="/oneEvent/:id" element={<EventDisplayOne />} />
        <Route path="/newEvent" element={<EventNew />} />
        <Route path="/updateEvent/:id" element={<EventUpdate />} />
        <Route path="/allFamilies" element={<FamilyDisplayAll />} />
        <Route path="/oneFamily/:id" element={<FamilyDisplayOne />} />
        <Route path="/newFamily" element={<FamilyNew />} />
        <Route path="/updateFamily/:id" element={<FamilyUpdate />} />
        {/* <Route path="/allCollages" element={<CollageDisplayAll />} />
        <Route path="/newCollage" element={<CollageNew />} />
        <Route path="/updateCollage/:id" element={<CollageUpdate />} /> */}
        <Route path="/allPics" element={<AllPics />} />
        <Route path="/newPic" element={<PicNew />} />
        {/* <Route path="/songs-random" element={<SongApiRandom />} />
        <Route path="/songs-search" element={<SongApiSearch />} />
        <Route path="/songs-form" element={<SongForm />} />
        <Route path="/songs" element={<DisplayAllSongs />} />
        <Route path="/music-player" element={<MusicPlayer />} /> */}

      </Routes>
    </div>
  );
}

export default App;
