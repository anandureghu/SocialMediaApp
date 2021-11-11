import { EmojiEmotions, Label, LocationOn, PhotoLibrary } from '@material-ui/icons'
import React from 'react';

import './share.css';

function Share() {
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="assets/person/1.jpeg" alt="profileImage"/>
                    <input type="text" placeholder='Whats in your mind John?' />
                </div>
                <hr />
                <div className="shareBottom">
                    <div className="shareBottomLeft">
                    <PhotoLibrary htmlColor='tomato' className="shareBottomIcon"/>
                    Photo or Video
                    <Label htmlColor='#317FFF' className="shareBottomIcon"/>
                    Tag
                    <LocationOn htmlColor='green' className="shareBottomIcon"/>
                    Location
                    <EmojiEmotions htmlColor='gold' className="shareBottomIcon"/>
                    Feelings
                    </div>

                    <div className="shareBottomRight">
                        <button className="shareBtn">Share</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Share
