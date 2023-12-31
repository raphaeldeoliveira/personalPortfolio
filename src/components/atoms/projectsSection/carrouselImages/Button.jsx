import React from "react";

export default function Button(props) {
    
    function moveLeft() {
        
        props.setCurrentDot((prevState) => {
            return prevState === 0 ? (props.images.length - 1) : prevState - 1
        })
    }

    function moveRight() {
        props.setCurrentDot((prevState) => {
            return prevState === (props.images.length - 1) ? 0 : prevState + 1
        })
    }

    return (
        <button
            onClick={props.type === "left" ? moveLeft : moveRight}
            className="dots__button"
        >{props.type === "left" ? "<" : ">"}
        </button>
    )
}