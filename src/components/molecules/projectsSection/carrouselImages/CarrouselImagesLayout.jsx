import React, { useState } from "react";

import CarrouselImages from "../carrouselImages/CarrouselImages"
import CarrouselDots from "./CarrouselDots";

export default function CarrouselImagesLayout(props) {
    
    const [currentDot, setCurrentDot] = useState(0)

    return (
        <div>
            <CarrouselImages 
                images={props.images}
                currentDot={currentDot}
                mobile={props.mobile}
            />
            <CarrouselDots 
                images={props.images}
                currentDot={currentDot}
                setCurrentDot={setCurrentDot}
            />
        </div>
    )
}