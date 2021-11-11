import React from 'react'
import './Sidebar.css';
import {Bookmark, Chat, Event, HelpOutline, RssFeed, VideoLibrary, Group, WorkOutline, School} from '@material-ui/icons';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
            <ul className="sidebar-links">
                <li className="sidebar-link">
                    <RssFeed className="sidebar-link-icon"/>
                    Feed
                </li>
                <li className="sidebar-link">
                    <Chat className="sidebar-link-icon"/>
                    Chats
                </li>
                <li className="sidebar-link">
                    <VideoLibrary className="sidebar-link-icon"/>
                    Videos
                </li>
                <li className="sidebar-link">
                    <Group className="sidebar-link-icon"/>
                    Groups
                </li>
                <li className="sidebar-link">
                    <Bookmark className="sidebar-link-icon"/>
                    Bookmarks
                </li>
                <li className="sidebar-link">
                    <HelpOutline className="sidebar-link-icon"/>
                    Questions
                </li>
                <li className="sidebar-link">
                    <WorkOutline className="sidebar-link-icon"/>
                    Jobs
                </li>
                <li className="sidebar-link">
                    <Event className="sidebar-link-icon"/>
                    Events
                </li>
                <li className="sidebar-link">
                    <School className="sidebar-link-icon"/>
                    Courses
                </li>
                <button className="sidebar-button">Show more</button>
                <hr className="sidebar-hr"/>
            </ul>
            <ul className="sidebar-friends">
                <li className="sidebar-friend">
                    <img src="/assets/person/2.jpeg" alt="Friend" />
                    John Doe
                </li>
                <li className="sidebar-friend">
                    <img src="/assets/person/2.jpeg" alt="Friend" />
                    John Doe
                </li>
                <li className="sidebar-friend">
                    <img src="/assets/person/2.jpeg" alt="Friend" />
                    John Doe
                </li>
                <li className="sidebar-friend">
                    <img src="/assets/person/2.jpeg" alt="Friend" />
                    John Doe
                </li>
                <li className="sidebar-friend">
                    <img src="/assets/person/2.jpeg" alt="Friend" />
                    John Doe
                </li>
                <li className="sidebar-friend">
                    <img src="/assets/person/2.jpeg" alt="Friend" />
                    John Doe
                </li>
                <li className="sidebar-friend">
                    <img src="/assets/person/2.jpeg" alt="Friend" />
                    John Doe
                </li>
                <li className="sidebar-friend">
                    <img src="/assets/person/2.jpeg" alt="Friend" />
                    John Doe
                </li>
                <li className="sidebar-friend">
                    <img src="/assets/person/2.jpeg" alt="Friend" />
                    John Doe
                </li>
                <li className="sidebar-friend">
                    <img src="/assets/person/2.jpeg" alt="Friend" />
                    John Doe
                </li>
                <li className="sidebar-friend">
                    <img src="/assets/person/2.jpeg" alt="Friend" />
                    John Doe
                </li>

                <li className="sidebar-friend">
                    <img src="/assets/person/2.jpeg" alt="Friend" />
                    John Doe
                </li>
                <li className="sidebar-friend">
                    <img src="/assets/person/2.jpeg" alt="Friend" />
                    John Doe
                </li>
                <li className="sidebar-friend">
                    <img src="/assets/person/2.jpeg" alt="Friend" />
                    John Doe
                </li>
                <li className="sidebar-friend">
                    <img src="/assets/person/2.jpeg" alt="Friend" />
                    John Doe
                </li>
                <li className="sidebar-friend">
                    <img src="/assets/person/2.jpeg" alt="Friend" />
                    John Doe
                </li>
            </ul>
            </div>
        </div>
    )
}

export default Sidebar
