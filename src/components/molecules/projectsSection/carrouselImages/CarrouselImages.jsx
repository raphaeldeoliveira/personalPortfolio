import React from "react";

export default function CarrouselImages(props) {

    return (
        <div className="carrousel__images__layout">
            <div className="carrousel__images">
                {props.images.map((image) => (
                    <img className="carrousel__images__image" src={image} />
                ))}
            </div>
        </div>
    )
}