import React from "react";

import BradingTitle from "../../atoms/header/BradingTitle";

export default function Branding(props) {

    return (
        <div className="branding">
            <BradingTitle 
                firstLetter="R"
                restOfWord="APHAEL"
                mobile={props.mobile}
            />
            <BradingTitle
                surname={true} 
                firstLetter="C"
                restOfWord="ARVALHO"
                mobile={props.mobile}
            />
        </div>
    )
}