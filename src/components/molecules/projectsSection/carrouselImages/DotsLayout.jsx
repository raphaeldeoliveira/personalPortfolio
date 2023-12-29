import React from "react";

import Dot from "../../../atoms/projectsSection/carrouselImages/Dot";
import Button from "../../../atoms/projectsSection/carrouselImages/Button";

export default function DotsLayout(props) {

    /*function moveLeft() {
        props.currentDot === 0 
            ? (
                props.setCurrentDot((props.numDots - 1)),
                props.setScrollX(((props.numDots - 1) * (props.mobile ? -81 : -51.6)))
            )
            : (
                props.setCurrentDot((prevDot) => prevDot - 1),
                props.setScrollX((prevDeslocamento) => prevDeslocamento + (props.mobile ? 81 : 51.6))
            )
    }

    function moveRight() {
        props.currentDot === (props.numDots - 1) 
            ? (
                props.setCurrentDot(0),
                props.setScrollX(0)
            )
            : (
                props.setCurrentDot((prevDot) => prevDot + 1),
                props.setScrollX((prevDeslocamento) => prevDeslocamento - (props.mobile ? 81 : 51.6))
            )
    }*/

    function activeDot(id) {
        return (id === props.currentDot) ? "dots__dot--active" : ""
    }

    return (
        <div className="dots__button__layout">
            <Button 
                type="left"
            />
            <div className="dots__layout">
                {props.images.map((dot, index) => (
                    <Dot className={activeDot(index)}/>
                ))}
            </div>
            <Button 
                type="right"
            />
        </div>
    )
}