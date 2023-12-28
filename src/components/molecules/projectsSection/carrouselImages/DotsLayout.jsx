import React from "react";

import Dot from "../../../atoms/projectsSection/carrouselImages/Dot";

export default function DotsLayout(props) {

    function loadDots() {
        return props.numberDots.map(() => {
            <Dot />
        })
    }

    return (
        <div className="dots__layout">
            {loadDots}
        </div>
    )
}