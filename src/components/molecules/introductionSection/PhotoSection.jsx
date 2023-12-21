import React from "react";

import FlipPhoto from "./FlipPhoto";
import PhotoLabel from "../../atoms/introductionSection/PhotoLabel";

import '../../../styles/modules/introductionSection/_photo-section.scss'

export default function PhotoSection(props) {

    return (
        <div className="photo-section">
            <FlipPhoto />
            <PhotoLabel 
                english={props.english}
            />
        </div>
    )
}