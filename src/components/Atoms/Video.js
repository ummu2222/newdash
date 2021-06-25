import React from 'react';
import VideoPlayer from 'react-video-js-player';

const Video = () =>{
    return (
        <div >
            <VideoPlayer
                src="./assets/video.mp4"
                poster="https://images.unsplash.com/photo-1623938328936-c33a14298b7f?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8aG1lbnZRaFVteE18fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                width="300"
                height="200"
            />
            
        </div>
    );
}


export default Video;
