import React from "react";

export default function PhotoLabel(props) {

    return <span className="photo-section__label">{props.english ? "That's Me!" : "Esse sou eu!"}</span>
}