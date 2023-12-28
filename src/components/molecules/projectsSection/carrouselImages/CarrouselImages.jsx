import React from "react";

export default function CarrouselImages(props) {

    function loadImages() {
        return props.images.map((image, index) => {
            <img src={image[index]} />
        })
    }

    return (
        <div className="carrousel__images">
            {loadImages}
        </div>
    )
}