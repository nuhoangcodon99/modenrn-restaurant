import React from 'react';
import { meal } from '../../constants'
import './Intro.css'
import VideoPlayer from './VideoPlayer';


export const Intro = () => {
    const [playVideo, setPlayVideo] = React.useState(false);
    return (
        <div>
            <VideoPlayer src={meal} />    
        </div>
    )
}