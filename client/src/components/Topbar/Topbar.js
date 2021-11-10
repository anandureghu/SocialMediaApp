import React from "react";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import "./Topbar.css";
function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar_left">
        <span className="topbar_left--logo">SocialMedia</span>
      </div>
      <div className="topbar_center">
        <div className="searchbar">
          <span>
            <Search className="search" />
          </span>
          <input type="text" placeholder="Search for friend, post or video" />
        </div>
      </div>
      <div className="topbar_right">
        <div className="topbar_links">
          <span className="topbar_link">Home</span>
        </div>
        <div className="topbar_icons">
          <div className="topbar_icon_item">
            <Person />
            <span className="topbar_icon_item--badge">1</span>
          </div>
          <div className="topbar_icon_item">
            <Chat />
            <span className="topbar_icon_item--badge">1</span>
          </div>
          <div className="topbar_icon_item">
            <Notifications />
            <span className="topbar_icon_item--badge">1</span>
          </div>
        </div>
        <div className="topbar_img">
          <img src="/assets/person/1.jpeg" alt="profile" />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
