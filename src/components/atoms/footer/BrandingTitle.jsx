import React from "react";

export default function BrandingTitle(props) {

    return <span 
        className={`branding__title 
            ${props.lastName ? "branding__title--lastName" : ""}`
        }>
            {props.title}
        </span>
}