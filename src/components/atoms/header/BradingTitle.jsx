import React from "react";

export default function BradingTitle(props) {

    return (
        <span
            className={`branding__title ${props.surname ? "header__lastname" : "header__firstname"}`}
            >{`${props.firstLetter}${!props.mobile ? props.restOfWord : ""}`}
        </span>
    )
}