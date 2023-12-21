import React from "react";

import PhotoImage from "../../atoms/introductionSection/PhotoImage";

export default function FlipPhoto() {

    return (
        <div>
            <div className="photo-section__flip">
                <PhotoImage 
                    type="photo-section__flip__front"
                    srcImage=""
                />
                <PhotoImage 
                    type="photo-section__flip__back"
                    srcImage=""
                />
            </div>
        </div>
    )
}