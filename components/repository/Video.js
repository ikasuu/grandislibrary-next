import React from 'react';

import '../../styles/RepositoryPage.module.css';

/*
    Component to format videos used within repository pages (Content / Event)
    Created by: Ikasuu, Winter 2020
*/

function Video({src, title}) {
    return (
        <div className="repository-sm-container">
        <div className="repository-video-container">
            <iframe className="repository-video" src={src} title={title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    </div>
    );
}

export default Video;
