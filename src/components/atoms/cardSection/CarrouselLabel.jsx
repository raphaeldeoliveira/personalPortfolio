import React from "react";

export default function CarrouselLabel(props) {

    return <span
        className={`arrow--${props.position}`}
        onClick={props.transition}
    >
        {props.arrowEmoticon}
    </span>
}