import React from 'react'
import Post from '../Post/Post'
import Share from '../Share/Share'
import './Feed.css';

function Feed() {
    return (
        <div className='feed'>
            <Share/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export default Feed
