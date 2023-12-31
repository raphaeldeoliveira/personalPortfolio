import React from "react";

export default function Button(props) {

    return <a 
        className="socialMedias__button"
        target="_blank"
        rel="noreferrer"
        href={props.href}>
            {props.mediaIcon}
        </a>
}