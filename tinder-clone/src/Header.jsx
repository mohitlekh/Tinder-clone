import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className ="header">
            <IconButton>
             <PersonIcon fontSize="large" className="header_icon" />
            </IconButton>

            <img className="header_logo" src="https://www.pngkit.com/png/full/55-558256_tinder-logo-transparent.png" fontSize="large"
             alt=""/>

             <IconButton>
             <ForumIcon fontSize="large" className="header_icon" />
            </IconButton> 
        </div>
    )
}

export default Header
