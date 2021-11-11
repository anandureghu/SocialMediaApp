import { ChatBubbleOutline, MoreVert } from '@material-ui/icons'
import React from 'react'
import './post.css';
function Post() {
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="post-top-left">
                        <img src="assets/person/1.jpeg" alt="profileImage" className="post-top-image" />
                        <span className="post-username">John Doe</span>
                        <span className="post-time">
                            5 mins ago
                        </span>
                    </div>
                    <div className="post-top-right">
                        <MoreVert/>
                    </div>

                </div>
                <div className="postCenter">
                    <span className="postDescription">
                        Hey there, Have a nice day!
                    </span>
                    <img src="/assets/post/5.jpeg" alt="postImage" className="postImage" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="assets/like.png" alt="Like" className="likeBtn" />
                        <img src="assets/heart.png" alt="Heart" className="likeBtn" />
                        <span className="likeCount">32 people like it</span> 
                    </div>
                    <div className="postBottomRight">
                        <ChatBubbleOutline/>
                        <span className="commentCount">9 comments</span> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
