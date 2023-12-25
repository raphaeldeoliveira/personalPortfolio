import React from "react";

export default function Button(props) {

    return <button 
        className={`nav-buttons__button ${props.type === "top" ? "nav-buttons__button--top" : ""}`}
        onClick={props.moveFunction}>
            {props.type === "top" ? "▲" : "▼"}
    </button>
}