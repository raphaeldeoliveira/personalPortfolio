import React from "react";

export default function Dot(props) {

    function activeDot(index) {
        return (index === props.currentDot) ? "dots__dot--active" : ""
    }

    return <span className={`dots__dot ${activeDot(props.index)}`}></span>
}