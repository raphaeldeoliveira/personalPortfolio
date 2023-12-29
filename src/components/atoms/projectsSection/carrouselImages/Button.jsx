import React from "react";

export default function Button(props) {

    return (
        <button
            className="dots__button"
        >{props.type === "left" ? "<" : ">"}
        </button>
    )
}