import React from "react";

import MenuPanel from "./menu/MenuPanel";
import CarrouselImagesLayout from "./carrouselImages/CarrouselImagesLayout";

export default function Panel(props) {

    return (
        <div className="panel__layout">
            <p className="panel__paragraph">{props.paragraphText}</p>
            <div className="panel__bottom-section">
                <MenuPanel 
                    mobile={props.mobile}
                    optionsMenu={props.optionsMenu}
                    optionsMenutext={props.optionsMenutext}
                    bgMenuColor={props.bgMenuColor}
                />
                <CarrouselImagesLayout 
                    images={props.images}
                    mobile={props.mobile}
                />
            </div>
            
        </div>
    )
}