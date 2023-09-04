
const MusicPlayer = () => {
    const openSpotifyPlayerInNewWindow = () => {
    const spotifyPlayerUrl =
        "https://open.spotify.com/embed/playlist/5NbIfVQKtuFcGdeHmdaQj1?";
    window.open(spotifyPlayerUrl );
};

return (
    <div className='MShell'>
    <iframe
        title="OnionMix"
        style={{ borderRadius: "1%" }}
        src="https://open.spotify.com/embed/playlist/5NbIfVQKtuFcGdeHmdaQj1?"
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
    ></iframe>
        <button className='Mbtn' onClick={openSpotifyPlayerInNewWindow}>Open in New Window</button>
    </div>
    );
};

export default MusicPlayer;
