import {useEffect, useState} from "react";
import YOUTUBE_VIDEOS_API from "./constants";

export const useYoutubeVideos = () => {

    const [videos, setVideos] = useState([]);

    const getVideos = async () => {
        const res = await fetch(YOUTUBE_VIDEOS_API),
            data = await res.json();
        setVideos(data.items);
        console.log(data.items);
    }

    useEffect(() => {
        getVideos();
    }, []);

    return videos;
};
