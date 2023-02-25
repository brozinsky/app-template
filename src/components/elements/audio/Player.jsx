import React, {useState, useEffect, useRef, useMemo} from "react";
import Slider from "@/elements/Slider";
import ButtonIcon from "@/elements/buttons/ButtonIcon";
import {ReactComponent as PlaySvg} from "@/assets/icons/audio/play.svg";
import {ReactComponent as PauseSvg} from "@/assets/icons/audio/pause.svg";

const Player = ({src}) => {
    const playerRef = useRef(null);
    const speaker = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState([0]);
    const [timeChange, setTimeChange] = useState([0]);
    const [volume, setVolume] = useState([100]);

    const [speakerIcon, setSpeakerIcon] = useState(
        "M14.667 0v2.747c3.853 1.146 6.666 4.72 6.666 8.946 0 4.227-2.813 7.787-6.666 8.934v2.76C20 22.173 24 17.4 24 11.693 24 5.987 20 1.213 14.667 0zM18 11.693c0-2.36-1.333-4.386-3.333-5.373v10.707c2-.947 3.333-2.987 3.333-5.334zm-18-4v8h5.333L12 22.36V1.027L5.333 7.693H0z"
    );

    // set audio duration when loaded
    useEffect(() => {
        playerRef.current.addEventListener("loadeddata", () => {
            if (duration !== playerRef.current.duration) {
                setDuration(playerRef.current.duration);
            }
        });
    }, []);

    // handle audio time change when dragged in slider
    useEffect(() => {
        console.log(timeChange);
        playerRef.current.currentTime = timeChange[0];
    }, [timeChange]);

    // update speaker icon when volume changes
    useEffect(() => {
        if (volume[0] >= 50) {
            setSpeakerIcon(
                "M14.667 0v2.747c3.853 1.146 6.666 4.72 6.666 8.946 0 4.227-2.813 7.787-6.666 8.934v2.76C20 22.173 24 17.4 24 11.693 24 5.987 20 1.213 14.667 0zM18 11.693c0-2.36-1.333-4.386-3.333-5.373v10.707c2-.947 3.333-2.987 3.333-5.334zm-18-4v8h5.333L12 22.36V1.027L5.333 7.693H0z"
            );
        }
        if (volume[0] < 50 && volume[0] > 5) {
            setSpeakerIcon("M0 7.667v8h5.333L12 22.333V1L5.333 7.667M17.333 11.373C17.333 9.013 16 6.987 14 6v10.707c2-.947 3.333-2.987 3.333-5.334z");
        }
        if (volume[0] <= 5) {
            setSpeakerIcon("M0 7.667v8h5.333L12 22.333V1L5.333 7.667");
        }
    }, [volume]);

    // handle volume change
    useEffect(() => {
        playerRef.current.volume = volume[0] / 100;
    }, [volume]);

    // play / pause audio
    useEffect(() => {
        isPlaying ? playerRef.current.play() : playerRef.current.pause();
    }, [isPlaying]);

    function formatTime(time) {
        var min = Math.floor(time / 60);
        var sec = Math.floor(time % 60);
        return min + ":" + (sec < 10 ? "0" + sec : sec);
    }

    function muteVolume() {
        if (volume[0] > 0) {
            setVolume([0]);
        } else {
            setVolume([100]);
        }
    }

    return (
        <div className="flex flex-row gap-4 items-center bg-dark-700 py-4 px-8 rounded-xl">
            <audio onTimeUpdate={(e) => setCurrentTime([e.target.currentTime])} ref={playerRef} id={`audio`} className="w-full hidden" controls="controls" src={src}>
                Your browser does not support the HTML5 Audio element.
            </audio>
            {isPlaying ? <ButtonIcon icon={<PauseSvg />} onClick={() => setIsPlaying(false)} /> : <ButtonIcon icon={<PlaySvg />} onClick={() => setIsPlaying(true)} />}
            <div className="w-12 flex justify-center">{currentTime[0] ? formatTime(currentTime[0]) : "0:00"}</div>
            {duration ? <Slider width="w-[500px]" maxValue={duration} value={currentTime} setValue={setTimeChange} ariaLabel="CurrentTime" /> : null}
            <div className="w-12 flex justify-center">{duration ? formatTime(duration) : "0:00"}</div>
            <Slider width="w-[100px]" value={volume} setValue={setVolume} />
            {/* <div>{volume}%</div> */}
            <svg onClick={muteVolume} className="w-8 h-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path ref={speaker} id="speaker" fill="#fff" fillRule="evenodd" d={speakerIcon} />
            </svg>
        </div>
    );
};

export default Player;
