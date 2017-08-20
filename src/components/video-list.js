import React, { Component } from 'react';

import VideoListItem from './video-list-item';

const VideoList = ({ videos, onVideoSelect }) => {
    const videosList = videos.map((video) => {
        return <VideoListItem key={video.etag}
                              video={video}
                              onVideoSelect={onVideoSelect}
        />;
    });
    return (
        <ul className="col-md-4 list-group">
            {videosList}
        </ul>
    );
};

export default VideoList;