import React, { useEffect } from "react";

export default function CarrouselImages(props) {

    useEffect(() => {
        convertScrollX()
    }, [props.currentDot, convertScrollX])

    function convertScrollX() {
        return props.mobile ? (props.currentDot * -81) : (props.currentDot * -51.6)
    }

    return (
        <div className="carrousel__images__layout">
            <div 
                className="carrousel__images"
                style={{
                    transform: `translateX(${convertScrollX()}vw)`
                }}
            >
                {props.images.map((image, index) => (
                    //alert(`index: ${index}`),
                    <img className="carrousel__images__image" src={image} />
                ))}
            </div>
        </div>
    )
}