import React from 'react'
import './Rightbar.css'
function Rightbar() {
    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img src="assets/gift.png" alt="Birthday" />
                    <p><b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.</p>
                </div>

                <img src="/assets/ad.png" alt="" className="rightbarAd" />


                <div className="rightbarFriends">
                    <h2>Online Friends</h2>
                    <ul className="rightbarFriendsList">
                        <li className="rightbarFriend">
                            <div className="rightbarFriendImage">
                                <img src="assets/person/3.jpeg" alt="Friend Profile" />
                                <div className="rightbarOnlineStatus"></div>
                            </div>
                            Mary John
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Rightbar
