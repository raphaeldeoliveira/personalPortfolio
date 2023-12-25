import React from "react";

import PhotoImage from "../../atoms/introductionSection/PhotoImage";

import myPhoto from "../../../assets/images/my-photo.jpeg"
import studyingPhoto from "../../../assets/images/studying-photo.jpeg"

export default function FlipPhoto(props) {

    return (
        <div className={"photo-section__div"}>
            <div className={`photo-section__flip ${props.resumeActive ? "fliping" : ""}`}>
                <PhotoImage 
                    type="photo-section__flip__front"
                    srcImage={myPhoto}
                />
                <PhotoImage 
                    type="photo-section__flip__back"
                    srcImage={studyingPhoto}
                />
            </div>
        </div>
    )
}