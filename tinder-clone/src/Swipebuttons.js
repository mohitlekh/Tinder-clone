import React from 'react';
import "./SwipeButton.css";
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

function Swipebuttons() {
    return (
        <div className="swipebutton">
            <IconButton className="swipebutton__repeat">
                <ReplayIcon fontSize="large" />
            </IconButton>

            <IconButton className="swipebutton__left">
                <CloseIcon fontSize="large" />
            </IconButton>

            <IconButton className="swipebutton__star">
                <StarRateIcon fontSize="large" />
            </IconButton>

            <IconButton className="swipebutton__right">
                <FavoriteIcon fontSize="large" />
            </IconButton>

            <IconButton className="swipebutton__light">
                <FlashOnIcon fontSize="large" />
            </IconButton>
        </div>
    )
}

export default Swipebuttons
