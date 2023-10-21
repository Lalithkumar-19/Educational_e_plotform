import React from 'react'
import "../Styles/Videoplayer.css";
import poster from "../assets/education.jpg";
import Video1 from "../assets/videopixel.mp4"
import video2 from "../assets/video2.mp4";

function Videoplayer() {
    ;

    if (document.readyState == "complete") {
        const playbackIcons = document.querySelectorAll(".playback-icons use");
        const playButton = document.getElementById('play');
        const video = document.getElementById('video');
        const videoControls = document.getElementById('video-controls');

        const videoWorks = !!document.createElement('video').canPlayType;
        if (videoWorks) {
            video.controls = false;
            videoControls.classList.remove('hidden');
        }
        function togglePlay() {
            if (video.paused || video.ended) {
                video.play();
            } else {
                video.pause();
            }
        }
        playButton.addEventListener('click', togglePlay);

        function updatePlayButton() {
            playbackIcons.forEach(icon => icon.classList.toggle('hidden'));

            if (video.paused) {
                playButton.setAttribute('data-title', 'Play (k)')
            } else {
                playButton.setAttribute('data-title', 'Pause (k)')
            }

        }

        video.addEventListener('play', updatePlayButton);
        video.addEventListener('pause', updatePlayButton);
    }
    return (
        <div className='video-controls hidden' id="video-controls">


            <video className='video' id="video" preload='metadata' width="400" height="200px" poster={poster} controls >
                <source src={Video1} type='video/mp4' ></source>
            </video>

            <button data-title='play (k)' id="play">
                <svg className='playback-icons'>
                    <use href='#play-icon'></use>
                    <use className='hidden' href='#pause'></use>
                </svg>
            </button>
        </div>
    )
}

export default Videoplayer