import React from "react";

import MenuPanel from "./menu/MenuPanel";
import CarrouselImagesLayout from "./carrouselImages/CarrouselImagesLayout";

export default function Panel(props) {

    return (
        <div className="panel">
            <p className="panel__paragraph">{props.paragraphText}</p>
            <div className="panel__bottom-section">
                <MenuPanel 
                    paragraphText={props.paragraphText}
                    optionsMenu={props.optionsMenu}
                    optionsMenutext={props.optionsMenutext}
                />
                <CarrouselImagesLayout 
                    images={props.images}
                />
            </div>
            
        </div>
    )
}