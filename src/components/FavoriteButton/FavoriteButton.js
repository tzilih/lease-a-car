import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
import './FavoriteButton.css';

const FavoriteButton = (props) => {
    const icon =  props.favorite ? faSolidHeart : faHeart;
    
    return (
        <div className="favorite">
            <FontAwesomeIcon icon={icon} onClick={props.click}/>
        </div>
    )
}

export default FavoriteButton;