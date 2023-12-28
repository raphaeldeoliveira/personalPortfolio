import React from "react";

import Dot from "../../../atoms/projectsSection/carrouselImages/Dot";

import DotsLayout from "./DotsLayout";
import Button from "../../../atoms/projectsSection/carrouselImages/Button";

export default function CarrouselDots(props) {

    return (
        <div className="carrousel__dots">
            <Button />
            <DotsLayout 
                numberDots={props.numberDots}
            />
            <Button />
        </div>
    )
}