import React from 'react'
import './Header.css';
import PetsIcon from '@material-ui/icons/Pets';

function Header() {
    return (
        <div className='header'>
          
            <div className='header__left'>
                <img src="https://www.zigzagadvertising.co.uk/wp-content/uploads/2018/06/paws_logo_paw_a.jpg" alt="" />

                <div className="header__search">
                <PetsIcon />
                    <input type="text" />
                </div>
            </div>

            <div className='header__right'>
            
            </div>
            
        </div>
    )
}

export default Header
