import React from 'react'
import "./Sidebar.css";
import { Avatar } from '@material-ui/core';

function Sidebar() {

    const recentItem = ( topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://img.freepik.com/free-psd/abstract-background-design_1297-84.jpg?size=626&ext=jpg" alt="" />
                <Avatar className="sidebar__avatar"/>
                <h2>Pet Lover </h2>
                <h4>petlover@gmail.com</h4>
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
