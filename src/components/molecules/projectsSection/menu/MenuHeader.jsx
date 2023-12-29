import React from "react";

export default function MenuHeader(props) {

    return (
        <div 
            className="menu__header"
            onClick={props.toggleMenu}
        >
            <span>{props.activeOption}</span>
        </div>
    )
}