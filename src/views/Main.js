import React from 'react';
import '../components/tribes/style.css';
import MusicPlayer from '../components/tribes/songs/MusicPlayer';
import Dashboard from '../components/tribes/admin/Dashboard';
import RecentEntries from '../components/tribes/diary/RecentEntries';
import RecentEvents from '../components/tribes/events/RecentEvents';
import ChatBox from '../components/tribes/chat/ChatBox';

const Main = (props) => {

    return (
        <div className= 'Main'>
            <div className= 'MainLeft'>
    
                <Dashboard />
                <br  />
                <ChatBox/>
                <br  />
                <MusicPlayer />
            </div>
            <div className= 'MainMid'>

            </div>
            <div className= 'MainRight'>
                <RecentEvents/>
                <br  />
                <RecentEntries/>
                
            </div>
        </div>
    )
}
export default Main;
