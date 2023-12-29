import React from "react";

import DotsLayout from "./DotsLayout";

export default function CarrouselDots(props) {

    return (
        <div className="carrousel__dots">
            <DotsLayout 
                images={props.images}
                currentDot={props.currentDot}
                setScrollX={props.setScrollX}
                setCurrentDot={props.setCurrentDot}
            />
        </div>
    )
}