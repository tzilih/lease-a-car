import React from 'react';
import './Slider.css';

const Slider = (props) => {
    // calculate position of hovering value over slider
    const bubbleLeft = (props.value - props.min) * (130/49000) + 'px';
    return (
        <div className="slider-container">
            <div className="value-bubble" style={{left: bubbleLeft}}>{props.value/1000}K</div>
            <input 
            type="range" 
            min={props.min} 
            max={props.max} 
            value={props.value} 
            className="slider"
            step={props.step}
            onChange={props.sliderChanged}
            onMouseUp={props.mouseUp}/>
        </div>
    )
}

export default Slider;