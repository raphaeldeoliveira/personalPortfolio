import React from "react";

import CarrouselImages from "./CarrouselImages";

export default function Card(props) {

    return (
        <>
        {!props.mobile ? (
            <a 
                className={props.lightMode ? "card-section__card--lightMode" : "card-section__card--darkMode"}
            >
                <div onClick={() => props.scrollTo(props.currentId)} className="seccao-textos">
                    <h4>{props.title}</h4>
                    <p>{props.description}</p>
                </div>
                <CarrouselImages
                    images={props.images}
                />
            </a>
        ) : 
        (
            <a 
                className={props.lightMode ? "card__mobile--lightMode" : "card__mobile--darkMode"}
            >
                <CarrouselImages
                    images={props.images}
                />
                <div onClick={() => props.scrollTo(props.currentId)} className="seccao-textos">
                    <h4>{props.title}</h4>
                    <p>{props.description}</p>
                </div>
            </a>
        )}
        </>
    )
}