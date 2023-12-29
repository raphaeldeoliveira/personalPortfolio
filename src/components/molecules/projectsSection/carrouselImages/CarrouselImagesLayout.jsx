import React, { useState } from "react";

import CarrouselImages from "../carrouselImages/CarrouselImages"
import CarrouselDots from "./CarrouselDots";

export default function CarrouselImagesLayout(props) {
    
    const [scrollX, setScrollX] = useState(0)
    const [currentDot, setCurrentDot] = useState(0)

    return (
        <div>
            <CarrouselImages 
                images={props.images}
                scrollX={scrollX}
            />
            <CarrouselDots 
                images={props.images}
                currentDot={currentDot}
                setScrollX={setScrollX}
                setCurrentDot={setCurrentDot}
            />
        </div>
    )
}