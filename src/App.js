import './components/tribes/style.css';
import './index.css';
import 'react-image-gallery/styles/css/image-gallery.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import LogReg from './views/LogReg';
import Register from './components/users/Register';
import Login from './components/users/Login';
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
import AllPics from './components/tribes/picPages/AllPics';
import PicNew from './components/tribes/picPages/PicNew';
import SongNew from './components/tribes/music/SongForm';
import AllSongs from './components/tribes/music/DisplayAllSongs';




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LogReg />} default/> 
        <Route path="/Main" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/BoredApi" element={<BoredApi />} />
        <Route path="/allChats" element={<ChatBox />} />
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
        <Route path="/allPics" element={<AllPics />} />
        <Route path="/newPic" element={<PicNew />} />
        <Route path="/newSong" element={<SongNew />} />
        <Route path="/allSongs" element={<AllSongs />} />
      </Routes>
    </div>
  );
}
export default App;
