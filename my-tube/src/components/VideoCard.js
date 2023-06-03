import React from 'react';


function VideoCard({info}) {
    const {snippet, statistics} = info,
        {channelTitle, title, thumbnails} = snippet;

    return (
        <div className='p-2 m-2 w-60 shadow-lg'>
                <img
                    className={'rounded-lg'}
                    alt={'thumbnail'}
                    src={thumbnails.medium.url}/>
                <ul>
                    <li className='font-bold py-2'>{title}</li>
                    <li>{channelTitle}</li>
                    <li>{statistics.viewCount} views</li>
                </ul>
        </div>
    );
}

export default VideoCard;
