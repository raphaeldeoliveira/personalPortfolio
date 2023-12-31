import React from "react";

import Dot from "../../../atoms/projectsSection/carrouselImages/Dot";
import Button from "../../../atoms/projectsSection/carrouselImages/Button";

export default function DotsLayout(props) {
    
    return (
        <div className="dots__button__layout">
            <Button 
                type="left"
                images={props.images}
                setCurrentDot={props.setCurrentDot}
            />
            <div className="dots__layout">
                {props.images.map((dot, index) => (
                    <Dot 
                        index={index}
                        currentDot={props.currentDot}
                    />
                ))}
            </div>
            <Button 
                type="right"
                images={props.images}
                setCurrentDot={props.setCurrentDot}
            />
        </div>
    )
}