import React from "react";

import CarrouselLabel from "../../atoms/cardSection/CarrouselLabel";

export default function CarrouselImages(props) {

    const [activeImage, setActiveImage] = React.useState(0)

    function changeRight() {
        (activeImage === 2) ? setActiveImage(0) : setActiveImage(activeImage + 1);
    }

    function changeLeft() {
        (activeImage === 0) ? setActiveImage(2) : setActiveImage(activeImage - 1);
    }

    function loadImages() {

        if (props.images.length === 1) {
            return <img 
                key={1}
                className={(activeImage === 0) ? "imagem-ativa" : ""}
                src={props.images[0]}
            />
        } else {
            return props.images.map((image, index) => (
                <img 
                    key={index}
                    className={(activeImage === index) ? "imagem-ativa" : ""}
                    src={image}
                />
            ))
        }
    }

    return (
        <div className="carrousel">
            {loadImages()}
            {props.images.length !== 1 && (
                <CarrouselLabel
                    position="left"
                    transition={changeLeft}
                    arrowEmoticon="❮"
                />
            )}
            {props.images.length !== 1 && (
                <CarrouselLabel
                    position="right"
                    transition={changeRight}
                    arrowEmoticon="❯"
                />
            )}
        </div>
    )
}