import React from "react";

import CarrouselImages from "../carrouselImages/CarrouselImages"
import CarrouselDots from "./CarrouselDots";

export default function CarrouselImagesLayout(props) {

    return (
        <div className="carrousel__images__layout">
            <CarrouselImages 
                images={props.images}
            />
            <CarrouselDots 
                numberDots={props.images.length}
            />
        </div>
    )
}