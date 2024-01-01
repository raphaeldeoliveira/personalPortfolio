import React, { useEffect, useCallback } from "react";

export default function CarrouselImages(props) {
    const convertScrollX = useCallback(() => {
        return props.mobile ? (props.currentDot * -81) : (props.currentDot * -51.6);
    }, [props.mobile, props.currentDot]);

    useEffect(() => {
        convertScrollX();
    }, [convertScrollX, props.currentDot]);

    return (
        <div className="carrousel__images__layout">
            <div 
                className="carrousel__images"
                style={{
                    transform: `translateX(${convertScrollX()}vw)`
                }}
            >
                {props.images.map((image, index) => (
                    <img 
                        alt=""
                        key={index} 
                        className="carrousel__images__image" 
                        src={image} 
                    />
                ))}
            </div>
        </div>
    );
}
