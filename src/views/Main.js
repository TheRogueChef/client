import React from 'react';
import '../components/tribes/style.css';
import Dashboard from '../components/tribes/admin/Dashboard';
import RecentEntries from '../components/tribes/diary/RecentEntries';
import RecentEvents from '../components/tribes/events/RecentEvents';
import ChatBox from '../components/tribes/chat/ChatBox';
import MusicPlayer from '../components/tribes/music/MusicPlayer';


const Main = (props) => {

    return (
        <div className='Main'>
            <div className='MainLeft'>
                <br />
                <RecentEvents />
                <br />
                <MusicPlayer />
            </div>
            <div className='MainMid'>
                <br />
                <Dashboard />
                <br />
            </div>
            <div className='MainRight'>
                <br />
                <RecentEntries />
                <br />
                <ChatBox />
            </div>
        </div>
    );
};

export default Main;



