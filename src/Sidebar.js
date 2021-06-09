import React from 'react'
import { useSelector } from "react-redux";
import { selectUser} from "./features/counter/UserSlice"
import "./Sidebar.css";
import { Avatar } from '@material-ui/core';

function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = ( topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://t3.ftcdn.net/jpg/01/53/97/96/360_F_153979609_i6SGjTHQdBknuxRcgtnVvx8G1ezK9Xoi.jpg" alt="" />
                <Avatar src={user.photoUrl} className="sidebar__avatar">{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on Post</p>
                    <p className="sidebar__statNumber">2,050</p>
                </div>
               
            
            </div>  
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('Dogs')}
                {recentItem('Cats')}
                {recentItem('Pets')}
                {recentItem('Companions')}
                {recentItem('FurryFriends')}
                {recentItem('petStore')}
                {recentItem('Dogecoin')}
            </div>
        </div>      
    )
}

export default Sidebar
