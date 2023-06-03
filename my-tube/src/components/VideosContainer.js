import React from 'react';
import {useYoutubeVideos} from "../utils/useYoutubeVideos";
import VideoCard from "./VideoCard";
import {Link} from "react-router-dom";

const VideosContainer = () => {

    const videos = useYoutubeVideos();

    return !videos ? null : (
        <div className='flex flex-wrap'>
            {
                videos.map((video) => {
                    return (
                        <Link to={'/watch?v=' + video.id}>
                            <VideoCard key={video.id} info={video}/>
                        </Link>
                    )
                })
            }
        </div>
    );
};

export default VideosContainer;
