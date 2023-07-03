import { useState, useEffect } from "react";
import useSound from "use-sound";
import TheCurse from "../songs/TheCurse/TheCurse.mp3";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons";

const MusicPlayer = (props) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [play, { pause, duration, sound }] = useSound(TheCurse);
    const [currTime, setCurrTime] = useState({
        min: "",
        sec: "",
    });

    const [seconds, setSeconds] = useState();
    const [time, setTime] = useState({
        min: "",
        sec: "",
    });

    const playingButton = () => {
        if (isPlaying) {
            pause();
            setIsPlaying(false);
        } else {
            play();
            setIsPlaying(true);
        }
    };

    useEffect(() => {
        const sec = duration / 1000;
        const min = Math.floor(sec / 60);
        const secRemain = Math.floor(sec % 60);
        setCurrTime({
            min: min,
            sec: secRemain,
        });
        setTime({
            min: min,
            sec: secRemain,
        });
    }, [duration]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (sound) {
                setSeconds(sound.seek());
                const min = Math.floor(sound.seek() / 60);
                const sec = Math.floor(sound.seek() % 60);
                setCurrTime({
                    min,
                    sec,
                });
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [sound]);

    return (
        <div className="component">
            <h2 style={{ textShadow: '1px 1px pink' }}>Playing Now</h2>
            <img className="musicCover" src="https://picsum.photos/200/200" alt="..." />
            <div>
                <h3 className="title" style={{ textShadow: '1px 1px pink' }}>Rubaiyyan</h3>
                <p className="subTitle" style={{ textShadow: '1px 1px pink' }}>The Curse</p>
            </div>
            <div>
                <button className="playButton">
                    <IconContext.Provider value={{ size: "3em", color: "rgb(164, 29, 164)" }}>
                        <BiSkipPrevious />
                    </IconContext.Provider>
                </button>
                {!isPlaying ? (
                    <button className="playButton" onClick={playingButton}>
                        <IconContext.Provider value={{ size: "3em", color: "rgb(164, 29, 164)" }}>
                            <AiFillPlayCircle />
                        </IconContext.Provider>
                    </button>
                ) : (
                    <button className="playButton" onClick={playingButton}>
                        <IconContext.Provider value={{ size: "3em", color: "rgb(164, 29, 164)" }}>
                            <AiFillPauseCircle />
                        </IconContext.Provider>
                    </button>
                )}
                <button className="playButton">
                    <IconContext.Provider value={{ size: "3em", color: "rgb(164, 29, 164)" }}>
                        <BiSkipNext />
                    </IconContext.Provider>
                </button>
            </div>
            <div>
                <div className="time">
                    <p>
                        {currTime.min}:{currTime.sec}
                    </p>
                    <p>
                        {time.min}:{time.sec}
                    </p>
                </div>
                <input
                    type="range"
                    min="0"
                    max={duration / 1000}
                    defaultValue="0"
                    value={seconds}
                    className="timeline"
                    onChange={(e) => {
                        sound.seek(e.target.value);
                    }}
                />
            </div>
        </div>
    );
};

export default MusicPlayer;
