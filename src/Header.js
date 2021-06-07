import React from 'react'

import './Header.css';
import PetsIcon from '@material-ui/icons/Pets';
import HeaderOption from './HeaderOption.js';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
 
function Header() {
    return (
        <div className='header'>
          
            <div className='header__left'>
                <img src="https://picsvg.com/svg/ZVpAP2.jpg" alt="" />

                <div className="header__search">
                <PetsIcon />
                    <input type="text" />
                </div>
            </div>

            <div className='header__right'>
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar="https://pics.me.me/thumb_cute-doge-meme-doge-dog-doggo-pupper-dogecoin-art-50112985.png" title="Me" />

            </div>
            
        </div>
    )
}

export default Header
